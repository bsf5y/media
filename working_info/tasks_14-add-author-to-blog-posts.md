# Tasks: Add Author to Blog Posts (Issue #14)

## Stage 1: Add author frontmatter to all blog posts
- [x] Add `author: Wes Cravens` to `sin-of-the-prototype.md` frontmatter

## Stage 2: Display author on individual post pages and blog listing
- [x] Update `post.njk` to show author on the same line as the date with middot separator
- [x] Update `blog/index.njk` to show author on the same line as the date in post cards

## Stage 3: CSS styling
- [x] Add `.post-meta` and `.post-author` styles for post pages (mono font, muted color, uppercase)
- [x] Add `.post-meta` and `.post-author` styles for the blog listing page

## Stage 4: Build verification and documentation
- [x] Run `npm run build` to verify no errors
- [x] Start dev server and visually verify author displays correctly
- [x] Update CLAUDE.md to note `author` as expected frontmatter field
