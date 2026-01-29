# Eleventy Migration Tasks

Track progress through each stage. Each stage ends with a commit to ensure incremental, recoverable progress.

---

## Stage 1: Project Setup

- [x] Uninstall Vite: `npm uninstall vite`
- [x] Install Eleventy: `npm install @11ty/eleventy --save-dev`
- [x] Create `.eleventy.js` configuration file
- [x] Update `package.json` scripts (dev, build, clean)
- [x] Update `.gitignore` (add `.cache`, keep `dist`, remove `src/content/content.json`)
- [x] Verify `npm run dev` starts 11ty server (will error until templates exist)
- [x] **Commit:** "chore: Replace Vite with Eleventy"

---

## Stage 2: Base Templates & Layouts

- [x] Create directory structure: `src/_includes/layouts/`, `src/_includes/partials/`
- [x] Create `src/_includes/layouts/base.njk` (HTML shell from index.html)
- [x] Create `src/_includes/layouts/page.njk` (extends base, adds page wrapper)
- [x] Create `src/_includes/partials/header.njk` (nav, mode toggle)
- [x] Create `src/_includes/partials/footer.njk` (location, tagline, copyright)
- [x] Create `src/_data/site.json` (title, description, nav links)
- [x] **Commit:** "feat: Add Nunjucks base layouts and partials"

---

## Stage 3: Homepage Content Migration

- [x] Create `src/_data/home.json` (extract content from copy.md)
- [x] Create `src/_includes/partials/hero.njk`
- [x] Create `src/_includes/partials/positioning.njk`
- [x] Create `src/_includes/partials/methodology.njk`
- [x] Create `src/_includes/partials/services.njk`
- [x] Create `src/_includes/partials/cta.njk`
- [x] Create `src/index.njk` (homepage using layouts and partials)
- [x] Verify homepage renders correctly with `npm run dev`
- [x] **Commit:** "feat: Migrate homepage content to 11ty templates"

---

## Stage 4: Assets Migration

- [x] Create `src/assets/css/` directory
- [x] Move `src/styles/main.css` to `src/assets/css/main.css`
- [x] Create `src/assets/js/` directory
- [x] Copy `src/main.js` to `src/assets/js/main.js` (will simplify in next stage)
- [x] Update `base.njk` to reference new asset paths
- [x] Configure passthrough copy in `.eleventy.js` for assets
- [x] Verify styles and scripts load correctly
- [x] **Commit:** "refactor: Move assets to 11ty structure"

---

## Stage 5: Simplify JavaScript

- [x] Remove `content.json` import from main.js
- [x] Remove `injectContent()` function
- [x] Remove `sanitizeHtml()` function
- [x] Remove `setContent()` and `setHtml()` helpers
- [x] Replace `import.meta.env.DEV` with URL-based dev detection
- [x] Keep: theme system, accent picker, scroll animations, header scroll, smooth scroll
- [ ] Test theme toggle works
- [ ] Test scroll animations trigger
- [ ] Test accent picker appears only on localhost
- [x] **Commit:** "refactor: Remove runtime content injection from JS"

---

## Stage 6: Blog Setup

- [x] Create `src/blog/` directory
- [x] Create `src/blog/blog.json` (collection defaults: layout, tags, permalink)
- [x] Create `src/_includes/layouts/post.njk` (blog post layout)
- [x] Create `src/blog/index.njk` (blog listing page)
- [x] Add blog collection config to `.eleventy.js`
- [x] Add `readableDate` filter to `.eleventy.js`
- [x] Create example post: `src/blog/hello-world.md`
- [x] Add blog link to navigation in `site.json`
- [x] Verify blog listing page renders
- [x] Verify blog post page renders
- [x] **Commit:** "feat: Add blog with Eleventy collections"

---

## Stage 7: Blog Styles

- [x] Add `.blog-listing` styles to main.css
- [x] Add `.post-list` styles to main.css
- [x] Add `.blog-post` styles to main.css
- [x] Add `.post-header` styles to main.css
- [x] Add `.post-content` typography styles (h2-h4, p, code, blockquote)
- [ ] Verify blog pages match site design
- [x] **Commit:** "style: Add blog listing and post styles"

---

## Stage 8: Cleanup

- [x] Delete `scripts/build-content.js`
- [x] Delete `scripts/` directory (if empty)
- [x] Delete `src/content/copy.md`
- [x] Delete `src/content/content.json` (if exists)
- [x] Delete `src/content/` directory
- [x] Delete `src/styles/` directory (moved to assets)
- [x] Delete `src/main.js` (moved to assets)
- [x] Delete `src/index.html` (replaced by index.njk)
- [x] Delete `vite.config.js`
- [x] Run `npm run build` and verify `dist/` output
- [x] **Commit:** "chore: Remove legacy Vite build system"

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
- [x] `npm run build` produces static files in `dist/`
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
