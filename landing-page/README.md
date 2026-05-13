# The Bootstrap Factory — Landing Page

A refined, industrial-inspired landing page built with Vite, designed for static hosting.

## Design Philosophy

**Aesthetic:** Refined Industrial Blueprint — conveying precision, craftsmanship, and serious expertise through a dark palette with warm copper accents and subtle blueprint grid textures.

**Typography:**
- **Outfit** — Bold geometric sans-serif for headlines
- **JetBrains Mono** — Technical precision for labels and code elements
- **Source Serif 4** — Refined serif for editorial quotes

**Colors:**
- Deep charcoal backgrounds (#0a0c0f, #12151a)
- Warm copper accent (#d97706)
- Carefully muted text hierarchy

## Project Structure

```
landing-page/
├── src/
│   ├── content/
│   │   └── copy.md          # All page copy in markdown
│   ├── styles/
│   │   └── main.css         # Complete design system
│   ├── index.html           # Semantic HTML template
│   └── main.js              # Minimal interactions
├── scripts/
│   └── build-content.js     # Markdown → JSON processor
├── public/                   # Static assets
├── vite.config.js
└── package.json
```

## Development

```bash
# Install dependencies
npm install

# Start development server (opens browser automatically)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server includes:
- **Hot Module Replacement (HMR)** — Instant updates without full page reload
- **File watching** — Automatic detection of file changes
- **Auto-open** — Browser opens automatically when server starts

## Content Editing

All page copy lives in `src/content/copy.md`. Edit this file to update text content. The markdown structure uses headings to organize sections:

- `## Section` — Major page sections
- `### Subsection` — Content blocks within sections
- Standard markdown for formatting

## Deployment

### GitHub Pages

1. Build the site:
   ```bash
   npm run build
   ```

2. The `dist/` directory contains the static site.

3. Configure GitHub Pages to serve from the `dist` directory, or use the `gh-pages` branch approach:
   ```bash
   # Install gh-pages
   npm install -D gh-pages

   # Add deploy script to package.json
   # "deploy": "npm run build && gh-pages -d dist"

   npm run deploy
   ```

### Cloudflare Pages

1. Connect your repository to Cloudflare Pages

2. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `landing-page` (if in a monorepo)

3. Deploy automatically on push

### Netlify

1. Connect repository or drag `dist/` folder

2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

### Manual Deployment

Run `npm run build` and upload the contents of `dist/` to any static file host.

## Customization

### Colors
Edit CSS custom properties in `src/styles/main.css`:

```css
:root {
  --color-accent: #d97706;        /* Primary accent */
  --color-bg-deep: #0a0c0f;       /* Deepest background */
  --color-text: #e8e6e3;          /* Primary text */
}
```

### Typography
Font imports are in `index.html`. Replace Google Fonts links to change typefaces.

### Contact Email
Update the email in `index.html`:
```html
<a href="mailto:hello@bootstrapfactory.io" class="cta-button">
```

## Logo Assets

The two SVGs in `src/assets/logo/` (`light-logo.svg`, `dark-logo.svg`) are the **single source of truth** for the brand mark. All other logo media is generated from them by `scripts/build-logos.mjs`:

- `src/assets/logo/{light,dark}-logo.png` — rasterized via `rsvg-convert` (install with `brew install librsvg`)
- `src/_includes/partials/logo-svg.njk` — inline header SVG with theme-aware `var(--color-*)` references

These outputs are gitignored. They regenerate automatically before `npm run dev` and `npm run build`; run `npm run build:logos` to refresh them manually. Never hand-edit the generated files — edit the source SVGs and rebuild.

## Browser Support

Modern browsers with CSS Grid and custom properties support:
- Chrome/Edge 88+
- Firefox 78+
- Safari 14+

## License

Proprietary — The Bootstrap Factory
