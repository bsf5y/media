# slidev-theme-bsf5y

A [Slidev](https://sli.dev) theme port of **The Bootstrap Factory**'s design system — Refined Industrial Blueprint. Dark-first, warm copper accents, technical mono labels, editorial serif quotes.

## Install

The theme is published to **GitHub Packages** as `@bsf5y/slidev-theme`.

### From outside this repository

GitHub Packages requires authentication even to install. In your deck's project,
add an `.npmrc` that points the `@bsf5y` scope at the registry and supplies a
token with `read:packages` scope:

```ini
# .npmrc
@bsf5y:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

Then install and reference the theme by its full scoped name:

```bash
npm install -D @bsf5y/slidev-theme
```

```yaml
---
theme: '@bsf5y/slidev-theme'
---
```

> The bare `theme: bsf5y` shorthand only auto-expands to the unscoped
> `slidev-theme-bsf5y` / `@slidev/theme-bsf5y` forms, so a scoped package must be
> referenced by its full name.

### Developing the theme itself

The theme's own `example.md` is the in-repo test bed — `pnpm dev` previews it
against the live source, no registry needed. Decks live in their own repositories
and install the published package as above (see
[`ai-training`](https://github.com/bsf5y/ai-training)).

See [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Publishing

A new version is published to GitHub Packages by the
[`publish-slidev-theme`](../.github/workflows/publish-slidev-theme.yml) workflow.
Bump the version, tag, and push:

```bash
# from slidev-theme/
npm version patch        # bump version in package.json
git push origin dev
git tag slidev-theme-v$(node -p "require('./package.json').version")
git push origin --tags   # tag push triggers the publish workflow
```

The workflow can also be run manually from the Actions tab (`workflow_dispatch`).
It authenticates with the built-in `GITHUB_TOKEN`; no PAT or repo secret is
required to publish.

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
