# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

bsf5y-media is the media and web presence repository for **The Bootstrap Factory**, a Champaign-Urbana technology consultancy helping early-stage founders build production-ready products. The repo contains a static landing page with blog and strategic/marketing documentation.

## Workflow

All work efforts start with a GitHub Issue and a corresponding feature branch.

### Steps

1. **Create Branch** - Create the feature branch (named `ISSUE_NUMBER-ISSUE_TITLE`).
   - Use `gh issue develop #N` to create and link the branch to the issue (without `--checkout`).
2. **Setup Worktree** - Create a git worktree for isolated development.
   - Use `git worktree add .worktrees/<branch-name> origin/<branch-name>`
   - All subsequent work happens in the worktree directory.
3. **Plan** - Read the issue requirements and brainstorm an implementation plan with the user
   using interview techniques for clarification. Write the plan to `working_info/plan_<branch-name>.md`.
4. **Review** - Ask the user for final approval before proceeding.
   - Commit the plan file before creating the task list.
5. **Task List** - Create a task list with logical development stages. Write it to
   `working_info/tasks_<branch-name>.md`.
   - Commit the task file before executing tasks.
6. **Implement** - Work on the first incomplete stage.
   - Keep the tasks file updated as tasks are completed (using the markdown checkboxes)
7. **Test** - Ensure complete test coverage and all tests pass for the stage.
8. **Commit & Push** - Commit the stage changes and push to origin.
   - Each stage must be committed before proceeding to the next.
9. **Repeat** steps 6-8 until all tasks are complete.
10. **Integration Test** - Run full project integration tests.
11. **Pull Request** - If all tests pass, open a PR. Include lessons learned and noteworthy
    implementation details to help reviewers.
12. **Code Review** - Launch sub-agent in worktree and ask them to code review
    the PR. A possible prompt: `Act as a senior web developer and software
    architect. Review PR #NN and update PR with review as a comment.` Note: GitHub
    PRs can not be marked as approved, only commented on.
13. **Implement Suggestions from the Review** - Read the code review in the PR and implement any issues or suggestions that were identified.
14. **Repeat** steps 12 and 13 until code review has no more issues.
15. **Merge** - Use merge commit without squash to preserve stage history:
    `gh pr merge -m #NN`
16. **Cleanup** - Remove the worktree, local branch and remote branch:
    - `git worktree remove .worktrees/<branch-name>`
    - `git branch -d <branch-name>`
    - `git push origin :<branch-name>`

## Repository Structure

- `landing-page/` — Production landing page and blog (Eleventy + Nunjucks)
- `docs/` — Strategic messaging, engagement model, service descriptions, brand materials, article ideas
- `working_info/` — Workflow plans and task tracking files for active/completed issues

## Build & Development Commands

All commands run from `landing-page/`:

```bash
cd landing-page
npm install          # Install dependencies
npm run dev          # Start Eleventy dev server with live reload
npm run build        # Production build (output to dist/)
npm run clean        # Remove dist/ directory
```

No test runner or linter is configured.

## Architecture

### Static Site Generator

The site is built with **Eleventy (11ty) v3** using Nunjucks templates. All content is rendered at build time — there is no client-side content injection.

### Content & Data

Landing page content is managed through structured JSON data files in `src/_data/`:

- `home.json` — All landing page section content (hero, positioning, problem, comparison, methodology, services, credibility, cta, footer)
- `site.json` — Site metadata (title, tagline, description, email, navigation)

Blog posts live in `src/blog/` as markdown files with YAML frontmatter. The Eleventy config creates a `posts` collection from `src/blog/**/*.md`.

### Template Structure

Nunjucks templates in `src/_includes/`:

- **Layouts** (`layouts/`): `base.njk` (HTML shell), `page.njk` (generic page), `post.njk` (blog post)
- **Partials** (`partials/`): `header.njk`, `hero.njk`, `positioning.njk`, `problem.njk`, `comparison.njk`, `methodology.njk`, `services.njk`, `credibility.njk`, `cta.njk`, `footer.njk`

The homepage (`src/index.njk`) composes all partials. Blog listing is at `src/blog/index.njk`.

### Frontend Stack

Vanilla JavaScript with zero framework dependencies. Key patterns:

- **Eleventy 3.x** as static site generator with Nunjucks templating
- **markdown-it** for markdown processing (blog posts, configured in `.eleventy.cjs`)
- **Theme system** — Light/dark mode toggle with localStorage persistence and OS preference detection
- **Scroll animations** via Intersection Observer with staggered entrance effects
- **Dev-only picker** (accent colors: copper/steel, hero visual: blueprint/terminal) — only visible on localhost

### Design System

CSS custom properties define the visual system in `src/assets/css/main.css`. The aesthetic is "Refined Industrial Blueprint" — dark palette with warm copper accents.

Three font families loaded from Google Fonts:
- **Outfit** — Headlines (geometric sans-serif)
- **JetBrains Mono** — Technical labels
- **Source Serif 4** — Editorial quotes

### Editing Content

- **Landing page text**: Edit `src/_data/home.json`. The JSON structure maps directly to page sections rendered by the Nunjucks partials.
- **Site metadata/navigation**: Edit `src/_data/site.json`.
- **Blog posts**: Add or edit markdown files in `src/blog/`. Each post needs YAML frontmatter with `title`, `date`, `description`, and optionally `tags`.

## Brand Voice

When writing or editing copy for this project:
- Blunt, confident, technical — not salesy or corporate
- Core message: "Products, Not Prototypes"
- Philosophy: "Go well to go fast" — engineering discipline over speed
- Teacher-focused approach; explain the "why"
- Audience: non-technical/semi-technical early-stage founders
