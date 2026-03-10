# Orchestrating Claude w/ Worktrees and Other Lessons

## Angle

Claude Code isn't a shell. Trying to orchestrate worktree workflows "from the inside" fights its
architecture. This is a real pain point that isn't well-documented anywhere.

## Target audience

Developers using Claude Code who want parallel, issue-driven workflows.

## Structure

### 1. The Promise

Why worktree-based workflows are appealing: parallel work on issues, isolated contexts, clean git
history. Paint the picture of the ideal flow — say "work on issue 42" and Claude handles the rest.

### 2. The Trap

What actually happens when you try to orchestrate from inside Claude Code:

- `cwd` is fixed at session start — no `cd` into a worktree
- Subagents inherit the same constraint
- Permission prompts multiply when shelling out to other directories
- Concrete example: a `flow-startup` skill that creates branches, worktrees, and spawns subagents.
  It sounds great on paper. In practice, Claude fights you every step of the way.

### 3. The Mental Model Shift

Claude Code is a *tool user*, not a *shell session*. The orchestration layer needs to live above it,
not inside it. You manage the workflow harness. Claude owns the work.

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
  session in the right directory
- **Makefile / Justfile recipes** — `make work-on ISSUE=123`
- **Claude's built-in `EnterWorktree` tool** — Anthropic has started addressing this directly;
  worth covering what it does and where it still falls short
- **Multiple terminal sessions** — The simplest pattern: you orchestrate, Claude works

### 5. What We Learned

Broader lesson about AI tool boundaries. Don't try to make the AI own the workflow harness. Let it
own the work. Ties back to "go well to go fast" — understanding the tool's model before trying to
automate saves you from building elaborate systems that fight the grain.

## Tone

Blunt, technical, "here's what we hit and how we actually solved it." Teaching piece, not a
tutorial.
