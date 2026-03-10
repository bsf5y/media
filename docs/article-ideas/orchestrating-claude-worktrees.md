# Orchestrating Claude with Worktrees — and Other Lessons in Listening to Your Tools

We built a skill that would take an issue number, create a branch, spin up a worktree, and launch a Claude subagent to do the work. Type one command, walk away. It was elegant on paper.

Then we ran it. Claude couldn't see the worktree. The subagent couldn't either. We shelled out,
hit permission walls, added more automation to fix the automation. Two hours later we had an
elaborate harness that did what five manual terminal commands would have done in two minutes.  And
it still had a darkside that would still slip into permission request storms from time to time.

The architecture was resisting. We just weren't listening.

**The architecture resists. That's the signal.**

## The Promise

Git worktrees let you check out multiple branches simultaneously in separate directories. Combine that with Claude Code's ability to work autonomously on a task, and the picture gets exciting fast.

Three open issues. Three worktrees. Three Claude sessions, all running in parallel. Clean git history. No context switching. No branch juggling.

That's the dream. We chased it.

## The Trap

We built a skill called `flow-startup`. The idea was clean: give it an issue number, and it creates a branch from `gh issue develop`, sets up a worktree, and spawns a Claude subagent to do the work. Elegant on paper. We were proud of it.

Then we ran it.

The first problem was immediate. Claude Code's working directory is fixed at session start. You can't `cd` into a worktree. The worktree exists on disk, but Claude can't see it. Every file read, every edit, every grep — all scoped to the original directory. The worktree is a ghost.

Fine. We'll use subagents. Subagents can work in isolation, right? They can — but they inherit the same working directory constraint. The subagent spawns, and it's looking at the same directory as the parent. The worktree is still invisible.

So we shelled out. `bash` commands targeting the worktree path directly. Things like `git -C` became standard practice and part of our AI context's 'ruleset' sprinkled throughout context files and skills. This worked, technically, but permission prompts started multiplying. Every command in an unfamiliar directory needs approval. Approve... Approve... Approve... Approve... The workflow that was supposed to save time now demanded more babysitting than when we orchestrated things manually.

We doubled down. More automation to handle the permissions. Environment flags. Wrapper scripts called from within Claude calling other scripts. Two hours in, we were debugging our automation instead of doing any actual work. We had built an elaborate Rube Goldberg machine that accomplished what five manual terminal commands would have done in two minutes.

The architecture was resisting. We just weren't listening.

## The Mental Model Shift

Here's what we missed: Claude Code is a tool user, not a shell session.

A shell session is a persistent environment. You `cd` around. You set variables. State accumulates. You orchestrate.

Claude Code is different. It starts in a directory, and it works in that directory. It reads files, edits code, runs commands, reasons about problems. It's exceptionally good at this. But it is not a workflow orchestrator. It doesn't want to manage branches, create worktrees, spawn other instances of itself, and coordinate the results. That's your job.

This maps directly to how we think about product architecture. The core does one thing well. The delivery mechanisms wrap around it. Claude Code is the core — it does the work. Your terminal, your shell scripts, your workflow habits — those are the delivery mechanisms. Trying to push the orchestration layer down into the core is the same architectural mistake we warn our clients about. It's prototyping.

You wouldn't embed your deployment pipeline inside your application code. Don't embed your workflow orchestration inside your AI tool.

## Practical Patterns

Once we stopped fighting the architecture, the solution was simple. Almost embarrassingly so.

### The Manual Pattern

Start here. No automation. Just commands in a terminal:

```bash
# 1. Create a branch linked to the issue
gh issue develop 42

# 2. Create a worktree
git worktree add ../issue-42 42-fix-the-thing

# 3. Launch Claude in the worktree and start work
cd ../issue-42 && claude "Work on issue 42"
```
Three commands. No framework. No skill definition. No permission headaches. Claude starts in the worktree directory, sees only that branch's files, and does the work. You open another terminal tab and do it again for the next issue.

This pattern works today. It worked six months ago. It will work six months from now.

### Shell Script Wrapper

Once the manual pattern is second nature, wrap steps 1-3. Something like this — your mileage will vary depending on your `gh` version and shell environment, so treat it as a starting point, not a copy-paste solution:

```bash
#!/usr/bin/env bash
# work-on: create a worktree for an issue and launch Claude in it
# NOTE: The gh output parsing below is illustrative.
# Adjust the grep/cut pattern to match your version of gh.

ISSUE=$1
[ -z "$ISSUE" ] && echo "Usage: work-on <issue-number>" && exit 1

BRANCH=$(gh issue develop "$ISSUE" 2>&1 | grep -oE 'branch [^ ]+' | cut -d' ' -f2)
WORKTREE="../issue-${ISSUE}"

git worktree add "$WORKTREE" "$BRANCH"
cd "$WORKTREE" && claude
```

Save it. `chmod +x`. Now it's `./work-on 42`. Still simple. Still yours to maintain. No magic.

### Multiple Terminal Sessions

The simplest parallel pattern. Open three terminal tabs. Run `work-on 42` in one, `work-on 43` in another, `work-on 44` in the third. You orchestrate by switching tabs. Claude works.

This sounds unsophisticated. It is. That's the point. Sophistication that doesn't serve the work is overhead.

### Makefile / Justfile Recipes

For teams that want a project scoped vocabulary/call method:

```makefile
work-on:
	@./scripts/work-on $(ISSUE)
```

`make work-on ISSUE=42`. Everyone on the team uses the same entry point. The implementation stays in one script you can update without retraining anyone.

### Claude's Built-in EnterWorktree

Anthropic now ships an `EnterWorktree` tool that creates an isolated worktree and launches a subagent inside it. It solves the core constraint — getting a Claude session rooted in a worktree directory — without leaving the current session.

But this is still mixing orchestration into the agent. It's Anthropic's version of the same architectural mistake we made. The boundary is cleaner when you own it.


## The Orchestration Boundary

Here's the picture:

**Your shell** owns: branch creation, worktree setup, launching Claude sessions, switching between them, reviewing results, merging, cleanup.

**Claude** owns: reading code, understanding the problem, making changes, running builds, reasoning about architecture, writing tests.

The boundary is clean. Everything above it is workflow. Everything below it is work. Don't mix them.

```
┌─────────────────────────────────┐
│         Your Terminal           │
│  branches, worktrees, tabs,    │
│  review, merge, cleanup        │
├────────┬──────────┬─────────────┤
│        │          │             │
│ Claude │  Claude  │   Claude    │
│ (wt-1) │  (wt-2)  │   (wt-3)   │
│        │          │             │
│ reads, │  reads,  │   reads,   │
│ edits, │  edits,  │   edits,   │
│ builds │  builds  │   builds   │
└────────┴──────────┴─────────────┘
```

## What We Learned

When a tool resists, understand the boundary before you automate across it. That's the same discipline that separates products from prototypes — applied to how we use our own tools.

Don't make the AI own the workflow harness. Let it own the work.
