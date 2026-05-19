# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

bsf5y-media is the media and web presence repository for **The Bootstrap Factory**, a Champaign-Urbana technology consultancy helping early-stage founders build production-ready products. The repo contains a static landing page with blog and strategic/marketing documentation.

## Development Workflow

Use a GitHub Issue and feature branch for non-trivial work. Quick content edits or small fixes can be committed directly to `dev`.

### Steps

1. **Branch** — `git checkout -b N-description` from `dev`.
2. **Discuss** — For non-trivial changes, discuss approach with the user before coding. No written plan files needed.
3. **Implement & Commit** — Make changes, commit at natural boundaries.
4. **Verify** — Run `npm run build` to confirm no breakage. Use `npm run dev` to visually check if layout is affected.
5. **Merge to dev** — `git checkout dev && git merge <branch> && git branch -d <branch>`.
6. **Push** — **Always confirm with the user before pushing `dev`**, since push triggers production deployment. `git push origin dev`.
7. **Cleanup** — Delete remote branch if one was pushed: `git push origin :<branch>`.

## Repository Structure

- `landing-page/` — Production landing page and blog (Eleventy + Nunjucks)
- `logo/` — Source-of-truth SVGs for the brand mark (consumed by the landing-page logo build)
- `slidev-theme/` — Slidev theme porting the bsf5y design system to slides (pnpm, self-contained — has its own `CLAUDE.md`)
- `docs/` — Strategic messaging, engagement model, service descriptions, brand materials, article ideas

## Build & Development Commands

All commands run from `landing-page/`:

```bash
cd landing-page
npm install          # Install dependencies
npm run dev          # Start Eleventy dev server with live reload
npm run build        # Production build (output to dist/)
npm run build:logos  # Regenerate logo PNGs + inline header partial
npm run clean        # Remove dist/ directory
```

`build:logos` runs automatically before `dev` and `build` (via `predev`/`prebuild` hooks). It requires `rsvg-convert` on PATH (`brew install librsvg`).

No test runner or linter is configured.

## Architecture

### Static Site Generator

The site is built with **Eleventy (11ty) v3** using Nunjucks templates. All content is rendered at build time — there is no client-side content injection.

### Content & Data

Landing page content is managed through structured JSON data files in `src/_data/`:

- `home.json` — All landing page section content (hero, positioning, problem, comparison, methodology, services, credibility, cta, footer)
- `site.json` — Site metadata (title, tagline, description, email, navigation)

Blog posts live in `src/blog/` as markdown files with YAML frontmatter. The Eleventy config creates a `posts` collection from `src/blog/**/*.md`.

### Template Structure

Nunjucks templates in `src/_includes/`:

- **Layouts** (`layouts/`): `base.njk` (HTML shell), `page.njk` (generic page), `post.njk` (blog post)
- **Partials** (`partials/`): `header.njk`, `hero.njk`, `positioning.njk`, `problem.njk`, `comparison.njk`, `methodology.njk`, `services.njk`, `credibility.njk`, `cta.njk`, `footer.njk`

The homepage (`src/index.njk`) composes all partials. Blog listing is at `src/blog/index.njk`.

### Frontend Stack

Vanilla JavaScript with zero framework dependencies. Key patterns:

- **Eleventy 3.x** as static site generator with Nunjucks templating
- **markdown-it** for markdown processing (blog posts, configured in `.eleventy.cjs`)
- **Theme system** — Light/dark mode toggle with localStorage persistence and OS preference detection
- **Scroll animations** via Intersection Observer with staggered entrance effects
- **Dev-only picker** (accent colors: copper/steel, hero visual: blueprint/terminal) — only visible on localhost

### Design System

CSS custom properties define the visual system in `src/assets/css/main.css`. The aesthetic is "Refined Industrial Blueprint" — dark palette with warm copper accents.

Three font families loaded from Google Fonts:
- **Outfit** — Headlines (geometric sans-serif)
- **JetBrains Mono** — Technical labels
- **Source Serif 4** — Editorial quotes

A live style guide rendered from the production stylesheet lives at `landing-page/src/style-guide/index.html` (served at `/style-guide/`, `noindex`). Use it as the visual reference for colors, type, spacing, and component tokens when adding or editing UI.

### Editing Content

- **Landing page text**: Edit `src/_data/home.json`. The JSON structure maps directly to page sections rendered by the Nunjucks partials.
- **Site metadata/navigation**: Edit `src/_data/site.json`.
- **Blog posts**: Add or edit markdown files in `src/blog/`. Each post needs YAML frontmatter with `title`, `date`, `description`, and optionally `author` and `tags`.

### Logo Pipeline

The two SVGs in the repo-root `logo/` directory are the **single source of truth** for the brand mark:

- `logo/light-logo.svg` — for use on light backgrounds (baked light-mode colors)
- `logo/dark-logo.svg` — for use on dark backgrounds (baked dark-mode colors)

Both files share an identical structure: child elements are organized into two named groups so derivatives can address them semantically rather than by individual element IDs.

- `<g id="graphic">` — the brand-mark glyph (everything except the text)
- `<g id="wordmark">` — the "BSF5Y" letterforms

**Preserve this grouping when editing the sources.** If Inkscape (or any other editor) ungroups them or renames the IDs, the LinkedIn build will fail to find the `wordmark` group and produce the full logo instead of the graphic-only image.

`landing-page/scripts/build-logos.mjs` generates all downstream media from these sources (run automatically via `prebuild`/`predev`):

- `logo/{light,dark}-logo.png` — rasterized via `rsvg-convert` for non-SVG consumers (downloads, social cards)
- `landing-page/src/_includes/partials/logo-svg.njk` — inline header SVG with `class="logo-*"` rewritten to `fill="var(--color-*)"`, so the header logo follows the active theme at runtime

Eleventy passes the repo-root `logo/` directory through to `/assets/logo/` in the built site, so SVGs and PNGs are served at `/assets/logo/{light,dark}-logo.{svg,png}` (the style guide references those URLs).

A standalone `logo/Makefile` produces social/profile derivatives from the same source SVGs. `make linkedin` writes `logo/{light,dark}-logo-linkedin.png` — 300×300 PNGs of the graphic mark only (the `<g id="wordmark">` group is stripped via `xmlstarlet`) with 20px of transparent padding on every edge. Requires `xmlstarlet`, `rsvg-convert`, and `magick` (`brew install xmlstarlet librsvg imagemagick`).

Generated outputs are gitignored. **Never hand-edit** the generated files; edit the source SVGs and re-run `npm run build:logos` (or `make` in `logo/`).

Class → CSS-variable mapping (defined in `landing-page/scripts/build-logos.mjs`):

| SVG class | Inline attribute |
| --- | --- |
| `logo-text` | `fill="var(--color-text)"` |
| `logo-accent` | `fill="var(--color-accent)"` |
| `logo-accent-cool` | `fill="var(--color-accent-cool)"` |
| `logo-stroke-text` | `stroke="var(--color-text)" fill="none"` |
| `logo-stroke-border` | `stroke="var(--color-border)" fill="none"` |

The unrelated `docs/logo/` directory holds archival brand exports (raster art, plain `logo.svg`) and is not part of the build pipeline.

## Brand Voice

When writing or editing copy for this project:
- Blunt, confident, technical — not salesy or corporate
- Core message: "Products, Not Prototypes"
- Philosophy: "Go well to go fast" — engineering discipline over speed
- Teacher-focused approach; explain the "why"
- Audience: non-technical/semi-technical early-stage founders
