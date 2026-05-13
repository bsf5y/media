#!/usr/bin/env node
// Builds downstream logo media from the two source SVGs in src/assets/logo/.
//
// Generated outputs (all gitignored):
//   - src/assets/logo/{light,dark}-logo.png    (rasterized via rsvg-convert)
//   - src/_includes/partials/logo-svg.njk      (inline SVG using CSS variables
//                                               so the header logo follows the
//                                               active light/dark theme)
//
// The two source SVGs share an identical path structure and only differ in
// their baked color values. The inline partial is derived from dark-logo.svg
// with `class="logo-*"` references rewritten to `fill="var(--color-*)"` so the
// runtime CSS controls theming.
//
// Requires `rsvg-convert` on PATH (`brew install librsvg` on macOS,
// `apt install librsvg2-bin` on Debian/Ubuntu).

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_DIR = join(ROOT, "src/assets/logo");
const PARTIAL_PATH = join(ROOT, "src/_includes/partials/logo-svg.njk");

const CLASS_TO_INLINE = {
  "logo-text": 'fill="var(--color-text)"',
  "logo-accent": 'fill="var(--color-accent)"',
  "logo-accent-cool": 'fill="var(--color-accent-cool)"',
  "logo-stroke-text": 'stroke="var(--color-text)" fill="none"',
  "logo-stroke-border": 'stroke="var(--color-border)" fill="none"',
};

const rel = (p) => relative(ROOT, p);

function rasterize(variant) {
  const src = join(SOURCE_DIR, `${variant}-logo.svg`);
  const dst = join(SOURCE_DIR, `${variant}-logo.png`);
  try {
    execFileSync("rsvg-convert", [src, "-o", dst], { stdio: ["ignore", "ignore", "inherit"] });
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error(
        "rsvg-convert not found on PATH. Install via `brew install librsvg` (macOS) or `apt install librsvg2-bin` (Linux)."
      );
    }
    throw err;
  }
  console.log(`  ✓ ${rel(dst)}`);
}

function buildInlinePartial() {
  const src = join(SOURCE_DIR, "dark-logo.svg");
  let svg = readFileSync(src, "utf8");

  // Drop XML declaration.
  svg = svg.replace(/^<\?xml[^>]*\?>\s*/, "");

  // Strip Inkscape/sodipodi/svg-prefix namespace declarations.
  svg = svg.replace(/\s+xmlns:(inkscape|sodipodi|svg)="[^"]*"/g, "");

  // Strip Inkscape/sodipodi-prefixed attributes (e.g. `sodipodi:docname="…"`).
  svg = svg.replace(/\s+(sodipodi|inkscape):[\w-]+="[^"]*"/g, "");

  // Drop the SVG version attribute (Inkscape emits `version="1.1"`).
  svg = svg.replace(/\s+version="1\.1"/g, "");

  // Drop the `<sodipodi:namedview …/>` element entirely.
  svg = svg.replace(/<sodipodi:namedview[\s\S]*?\/>\s*/g, "");

  // Drop the `<defs>` block — its `<style>` is being replaced inline.
  svg = svg.replace(/<defs\b[\s\S]*?<\/defs>\s*/g, "");

  // Drop all `id="…"` attributes (Inkscape adds them; we don't need them).
  svg = svg.replace(/\s+id="[^"]*"/g, "");

  // Rewrite class references to inline fill/stroke attributes.
  for (const [cls, replacement] of Object.entries(CLASS_TO_INLINE)) {
    svg = svg.replace(new RegExp(`class="${cls}"`, "g"), replacement);
  }

  // Inject header-specific attributes onto the root <svg>.
  svg = svg.replace(/<svg\b/, '<svg class="logo-svg" aria-hidden="true"');

  // Collapse Inkscape's multi-line attribute formatting into one line per tag.
  svg = svg.replace(/<(\w+)(\s[^>]*?)?>/g, (_, name, attrs) => {
    if (!attrs) return `<${name}>`;
    return `<${name} ${attrs.trim().replace(/\s+/g, " ")}>`;
  });

  // Collapse blank/whitespace-only lines, trim trailing whitespace.
  svg = svg.replace(/^[ \t]+$/gm, "").replace(/\n{2,}/g, "\n").trim();

  writeFileSync(PARTIAL_PATH, svg + "\n");
  console.log(`  ✓ ${rel(PARTIAL_PATH)}`);
}

console.log("Building logos…");
rasterize("light");
rasterize("dark");
buildInlinePartial();
