# slidev-theme-bsf5y

A [Slidev](https://sli.dev) theme port of **The Bootstrap Factory**'s design system — Refined Industrial Blueprint. Dark-first, warm copper accents, technical mono labels, editorial serif quotes.

## Install

```yaml
---
theme: bsf5y
---
```

Slidev will prompt to install the theme on first run. Until this is published to npm, use the path form (`theme: ./` when inside this directory, or `theme: ../slidev-theme` from a sibling deck).

See [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Design

- **Outfit** for display headlines (geometric sans)
- **JetBrains Mono** for code, eyebrows, technical labels
- **Source Serif 4** for blockquotes and editorial emphasis
- **Copper** (`#d97706`) for action and accent; **steel blue** (`#3b82f6`) for structure
- Blueprint grid overlay (20px minor / 100px major)
- Light + dark mode (Slidev `colorSchema: both`); the website is dark-first

Source of truth for tokens: `../landing-page/src/assets/css/main.css` and the live style guide at `/style-guide/` (run `npm run dev` in `../landing-page/`).

## Layouts

| Layout | Frontmatter props | Use |
| --- | --- | --- |
| `cover` | `eyebrow`, `footnote`, `background` | Title slide — copper-to-steel rule across the top |
| `intro` | `eyebrow`, `background` | Section opener — eyebrow + display headline |
| `section` | `number`, `eyebrow`, `background` | Numbered transition slide (big translucent number) |
| `quote` | `author`, `role`, `background` | Serif italic testimonial with attribution |
| `default` | — | Body content (headings, lists, tables, code) |
| `center` | — | Centered single-message slide |

### Markdown helpers

- Wrap text in `<span class="accent">…</span>` for copper highlight inside a heading.
- Use `<span class="accent-cool">…</span>` for steel-blue highlight.
- `######` (h6) becomes a mono-uppercase steel-blue eyebrow above a heading.

## Components

> No bespoke components yet. Slidev's built-in components (`<Tweet>`, `<Youtube>`, `<Toc>`, etc.) work as expected.

## Contributing

This package uses **pnpm**.

```bash
pnpm install
pnpm dev          # live preview of example.md
pnpm build        # build static deck → dist/
pnpm export       # PDF export
pnpm screenshot   # PNG export per slide
```

Every theme change should land with a demo slide in `example.md` that exercises it — that file is the test bed. Verify both light and dark mode (toggle in the Slidev nav bar) before committing.
