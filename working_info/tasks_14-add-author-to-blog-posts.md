# Tasks: Add Author to Blog Posts (Issue #14)

## Stage 1: Add author frontmatter to all blog posts
- [ ] Add `author: Wes Cravens` to `sin-of-the-prototype.md` frontmatter

## Stage 2: Display author on individual post pages and blog listing
- [ ] Update `post.njk` to show author on the same line as the date with middot separator
- [ ] Update `blog/index.njk` to show author on the same line as the date in post cards

## Stage 3: CSS styling
- [ ] Add `.post-author` styles for post pages (mono font, muted color, uppercase)
- [ ] Add author styles for the blog listing page

## Stage 4: Build verification and documentation
- [ ] Run `npm run build` to verify no errors
- [ ] Start dev server and visually verify author displays correctly
- [ ] Update CLAUDE.md to note `author` as expected frontmatter field
