# Theme System Design

## Overview

Add a theming system to the landing page with:
- **Light/Dark mode toggle** - Production feature in the header, respects system preferences
- **Accent color picker** - Dev-only widget for exploring color variations

## Architecture

### CSS Custom Property Overrides

Two independent axes controlled via data attributes on `<html>`:

```css
html[data-mode="light"]   /* Light background/text overrides */
html[data-mode="dark"]    /* Default, no overrides needed */

html[data-accent="copper"] /* Default, no overrides needed */
html[data-accent="steel"]  /* Blue accent overrides */
html[data-accent="forest"] /* Green accent overrides */
```

This approach requires zero changes to existing CSS selectors or HTML structure. Only color tokens get overridden; typography, spacing, and layout remain intact.

## Color Palettes

### Mode: Light vs Dark

| Token | Dark (default) | Light |
|-------|----------------|-------|
| `--color-bg-deep` | `#0a0c0f` | `#ffffff` |
| `--color-bg` | `#12151a` | `#f8f9fa` |
| `--color-bg-elevated` | `#1a1e25` | `#ffffff` |
| `--color-bg-surface` | `#232830` | `#f1f3f5` |
| `--color-text` | `#e8e6e3` | `#1a1e25` |
| `--color-text-muted` | `#a8b0ba` | `#495057` |
| `--color-text-subtle` | `#8b9199` | `#868e96` |
| `--color-border` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)` |
| `--color-border-strong` | `rgba(255,255,255,0.15)` | `rgba(0,0,0,0.15)` |

### Accent: Copper (Default)

Current warm industrial palette - no changes needed.

### Accent: Steel Blue

Cool, precise, technical feel.

| Token | Value |
|-------|-------|
| `--color-accent` | `#3b82f6` |
| `--color-accent-light` | `#60a5fa` |
| `--color-accent-glow` | `rgba(59, 130, 246, 0.15)` |
| `--color-grid` | `rgba(59, 130, 246, 0.03)` |
| `--color-grid-strong` | `rgba(59, 130, 246, 0.06)` |

### Accent: Forest Green

Organic tech, sustainable innovation feel.

| Token | Value |
|-------|-------|
| `--color-accent` | `#22c55e` |
| `--color-accent-light` | `#4ade80` |
| `--color-accent-glow` | `rgba(34, 197, 94, 0.15)` |
| `--color-grid` | `rgba(34, 197, 94, 0.03)` |
| `--color-grid-strong` | `rgba(34, 197, 94, 0.06)` |

## Components

### Header Mode Toggle (Production)

**Location:** Header nav, before the CTA button

**Behavior:**
- Detects system preference on first visit via `prefers-color-scheme`
- User can override by clicking the toggle
- Saves preference to localStorage (overrides system default on future visits)
- Icon-based: sun icon for light, moon icon for dark
- Listens for system preference changes if no localStorage override exists

**Visual:**
```
┌─────────────────────────────────────────────────┐
│  BSF5Y   Services  Methodology  [☀/☽]  [CTA]   │
└─────────────────────────────────────────────────┘
```

### Dev-Only Accent Picker (Bottom-right widget)

**Visibility:** Only when `import.meta.env.DEV === true`

**Position:** Fixed bottom-right corner, 16px from edges

**Collapsed state:** Small circular button with palette/swatches icon

**Expanded state:**
```
┌─────────────────────────┐
│  Accent          [×]    │
├─────────────────────────┤
│  [● Copper]             │
│  [○ Steel]              │
│  [○ Forest]             │
└─────────────────────────┘
```

**Behavior:**
- Radio-style selection with color swatches
- Selections apply instantly
- localStorage persists accent choice for dev convenience
- Click-outside or close button dismisses panel

**Styling:**
- Uses current theme colors (adapts to light/dark mode)
- "DEV" badge to clarify it's a development tool
- Compact layout (~200px wide)

## File Changes

### `src/styles/main.css`
- Add `html[data-mode="light"]` block with light mode overrides
- Add `html[data-accent="steel"]` block with steel blue overrides
- Add `html[data-accent="forest"]` block with forest green overrides

### `src/main.js`
- **Mode system (production):**
  - On load: check localStorage → fallback to `prefers-color-scheme` → set `data-mode`
  - Listen for system preference changes
  - Header toggle handler: swap mode, save to localStorage

- **Accent picker (dev-only):**
  - Wrapped in `if (import.meta.env.DEV)` block
  - Inject widget HTML into page
  - On load: read localStorage accent preference
  - On change: update `data-accent`, save to localStorage

### `src/index.html`
- Add mode toggle button to header nav (sun/moon icons via inline SVG)

### No changes to:
- `vite.config.js`
- `copy.md` / content system
- Build scripts

## Deliverables

- 3 accent palettes (copper default, steel, forest)
- 2 modes (dark default, light)
- 6 total combinations available in development
- Production ships with copper accent + user-selectable light/dark mode
