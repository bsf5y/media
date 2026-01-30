# Plan: Mobile Navigation for Header

**Issue:** #5 - Can't navigate to the blog from the header nav on small screens

## Problem

The current CSS hides all nav links except `.nav-cta` on screens ≤768px:

```css
@media (max-width: 768px) {
  .nav a:not(.nav-cta) {
    display: none;
  }
}
```

This makes Blog, Approach, and Services links inaccessible on mobile devices.

## Solution

Implement a CSS-only hamburger menu with a small JS enhancement for close-on-click behavior.

### Approach: CSS Checkbox Hack

A hidden `<input type="checkbox">` paired with a `<label>` (hamburger icon) creates a pure-CSS toggle. When checked, sibling selectors reveal the mobile nav dropdown.

**Benefits:**
- Zero additional JS for core functionality (aligns with minimal JS philosophy)
- Works without JavaScript loaded
- Simple, fewer moving parts
- Hamburger menus are a well-understood pattern

## Implementation Details

### 1. HTML Changes (`src/_includes/partials/header.njk`)

Add hidden checkbox and hamburger label before the nav element:

```html
<header class="site-header">
  <div class="container">
    <a href="/" class="logo">...</a>

    <!-- Hidden checkbox for toggle state -->
    <input type="checkbox" id="nav-toggle" class="nav-toggle-checkbox" />
    <label for="nav-toggle" class="nav-toggle" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </label>

    <nav class="nav" aria-label="Primary">
      <!-- Existing nav links unchanged -->
    </nav>
  </div>
</header>
```

### 2. CSS Changes (`src/assets/css/main.css`)

#### Hidden Checkbox (Accessible)

```css
.nav-toggle-checkbox {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
```

#### Hamburger Icon (Hidden on Desktop)

```css
.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  z-index: 101;
}

.nav-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  transition: transform 0.3s, opacity 0.3s;
}
```

#### Mobile Styles

```css
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--color-bg-deep);
    padding: var(--space-lg);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s, opacity 0.3s;
  }

  .nav-toggle-checkbox:checked ~ .nav {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nav a {
    display: block;
    padding: var(--space-md);
  }
}
```

#### Hamburger → X Animation

```css
.nav-toggle-checkbox:checked ~ .nav-toggle span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.nav-toggle-checkbox:checked ~ .nav-toggle span:nth-child(2) {
  opacity: 0;
}

.nav-toggle-checkbox:checked ~ .nav-toggle span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}
```

### 3. JavaScript Changes (`src/assets/js/main.js`)

Close menu when any nav link is clicked:

```javascript
/* ============================================
   Mobile Nav Close on Link Click
   ============================================ */

const navToggleCheckbox = document.getElementById('nav-toggle')
const navLinks = document.querySelectorAll('.nav a')

if (navToggleCheckbox) {
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggleCheckbox.checked = false
    })
  })
}
```

## Files Modified

| File | Change |
|------|--------|
| `src/_includes/partials/header.njk` | Add checkbox + hamburger label |
| `src/assets/css/main.css` | Add hamburger styles, mobile nav dropdown, X animation |
| `src/assets/js/main.js` | Add close-on-click behavior |

## Behavior Summary

- **Desktop (>768px):** No visible change - hamburger hidden, nav displays normally
- **Mobile (≤768px):** Hamburger icon visible, nav hidden by default, tapping hamburger reveals dropdown with all 4 nav items, tapping X or any link closes menu

## Accessibility

- Label has `aria-label="Toggle navigation"`
- Checkbox is visually hidden but remains focusable for keyboard users
- Pressing Enter/Space on focused label toggles the menu
- Uses existing color variables that adapt to light/dark mode

## No Changes Needed

- `src/_data/site.json` - Nav data unchanged
- Any other templates or pages
