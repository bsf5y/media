# Marketing Site Implementation Tasks

This task list implements the design plan in `docs/design-plan.md`. Work proceeds in stages, with a commit at the end of each stage.

> **IMPORTANT:** Do not proceed to the next stage until ALL tasks in the current stage are complete and committed. Each stage builds on the previous one.

---

## Stage 1: Content & Copy

Replace all placeholder content with real messaging from the brand documents.

### Data Files

- [ ] Update `src/_data/home.json` hero section
  - [ ] Set tagline to "Products, Not Prototypes."
  - [ ] Set lead text (elevator pitch excerpt)
  - [ ] Set reframe text
  - [ ] Set subtext paragraphs

- [ ] Update `src/_data/home.json` methodology section
  - [ ] Set headline (e.g., "How We Work" or "Our Approach")
  - [ ] Set intro paragraph
  - [ ] Update Phase 1: Discovery — "Show us the vision."
  - [ ] Update Phase 2: Differentiation — "What can only this product do."
  - [ ] Update Phase 3: Foundation — "Turnkey the rest."
  - [ ] Update Phase 4: Execution — "Products, not prototypes."

- [ ] Update `src/_data/home.json` services section
  - [ ] Service 1: Fractional CTO — Technical Leadership
  - [ ] Service 2: Product Development — Bespoke Solutions
  - [ ] Service 3: Team Building — Recruitment & Staffing
  - [ ] Service 4: Training & Coaching — Up-Skill Existing Teams

- [ ] Update `src/_data/home.json` CTA section
  - [ ] Set headline: "Ready to build it right?"
  - [ ] Set subtext
  - [ ] Set button text: "Start a Conversation"

- [ ] Update `src/_data/site.json`
  - [ ] Verify site title
  - [ ] Update tagline/description for SEO
  - [ ] Set contact email to hello@bsf5y.com

### Templates

- [ ] Update `src/_includes/partials/cta.njk`
  - [ ] Change button to mailto link: `mailto:hello@bsf5y.com?subject=Discovery%20Conversation`

- [ ] Update `src/_includes/partials/footer.njk`
  - [ ] Add/verify contact email
  - [ ] Add location: Champaign-Urbana, IL
  - [ ] Update copyright year to 2025
  - [ ] Add tagline in footer: "Products, not prototypes."

- [ ] Update `src/_includes/layouts/base.njk`
  - [ ] Verify meta description uses site data
  - [ ] Add Open Graph meta tags if missing
  - [ ] Verify favicon is appropriate

### Verification

- [ ] Run `npm run build` — confirm no errors
- [ ] Run `npm run preview` — visually verify all content displays correctly
- [ ] Check all sections have real content (no Lorem Ipsum)

### Stage 1 Commit

- [ ] Commit all changes with message: `content: Replace placeholder copy with brand messaging`

---

> **STOP:** Do not proceed to Stage 2 until all Stage 1 tasks are complete and committed.

---

## Stage 2: Layout & New Sections

Add new sections and refine existing layouts per the design plan.

### New Section: The Problem

- [ ] Create `src/_includes/partials/problem.njk`
  - [ ] Add section with "The Founder's Reality" content
  - [ ] Include 3-4 punchy problem statements as bullet points
  - [ ] Style consistently with other sections

- [ ] Add problem data to `src/_data/home.json`
  - [ ] Add `problem` object with headline and statements

- [ ] Include problem partial in `src/index.njk` (after hero, before positioning)

### New Section: Comparison (Prototype vs Product)

- [ ] Create `src/_includes/partials/comparison.njk`
  - [ ] Add two-column comparison table/grid
  - [ ] Include headline: "The difference isn't polish or features. It's where the value lives."
  - [ ] Add comparison rows from design plan

- [ ] Add comparison data to `src/_data/home.json`
  - [ ] Add `comparison` object with headline and row items

- [ ] Add CSS for comparison section in `src/assets/css/main.css`
  - [ ] Two-column layout (stacks on mobile)
  - [ ] Clear visual distinction between columns
  - [ ] Consistent styling with design system

- [ ] Include comparison partial in `src/index.njk` (after problem, before methodology)

### New Section: Credibility Bar

- [ ] Create `src/_includes/partials/credibility.njk`
  - [ ] Add proof points as a single line or compact list
  - [ ] Include: 8-figure programs, 20+ engineers, startup exits, Research Park, university collaborations

- [ ] Add credibility data to `src/_data/home.json`
  - [ ] Add `credibility` object with proof points array

- [ ] Add CSS for credibility section in `src/assets/css/main.css`
  - [ ] Horizontal layout with separators (bullet or pipe)
  - [ ] Subtle styling (not shouty)
  - [ ] Responsive: wraps gracefully on mobile

- [ ] Include credibility partial in `src/index.njk` (after services, before CTA)

### Hero Visual: Terminal Aesthetic

- [ ] Remove or replace blueprint animation in `src/_includes/partials/hero.njk`
- [ ] Create terminal/code visual element
  - [ ] Design terminal window frame (title bar, buttons)
  - [ ] Add code/terminal content showing clean architecture concept
  - [ ] Use JetBrains Mono font
  - [ ] Apply syntax highlighting with copper accent

