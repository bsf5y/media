---
title: "The Three T's: The Missing Foundation of Product Engineering"
description: "Tractability, transparency, and traceability — the minimum viable discipline behind everything else."
date: 2026-04-18T12:00:00
author: Wes Cravens
---

## The Problem No One Talks About

You hired a team. They're building. But three months in, you can't answer basic
questions: What's done? What changed? Why was that decision made? You ask, and you
get a meeting instead of a link. That's not a people problem. It's a structural one.

Most engineering teams run on talent and good intentions. That works until it
doesn't — until someone leaves, a deadline slips with no warning, or an investor
asks how your system works and nobody can point to a clear answer. Without certain
foundational practices in place, no amount of talent will save a project from
becoming opaque, fragile, and expensive to change.

The Three T's — **Tractability**, **Transparency**, and **Traceability** — are those
foundational practices. They aren't a complete theory of engineering management. They
are the minimum viable discipline that makes everything else possible:
accountability, scheduling, hiring, risk management. Without the Three T's, those
higher-order practices are theater. They look professional, but there's nothing
underneath.

---

## The Framework at a Glance

**Tractability** is honest scope: classifying work as development or research,
keeping tasks small enough that problems surface early, and either decomposing or
running a time-boxed spike when work resists short scope.

**Transparency** is structural visibility: every piece of work begins with a written
brief, progress is recorded as it happens, and decisions are not real until captured
in a durable artifact.

**Traceability** is the ability to follow any thread — forward or backward — through
decisions, changes, and artifacts, so anyone can answer why a choice was made or what
drove a design.

The sections that follow unpack each pillar in detail.

---

## Tractability

Tractability — used here in the project-management sense, not the computational
one — means honest scope. It is the discipline of understanding the limits of what is
being taken on before committing to it.

### Development vs. Research

There is a fundamental difference between a development project and a research
project. Development executes against known capabilities — the team understands the
domain, the tooling, and the approach. Timelines mean something because the unknowns
are manageable.

Research has unknown outcomes by definition. Novel capabilities may need to be
developed. Committing to fixed delivery dates against unknown outcomes sets teams up
to fail — or worse, to quietly misrepresent progress so nobody has to deliver bad
news.

Picture a team committing to a six-week timeline for integrating a third-party Machine Learning
service. Week four, they discover the vendor's API doesn't expose what the design assumed. The
timeline was never real — it was a guess dressed up as a plan because nobody classified the
integration as research and pressure-tested the unknowns first. This pattern is common, and it is
almost always a tractability failure upstream, not an execution failure downstream.

Most technical projects contain both kinds of work, and that's fine. The discipline
is classifying them honestly and governing each accordingly. When your dev partner
treats everything like development and hands you a confident timeline for work nobody
has done before, they are either being dishonest or they don't know the difference.
Neither is good.

### Small Scope Is an Early Warning System

Individual tasks should be scoped to a couple of days, max. This is not primarily
about estimation accuracy or productivity metrics. It is about **minimizing the time
between a problem occurring and a problem being detected**.

A two-day task that goes wrong surfaces in two days. A three-week task that goes
wrong might not surface until week two, by which point significant work has been
built on a flawed foundation. Small scope is how you find out about problems while
they're still cheap to fix.

