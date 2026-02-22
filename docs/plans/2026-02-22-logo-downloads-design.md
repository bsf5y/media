# Logo Download Mechanism for Style Guide — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add download buttons for SVG and PNG logo files to the style guide page.

**Architecture:** Copy source SVGs into Eleventy's asset pipeline, generate PNGs via ImageMagick, and add `<a download>` links below each logo panel in the style guide.

**Tech Stack:** Eleventy (static assets passthrough), ImageMagick (`magick` CLI), HTML/CSS

---

### Task 1: Copy SVG files and generate PNGs

**Files:**
- Create: `landing-page/src/assets/logo/dark-logo.svg`
- Create: `landing-page/src/assets/logo/light-logo.svg`
- Create: `landing-page/src/assets/logo/dark-logo.png`
- Create: `landing-page/src/assets/logo/light-logo.png`

**Step 1: Create logo asset directory and copy SVGs**

```bash
mkdir -p landing-page/src/assets/logo
cp docs/logo/dark-logo.svg landing-page/src/assets/logo/dark-logo.svg
cp docs/logo/light-logo.svg landing-page/src/assets/logo/light-logo.svg
```

**Step 2: Generate PNGs from SVGs using ImageMagick**

```bash
magick docs/logo/dark-logo.svg -resize 2667x1066 landing-page/src/assets/logo/dark-logo.png
magick docs/logo/light-logo.svg -resize 2667x1066 landing-page/src/assets/logo/light-logo.png
```

**Step 3: Verify the generated files**

```bash
ls -la landing-page/src/assets/logo/
magick identify landing-page/src/assets/logo/dark-logo.png
magick identify landing-page/src/assets/logo/light-logo.png
```

Expected: 4 files (2 SVG, 2 PNG). PNG dimensions should be 2667x1066.

**Step 4: Commit**

```bash
git add landing-page/src/assets/logo/
git commit -m "Add logo SVG and PNG assets for style guide downloads"
```

---

### Task 2: Add download button CSS to style guide

**Files:**
- Modify: `landing-page/src/style-guide/index.html` (CSS section, around line 106)

**Step 1: Add download button styles**

Insert after the `.sg-logo-light .sg-label` rule (line 106), before the `/* ---- Color Swatches ---- */` comment:

```css
    /* ---- Logo Download Buttons ---- */
    .sg-logo-downloads {
      display: flex;
      gap: var(--space-sm);
      margin-top: var(--space-sm);
    }

    .sg-logo-downloads a {
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      letter-spacing: var(--tracking-wide);
      text-decoration: none;
      padding: var(--space-xs) var(--space-md);
      border: 1px solid var(--color-border);
      border-radius: var(--radius-sm);
      color: var(--color-text-muted);
      transition: color 0.2s, border-color 0.2s;
    }

    .sg-logo-downloads a:hover {
      color: var(--color-accent);
      border-color: var(--color-accent);
    }
```

**Step 2: Verify build**

```bash
cd landing-page && npm run build
```

Expected: Clean build, no errors.

**Step 3: Commit**

```bash
git add landing-page/src/style-guide/index.html
git commit -m "Add download button styles to style guide"
```

---

### Task 3: Add download links to logo panels in HTML

**Files:**
- Modify: `landing-page/src/style-guide/index.html` (HTML section)

**Step 1: Add download links below the dark logo panel**

After the closing `</div>` of the dark logo panel (after the `<span class="sg-label">Dark mode` line ~401), add:

```html
          <div class="sg-logo-downloads">
            <a href="/assets/logo/dark-logo.svg" download="bsf5y-logo-dark.svg">SVG</a>
            <a href="/assets/logo/dark-logo.png" download="bsf5y-logo-dark.png">PNG</a>
          </div>
```

**Step 2: Add download links below the light logo panel**

After the closing `</div>` of the light logo panel (after the `<span class="sg-label">Light mode` line ~429), add:

```html
          <div class="sg-logo-downloads">
            <a href="/assets/logo/light-logo.svg" download="bsf5y-logo-light.svg">SVG</a>
            <a href="/assets/logo/light-logo.png" download="bsf5y-logo-light.png">PNG</a>
          </div>
```

**Step 3: Build and visually verify**

```bash
cd landing-page && npm run build
npm run dev
```

Open `http://localhost:8080/style-guide/` and verify:
- Download buttons appear below each logo panel
- Clicking SVG/PNG buttons downloads the correct files
- Buttons match the design system aesthetic

**Step 4: Commit**

```bash
git add landing-page/src/style-guide/index.html
git commit -m "Add logo download links to style guide

Closes #23"
```

---

### Task 4: Merge to dev

**Step 1: Merge branch to dev**

```bash
git checkout dev
git merge 23-logo-downloads
git branch -d 23-logo-downloads
```

**Step 2: Confirm with user before pushing**

Ask user to confirm push to dev (triggers production deployment).
