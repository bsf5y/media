# Landing Page Repositioning — AI Integration for Businesses

**Date:** 2026-04-17
**Scope:** Homepage (`landing-page/src/_data/home.json` and related partials)
**Goal:** Reposition the landing page so BSF5Y's ability to deliver AI integration projects for businesses sits alongside "products for founders" as a co-equal audience, without breaking the existing brand voice or the "Products, Not Prototypes" thesis.

## Context

The current homepage is laser-focused on early-stage founders building new products. BSF5Y's internal documentation (`docs/thought-bites/one-day-workshop-in-ai-design.md`, `docs/thought-bites/service-ideas.md`, `docs/engagement-model.md`) describes AI integration work for businesses across the AI adoption curve — from AI-native products, to AI features in existing software, to AI-augmented operations. None of that reaches the homepage today.

The existing "AI-Driven Development" service card (`services[4]`) also violates the voice rules in `docs/messaging-design.md` (*"most important paradigm shift… capitalize on these new technologies"* is the kind of startup hype the voice guide explicitly bans).

## Strategic Approach

**Single thesis, AI as the amplifier.** The "products, not prototypes" logic extends almost verbatim to AI: *bolt-on AI traps value in prompts and demos; integrated AI captures it in systems that outlast any single vendor, model, or demo.* The homepage reinforces one mental model twice — once for products, once for AI — rather than introducing a competing narrative.

**Audience framing.** The hero explicitly names both audiences: "founders building a new product" and "businesses wanting to integrate AI technology." Every subsequent section serves both without requiring a split navigation or a "for SMBs →" second track.

---

## Section 1 — Hero

**Unchanged:** tagline (`Products, Not Prototypes.`), Robert Martin reframe quote.

**Lead — one-word edit:**

> The **software** industry has it backwards. Cutting corners on your product isn't saving money—it's borrowing against the rework that you'll pay for later, with interest.

Change: `startup` → `software`. Widens the door for non-startup readers without losing the metaphor.

**Subtext — rewrite:**

> For founders building a new product — and for businesses wanting to integrate AI technology — BSF5Y is the engineering partner that builds it to last.
>
> When investors audit your tech, it holds up. When your AI pilot meets real customers, it doesn't collapse. When you pivot, you don't start over.

Names both audiences in one sentence. Keeps the three-beat "when X… when Y… when Z" cadence of the current copy; swaps one beat (hiring engineers → AI pilot survives production) to signal the expanded remit.

## Section 2 — Positioning

**Unchanged first paragraph:**

> The difference between a product and a prototype isn't polish or features — it's where the value lives. Prototypes trap business logic in the UI. Products capture it in portable software any interface can use.

**Added second paragraph:**

> The same difference shows up in AI. Bolt-ons trap value in prompts and demos. Integrations capture it in systems that outlast any single vendor, model, or demo.

Preserves the thesis statement verbatim, then applies its structure to AI so the AI pitch reads as the natural continuation of the existing brand logic.

## Section 3 — Comparison

**No change.** The existing prototype/product comparison carries the founder/product narrative and works. The AI-parallel comparison lives in Section 4 so each block stays focused on one thesis, and the reader sees the same visual pattern twice.

## Section 4 — "AI, Done Right" (new section, between Comparison and Methodology)

**Label:** `The AI Question`

**Headline:** `AI pilots fail for the same reason prototypes do.`

**Intro paragraph:**

> Models change monthly. Vendors ship demos. What doesn't change is the work between a demo that impresses and a system that survives production. That work is engineering.

**Comparison block** (same visual treatment as the existing prototype/product comparison):

| Bolt-on AI                            | Integrated AI                       |
| ------------------------------------- | ----------------------------------- |
| Value lives in the prompt             | Value lives in your system          |
| Breaks when the model changes         | Swap models without rewriting       |
| Every new vendor is a new rebuild     | Portable across vendors             |
| Nobody on the team knows why it works | Documented, tested, auditable       |
| Your data is the vendor's data        | Your data stays yours               |

Each line maps directly to a parallel line in the prototype/product list, and each addresses a real concern businesses have when adopting AI: model churn, vendor lock-in, knowledge silos, compliance, data privacy.

**Closer:**

> Whether you're building with AI or adopting it, the discipline is the same.

Handoff line that re-unifies the two audiences right before the shared methodology.

## Section 5 — Methodology

