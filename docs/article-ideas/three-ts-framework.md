# The Three T's: The Missing Foundation of Product Engineering

## The Problem No One Talks About

You hired a team. They're building. But three months in, you can't answer basic
questions: What's done? What changed? Why was that decision made? You ask, and you
get a meeting instead of a link. That's not a people problem. It's a structural one.

Most engineering teams run on talent and good intentions. That works until it
doesn't — until someone leaves, a deadline slips with no warning, or an investor
asks how your system works and nobody can point to a clear answer. The uncomfortable
truth is that without certain foundational practices in place, no amount of talent
will save a project from becoming opaque, fragile, and expensive to change.

The Three T's — **Tractability**, **Transparency**, and **Traceability** — are those
foundational practices. They aren't a complete theory of engineering management. They
are the minimum viable discipline that makes everything else possible:
accountability, scheduling, hiring, risk management. Without the Three T's, those
higher-order practices are theater. They look professional, but there's nothing
underneath.

---

## The Framework at a Glance

**Tractability** is honest scope. Before committing to a timeline, you classify the
work: is this development against known capabilities, or research into unknown
territory? You keep individual tasks small — a couple of days at most — so that
problems surface while they are still cheap to fix. When work can't be scoped small,
you either decompose it into visible stepping stones or run a time-boxed research
spike to reduce uncertainty first. There is no acceptable version of "it's just a big
task."

**Transparency** is structural visibility. Every piece of work is motivated by an
electronically recorded brief that exists before the work begins. Progress and
outcomes are recorded as they happen, not recalled after the fact. Most importantly,
decisions are not real until they are captured in a durable artifact. Hallway
conversations, chat threads, and verbal approvals do not count. The system enforces
openness rather than relying on individuals to volunteer it.

**Traceability** is the ability to follow any thread — forward or backward — through
decisions, changes, and artifacts. Why was this choice made? What requirement drove
this design? What changed between versions? When transparency is properly
implemented, traceability becomes largely automatic: changes reference briefs, briefs
reference requirements, reviews capture discussion. The paper trail is a byproduct of
the workflow, not a separate deliverable.

These three reinforce each other. Tractability keeps work units small enough to
produce meaningful signals. Transparency captures those signals in durable records.
Traceability makes those records navigable by anyone, not just the people who were in
the room. Remove any one and the others degrade. The sections that follow unpack each
pillar in detail.

---

## Tractability

Tractability means honest scope. It is the discipline of understanding the limits of
what is being taken on before committing to it.

### Development vs. Research

There is a fundamental difference between a development project and a research
project. Development executes against known capabilities — the team understands the
domain, the tooling, and the approach. Timelines mean something because the unknowns
are manageable.

Research has unknown outcomes by definition. Novel capabilities may need to be
developed. Committing to fixed delivery dates against unknown outcomes sets teams up
to fail — or worse, to quietly misrepresent progress so nobody has to deliver bad
news.

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

### When Tasks Resist Short Scope

Not every piece of work naturally fits a two-day window. There are two disciplined
responses, and no third option.

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
they are captured in a durable, indexable record. This is the single most important
principle in the framework, because it is the one that protects your investment when
people leave, memories fade, or teams disagree about what was agreed.

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

A key argument for artifact primacy is the well-documented unreliability of human
memory. The justice system has found that eyewitness testimony is among the least
reliable forms of evidence available — and critically, witnesses who are most
confident in their recall are often the least accurate.

This maps directly onto engineering teams. High talent and high confidence in memory
are not correlated with accuracy, and may be inversely correlated because confident
people are less likely to hedge or verify. The professional reframe is not "I don't
trust you" but rather "I don't trust any of us, including myself — and neither should
you." That's not cynicism. That's discipline.

### Capture Must Be Frictionless

For artifact primacy to work in practice, the barrier to capturing information must
be as low as possible. A rough note captured in the moment beats a polished document
written two days later — because the polished version usually never gets written.

The best teams build a culture where conversations naturally produce "let's capture
that" moments. Leadership models the behavior — someone in a meeting who says "let
me drop that in the doc" without ceremony plants a norm that propagates. The
Bootstrap Factory insists on this pattern because we have seen what happens when it
is absent: institutional knowledge walks out the door every time someone changes
roles.

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

This is the practical connection between the two pillars: **transparency creates the
conditions under which traceability emerges without extra effort.**

### No Artifacts, No Trace

A trace that leads back to a conversation — one that may be misremembered, disputed,
or gone entirely — is not a trace at all. The full value of traceability is only
realized when decisions at every level are captured in durable artifacts. The act of
capturing is a transparency behavior. The value of having captured is a traceability
benefit.

---

## The Three T's as a System

The three pillars are not independent. They form a reinforcing system.

**Traceability** depends on artifacts existing. You can only trace back to things
that were captured.

**Transparency** creates those artifacts as a structural byproduct of how work is
done, and establishes artifact primacy as the standard of truth.

**Tractability** ensures that the units of work being tracked and traced are small
enough to provide meaningful signal — and honest enough about project classification
to avoid building traceability infrastructure on top of undefined scope.

Remove any one and the others degrade. Without tractability, transparency surfaces
tasks of unknown depth and progress signals are impossible to interpret. Without
transparency, there is nothing for traceability to trace. Without traceability, the
accumulated artifact record is navigable only by its authors.

Together, they create an environment in which work is honest, visible, and legible.
That is the foundation. Everything else — accountability, scheduling, performance
evaluation, risk management, onboarding, technical debt management — depends on it
being in place. These higher-order practices do not guarantee good outcomes, but the
absence of the Three T's guarantees that they will be unreliable at best and
theatrical at worst.

---

## Why This Matters to You

If you are evaluating engineering partners, ask how they handle these three things.
Not in theory. In practice. Can they show you where decisions are captured? Can they
point to a brief for every piece of work? Can you trace why a specific technical
choice was made?

If the answer is "we're pretty informal" or "we move fast," that tells you something
important. It tells you that when things go sideways — and things always go
sideways — there is no structural foundation to catch it. Speed without discipline is
just expensive chaos.

The Bootstrap Factory builds these practices into every engagement because we have
seen what happens without them. The Three T's are not bureaucracy. They are the
minimum discipline that makes your engineering investment legible, defensible, and
durable. The same principle we apply to everything we build: go well to go fast.
