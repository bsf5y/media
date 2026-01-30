# Tasks: Mobile Navigation for Header

**Issue:** #5 - Can't navigate to the blog from the header nav on small screens

## Stage 1: HTML Structure
- [ ] Add hidden checkbox input to `header.njk`
- [ ] Add hamburger label with three span elements
- [ ] Ensure proper placement before nav element

## Stage 2: CSS - Hamburger Icon
- [ ] Add `.nav-toggle-checkbox` hidden styles
- [ ] Add `.nav-toggle` hamburger icon styles (hidden on desktop)
- [ ] Add `.nav-toggle span` bar styles with transitions

## Stage 3: CSS - Mobile Nav Dropdown
- [ ] Add mobile media query styles for `.nav-toggle` visibility
- [ ] Add mobile `.nav` positioning and hidden state
- [ ] Add checked state selector to reveal nav
- [ ] Update `.nav a` to display block and add tap-friendly padding
- [ ] Remove or update the existing hiding rule for non-CTA links

## Stage 4: CSS - Hamburger Animation
- [ ] Add transform for first span (rotate to form X)
- [ ] Add opacity for middle span (fade out)
- [ ] Add transform for third span (rotate to form X)

## Stage 5: JavaScript Enhancement
- [ ] Add close-on-click behavior for nav links

## Stage 6: Testing & Polish
- [ ] Test hamburger toggle on mobile viewport
- [ ] Test nav dropdown appears with all 4 links
- [ ] Test close-on-click for same-page anchors
- [ ] Test Blog link navigates correctly
- [ ] Test light mode styling
- [ ] Test dark mode styling
- [ ] Test keyboard accessibility (Tab, Enter/Space)
- [ ] Verify desktop nav unchanged
