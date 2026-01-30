---
title: The Sin of the Prototype
description: The difference between a product and a prototype isn't polish or features. It's where the value lives.
date: 2025-01-15
---

When we talk about a "prototype," we aren't referring to a healthy step in the design process. We are referring to a makeshift solution. Possibly one born from a weekend of vibe coding, spit, and duct tape. Possibly one born from tens of thousands of dollars (or more) in development costs. Either way, we are talking about systems that are built without due care and concern for solid engineering and architecture that protects the core value.

Prototypes are inevitably fragile, resistant to change, and unlikely to scale. They often masquerade as the foundation of a real business, when in reality they are temporary solutions destined for the trash heap. The trouble is, many developers don't realize they've built a prototype until they try to change it. By then, the duct tape has calcified into load-bearing infrastructure, and what started as a quick solution has become an expensive problem.

**The difference isn't about polish or features. It's about where the value lives.**

## User Interfaces are not where the Value Lives

The single biggest mistake that the builders of prototype solutions make is to trap the core differentiating value inside the delivery mechanism. Instead of encapsulating the real value-add into a standalone library of tools, they naively build business rules into the user interface.

Any experienced software engineer worth their salt will scream in horror when they see this pattern. Executives will sense the problem when they simply say, "We need our web app to support an API," and the developers want a year to get it done. Hint: the developers may not be overestimating. They have just audited the situation and realized that there is a pile of technical debt that needs to be repaid, with interest, before the request can be fulfilled.

The problem is that focus was not placed on the core of the value proposition. Instead, the prototype solution focused on the delivery mechanism and user experience rather than identifying what could really make the product special in the first place.

This is upside down. Focus must be placed on building a portable core of software that can be used by many different user interfaces—be it a web app, phone app, API, terminal, or otherwise. The core should not have to change. The core ***Is Your Value***. It holds all the important rules, constraints, business processes, and data flows that differentiate your solution from all others. The Bootstrap Factory insists on identifying your core value and building solutions that deliver this value independent of any delivery mechanism.

It may seem like we're saying that the user experience or design isn't important. We're not. Of course it's important. We're saying that those things are not going to be part of your core. They are going to be 'delivery mechanisms' that should rely on your core.

If you are lucky, your differentiating core idea is going to be 5-10% of the solution required to deliver value to your users. The rest is simply the infrastructure needed to deliver that value.

The Bootstrap Factory insists on helping our clients identify their core differentiating value-add, and then capturing this value into a core software solution that can be used across platforms and maintained separately from the delivery mechanism.

## A Classic Horror Story

A client presents us with a sophisticated prototype built on web browser technologies, but now they realize that they need to provide a different delivery mode—e.g., a web API. The issue that they have discovered is that their business rules are sprinkled throughout the technologies used to deliver a browser app instead of being encapsulated into a portable core.

A very typical example is the encoding of business rules into the web user interface widgets. Imagine that you have some data entry fields that require certain values. These requirements are part of your business rules, but they are only captured in the rules of the user interface.

When developers are asked to create an API, they have a problem. The first is how to identify all of the rules that are sprinkled throughout the user interface. The second is how to reimplement these rules for the new functionality.

Experienced engineers will immediately identify that the rules need to be extracted into a core and the UI needs to be adjusted to use the new core. But in this scenario there probably aren't any experienced engineers involved because they wouldn't have let this situation arise in the first place.

So what happens is that the rules are duplicated into the new solution as best they can. Now you have at least twice the problems you had before. In practice you end up with far more problems, because when the rules change in the future they have to be updated in all the places they have been replicated. Keep going, and this problem will grow exponentially, creating ever more opportunities for error and failure.

## A Contemporary Horror Story

With the new capability to use AI to build prototypes, the problem of ingraining business rules into UI-facing technologies is massively compounded. Prototype builders typically instruct an AI to build what they want the user to experience. The AI will happily comply, with no regard for the architectural decisions that a skilled software engineer would consider crucial.

These new generative AI technologies allow extremely sophisticated prototype solutions to be developed very quickly. This rapid development of what appears to be a valid solution hides all of the classic horror stories. The result is that you can create more problems far faster than ever before.

## The Solution: Put Your Money Where Your Value Is

It all starts with a simple fact. When it comes to your value-add product: User interfaces should start cheap. Design should start cheap. Infrastructure should start cheap. But the capture, architecture, and development of core solutions should not. The reason is simple. It takes many years of experience with many different patterns before an engineer is capable of designing a solid core for software solutions.

The solid core we describe should contain all of the rules that make up the value contained in your unique solution to a problem. This core can be fully developed and tested in isolation from other complexities. The other layers necessary to interface the core logic with users, or other systems, can also be developed and tested independently. This pattern is ultimately scalable to larger independent teams. But it all starts with unwavering attention to the core value captured in the solution.

Our approach is to stay narrowly focused on the unique value-add that exists in any given solution and build a solid core of software to support that solution. Once this is established, a wide variety of delivery mechanisms can be built on top of the core without impacting its integrity. The business value has been captured in a way that is easily changeable and scalable, independent of multiple user-facing solutions.

<svg viewBox="0 0 700 340" xmlns="http://www.w3.org/2000/svg" style="width: 100%; margin: 4rem auto; display: block;">
  <style>.label { font-family: 'JetBrains Mono', monospace; font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 500; } .box-text { font-family: 'JetBrains Mono', monospace; font-size: 16px; font-weight: 500; } .label-cheap { fill: #8b9199; } .label-valuable { fill: #d97706; } .box-cheap { fill: #232830; stroke: rgba(255,255,255,0.12); stroke-width: 1.5; } .box-valuable { fill: #1a1e25; stroke: #d97706; stroke-width: 2.5; } .text-main { fill: #e8e6e3; } .arrow { fill: none; stroke: #d97706; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; }</style>
  <defs><filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="12" result="blur"/><feFlood flood-color="#d97706" flood-opacity="0.4"/><feComposite in2="blur" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
  <text x="100" y="60" text-anchor="middle" class="label label-cheap">Cheap</text>
  <text x="350" y="50" text-anchor="middle" class="label label-valuable">Valuable</text>
  <text x="600" y="60" text-anchor="middle" class="label label-cheap">Cheap</text>
  <rect x="20" y="70" width="160" height="100" rx="10" class="box-cheap"/>
  <text x="100" y="128" text-anchor="middle" class="box-text text-main">Web UI</text>
  <path d="M200 120 L248 120 M234 106 L248 120 L234 134" class="arrow"/>
  <rect x="268" y="60" width="164" height="120" rx="10" class="box-valuable" filter="url(#glow)"/>
  <text x="350" y="128" text-anchor="middle" class="box-text text-main">Core Software</text>
  <path d="M500 120 L452 120 M466 106 L452 120 L466 134" class="arrow"/>
  <rect x="520" y="70" width="160" height="100" rx="10" class="box-cheap"/>
  <text x="600" y="128" text-anchor="middle" class="box-text text-main">Web API</text>
  <path d="M100 245 L100 190 M86 204 L100 190 L114 204" class="arrow"/>
  <path d="M350 245 L350 200 M336 214 L350 200 L364 214" class="arrow"/>
  <path d="M600 245 L600 190 M586 204 L600 190 L614 204" class="arrow"/>
  <rect x="20" y="245" width="660" height="55" rx="10" class="box-cheap"/>
  <text x="350" y="280" text-anchor="middle" class="box-text text-main">Infrastructure</text>
  <text x="350" y="320" text-anchor="middle" class="label label-cheap">Cheap</text>
</svg>