- [ ] Add CSS for terminal visual in `src/assets/css/main.css`
  - [ ] Terminal window styling
  - [ ] Code syntax colors
  - [ ] Responsive behavior (hide or simplify on mobile)

### Methodology Cards Refinement

- [ ] Update `src/_includes/partials/methodology.njk`
  - [ ] Ensure phase numbers are prominent
  - [ ] Add guiding question as distinctive element (copper color, italic)
  - [ ] Verify card spacing and breathing room

- [ ] Update methodology CSS if needed
  - [ ] Phase number styling (larger, visual anchor)
  - [ ] Question styling (copper, italic or mono)

### Page Structure Verification

- [ ] Verify section order in `src/index.njk`:
  1. Hero
  2. Problem (new)
  3. Comparison (new)
  4. Positioning (may merge with comparison or remove)
  5. Methodology
  6. Services
  7. Credibility (new)
  8. CTA

- [ ] Run `npm run build` — confirm no errors
- [ ] Run `npm run preview` — verify all new sections display correctly
- [ ] Test responsive behavior at mobile, tablet, desktop breakpoints

### Stage 2 Commit

- [ ] Commit all changes with message: `feat: Add problem, comparison, and credibility sections; update hero visual`

---

> **STOP:** Do not proceed to Stage 3 until all Stage 2 tasks are complete and committed.

---

## Stage 3: Polish & Refinement

Micro-interactions, performance, accessibility, and cross-browser testing.

### CSS Cleanup

- [ ] Remove unused CSS (light mode toggle styles if not using)
- [ ] Remove accent picker styles (or ensure hidden in production)
- [ ] Audit CSS custom properties — remove unused variables
- [ ] Verify all colors meet contrast requirements (WCAG AA)

### Motion & Interaction

- [ ] Verify scroll animations respect `prefers-reduced-motion`
- [ ] Test all hover states on interactive elements
- [ ] Verify focus states are visible (copper outline)
- [ ] Test keyboard navigation through all interactive elements

### Performance

- [ ] Run Lighthouse audit — target scores:
  - [ ] Performance: 90+
  - [ ] Accessibility: 100
  - [ ] Best Practices: 90+
  - [ ] SEO: 90+
- [ ] Verify total page weight < 500KB (excluding fonts)
- [ ] Check font loading (no FOUT/FOIT issues)
- [ ] Verify images are optimized (if any added)

### Accessibility Audit

- [ ] Test with keyboard only — all interactive elements reachable
- [ ] Verify skip link works correctly
- [ ] Check heading hierarchy (h1 → h2 → h3, no skips)
- [ ] Verify all images have alt text (or aria-hidden if decorative)
- [ ] Test color contrast with automated tool
- [ ] Verify focus is never trapped

### Cross-Browser Testing

- [ ] Test in Chrome (latest)
- [ ] Test in Firefox (latest)
- [ ] Test in Safari (latest)
- [ ] Test on iOS Safari (mobile)
- [ ] Test on Android Chrome (mobile)

### Content Review

- [ ] Proofread all copy for typos
- [ ] Verify no placeholder text remains
- [ ] Check all links work (mailto, nav anchors)
- [ ] Verify copyright year is current

### Stage 3 Commit

- [ ] Commit all changes with message: `polish: Accessibility, performance, and cross-browser fixes`

---

> **STOP:** Do not proceed to Stage 4 until all Stage 3 tasks are complete and committed.

---

## Stage 4: Blog & Expansion

Blog functionality and future-proofing.

### Blog Styling

- [ ] Review blog listing page (`src/blog/index.njk`)
  - [ ] Verify styling matches site design
  - [ ] Test with multiple posts

- [ ] Review blog post template (`src/_includes/layouts/post.njk`)
  - [ ] Verify typography for long-form content
  - [ ] Test code blocks, blockquotes, lists
  - [ ] Verify back link works

- [ ] Add first real blog post
  - [ ] Migrate "Sin of the Prototype" from `docs/article-drafts/`
  - [ ] Format for 11ty (frontmatter, markdown)
  - [ ] Verify it renders correctly

### Navigation Updates

- [ ] Verify header nav includes Blog link
- [ ] Verify footer nav includes Blog link
- [ ] Test navigation works from all pages

### Final Review

- [ ] Full site walkthrough — desktop
- [ ] Full site walkthrough — mobile
- [ ] Verify all pages load without errors
- [ ] Check browser console for JavaScript errors
- [ ] Verify no 404s in network tab

### Documentation

- [ ] Update README.md if needed
- [ ] Verify CLAUDE.md is accurate for current structure
- [ ] Remove or archive completed task lists

### Stage 4 Commit

- [ ] Commit all changes with message: `feat: Blog styling and first post`

---

## Post-Launch (Future)

Tasks for after initial launch — not part of current implementation.

- [ ] Case study page template
- [ ] Individual case study pages (when content ready)
- [ ] About/team page
- [ ] Contact form (if moving beyond mailto)
- [ ] Analytics integration
- [ ] RSS feed for blog
- [ ] Social meta images (OG images)

---

## Progress Tracking

| Stage | Status | Commit Hash |
|-------|--------|-------------|
| Stage 1: Content & Copy | Not Started | — |
| Stage 2: Layout & Sections | Not Started | — |
| Stage 3: Polish | Not Started | — |
| Stage 4: Blog & Expansion | Not Started | — |
