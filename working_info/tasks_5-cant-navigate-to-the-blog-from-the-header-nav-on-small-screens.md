# Tasks: Mobile Navigation for Header

**Issue:** #5 - Can't navigate to the blog from the header nav on small screens

## Stage 1: HTML Structure
- [x] Add hidden checkbox input to `header.njk`
- [x] Add hamburger label with three span elements
- [x] Ensure proper placement before nav element

## Stage 2: CSS - Hamburger Icon
- [x] Add `.nav-toggle-checkbox` hidden styles
- [x] Add `.nav-toggle` hamburger icon styles (hidden on desktop)
- [x] Add `.nav-toggle span` bar styles with transitions

## Stage 3: CSS - Mobile Nav Dropdown
- [x] Add mobile media query styles for `.nav-toggle` visibility
- [x] Add mobile `.nav` positioning and hidden state
- [x] Add checked state selector to reveal nav
- [x] Update `.nav a` to display block and add tap-friendly padding
- [x] Remove or update the existing hiding rule for non-CTA links

## Stage 4: CSS - Hamburger Animation
- [x] Add transform for first span (rotate to form X)
- [x] Add opacity for middle span (fade out)
- [x] Add transform for third span (rotate to form X)

## Stage 5: JavaScript Enhancement
- [x] Add close-on-click behavior for nav links

## Stage 6: Testing & Polish
- [ ] Test hamburger toggle on mobile viewport
- [ ] Test nav dropdown appears with all 4 links
- [ ] Test close-on-click for same-page anchors
- [ ] Test Blog link navigates correctly
- [ ] Test light mode styling
- [ ] Test dark mode styling
- [ ] Test keyboard accessibility (Tab, Enter/Space)
- [ ] Verify desktop nav unchanged
