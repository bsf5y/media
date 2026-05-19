# CLAUDE.md — slidev-theme

Guidance for Claude Code when working in `slidev-theme/`. The repo-root `../CLAUDE.md` covers project-wide conventions; this file covers theme-specific details.

## Purpose

A [Slidev](https://sli.dev) theme that ports The Bootstrap Factory's "Refined Industrial Blueprint" design system to presentation slides. Source of truth for the visual language:

- Live style guide: `../landing-page/src/style-guide/index.html` (served at `/style-guide/` during `npm run dev` in `landing-page/`)
- Design tokens: `../landing-page/src/assets/css/main.css` (`:root` block — colors, fonts, spacing, effects)

When adding theme styles, map Slidev's `--slidev-theme-*` variables to the equivalent bsf5y tokens rather than inventing new values.

## Status

Scaffolded via `pnpm create slidev-theme`. Most of the current contents are starter boilerplate — the package name (`slidev-theme-slidev-theme`), README, and scaffold fonts (`Nunito Sans` / `Fira Code` in `package.json`) should be replaced with bsf5y equivalents (`Outfit`, `JetBrains Mono`, `Source Serif 4`) as the port progresses.

## Package Manager

Use **pnpm** in this directory (it has a `pnpm-lock.yaml`; the rest of the repo uses npm). Do not commit a `package-lock.json` here.

```bash
pnpm install        # install deps
pnpm dev            # slidev example.md --open (live preview)
pnpm build          # slidev build example.md → dist/
pnpm export         # PDF export
pnpm screenshot     # PNG export per slide
```

## Layout

```
slidev-theme/
├── package.json         # name, slidev.colorSchema, default fonts
├── example.md           # demo deck — the test bed for every theme change
├── layouts/             # *.vue — Slidev layout components (cover, intro, ...)
├── components/          # *.vue — reusable components exposed to slides
├── styles/
│   ├── index.ts         # entry — imports base layouts + layout.css
│   └── layout.css       # theme CSS, uses UnoCSS @apply
└── setup/
    └── shiki.ts         # code highlighting themes (currently vitesse-*)
```

Slidev auto-discovers files in `layouts/` and `components/` by filename — no registration step. A `.vue` file dropped into `layouts/foo.vue` becomes available as `layout: foo` in slide frontmatter.

## Theming Conventions

- **Theme variable**: `--slidev-theme-primary` (defined in `styles/layout.css`). Add more `--slidev-theme-*` vars as needed; users can override via the `themeConfig` frontmatter.
- **Color schema**: `package.json#slidev.colorSchema: "both"` — every layout must look correct in light and dark mode. The bsf5y design system is dark-first; pick a light-mode mapping deliberately.
- **CSS framework**: Slidev ships [UnoCSS](https://unocss.dev/) — prefer `@apply` and utility classes in `.vue` templates over hand-rolled CSS.
- **Layout helper**: backgrounds go through `handleBackground` from `@slidev/client/layoutHelper.ts` (see `layouts/cover.vue`). Don't bypass it — it handles URL/color/gradient inputs uniformly.
- **Code highlighting**: edit `setup/shiki.ts` to swap themes. Match light/dark Shiki themes to the bsf5y palette where possible.

## Workflow

1. Edit `example.md` to exercise the layout/component you're changing — every new layout needs a demo slide in `example.md`.
2. `pnpm dev` and verify in browser (both light and dark mode — toggle in the Slidev nav bar).
3. Commit. The theme is published as an npm package eventually; keep the README and `package.json` accurate.

## Don't

- Don't hand-edit `components.d.ts` or `dist/` — both are generated and gitignored.
- Don't import from `landing-page/` — copy the relevant tokens/snippets into `styles/` instead. The two builds are independent.
- Don't add Eleventy, Nunjucks, or any landing-page tooling here. This is a self-contained Slidev theme.
