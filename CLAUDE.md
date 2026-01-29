# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

bsf5y-media is the media and web presence repository for **The Bootstrap Factory**, a Champaign-Urbana technology consultancy helping early-stage founders build production-ready products. The repo contains a static landing page and strategic/marketing documentation.

## Repository Structure

- `landing-page/` — Production landing page (Vite + vanilla JS, the main codebase)
- `docs/` — Strategic messaging, engagement model, service descriptions, brand materials

## Build & Development Commands

All commands run from `landing-page/`:

```bash
cd landing-page
npm install          # Install dependencies
npm run dev          # Start Vite dev server with HMR (auto-opens browser)
npm run build        # Build content JSON from markdown, then Vite production build
npm run preview      # Preview the production build locally
```

No test runner or linter is configured.

## Architecture

### Content Pipeline

The landing page uses a **content-driven architecture** where all page copy lives in a single markdown file:

1. `src/content/copy.md` — Source of truth for all page text (structured with `##` sections and `###` subsections)
2. `scripts/build-content.js` — Parses markdown → `src/content/content.json` (generated file, gitignored)
3. `src/main.js` — Reads JSON at runtime and injects content into the DOM

The build script validates content schema before producing output. Required sections: hero, positioning, methodology, services, cta, footer. Validation checks required fields, methodology phases (number, name, question, description), and services (type, title, description).

### Frontend Stack

Vanilla JavaScript with zero framework dependencies. Key patterns:

- **ES modules** (`"type": "module"` in package.json)
- **Vite 5.4** as build tool; source root is `src/`, output goes to `dist/` (one level up from landing-page)
- **markdown-it** for build-time markdown parsing (not used at runtime)
- **XSS sanitization** in `main.js` for dynamic HTML injection (allowlist: p, strong, em, br, ul, ol, li, span, a)
- **Theme system** — Light/dark mode toggle with localStorage persistence and OS preference detection
- **Scroll animations** via Intersection Observer with staggered entrance effects
- **Dev-only accent color picker** (copper, steel, forest) — only visible in dev mode

### Design System

CSS custom properties define the visual system in `src/styles/main.css`. The aesthetic is "Refined Industrial Blueprint" — dark palette with warm copper accents.

Three font families loaded from Google Fonts:
- **Outfit** — Headlines (geometric sans-serif)
- **JetBrains Mono** — Technical labels
- **Source Serif 4** — Editorial quotes

### Editing Page Content

To change landing page text, edit `src/content/copy.md` only. The markdown structure maps directly to page sections. The build script enforces the expected structure, so maintain the existing heading hierarchy when editing.

## Brand Voice

When writing or editing copy for this project:
- Blunt, confident, technical — not salesy or corporate
- Core message: "Products, Not Prototypes"
- Philosophy: "Go well to go fast" — engineering discipline over speed
- Teacher-focused approach; explain the "why"
- Audience: non-technical/semi-technical early-stage founders
