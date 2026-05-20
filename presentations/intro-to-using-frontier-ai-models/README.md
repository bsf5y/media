# Intro to Using Frontier AI Models

A Slidev deck styled with the local [`slidev-theme-bsf5y`](../../slidev-theme/) theme (Refined Industrial Blueprint).

## Develop

This project uses **pnpm** to match the theme workspace.

```bash
pnpm install        # install Slidev + link the local theme
pnpm dev            # live preview at http://localhost:3030
pnpm build          # static build → dist/
pnpm export         # PDF export
pnpm screenshot     # PNG export per slide
```

The theme is wired in via a relative `link:` dependency in `package.json`, and referenced as `theme: ../../slidev-theme` in the frontmatter of `slides.md`. Edits to `../../slidev-theme/` are picked up live during `pnpm dev`.

## Structure

```
.
├── slides.md       # the deck
├── package.json    # pnpm scripts + linked theme dep
└── README.md
```

## Theme reference

See [`../../slidev-theme/README.md`](../../slidev-theme/README.md) for the layout catalog (`cover`, `intro`, `section`, `quote`, `default`, `center`), markdown helpers (`<span class="accent">`, `######` eyebrows), and color schema notes.
