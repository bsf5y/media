# Eleventy Migration Tasks

Track progress through each stage. Each stage ends with a commit to ensure incremental, recoverable progress.

---

## Stage 1: Project Setup

- [ ] Uninstall Vite: `npm uninstall vite`
- [ ] Install Eleventy: `npm install @11ty/eleventy --save-dev`
- [ ] Create `.eleventy.js` configuration file
- [ ] Update `package.json` scripts (dev, build, clean)
- [ ] Update `.gitignore` (add `.cache`, keep `dist`, remove `src/content/content.json`)
- [ ] Verify `npm run dev` starts 11ty server (will error until templates exist)
- [ ] **Commit:** "chore: Replace Vite with Eleventy"

---

## Stage 2: Base Templates & Layouts

- [ ] Create directory structure: `src/_includes/layouts/`, `src/_includes/partials/`
- [ ] Create `src/_includes/layouts/base.njk` (HTML shell from index.html)
- [ ] Create `src/_includes/layouts/page.njk` (extends base, adds page wrapper)
- [ ] Create `src/_includes/partials/header.njk` (nav, mode toggle)
- [ ] Create `src/_includes/partials/footer.njk` (location, tagline, copyright)
- [ ] Create `src/_data/site.json` (title, description, nav links)
- [ ] **Commit:** "feat: Add Nunjucks base layouts and partials"

---

## Stage 3: Homepage Content Migration

- [ ] Create `src/_data/home.json` (extract content from copy.md)
- [ ] Create `src/_includes/partials/hero.njk`
- [ ] Create `src/_includes/partials/positioning.njk`
- [ ] Create `src/_includes/partials/methodology.njk`
- [ ] Create `src/_includes/partials/services.njk`
- [ ] Create `src/_includes/partials/cta.njk`
- [ ] Create `src/index.njk` (homepage using layouts and partials)
- [ ] Verify homepage renders correctly with `npm run dev`
- [ ] **Commit:** "feat: Migrate homepage content to 11ty templates"

---

## Stage 4: Assets Migration

- [ ] Create `src/assets/css/` directory
- [ ] Move `src/styles/main.css` to `src/assets/css/main.css`
- [ ] Create `src/assets/js/` directory
- [ ] Copy `src/main.js` to `src/assets/js/main.js` (will simplify in next stage)
- [ ] Update `base.njk` to reference new asset paths
- [ ] Configure passthrough copy in `.eleventy.js` for assets
- [ ] Verify styles and scripts load correctly
- [ ] **Commit:** "refactor: Move assets to 11ty structure"

---

## Stage 5: Simplify JavaScript

- [ ] Remove `content.json` import from main.js
- [ ] Remove `injectContent()` function
- [ ] Remove `sanitizeHtml()` function
- [ ] Remove `setContent()` and `setHtml()` helpers
- [ ] Replace `import.meta.env.DEV` with URL-based dev detection
- [ ] Keep: theme system, accent picker, scroll animations, header scroll, smooth scroll
- [ ] Test theme toggle works
- [ ] Test scroll animations trigger
- [ ] Test accent picker appears only on localhost
- [ ] **Commit:** "refactor: Remove runtime content injection from JS"

---

## Stage 6: Blog Setup

- [ ] Create `src/blog/` directory
- [ ] Create `src/blog/blog.json` (collection defaults: layout, tags, permalink)
- [ ] Create `src/_includes/layouts/post.njk` (blog post layout)
- [ ] Create `src/blog/index.njk` (blog listing page)
- [ ] Add blog collection config to `.eleventy.js`
- [ ] Add `readableDate` filter to `.eleventy.js`
- [ ] Create example post: `src/blog/hello-world.md`
- [ ] Add blog link to navigation in `site.json`
- [ ] Verify blog listing page renders
- [ ] Verify blog post page renders
- [ ] **Commit:** "feat: Add blog with Eleventy collections"

---

## Stage 7: Blog Styles

- [ ] Add `.blog-listing` styles to main.css
- [ ] Add `.post-list` styles to main.css
- [ ] Add `.blog-post` styles to main.css
- [ ] Add `.post-header` styles to main.css
- [ ] Add `.post-content` typography styles (h2-h4, p, code, blockquote)
- [ ] Verify blog pages match site design
- [ ] **Commit:** "style: Add blog listing and post styles"

---

## Stage 8: Cleanup

- [ ] Delete `scripts/build-content.js`
- [ ] Delete `scripts/` directory (if empty)
- [ ] Delete `src/content/copy.md`
- [ ] Delete `src/content/content.json` (if exists)
- [ ] Delete `src/content/` directory
- [ ] Delete `src/styles/` directory (moved to assets)
- [ ] Delete `src/main.js` (moved to assets)
- [ ] Delete `src/index.html` (replaced by index.njk)
- [ ] Delete `vite.config.js`
- [ ] Run `npm run build` and verify `dist/` output
- [ ] **Commit:** "chore: Remove legacy Vite build system"

---

## Stage 9: Final Verification

- [ ] Homepage renders correctly (all sections)
- [ ] Theme toggle works (light/dark)
- [ ] Theme persists across page loads (localStorage)
- [ ] Accent picker appears in dev only (localhost)
- [ ] Scroll animations trigger on phase/service cards
- [ ] Header background changes on scroll
- [ ] Smooth scroll works for anchor links
- [ ] Blog listing page works
- [ ] Blog post pages render correctly
- [ ] All fonts load correctly (Outfit, JetBrains Mono, Source Serif 4)
- [ ] CSS custom properties work in both themes
- [ ] `npm run build` produces static files in `dist/`
- [ ] No console errors
- [ ] Navigation links work (including /blog/)
- [ ] **Commit:** "docs: Complete 11ty migration" (update README if needed)

---

## Summary

| Stage | Description | Commit Message |
|-------|-------------|----------------|
| 1 | Project Setup | `chore: Replace Vite with Eleventy` |
| 2 | Base Templates | `feat: Add Nunjucks base layouts and partials` |
| 3 | Homepage Content | `feat: Migrate homepage content to 11ty templates` |
| 4 | Assets Migration | `refactor: Move assets to 11ty structure` |
| 5 | Simplify JavaScript | `refactor: Remove runtime content injection from JS` |
| 6 | Blog Setup | `feat: Add blog with Eleventy collections` |
| 7 | Blog Styles | `style: Add blog listing and post styles` |
| 8 | Cleanup | `chore: Remove legacy Vite build system` |
| 9 | Final Verification | `docs: Complete 11ty migration` |
