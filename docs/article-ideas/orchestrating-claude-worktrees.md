# Orchestrating Claude w/ Worktrees and Other Lessons

## Angle

The tool's architecture is telling you something. Listen before you automate.

Claude Code isn't a shell. Trying to orchestrate worktree workflows "from the inside" fights its
architecture. This is a real pain point that isn't well-documented anywhere — and how you respond
to it reveals whether you're building a product workflow or a prototype workflow.

## Target Audience

Developers using Claude Code who want parallel, issue-driven workflows.

This is a technical-audience piece. It builds credibility with engineers and technical evaluators
who are assessing our depth. It demonstrates the "go well to go fast" philosophy applied to our own
tooling — we practice what we preach.

## Through-line

**The architecture resists. That's the signal.**

When a tool fights your workflow, you have two choices: force it, or understand it. Forcing it
produces elaborate automation that breaks at the seams. Understanding it produces simple patterns
that compound. This is "go well to go fast" applied to dev tooling — the same principle we apply
to product architecture.

## Structure

### 1. The Promise

Why worktree-based workflows are appealing: parallel work on issues, isolated contexts, clean git
history. Paint the picture of the ideal flow — say "work on issue 42" and Claude handles the rest.

### 2. The Trap

Make this visceral. Don't list constraints — show the reader feeling the friction.

Walk through the experience of building a `flow-startup` skill that creates branches, worktrees,
and spawns subagents. Describe the mounting frustration:

- You write the skill. It looks elegant. You run it.
- `cwd` is fixed at session start. The worktree exists but Claude can't see it.
- You try subagents. They inherit the same constraint.
- You shell out. Permission prompts multiply. Every command needs approval.
- You add more automation to work around the permissions. Now you're debugging your automation
  instead of doing the work.
- Two hours in, you've built an elaborate harness that accomplishes what five manual commands
  would have done in two minutes.

The architecture resists. That's not a bug — that's the signal.

### 3. The Mental Model Shift

Claude Code is a *tool user*, not a *shell session*. The orchestration layer needs to live above it,
not inside it. You manage the workflow harness. Claude owns the work.

This parallels how we think about product architecture: the core does one thing well; the delivery
mechanisms wrap around it. Claude Code is the core. Your workflow is the delivery mechanism.

### 4. Practical Patterns

Start with the **manual pattern** — walk through each step explicitly so the reader sees the full
workflow before we start automating pieces of it:

1. Create a branch linked to the issue: `gh issue develop <NNN>`
2. Create a worktree: `git worktree add ../worktree-name branch-name`
3. Launch Claude in the worktree: `cd ../worktree-name && claude`
4. Give Claude the task (referencing the issue context)
5. When done: review, merge, clean up the worktree

Then layer on automation:

- **Shell script wrapper** — A bash script that handles steps 1-3 and drops you into a Claude
  session in the right directory. Include a minimal, working example.
- **Makefile / Justfile recipes** — `make work-on ISSUE=123`
- **Claude's built-in `EnterWorktree` tool** — Anthropic has started addressing this directly;
  worth covering what it does and where it still falls short
- **Multiple terminal sessions** — The simplest pattern: you orchestrate, Claude works

### 5. The Takeaway

Close with something concrete the reader walks away with:

- A minimal shell script (or diagram) showing the orchestration boundary — what lives in your
  shell vs. what lives inside Claude's session
- The principle stated plainly: **Don't make the AI own the workflow harness. Let it own the work.**
- The broader lesson: when a tool resists, understand the boundary before you automate across it.
  This is "go well to go fast" — the same discipline that separates products from prototypes,
  applied to how we use our own tools.

## Tone

Blunt, technical, "here's what we hit and how we actually solved it." Teaching piece, not a
tutorial. Diagnostic, not aggressive — when the tool resists, that's information, not a failure.
