#!/usr/bin/env node
// Generates components/Logo.vue from the repo-root logo/ source SVGs.
//
// Logo.vue inlines ONLY the <g id="graphic"> group (the brand glyph); the
// wordmark is omitted so the footer can pair the mark with separate "bsf5y"
// text. Each element's `class="logo-*"` reference is KEPT (not inlined) and
// mapped to theme tokens by the scoped <style> below, so the mark follows
// light/dark mode at runtime.
//
// Runs automatically via the theme's predev / prebuild / prepack hooks — you
// should never need to invoke it by hand. If the source SVGs are unavailable
// (e.g. the package is built outside the monorepo), it leaves the committed
// Logo.vue untouched so nothing breaks.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const THEME_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const REPO_ROOT = resolve(THEME_ROOT, "..");
const SOURCE = join(REPO_ROOT, "logo", "light-logo.svg");
const OUT = join(THEME_ROOT, "components", "Logo.vue");

// Graphic-only crop of the source viewBox (the full logo is "301 210 1654 546";
// the wordmark occupies the remaining width). Light and dark sources share an
// identical path structure, so either works — only baked colors differ, and we
// override those with theme tokens anyway. The glyph proportions are stable, so
// this crop is pinned rather than computed.
const GRAPHIC_VIEWBOX = "301 210 605 546";

const rel = (p) => relative(REPO_ROOT, p);

if (!existsSync(SOURCE)) {
  console.warn(`  ⚠ ${rel(SOURCE)} not found — leaving ${rel(OUT)} untouched.`);
  process.exit(0);
}

const svg = readFileSync(SOURCE, "utf8");

const graphic = svg.match(/<g id="graphic">([\s\S]*?)<\/g>/);
if (!graphic) {
  throw new Error(`Could not find <g id="graphic"> in ${rel(SOURCE)}.`);
}

// Pull out each self-closing shape, drop the Inkscape `id="…"`, and collapse
// multi-line attribute formatting to a single line. Source attribute order
// (geometry first, then class) is preserved.
const elements = [
  ...graphic[1].matchAll(/<(path|circle|ellipse)\b([\s\S]*?)\/>/g),
].map(([, tag, attrs]) => {
  const cleaned = attrs
    .replace(/\s+id="[^"]*"/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return `    <${tag} ${cleaned} />`;
});

if (elements.length === 0) {
  throw new Error(`No shapes found inside <g id="graphic"> in ${rel(SOURCE)}.`);
}

const vue = `<!--
  GENERATED FILE — do not edit by hand.
  Regenerated from ../logo/light-logo.svg by scripts/build-logo.mjs
  (runs automatically via the theme's predev / prebuild / prepack hooks).

  Only the <g id="graphic"> contents are inlined — the wordmark is omitted so
  this can be paired with separate "bsf5y" text. Class fills/strokes resolve
  against the theme tokens in styles/layout.css, so the mark adapts to
  light/dark mode automatically.
-->
<template>
  <svg
    class="bsf-logo"
    viewBox="${GRAPHIC_VIEWBOX}"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="bsf5y"
  >
${elements.join("\n")}
  </svg>
</template>

<style scoped>
.bsf-logo {
  display: block;
  width: auto;
  height: 100%;
}

.bsf-logo .logo-text          { fill: var(--bsf-text); }
.bsf-logo .logo-accent        { fill: var(--bsf-accent); }
.bsf-logo .logo-accent-cool   { fill: var(--bsf-accent-cool); }
.bsf-logo .logo-stroke-text   { stroke: var(--bsf-text); fill: none; }
.bsf-logo .logo-stroke-border { stroke: var(--bsf-border-strong); fill: none; }
</style>
`;

writeFileSync(OUT, vue);
console.log(`  ✓ ${rel(OUT)}`);
