---
theme: ./
title: slidev-theme-bsf5y
info: |
  Refined Industrial Blueprint — a Slidev theme port of
  The Bootstrap Factory's design system.
class: cover
layout: cover
eyebrow: The Bootstrap Factory
footnote: bsf5y.com · Champaign–Urbana
---

# Products, <span class="accent">Not Prototypes</span>

Engineering discipline for early-stage founders.

<div class="pt-8">
  <span @click="$slidev.nav.next" class="px-3 py-2 rounded cursor-pointer inline-flex items-center gap-2" style="font-family: var(--bsf-font-mono); font-size: 0.875rem; color: var(--bsf-accent-cool); border: 1px dashed currentColor;">
    Press <kbd>space</kbd> to advance <div class="i-carbon:arrow-right inline-block"/>
  </span>
</div>

---
layout: intro
eyebrow: 01 — Premise
---

# Go well to go fast.

Velocity is the *output* of engineering discipline — not the input. Founders who skip the foundations pay back the loan with interest, usually right when traction arrives.

---

###### What this theme is

# Refined Industrial Blueprint

A dark-first design system with warm copper accents, technical mono labels, and editorial serif quotes. Built for technical talks where the content needs to look as deliberate as it sounds.

- **Outfit** — geometric display for headlines
- **JetBrains Mono** — technical labels, code, eyebrows
- **Source Serif 4** — editorial quotes and emphasis
- **Copper + steel** — warm action, cool structure

---
layout: section
number: 2
eyebrow: Foundations
---

# What you get out of the box

---

###### Component coverage

# Layouts

| Layout | Purpose |
| --- | --- |
| `cover` | Title slide with optional `eyebrow` and `footnote` props |
| `intro` | Section-opening slide with `eyebrow` |
| `section` | Numbered transition slide |
| `quote` | Serif testimonial with `author` / `role` props |
| `default` | Body content — headings, lists, code, tables |
| `center` | Centered single-message slide |

Every layout reads correctly in both light and dark mode — toggle from the nav bar.

---

###### Code

# Highlighted with Shiki

```ts
interface Engagement {
  founder: string
  stage: 'discovery' | 'build' | 'handoff'
  product: Product
}

function ship(engagement: Engagement): Product {
  // The work is the product, not the prototype.
  return engagement.product
}
```

Inline code looks like `--slidev-theme-primary` — copper on a surface tint, mono in copper because *type carries meaning*.

---
layout: quote
author: The Bootstrap Factory
role: Engagement Doctrine
---

The first commit is a contract with future-you. Write it like you mean it.

---
layout: center
class: text-center
---

###### Learn more

# `bsf5y.com`

[Style guide](https://bsf5y.com/style-guide/) · [GitHub](https://github.com/wcravens/bsf5y-media)
