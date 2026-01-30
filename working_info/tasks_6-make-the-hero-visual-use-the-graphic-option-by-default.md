# Tasks: Make Hero Visual Use Blueprint by Default

## Stage 1: Update CSS Default
- [x] Change `.hero-visual-blueprint` to display by default (with position, width, height)
- [x] Remove old default from `.hero-visual-terminal`
- [x] Add `html[data-hero-visual="terminal"]` selector to show terminal variant
- [x] Update `html[data-hero-visual="blueprint"]` selector (remove or simplify since it's now default)

## Stage 2: Update JavaScript Dev Picker
- [x] Swap active class logic so blueprint is active by default
- [x] Update click handler: blueprint removes attribute, terminal sets attribute
- [x] Update localStorage logic to match new default

## Stage 3: Testing
- [x] Test fresh page load shows Blueprint visual
- [x] Test dev picker shows Blueprint as active
- [x] Test switching to Terminal works and persists
- [x] Test switching back to Blueprint works and clears localStorage
