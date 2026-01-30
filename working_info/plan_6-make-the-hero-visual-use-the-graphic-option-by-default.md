# Plan: Make Hero Visual Use Blueprint by Default

**Issue:** #6 - Make the hero-visual use the graphic option by default

## Summary

Change the default hero visual from the "Terminal" variant (code snippet) to the "Blueprint" variant (geometric/architectural visual).

## Current Behavior

- **Default:** Terminal variant shows (code snippet aesthetic)
- **Blueprint:** Only shows when `data-hero-visual="blueprint"` is set on `<html>`
- **Dev Picker:** Allows toggling between variants, with terminal as default

## Desired Behavior

- **Default:** Blueprint variant shows (geometric aesthetic)
- **Terminal:** Only shows when `data-hero-visual="terminal"` is set on `<html>`
- **Dev Picker:** Allows toggling between variants, with blueprint as default

## Files to Modify

1. **`landing-page/src/assets/css/main.css`**
   - Change CSS to show `.hero-visual-blueprint` by default
   - Add selector for `html[data-hero-visual="terminal"]` to show terminal variant
   - Update `html[data-hero-visual="blueprint"]` selector to be the default

2. **`landing-page/src/assets/js/main.js`**
   - Swap the dev picker logic so blueprint is default (no attribute needed)
   - Terminal now requires `data-hero-visual="terminal"` attribute

## Implementation Details

### CSS Changes (main.css ~lines 459-475)

**Before:**
```css
.hero-visual-terminal,
.hero-visual-blueprint {
  display: none;
}

/* Default: show terminal variant */
.hero-visual-terminal {
  display: block;
}

/* When blueprint variant is active */
html[data-hero-visual="blueprint"] .hero-visual-terminal {
  display: none;
}

html[data-hero-visual="blueprint"] .hero-visual-blueprint {
  display: block;
  ...
}
```

**After:**
```css
.hero-visual-terminal,
.hero-visual-blueprint {
  display: none;
}

/* Default: show blueprint variant */
.hero-visual-blueprint {
  display: block;
  position: relative;
  width: 100%;
  height: 400px;
}

/* When terminal variant is active */
html[data-hero-visual="terminal"] .hero-visual-blueprint {
  display: none;
}

html[data-hero-visual="terminal"] .hero-visual-terminal {
  display: block;
}
```

### JS Changes (main.js ~lines 69-180)

Update the dev picker logic:
- Blueprint button active when no attribute or `blueprint` attribute
- Terminal button active only when `terminal` attribute is set
- Clicking blueprint removes the attribute (it's the default)
- Clicking terminal sets `data-hero-visual="terminal"`

## Testing

1. Fresh page load (no localStorage) should show Blueprint visual
2. Dev picker should show Blueprint as active by default
3. Selecting Terminal should show Terminal visual and persist to localStorage
4. Selecting Blueprint should show Blueprint visual and clear localStorage
5. Page reload after selecting Terminal should maintain Terminal selection

## Risk Assessment

**Low risk** - This is a CSS/JS display toggle change only. No content, layout, or functionality changes beyond the default visual variant.
