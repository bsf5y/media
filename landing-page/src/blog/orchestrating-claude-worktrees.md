---
title: Orchestrating Claude with Worktrees — and Other Lessons in Listening to Your Tools 
description: When we tried to automate Claude Code's workflow, the tool pushed back. The fix was embarrassingly simple.
date: 2026-03-10T12:00:00
author: Wes Cravens
draft: false 
---

We built a Claude skills workflow that would take an issue, spin up a worktree, and send Claude
code off to work. Elegant on paper. Then we ran it, and spent two hours fighting the tool instead of using it.

The agent was resisting. We just weren't listening.

## The Promise

Git worktrees let you check out multiple branches simultaneously in separate directories. Combine that with Claude Code's ability to work autonomously on a task, and the picture gets exciting fast.

Three open issues. Three worktrees. Three Claude sessions, all running in parallel. Clean git history. No context switching. No branch juggling.

That's the dream. We chased it.

## The Trap

We built a skill called `flow-startup`. The idea was clean: give it an issue number, it
creates a branch using `gh issue develop <NNN>`, sets up a worktree, and spawns a Claude subagent to do the work. Elegant on paper. We were proud of it.

Then we ran it.

The first problem was immediate. Claude Code's working directory is fixed at session start. You can't `cd` into a worktree. The worktree exists on disk, but Claude can't see it. Every file read, every edit, every grep — all scoped to the original directory. The worktree is a ghost.

*Many get around this by creating the worktree somewhere local.  E.g. Anthropic official plugins
will stash them in .claude.  This is not acceptible to us.  We wanted to leverage Claude's
environment scoping rules.*

Fine. We'll use subagents. Subagents can work in isolation, right? They can — but they inherit the same working directory constraint. The subagent spawns, and it's looking at the same directory as the parent. The worktree is still invisible.

So we shelled out. `bash` commands targeting the worktree path directly. Things like `git -C` became standard practice and part of our AI context's 'ruleset' sprinkled throughout context files and skills. This worked, technically, but permission prompts started multiplying. Every command in an unfamiliar directory needed approval. Approve... Approve... Approve... Approve... The workflow that was supposed to save time now demanded more babysitting than when we orchestrated things manually.

We doubled down. More automation to handle the permissions. Environment flags. Wrapper scripts
called from within Claude calling other scripts. Two hours in, we were debugging our automation
instead of doing any actual work. We had built an elaborate Rube Goldberg machine that
accomplished what five manual terminal commands would have done in 15 seconds.

The architecture was resisting. We just weren't listening.

## The Mental Model Shift

Here's what we missed: Claude Code is a tool user, not a shell session.

A shell session is a persistent environment. You `cd` around. You set variables. State accumulates. You orchestrate.

Claude Code is different. It starts in a directory, and it works in that directory. It reads files, edits code, runs commands, reasons about problems. It's exceptionally good at this. But it is not a workflow orchestrator. It doesn't want to manage branches, create worktrees, spawn other instances of itself, and coordinate the results. That's your job.

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

# This parsing will likely need adjustment for your gh version
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

Anthropic now ships an `EnterWorktree` tool that creates an isolated worktree and launches a subagent inside it. It solves the core constraint — getting a Claude session rooted in a worktree directory — without leaving the current session. For quick, one-off parallel tasks it works well.

But it's still orchestration happening inside the agent. For anything beyond a single worktree, you end up managing the same complexity we ran into — just from a different entry point. We prefer owning the boundary in the shell, where we can see all the moving pieces at once. Your team may find the built-in tool fits their workflow better. The principle matters more than the implementation: know where the boundary is, and keep it clean.


## The Orchestration Boundary

Here's the picture:

**Your shell** owns: branch creation, worktree setup, launching Claude sessions, switching between them, reviewing results, merging, cleanup.

**Claude** owns: reading code, understanding the problem, making changes, running builds, reasoning about architecture, writing tests.

The boundary is clean. Everything above it is workflow. Everything below it is work. Don't mix them.

<svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" style="width: 100%; margin: 3rem auto; display: block;">
  <style>.wt-label { font-family: 'JetBrains Mono', monospace; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 500; } .wt-box-text { font-family: 'JetBrains Mono', monospace; font-size: 15px; font-weight: 500; } .wt-sub { font-family: 'JetBrains Mono', monospace; font-size: 12px; fill: #8b9199; } .wt-shell { fill: #232830; stroke: rgba(255,255,255,0.12); stroke-width: 1.5; } .wt-claude { fill: #1a1e25; stroke: #d97706; stroke-width: 2; } .wt-text { fill: #e8e6e3; } .wt-accent { fill: #d97706; } .wt-muted { fill: #8b9199; }</style>
  <defs><filter id="wt-glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8" result="blur"/><feFlood flood-color="#d97706" flood-opacity="0.3"/><feComposite in2="blur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>

  <!-- Shell / orchestration layer -->
  <text x="350" y="24" text-anchor="middle" class="wt-label wt-muted">Workflow</text>
  <rect x="40" y="36" width="620" height="80" rx="10" class="wt-shell"/>
  <text x="350" y="72" text-anchor="middle" class="wt-box-text wt-text">Your Terminal</text>
  <text x="350" y="100" text-anchor="middle" class="wt-sub">branches · worktrees · tabs · review · merge · cleanup</text>

  <!-- Divider arrows -->
  <line x1="160" y1="116" x2="160" y2="148" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
  <polygon points="152,144 160,156 168,144" class="wt-accent"/>
  <line x1="350" y1="116" x2="350" y2="148" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
  <polygon points="342,144 350,156 358,144" class="wt-accent"/>
  <line x1="540" y1="116" x2="540" y2="148" stroke="#d97706" stroke-width="2" stroke-linecap="round"/>
  <polygon points="532,144 540,156 548,144" class="wt-accent"/>

  <!-- Claude worktree 1 -->
  <rect x="60" y="160" width="200" height="140" rx="10" class="wt-claude" filter="url(#wt-glow)"/>
  <text x="160" y="196" text-anchor="middle" class="wt-box-text wt-text">Claude</text>
  <text x="160" y="216" text-anchor="middle" class="wt-sub">(wt-1)</text>
  <text x="160" y="248" text-anchor="middle" class="wt-sub">reads · edits</text>
  <text x="160" y="268" text-anchor="middle" class="wt-sub">builds · tests</text>

  <!-- Claude worktree 2 -->
  <rect x="280" y="160" width="200" height="140" rx="10" class="wt-claude" filter="url(#wt-glow)"/>
  <text x="380" y="196" text-anchor="middle" class="wt-box-text wt-text">Claude</text>
  <text x="380" y="216" text-anchor="middle" class="wt-sub">(wt-2)</text>
  <text x="380" y="248" text-anchor="middle" class="wt-sub">reads · edits</text>
  <text x="380" y="268" text-anchor="middle" class="wt-sub">builds · tests</text>

  <!-- Claude worktree 3 -->
  <rect x="500" y="160" width="200" height="140" rx="10" class="wt-claude" filter="url(#wt-glow)"/>
  <text x="600" y="196" text-anchor="middle" class="wt-box-text wt-text">Claude</text>
  <text x="600" y="216" text-anchor="middle" class="wt-sub">(wt-3)</text>
  <text x="600" y="248" text-anchor="middle" class="wt-sub">reads · edits</text>
  <text x="600" y="268" text-anchor="middle" class="wt-sub">builds · tests</text>

  <!-- Bottom label -->
  <text x="350" y="316" text-anchor="middle" class="wt-label wt-accent">Work</text>
</svg>

## What We Learned

We stopped using `flow-startup` and started orchestrating these simple steps outside of Claude.
We try to avoid new-and-shiney at BSF5Y, but we have to admit; this one caught us.  We were too
quick try and put standard solutions into a new technology.

The broader lesson applies well beyond worktrees. When a tool resists an abstraction, that resistance is information. It's telling you where the boundary is. Understand that boundary before you automate across it. Sophistication that doesn't serve the work is overhead.

Don't make the AI own the workflow harness. Let it own the work.
