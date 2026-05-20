---
theme: ../../slidev-theme
title: Intro to Using Frontier AI Models
info: |
  An introduction to using frontier AI models
class: cover
layout: cover
eyebrow: 
footnote: 
include-logo: true
---

# Intro to Using <br><span class="accent">Frontier AI Models</span>

A gently technical overview of AI tooling.

---
layout: intro 
eyebrow: Why?
---

# With great power... comes...

Generative AI tools act as an on-demand collaborator that amplifies output.  It's important to
understand the fundamentals of how these tools work so that patterns and practices can be
centralized for the greater good of the Enterprise.

---
layout: intro 
eyebrow: Who?
---

# Democratization and<br>Early Adoption

Thanks to all for participating in the Claude trial.  Now comes the responsibility.<br><br>
Enterprise AI adoption typically begins with a small group of early adopters—often technical teams or curious individuals—experimenting with tools to solve specific problems, which then sparks broader interest across the organization. As successes become visible and tools become more accessible, usage democratizes outward to non-technical employees, transforming AI from a specialized capability into a shared resource available to anyone who can benefit from it.

---
layout: intro 
eyebrow: What?
---

# How do these tools work? 

We'll explore how generative AI tooling works from the ground up.  It's important to understand
how these systems are built so that you can function as good advisors and customers to those who
will be building enterprise wide tooling.

---
layout: default
eyebrow: Placeholder eyebrow
---

## Body slide heading

A default body slide. Fill in the actual content here.

- Bullet one
- Bullet two
- Bullet three

---
eyebrow: Code example
---

# Highlighted with Shiki

```ts
// Replace with a real example.
interface Prompt {
  system: string
  user: string
}

function call(model: string, prompt: Prompt): Promise<string> {
  return fetch(`/v1/${model}`, { method: 'POST', body: JSON.stringify(prompt) })
    .then((r) => r.text())
}
```

Inline code looks like `--slidev-theme-primary`.

---
layout: quote
author: Placeholder Attribution
role: Title / Source
---

A serif pull-quote slide. Replace with a real testimonial, finding, or memorable line.

---
layout: center
class: text-center
eyebrow: Next steps
---

# `bsf5y.com`

Replace this closing slide with a real call-to-action.
