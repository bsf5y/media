---
title: 5 Fundamental Reasons Engineers should NOT use AI for Software Development
description: "A guide for the skeptical engineer."
date: 2026-02-06T12:00:00
author: Wes Cravens
---

## You're already a Senior/Principal/Lead developer

Sure. You remember, toiling late at night over Uncle Bob books and hacking away at experimental
code.  Been there, done that, and have the badges to prove it.  But now you're at the top of your
game, so that stuff is well and truly behind you.  Why should you bother learning a whole new
paradigm now?  You're already set, and it's almost 4:30.

## Processes and toolchains just get in the way

We get it. You've heard it all before.  The wacky CI/CD fever, linting fascists,
and test-all-the-things lunatics. None of that nonsense was necessary then and
it certainly isn't necessary now.  You've been emailing firmware updates to the
support team forever and it's almost never been a problem.  The AI fan-boys can just
go spin.

## Your floppy disks have a larger context window

Let's face it.  So-called 'frontier' AI models are topping out at 1M context
windows.  That's pathetic.  You have a drawer full of 1.44M floppy disks to prove
it.  Besides, the biggest source file in your codebase is only 800k. So, what
does it matter?

## Failure is where all the fun is

"A man works hard for his filth just to have vagrants come and steal it." — *<a href="https://en.wikipedia.org/wiki/George_Liquor">George Liquor, 1991</a>*

I mean really.  It's
taken you decades to figure out how to debug this stuff.  That's how you add value.  There's no AI
built that can understand the kind of breakage you have to tolerate in your codebase:

```
✦ "ERROR [0xFEEDFACE: 0xDEADBEEF] Interdimensional pointer dereference at
src/core/quantum_scheduler.rs:88:23. Expected FnOnce<(&'static Arc<TemporalSingularity>, &mut
[EventHorizon]) -> Result<FluxField, EntropyViolation>>, but received an unholy invocation of
std::mem::transmute::<&'a str, &'b mut CosmicRadiation>. 
```

## Product managers and the sales team just couldn't handle it 

Have you met those folks?  They can barely convince people to buy your products as it is.  You can
only imagine what circle of hell would open if new features and functionality started flowing like
water.  Besides that, we all know that customers are best kept wishing for more.
