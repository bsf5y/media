# Eleventy Migration Plan

**Status:** Ready to implement (all decisions finalized)

## Executive Summary

Convert the current Vite + vanilla JS landing page to Eleventy (11ty), removing the custom markdown-to-JSON content pipeline and runtime DOM injection in favor of 11ty's native Nunjucks templating and data cascade.

---

## Decisions (Finalized)

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Templating language | **Nunjucks** | Most popular for 11ty, excellent docs, Jinja2-like syntax |
| Content organization | **Separate `_data/` files** | Clean separation, easier for non-devs to edit content |
| Asset processing | **Plain passthrough** | Simplest setup, current CSS works unchanged, add tooling later if needed |
| Blog URL structure | **`/blog/post-slug/`** | Clean undated URLs, better for updated content |
| Dev detection | **URL-based** | `localhost` / `127.0.0.1` check, no build-time injection needed |

---

## What We're Removing (The "Hacks")

| Current Hack | Problem | 11ty Solution |
|-------------|---------|---------------|
| `scripts/build-content.js` (294 lines) | Custom markdown parser with brittle regex | 11ty's native markdown + frontmatter |
| `content.json` intermediate file | Generated artifact, extra build step | Direct template rendering |
| Runtime DOM injection via `data-content` | Client-side rendering, flash of empty content | Server-side rendering at build time |
| XSS sanitization in `main.js` | Unnecessary complexity for trusted content | Build-time rendering (no runtime HTML injection) |
| Two-step build process | Fragile sequencing | Single `eleventy` command |

---

## What We're Keeping

- **Design system** (`main.css` - 1,153 lines of CSS custom properties)
- **Theme toggle** (light/dark mode with localStorage persistence)
- **Scroll animations** (IntersectionObserver for `.phase` and `.service` cards)
- **Header scroll behavior** (background opacity on scroll)
- **Accent color picker** (dev-only feature)
- **All fonts** (Google Fonts: Outfit, JetBrains Mono, Source Serif 4)

---

## New Directory Structure

```
landing-page/
├── src/
│   ├── _data/                          # Global data files
│   │   └── site.json                   # Site metadata
│   ├── _includes/                      # Reusable templates
│   │   ├── layouts/
│   │   │   ├── base.njk                # HTML shell (head, scripts)
│   │   │   ├── page.njk                # Standard page layout
│   │   │   └── post.njk                # Blog post layout
│   │   └── partials/
│   │       ├── header.njk              # Site header/nav
│   │       ├── footer.njk              # Site footer
│   │       ├── hero.njk                # Hero section
│   │       ├── methodology.njk         # Methodology section
│   │       ├── services.njk            # Services section
│   │       └── cta.njk                 # CTA section
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css                # Design system (preserved)
│   │   └── js/
│   │       └── main.js                 # Interactions only (simplified)
│   ├── blog/                           # Blog posts (future)
│   │   └── blog.json                   # Collection defaults
│   ├── index.njk                       # Homepage
│   └── pages/                          # Additional pages (future)
├── public/                             # Static assets (copied as-is)
├── dist/                               # Build output (generated)
├── .eleventy.js                        # 11ty configuration
├── package.json
└── .gitignore
```

---

## Migration Tasks

### Phase 1: Project Setup

#### 1.1 Initialize 11ty Project

```bash
# Remove Vite, add 11ty (keep markdown-it for blog post processing)
npm uninstall vite
npm install @11ty/eleventy --save-dev
```

#### 1.2 Create `.eleventy.js` Configuration

```javascript
module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("public");

  // Watch for CSS/JS changes
  eleventyConfig.addWatchTarget("src/assets/");

  // Add date filters for blog
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  });

  // Blog collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/**/*.md").reverse();
  });

  // Markdown configuration
  const markdownIt = require("markdown-it");
  const md = markdownIt({ html: true, linkify: true });
  eleventyConfig.setLibrary("md", md);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
```

#### 1.3 Update `package.json` Scripts

```json
{
  "scripts": {
    "dev": "eleventy --serve",
    "build": "eleventy",
    "clean": "rm -rf dist"
  }
}
```

---

### Phase 2: Create Base Templates

#### 2.1 Base Layout (`src/_includes/layouts/base.njk`)

Extracts the HTML shell from current `index.html`:
- Document head (meta, fonts, critical CSS)
- Grid overlay
- Header partial
- Main content block
- Footer partial
- Script loading

#### 2.2 Header Partial (`src/_includes/partials/header.njk`)