<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" style="width: 100%; margin: 4rem auto; display: block;">
  <style>.label { font-family: 'JetBrains Mono', monospace; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 500; } .axis { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 500; fill: #8b9199; } .callout { font-family: 'JetBrains Mono', monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 500; } .label-cheap { fill: #8b9199; } .label-valuable { fill: #d97706; } .text-main { fill: #e8e6e3; } .bar-short { fill: #1a1e25; stroke: #d97706; stroke-width: 2; } .bar-long { fill: #2a1d15; stroke: rgba(217,119,6,0.35); stroke-width: 1.5; } .bar-planned { fill: none; stroke: rgba(255,255,255,0.15); stroke-width: 1.5; stroke-dasharray: 4 4; } .marker { fill: #d97706; } .axis-line { stroke: rgba(255,255,255,0.2); stroke-width: 1; }</style>
  <text x="350" y="35" text-anchor="middle" class="label label-valuable">Time From Flaw To Detection</text>
  <text x="30" y="100" class="label text-main">2-day task</text>
  <rect x="150" y="80" width="47" height="30" rx="4" class="bar-short"/>
  <circle cx="197" cy="95" r="6" class="marker"/>
  <text x="212" y="100" class="callout label-valuable">Detected — cheap to fix</text>
  <text x="30" y="180" class="label text-main">3-week task</text>
  <rect x="150" y="160" width="326" height="30" rx="4" class="bar-long"/>
  <rect x="476" y="160" width="164" height="30" rx="4" class="bar-planned"/>
  <circle cx="476" cy="175" r="6" class="marker"/>
  <text x="491" y="155" class="callout label-valuable">Detected</text>
  <text x="313" y="212" text-anchor="middle" class="callout label-cheap">2 weeks built on a flawed foundation</text>
  <line x1="150" y1="250" x2="640" y2="250" class="axis-line"/>
  <line x1="150" y1="245" x2="150" y2="255" class="axis-line"/>
  <line x1="197" y1="245" x2="197" y2="255" class="axis-line"/>
  <line x1="476" y1="245" x2="476" y2="255" class="axis-line"/>
  <line x1="640" y1="245" x2="640" y2="255" class="axis-line"/>
  <text x="150" y="272" text-anchor="middle" class="axis">Start</text>
  <text x="197" y="272" text-anchor="middle" class="axis">Day 2</text>
  <text x="476" y="272" text-anchor="middle" class="axis">Week 2</text>
  <text x="640" y="272" text-anchor="middle" class="axis">Week 3</text>
  <text x="350" y="310" text-anchor="middle" class="callout label-cheap">Small scope is an early warning system</text>
</svg>

### When Tasks Resist Short Scope

Not every piece of work naturally fits a two-day window. There are two disciplined
responses.

**Decompose into stepping stones.** When the path is known but the distance is long,
break the work into meaningful intermediate states. Each stepping stone must produce
something recognizable — a passing test, a working layer, a committed artifact — not
just time spent on a larger effort. The sub-goal doesn't need to be a completed
deliverable in its own right, but it must be a visible, verifiable step forward.

**Run a research spike.** When the path itself is unknown, decomposition is
premature. Instead, create a time-boxed research element with the explicit goal of
reducing uncertainty rather than delivering a feature. The spike returns with
information that informs planning. This is the intellectually honest response to "I
don't know how long this will take."

Together, these two options eliminate the legitimate excuse for large, open-ended
tasks. Either a task can be decomposed, or it warrants a spike first. There is no
third category where "it's just a big task" is an acceptable answer.

---

## Transparency

When we talk about transparency, we aren't referring to a personality trait — a
willingness to share information when asked. We are referring to a structural
property of the work environment. Work is transparent by default, not by virtue of
individual choice.

### Work Happens in the Open

Every piece of work starts with a brief that exists before the work begins. Progress
is visible as it happens. The outcome — success, failure, or revision — gets
recorded. The system enforces visibility rather than relying on individuals to
volunteer it. Nobody has to choose to be transparent. Opacity becomes the exception,
not the norm.

This shift from disposition to structure has an important implication:
**transparency requires tooling investment**. Organizations that claim to value
transparency but do not fund the infrastructure to support it are asking individuals
to do extra labor to compensate for missing systems. That's a recipe for burnout and
blame.

### Artifacts Are the Only Source of Truth

Decisions made in meetings, hallway conversations, or chat threads are not real until
they are captured in a durable, indexable record. This principle protects your
investment when people leave, memories fade, or teams disagree about what was
agreed.

<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" style="width: 100%; margin: 4rem auto; display: block;">
  <style>.label { font-family: 'JetBrains Mono', monospace; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 500; } .box-text { font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500; } .big-text { font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 500; letter-spacing: 0.1em; } .label-cheap { fill: #8b9199; } .label-valuable { fill: #d97706; } .box-cheap { fill: #232830; stroke: rgba(255,255,255,0.12); stroke-width: 1.5; } .box-valuable { fill: #1a1e25; stroke: #d97706; stroke-width: 2.5; } .text-main { fill: #e8e6e3; } .arrow { fill: none; stroke: #d97706; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }</style>
  <defs><filter id="artifact-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12" result="blur"/><feFlood flood-color="#d97706" flood-opacity="0.4"/><feComposite in2="blur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
  <text x="350" y="35" text-anchor="middle" class="label label-cheap">Not real until captured</text>
  <rect x="30" y="55" width="140" height="55" rx="8" class="box-cheap"/>
  <text x="100" y="89" text-anchor="middle" class="box-text text-main">Hallway</text>
  <rect x="195" y="55" width="140" height="55" rx="8" class="box-cheap"/>
  <text x="265" y="89" text-anchor="middle" class="box-text text-main">Standup</text>
  <rect x="365" y="55" width="140" height="55" rx="8" class="box-cheap"/>
  <text x="435" y="89" text-anchor="middle" class="box-text text-main">Slack</text>
  <rect x="530" y="55" width="140" height="55" rx="8" class="box-cheap"/>
  <text x="600" y="89" text-anchor="middle" class="box-text text-main">Meeting</text>
  <path d="M100 125 L100 195 M92 183 L100 195 L108 183" class="arrow"/>
  <path d="M265 125 L265 195 M257 183 L265 195 L273 183" class="arrow"/>
  <path d="M435 125 L435 195 M427 183 L435 195 L443 183" class="arrow"/>
  <path d="M600 125 L600 195 M592 183 L600 195 L608 183" class="arrow"/>
  <rect x="30" y="210" width="640" height="70" rx="10" class="box-valuable" filter="url(#artifact-glow)"/>
  <text x="350" y="253" text-anchor="middle" class="big-text text-main">Artifact</text>
  <text x="350" y="305" text-anchor="middle" class="label label-valuable">Source of truth</text>
</svg>

**It dissolves the authority of the hallway conversation.** It does not matter who
said what to whom, or what was verbally approved in a standup. None of that is real
until it is written down. This is professionally equalizing — the engineer who was
not in the room has the same access to truth as the one who was.

**It forces healthy friction.** The requirement to capture a decision before acting
on it introduces a moment of clarity. That moment catches the situations where "we
agreed to X" was actually ambiguous, half-formed, or understood differently by each
party.

**It makes organizational memory durable.** Conversational decisions evaporate when
people leave. Artifact-captured decisions survive turnover. The knowledge cost of
low-documentation cultures is largely invisible until 18 months later when a team
relitigates a decision that was already made — and there's no record of the original
reasoning.

### Human Memory Cannot Be Trusted

A key argument for artifact primacy is that human memory is unreliable in ways that
show up constantly in engineering teams. Two people leave a meeting with different
understandings of what was agreed. A decision made six months ago gets relitigated
because nobody can reconstruct the reasoning. Confident recollections conflict with
the Slack record once someone bothers to check. The people most sure of their memory
are often no more accurate than the people who hedge — sometimes less, because
confidence discourages verification.

The useful reframe is not "I don't trust you" but "I don't trust any of us, including
myself — and neither should you." That's not cynicism. That's discipline.

### Capture Must Be Frictionless

For artifact primacy to work in practice, the barrier to capturing information must
be as low as possible. A rough note captured in the moment beats a polished document
written two days later — because the polished version usually never gets written.

The best teams build a culture where conversations naturally produce "let's capture
that" moments. Leadership models the behavior — someone in a meeting who says "let
me drop that in the doc" without ceremony plants a norm that propagates. When this
pattern is absent, institutional knowledge walks out the door every time someone
changes roles.

For critical decisions — architectural choices, significant tradeoffs, scope
changes — Architecture Decision Records (ADRs) are a purpose-built format. They
capture not just what was decided, but why, and what alternatives were considered and
rejected. These are the decisions that most affect a system's long-term
maintainability and the team's ability to reason about it.

---

## Traceability

Traceability is the ability to follow a thread — forward or backward — through
decisions, changes, and artifacts. Why was this choice made? What requirement drove
this design? What changed between version one and version two, and why?

This is what separates engineering from craft: the discipline of leaving a record
that allows a system to be understood, maintained, and evolved by someone other than
its original author.

### Traceability Falls Out of Good Process

When transparency is properly implemented — work happening in the open through briefs
and version control — traceability becomes largely automatic. The change references
the brief. The brief references the requirement or ADR. The review captures the
discussion. The paper trail is not a separate artifact someone must produce. It is a
byproduct of the workflow itself.

<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" style="width: 100%; margin: 4rem auto; display: block;">
  <style>.label { font-family: 'JetBrains Mono', monospace; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 500; } .box-text { font-family: 'JetBrains Mono', monospace; font-size: 13px; font-weight: 500; } .label-cheap { fill: #8b9199; } .label-valuable { fill: #d97706; } .box { fill: #1a1e25; stroke: #d97706; stroke-width: 2; } .text-main { fill: #e8e6e3; } .arrow { fill: none; stroke: #d97706; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }</style>
  <text x="350" y="35" text-anchor="middle" class="label label-valuable">Any node answers: Why?</text>
  <rect x="20" y="85" width="140" height="80" rx="8" class="box"/>
  <text x="90" y="120" text-anchor="middle" class="box-text text-main">Code</text>
  <text x="90" y="140" text-anchor="middle" class="box-text text-main">change</text>
  <rect x="200" y="85" width="140" height="80" rx="8" class="box"/>
  <text x="270" y="130" text-anchor="middle" class="box-text text-main">Pull request</text>
  <rect x="380" y="85" width="140" height="80" rx="8" class="box"/>
  <text x="450" y="130" text-anchor="middle" class="box-text text-main">Brief</text>
  <rect x="560" y="85" width="120" height="80" rx="8" class="box"/>
  <text x="620" y="120" text-anchor="middle" class="box-text text-main">Requirement</text>
  <text x="620" y="140" text-anchor="middle" class="box-text text-main">/ ADR</text>
  <path d="M160 115 L200 115 M188 109 L200 115 L188 121" class="arrow"/>
  <path d="M200 135 L160 135 M172 129 L160 135 L172 141" class="arrow"/>
  <path d="M340 115 L380 115 M368 109 L380 115 L368 121" class="arrow"/>
  <path d="M380 135 L340 135 M352 129 L340 135 L352 141" class="arrow"/>
  <path d="M520 115 L560 115 M548 109 L560 115 L548 121" class="arrow"/>
  <path d="M560 135 L520 135 M532 129 L520 135 L532 141" class="arrow"/>
  <text x="90" y="200" text-anchor="middle" class="label label-cheap">What</text>
  <text x="620" y="200" text-anchor="middle" class="label label-cheap">Why</text>
  <text x="350" y="235" text-anchor="middle" class="label label-cheap">Follow the thread forward or backward</text>
</svg>

**Transparency creates the conditions under which traceability emerges without extra
effort.**

### No Artifacts, No Trace

A trace that leads back to a conversation — one that may be misremembered, disputed,
or gone entirely — is not a trace at all. The full value of traceability is only
realized when decisions at every level are captured in durable artifacts. The act of
capturing is a transparency behavior. The value of having captured is a traceability
benefit.

---

## The Three T's as a System

The three pillars fail interdependently. Without tractability, transparency surfaces
tasks of unknown depth and progress signals are impossible to interpret. Without
transparency, there is nothing for traceability to trace. Without traceability, the
accumulated artifact record is navigable only by its authors.

Together, they create an environment in which work is honest, visible, and legible.
That is the foundation. Everything else — accountability, scheduling, performance
evaluation, risk management, onboarding, technical debt management — depends on it
being in place. These higher-order practices do not guarantee good outcomes, but the
absence of the Three T's guarantees that they will be unreliable at best and
theatrical at worst.

<svg viewBox="0 0 700 500" xmlns="http://www.w3.org/2000/svg" style="width: 100%; margin: 4rem auto; display: block;">
  <style>.label { font-family: 'JetBrains Mono', monospace; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 500; } .big-label { font-family: 'JetBrains Mono', monospace; font-size: 15px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 600; } .arrow-label { font-family: 'JetBrains Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 500; } .label-cheap { fill: #8b9199; } .label-valuable { fill: #d97706; } .box-valuable { fill: #1a1e25; stroke: #d97706; stroke-width: 2.5; } .text-main { fill: #e8e6e3; } .arrow { fill: none; stroke: #d97706; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; }</style>
  <defs><filter id="system-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="10" result="blur"/><feFlood flood-color="#d97706" flood-opacity="0.35"/><feComposite in2="blur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
  <rect x="260" y="40" width="180" height="80" rx="10" class="box-valuable" filter="url(#system-glow)"/>
  <text x="350" y="87" text-anchor="middle" class="big-label text-main">Tractability</text>
  <rect x="60" y="340" width="180" height="80" rx="10" class="box-valuable" filter="url(#system-glow)"/>
  <text x="150" y="387" text-anchor="middle" class="big-label text-main">Transparency</text>
  <rect x="460" y="340" width="180" height="80" rx="10" class="box-valuable" filter="url(#system-glow)"/>
  <text x="550" y="387" text-anchor="middle" class="big-label text-main">Traceability</text>
  <path d="M 290 120 Q 180 210 160 340" class="arrow"/>
  <path d="M 152 324 L 160 340 L 170 326" class="arrow"/>
  <path d="M 240 380 L 454 380" class="arrow"/>
  <path d="M 442 372 L 454 380 L 442 388" class="arrow"/>
  <path d="M 540 340 Q 520 210 410 120" class="arrow"/>
  <path d="M 420 136 L 410 120 L 428 126" class="arrow"/>
  <text x="175" y="220" text-anchor="middle" class="arrow-label label-valuable">Meaningful</text>
  <text x="175" y="238" text-anchor="middle" class="arrow-label label-valuable">signals</text>
  <text x="347" y="370" text-anchor="middle" class="arrow-label label-valuable">Durable artifacts</text>
  <text x="525" y="220" text-anchor="middle" class="arrow-label label-valuable">Honest scope</text>
  <text x="525" y="238" text-anchor="middle" class="arrow-label label-valuable">history</text>
  <text x="350" y="470" text-anchor="middle" class="label label-cheap">Remove any pillar — the others degrade</text>
</svg>

---

## Why This Matters to You

If you are evaluating engineering partners, ask how they handle these three things.
Not in theory. In practice. Ask to see a brief. Ask to see an ADR. Ask them to trace
a specific line of code back to the decision that caused it. If they can't — or
won't — you have your answer.

If the answer is "we're pretty informal" or "we move fast," that tells you something
important. It tells you that when things go sideways — and things always go
sideways — there is no structural foundation to catch it. Speed without discipline is
just expensive chaos.

The Bootstrap Factory builds these practices into every engagement because we have
seen what happens without them. The Three T's are not bureaucracy. They are the
minimum discipline that makes your engineering investment legible, defensible, and
durable. The same principle we apply to everything we build: go well to go fast.
