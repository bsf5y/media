# Plan: Add Author to Blog Posts (Issue #14)

## Goal

Display the author name on blog posts — both on individual post pages and on the blog listing page.

## Current State

- `5-reasons-to-not-use-ai.md` already has `author: Wes Cravens` in frontmatter
- `sin-of-the-prototype.md` is missing the `author` field
- Neither `post.njk` nor `blog/index.njk` renders the author

## Implementation

### Stage 1: Add author frontmatter to all blog posts

- Add `author: Wes Cravens` to `sin-of-the-prototype.md` frontmatter

### Stage 2: Display author on individual post pages

- Update `post.njk` to show the author on the same line as the date
- Format: `February 6, 2026 · By Wes Cravens`
- Use a separator (middot) between date and author
- Style the author text consistently with the date (mono font, muted color, uppercase, small text)

### Stage 3: Display author on blog listing page

- Update `blog/index.njk` to show the author on each post card
- Display on the same line as the date, matching the individual post style

### Stage 4: CSS styling

- Add `.post-author` styles for the author display on post pages
- Add `.post-item .post-meta` or similar styles for the listing page author display
- Keep styling consistent with existing date treatment (JetBrains Mono, muted text, uppercase)

### Stage 5: Update documentation

- Update CLAUDE.md to note that `author` is now an expected frontmatter field for blog posts

## Design Decisions

- Author appears on the **same line as the date** with a middot separator
- Author shown on **both** individual posts and the blog listing
- Visual style matches existing date styling (mono font, muted, uppercase)