- Fixed navigation
- Mode toggle button
- Nav links (configurable via data)

#### 2.3 Footer Partial (`src/_includes/partials/footer.njk`)

- Location, tagline, copyright
- Auto-year via Nunjucks: `{{ "now" | date: "%Y" }}`

---

### Phase 3: Migrate Content

#### 3.1 Create Site Data (`src/_data/site.json`)

```json
{
  "title": "The Bootstrap Factory",
  "tagline": "Products, Not Prototypes",
  "description": "Champaign-Urbana technology consultancy",
  "location": "Champaign-Urbana, IL",
  "nav": [
    { "text": "Methodology", "url": "#methodology" },
    { "text": "Services", "url": "#services" },
    { "text": "Blog", "url": "/blog/" },
    { "text": "Let's Talk", "url": "#contact", "class": "nav-cta" }
  ]
}
```

#### 3.2 Convert Homepage Content

Create `src/_data/home.json` with all homepage content extracted from `copy.md`:

```json
{
  "hero": {
    "tagline": "Products, Not Prototypes",
    "lead": "You've validated the idea...",
    "reframe": "We're not just building software...",
    "subtext": "<p>First paragraph...</p><p>Second paragraph...</p>"
  },
  "positioning": "<p>The positioning statement...</p>",
  "methodology": {
    "headline": "How We Build",
    "intro": "Every engagement follows...",
    "phases": [
      {
        "number": "01",
        "name": "Discovery",
        "question": "What are we actually building?",
        "description": "Before writing code..."
      },
      {
        "number": "02",
        "name": "Foundation",
        "question": "How do we build it right?",
        "description": "Architecture decisions..."
      }
    ]
  },
  "services": [
    {
      "type": "Advisory",
      "title": "Fractional CTO",
      "description": "Technical leadership..."
    },
    {
      "type": "Development",
      "title": "MVP Development",
      "description": "Full-stack development..."
    }
  ],
  "cta": {
    "headline": "Ready to Build?",
    "subtext": "Let's talk about your product.",
    "button": "Start a Conversation"
  }
}
```

The homepage template (`src/index.njk`) references this data via 11ty's data cascade: `{{ home.hero.tagline }}`.

#### 3.3 Create Section Partials

Each section becomes a Nunjucks partial that receives data:

```njk
{# src/_includes/partials/methodology.njk #}
<section class="methodology" id="methodology">
  <div class="container">
    <header class="section-header">
      <span class="section-label">Our Process</span>
      <h2>{{ methodology.headline }}</h2>
      <p class="section-intro">{{ methodology.intro }}</p>
    </header>
    <div class="phases-grid">
      {% for phase in methodology.phases %}
      <article class="phase">
        <span class="phase-number">{{ phase.number }}</span>
        <h3 class="phase-name">{{ phase.name }}</h3>
        <p class="phase-question">{{ phase.question }}</p>
        <p class="phase-description">{{ phase.description }}</p>
      </article>
      {% endfor %}
    </div>
  </div>
</section>
```

---

### Phase 4: Simplify JavaScript

#### 4.1 Remove from `main.js`:

- `injectContent()` function (lines 203-280) - content now rendered at build time
- `sanitizeHtml()` function (lines 153-200) - no runtime HTML injection
- `setContent()` and `setHtml()` helpers
- Import of `content.json`

#### 4.2 Keep in `main.js`:

- Theme system (`initMode()`, `toggleMode()`)
- Accent color picker (`initAccentPicker()`) - needs dev detection method change
- Scroll animations (`setupScrollAnimations()`)
- Header scroll behavior (`setupScrollListeners()`)
- Smooth scroll for anchor links

#### 4.3 Dev Detection Change

Replace `import.meta.env.DEV` (Vite-specific) with URL-based detection:

```javascript
const isDev = window.location.hostname === 'localhost'
           || window.location.hostname === '127.0.0.1';
```

This is simpler than build-time injection and works reliably with 11ty's dev server.

---

### Phase 5: Set Up Blog

#### 5.1 Create Blog Structure

```
src/blog/
├── blog.json           # Default frontmatter for all posts
├── index.njk           # Blog listing page
└── posts/
    └── first-post.md   # Example post
```

#### 5.2 Blog Collection Defaults (`src/blog/blog.json`)

```json
{
  "layout": "layouts/post.njk",
  "tags": "posts",
  "permalink": "/blog/{{ page.fileSlug }}/"
}
```

