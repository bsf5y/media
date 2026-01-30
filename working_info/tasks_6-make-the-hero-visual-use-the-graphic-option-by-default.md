# Tasks: Make Hero Visual Use Blueprint by Default

## Stage 1: Update CSS Default
- [ ] Change `.hero-visual-blueprint` to display by default (with position, width, height)
- [ ] Remove old default from `.hero-visual-terminal`
- [ ] Add `html[data-hero-visual="terminal"]` selector to show terminal variant
- [ ] Update `html[data-hero-visual="blueprint"]` selector (remove or simplify since it's now default)

## Stage 2: Update JavaScript Dev Picker
- [ ] Swap active class logic so blueprint is active by default
- [ ] Update click handler: blueprint removes attribute, terminal sets attribute
- [ ] Update localStorage logic to match new default

## Stage 3: Testing
- [ ] Test fresh page load shows Blueprint visual
- [ ] Test dev picker shows Blueprint as active
- [ ] Test switching to Terminal works and persists
- [ ] Test switching back to Blueprint works and clears localStorage