Three small language edits. Phases 01 (Discovery) and 05 (Enduring Partnership) unchanged.

**Phase 02 — Differentiation:** replace the closing sentence.

- Before: `This is your product's core, so it's your solution's core too.`
- After: `This is your core — whether you're building a product or integrating AI into one you already run. Everything else is infrastructure.`

**Phase 03 — Infrastructure:** replace the example list.

- Before: `Web UIs, mobile apps, signup, authentication, shopping carts, payments, etc.`
- After: `Web UIs, mobile apps, signup, authentication, payments, model hosting, vector search, etc.`

**Phase 04 — Execution:** insert one sentence into the middle of the description.

- Before: `We deliver production-ready engineering solutions with exhaustive test coverage, clean architecture, and comprehensive documentation. A complete solution that can be handed to any future team with confidence.`
- After: `We deliver production-ready engineering solutions with exhaustive test coverage, clean architecture, and comprehensive documentation. Where AI is involved, that includes the evaluations and guardrails that separate a demo from a production system. A complete solution that can be handed to any future team with confidence.`

## Section 6 — Services

**Change 1 — Replace services[4] entirely.** The existing "AI-Driven Development" card violates voice and is redundant with services[3]. New card:

```
Type:        "AI Integration"
Title:       "Production AI Systems"
Description: "We integrate AI into your product — or the business you already
              run — with the engineering discipline that separates a demo
              from a production system. Evaluations, guardrails, and
              vendor-portable architecture, so your AI survives the next
              model, the next vendor, and the next compliance review."
```

**Change 2 — Small edit to services[5] (Enterprise Architecture).**

- Before: `Connect your existing systems with modern technology to reveal insights and advantages you didn't know you had.`
- After: `Connect your existing systems — data, workflows, and modern AI capabilities — to reveal advantages already sitting in your business.`

**Change 3 — Reorder the services grid:**

1. Fractional CTO (unchanged)
2. Product Development (unchanged)
3. **AI Integration** ← elevated from old position 5
4. Enterprise Architecture (Change 2 applied)
5. Team Building (unchanged)
6. Training & Coaching (unchanged — already lists AI-Driven Development in its pipeline)

Places the two "we build for you" offerings adjacent and above the fold of the service grid.

---

## Files to Edit

All content edits live in one file: `landing-page/src/_data/home.json`.

A new homepage section will require:

- A new partial at `landing-page/src/_includes/partials/ai-question.njk` (or similar name), mirroring the structure of `partials/comparison.njk`.
- A new `ai` (or `aiQuestion`) block in `home.json` carrying the label, headline, intro, comparison items, and closer.
- Inclusion of the new partial in `src/index.njk`, placed between `{% include "partials/comparison.njk" %}` and `{% include "partials/methodology.njk" %}`.

Styling should reuse the existing comparison-block CSS in `src/assets/css/main.css` so the AI comparison visually rhymes with the prototype/product comparison without requiring new design tokens.

## Out of Scope

- Blog posts, article ideas, or the one-day workshop promotion (those are separate surfaces with their own editorial plans).
- Hero visual (blueprint vs. terminal) — no change.
- Navigation, footer, CTA — no change.
- Color, typography, or layout system — no change.
- Site metadata (`site.json`) — no change to `description` or `tagline`.

## Success Criteria

- A reader who arrives with "I run a business and want to integrate AI" sees themselves named in the hero's first sentence and finds a dedicated section explaining the BSF5Y approach to AI integration before they reach the services grid.
- A reader who arrives as an early-stage founder still reads the same "Products, Not Prototypes" thesis on the same structural path — the AI content extends the thesis rather than competing with it.
- The word "leverage" does not appear. No new instances of "capitalize," "revolutionize," or "game-changing." The voice guide in `docs/messaging-design.md` remains honored.
- No new visual primitives required — the AI comparison block reuses the existing comparison treatment.

## Open Questions for Implementation Plan

- Final name of the new partial and the JSON block (`aiQuestion` vs. `ai` vs. something else).
- Whether the AI comparison block should use the exact same CSS class as the existing comparison, or get a modifier class (`comparison--ai`) for subtle differentiation (e.g., tag color).
- Whether to add a single supporting credibility beat for AI integration to the existing credibility bar (`8-figure projects delivered`, etc.) — not proposed in this spec, but worth a quick decision before build.