#### 5.3 Post Layout (`src/_includes/layouts/post.njk`)

```njk
---
layout: layouts/base.njk
---
<article class="blog-post">
  <header class="post-header">
    <time datetime="{{ page.date | dateISO }}">{{ page.date | readableDate }}</time>
    <h1>{{ title }}</h1>
    {% if description %}<p class="post-description">{{ description }}</p>{% endif %}
  </header>
  <div class="post-content">
    {{ content | safe }}
  </div>
</article>
```

#### 5.4 Blog Index (`src/blog/index.njk`)

```njk
---
layout: layouts/page.njk
title: Blog
---
<section class="blog-listing">
  <div class="container">
    <h1>Blog</h1>
    <ul class="post-list">
      {% for post in collections.posts %}
      <li>
        <a href="{{ post.url }}">
          <time>{{ post.date | readableDate }}</time>
          <h2>{{ post.data.title }}</h2>
        </a>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
```

---

### Phase 6: Add Blog Styles

Add to `main.css`:

```css
/* Blog Listing */
.blog-listing { ... }
.post-list { ... }

/* Blog Post */
.blog-post { ... }
.post-header { ... }
.post-content { ... }
.post-content h2, h3, h4 { ... }
.post-content p { ... }
.post-content pre, code { ... }
.post-content blockquote { ... }
```

---

### Phase 7: Clean Up

#### 7.1 Delete Files

- `scripts/build-content.js` (custom parser - replaced by 11ty)
- `scripts/` directory (if empty)
- `src/content/copy.md` (content moved to frontmatter/data)
- `src/content/content.json` (no longer generated)
- `src/content/` directory
- `vite.config.js` (Vite config - replaced by .eleventy.js)

#### 7.2 Update `.gitignore`

```
node_modules
dist
.cache
```

#### 7.3 Update Imports in HTML

Remove content.json import, update asset paths if needed.

---

## File-by-File Migration Checklist

| Current File | Action | New Location |
|-------------|--------|--------------|
| `src/index.html` | Transform | `src/index.njk` + layouts + partials |
| `src/main.js` | Simplify | `src/assets/js/main.js` |
| `src/styles/main.css` | Move | `src/assets/css/main.css` |
| `src/content/copy.md` | Transform | `src/_data/home.json` |
| `src/content/content.json` | Delete | N/A (was generated) |
| `scripts/build-content.js` | Delete | N/A (replaced by 11ty) |
| `vite.config.js` | Delete | `.eleventy.js` |
| `public/` | Keep | `public/` (passthrough copy) |

---

## Estimated Complexity

| Task | Files Affected | Notes |
|------|----------------|-------|
| Phase 1: Setup | 3 new files | Config, package.json |
| Phase 2: Templates | 6 new files | Layouts + partials |
| Phase 3: Content | 2-3 files | Data + homepage |
| Phase 4: JavaScript | 1 file | Simplify main.js |
| Phase 5: Blog | 4 new files | Layout, index, config, example |
| Phase 6: Styles | 1 file | Add blog styles to main.css |
| Phase 7: Cleanup | Delete 4 files | Remove old build system |

---

## Testing Checklist

After migration, verify:

- [ ] Homepage renders correctly (all sections)
- [ ] Theme toggle works (light/dark)
- [ ] Theme persists across page loads
- [ ] Accent picker appears in dev only
- [ ] Scroll animations trigger on phase/service cards
- [ ] Header background changes on scroll
- [ ] Smooth scroll works for anchor links
- [ ] Blog listing page works
- [ ] Blog post pages render correctly
- [ ] All fonts load correctly
- [ ] CSS custom properties work in both themes
- [ ] Build produces static files in `dist/`
- [ ] No console errors
- [ ] Links work (including future nav to /blog/)

---

## Future Enhancements (Post-Migration)

Once the basic migration is complete, consider:

1. **RSS Feed** - `@11ty/eleventy-plugin-rss`
2. **Sitemap** - Auto-generated sitemap.xml
3. **Image Optimization** - `@11ty/eleventy-img`
4. **Syntax Highlighting** - `@11ty/eleventy-plugin-syntaxhighlight` for code blocks
5. **CSS/JS Bundling** - `@11ty/eleventy-plugin-bundle` or esbuild
6. **Draft Posts** - Frontmatter `draft: true` filtering
7. **Tags/Categories** - For blog organization
8. **Reading Time** - Filter for estimated read time
9. **SEO** - Open Graph tags, meta descriptions
10. **404 Page** - Custom error page

