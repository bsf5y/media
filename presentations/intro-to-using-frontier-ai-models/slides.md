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
include-logo: true
---

# With great power... 

<span class="accent-cool">Generative AI tools</span> act as an on-demand collaborator that <span class="accent">amplifies
output</span>.

<v-click><em>It's important to understand the fundamentals of how these tools work so that patterns
and practices can be centralized for the greater good of the Enterprise.</em></v-click>

---
layout: intro 
eyebrow: Who?
include-logo: true
---

# ...comes Great Responsibility

<p class="quote">Enterprise AI adoption typically begins with a <span class="accent">small group
of early adopters</span>, often technical teams or curious individuals, <span
class="accent">experimenting with tools</span> to solve <span class="accent">specific
problems</span>.</p>

<v-click><p class="quote">As <span class="accent">successes</span> become visible and tools
become more accessible, usage democratizes outward to non-technical employees, transforming AI
from a <span class="accent">specialized capability</span> into a <span
class="accent-cool"><br>shared resource available to anyone who can benefit from
it</span>.</p></v-click>

---
layout: intro 
eyebrow: What?
include-logo: true
---

# How do these tools work? 

We'll explore how generative AI tooling works from the ground up.  It's important to understand
how these systems are built so that you can function as good advisors and customers to those who
will be building enterprise wide tooling.

---
layout: intro
include-logo: true
eyebrow: "TOC"
---

# Topics for Today 

- History of AI
- Generative AI Tools
- Quick background on HTTP APIs
- Messages & Inference  

---
layout: section
---

# History of AI

Despite the contemporary explosion in general purpose AI tools, the imagination and persuit of AI
is as old as computing itself.  

---
class: dense
eyebrow: History of AI
---

<table>
<tbody>
  <tr class="section"><td colspan="3">The Early Years</td></tr>
  <tr><td>1936</td><td>Turing Machine</td><td>Defined the mathematical model of computation that underlies all later AI.</td></tr>
  <tr><td>1946</td><td>ENIAC</td><td>First general-purpose electronic computer; supplied the hardware substrate AI would need.</td></tr>
  <tr><td>1950</td><td>Turing Test</td><td>Framed machine intelligence as an empirical question and set the field's enduring benchmark.</td></tr>
  <tr><td>1956</td><td>Dartmouth Workshop</td><td>Coined "artificial intelligence" and founded AI as a distinct research field.</td></tr>
  <tr><td>1966</td><td>ELIZA</td><td>First widely known conversational program; exposed how readily humans anthropomorphize machines.</td></tr>
  <tr class="section"><td colspan="3">Emergence of Intelligence</td></tr>
  <tr><td>1969</td><td>Perceptrons</td><td>Exposed limits of single-layer networks and helped trigger the first AI winter.</td></tr>
  <tr><td>1972</td><td>SHRDLU</td><td>Showcased integrated language understanding, planning, and reasoning in a constrained world.</td></tr>
  <tr><td>1986</td><td>Backpropagation</td><td>Made multi-layer neural networks trainable, sparking the connectionist revival.</td></tr>
  <tr><td>1989</td><td>Convolutional Neural Networks</td><td>Introduced the convolutional architecture that now powers modern computer vision.</td></tr>
  <tr><td>1989</td><td>Q-Learning</td><td>Provided a provably convergent model-free RL algorithm later central to Atari and AlphaGo.</td></tr>
  <tr><td>1992</td><td>TD-Gammon</td><td>First major demonstration that RL plus neural networks could master a complex game.</td></tr>
  <tr class="section"><td colspan="3">Realization of Intelligence</td></tr>
  <tr><td>1997</td><td>Deep Blue defeats Kasparov</td><td>First time a computer beat a reigning world chess champion in match play.</td></tr>
  <tr><td>1997</td><td>Long Short-Term Memory</td><td>Solved vanishing gradients and dominated sequence modeling for nearly two decades.</td></tr>
  <tr><td>1998</td><td>PageRank</td><td>Link-based ranking that built Google and reshaped information retrieval.</td></tr>
  <tr><td>2011</td><td>IBM Watson wins Jeopardy!</td><td>Brought open-domain question answering to a mainstream audience.</td></tr>
  <tr><td>2011</td><td>Apple Siri</td><td>Put a general-purpose voice assistant into mass-market consumer hardware.</td></tr>
</tbody>
</table>

---
class: dense
eyebrow: Modern AI
---

<table>
<tbody>
  <tr class="section"><td colspan="3">Modern Artificial Intelligence</td></tr>
  <tr><td>2013</td><td>Deep Reinforcement Learning</td><td>DQN learned Atari games end-to-end from pixels, generalizing RL to visual domains.</td></tr>
  <tr><td>2014</td><td>Neural Machine Translation with Attention</td><td>Introduced attention as a general building block, foreshadowing the Transformer.</td></tr>
  <tr><td>2014</td><td>Generative Adversarial Networks (GANs)</td><td>Launched a generative-modeling paradigm that drove a decade of image synthesis.</td></tr>
  <tr><td>2016</td><td>AlphaGo</td><td>Beat a top human Go player, conquering a game long considered out of reach.</td></tr>
  <tr class="section"><td colspan="3">Realization of Generative AI</td></tr>
  <tr><td>2017</td><td>Transformer Architecture</td><td>The architecture behind every modern frontier LLM and most multimodal models.</td></tr>
  <tr><td>2018</td><td>BERT</td><td>Established the pretrain-then-fine-tune paradigm that dominated NLP.</td></tr>
  <tr><td>2019</td><td>GPT-2</td><td>Showed that scaling generative pretraining alone elicits broad zero-shot capability.</td></tr>
  <tr><td>2020</td><td>AlphaFold 2</td><td>Effectively solved single-domain protein structure prediction; later earned a Nobel Prize.</td></tr>
  <tr><td>2022</td><td>ChatGPT</td><td>Brought LLMs into mass public use and triggered the generative AI surge.</td></tr>
  <tr class="section"><td colspan="3">And more...</td></tr>
  <tr><td>2024</td><td>AlphaGeometry</td><td>Reached near-gold-medal Olympiad geometry performance via neuro-symbolic reasoning.</td></tr>
  <tr><td>2024</td><td>The AI Scientist</td><td>Closed the loop on automating the full scientific research workflow.</td></tr>
  <tr><td>2024</td><td>Agentic Computer Use</td><td>Extended a frontier LLM to direct GUI control via a widely available API.</td></tr>
  <tr><td>2025</td><td>Claude Code</td><td>Pushed AI-assisted development from completion to longer-running agentic coding.</td></tr>
  <tr><td>2026</td><td>Claude CoWork / Desktop</td><td>Consolidated agentic AI into a first-class native desktop client.</td></tr>
  <tr><td>2026</td><td>Claude Managed Agents</td><td>Agent harness containers as first class citizens.</td></tr>
  <tr><td>2026</td><td>Claude Design</td><td>... and it continues.</td></tr>
</tbody>
</table>


---
eyebrow: General Purpose AI Models 
---

# Quick history of<br>Large Language Models

<p class="quote">Language models in AI have evolved from 1960s rule-based systems like ELIZA to modern, generative
transformers. Key stages include statistical (N)-grams in the 1980s, neural networks for word
embeddings (2000s), and the 2017 transformer architecture breakthrough. The 2020s marked the era
of large-scale, human-aligned generative AI.</p>

---
eyebrow: General Purpose AI Models 
---

## Quick history of Large Language Models

<br>

- 2017: [Attention is all you Need; Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser,
Polosukhin](https://arxiv.org/pdf/1706.03762v7); from Google Deepmind Research

At 14 pages, it's tied with [A Peer-to-Peer Electronic Cash System; Nakamoto](https://bitcoin.org/bitcoin.pdf) 
(9 pages) for <span class="accent-cool">most impact per page</span> by any publication.
<br><br>

<p class="quote">Introduced the <span class="accent">Transformer Model</span>.  A language model
that removes the need for recurrent or convolutional layers in the network.  This facilitates
faster training, and broader context for inference.  <span class="accent-cool">The model can
build relationships between context that is further apart</span>.</p>

---
eyebrow: General Purpose AI Models
---

## Quick history of Large Language Models

<br>

- 2019: [Generative Pre-trained Transformer 2 (GPT-2)](https://en.wikipedia.org/wiki/GPT-2)

In 2019 OpenAI released GPT-2, demonstrating the ability for LLMs to generate complex human like
prose.

- 2022: [ChaptGPT](https://en.wikipedia.org/wiki/ChatGPT)

A website for driving interactive chat converstations backed by OpenAI GPT models starting with
GPT-3.5.

<p class="quote">The birth of <span class="accent-cool">Generative AI Models for general
purpose</span> use.</p>

Note: A striking example of an enterprise failing to capitalize on its own innovation; *Google's
inability to extend transformer models beyond their original translation use case*.

---
eyebrow: General Purpose AI Models
---

## Quick history of Large Language Models

<br>

- 2021: Anthropic was founded by former members of OpenAI, in an effort to prioritize LLM/AI
safty and governance.

Anthropic finished the training of Claude in summer of 2022 but delay release, citing a need for further
internal safety testing.

- 2023: Anthropic releases [Claude.ai](https://claude.ai/new)

- 2025: Anthropic releases [Claude Code](https://claude.com/product/claude-code)

Claude Code is an AI-powered, terminal-native ***agentic*** coding assistant from Anthropic designed to
accelerate development by acting directly on local files, executing commands, and managing Git
workflows.

- 2026: Anthropic releases native apps for CoWork, Chat & Code, Claude Console, Managed Agents,
  etc...

---
eyebrow: General Purpose AI Models
---

## "<span class="accent">Foundation</span>" Models

A foundation model is a large-scale AI model trained on vast amounts of broad, diverse data (typically using
self-supervised learning) that can be adapted to a wide range of downstream tasks. Rather than being built for one
specific purpose, it serves as a general-purpose "foundation" that can be fine-tuned, prompted, or otherwise
specialized for applications like text generation, translation, summarization, code generation, or image
understanding. Examples include large language models like Claude and GPT, as well as multimodal models that handle
text, images, and audio.

## "<span class="accent-cool">Frontier</span>" Models

A frontier model is a foundation model that represents the cutting edge of AI capabilities — the most advanced,
large-scale, and capable models available at a given point in time. These models typically push the boundaries on
parameters, training data, compute, and emergent capabilities, often demonstrating performance approaching or
exceeding human expertise on complex tasks like reasoning, coding, and scientific analysis. Because of their power and
 potential risks, frontier models are also a focal point for AI safety research and policy discussions (e.g., the
Frontier Model Forum). E.g. Claude Opus/Mythos, Gemini Ultra, & ChatGPT-5. 

---
eyebrow: General Purpose AI Models
---

## Everyday User Tools w/ Claude 

<br>

- Chat (web) [https://claude.ai](https://claude.ai/new)
- Code (cli)
- Console (web) [https://platform.claude.com/dashboard](https://platform.claude.com/dashboard)
- Desktop & Mobile (app)
  - Chat
  - CoWork
  - Code
- Design (web) [https://claude.ai/design](https://claude.ai/design)
<br><br><br>
<v-click><em class="quote">We'll go behind the scenes to understand the frontier model functionality that drives
these tools.</em></v-click>

---
layout: section
eyebrow: No Fear!
---

# Some Technical Background

<p class="quote">Don't worry if this is foreign and unfamiliar to you.  <span
class="accent">You're not alone we promise you</span>.  It's
not important that you grasp all of the details.  What's important is that you <span
class="accent">get the 'gist' of
what's being demonstrated</span>.  The general takeaway is that this stuff is pretty simple behind the
scenes and <span class="accent-cool">there is no magick</span>!</p>

---
eyebrow: HTTP and Web APIs 
---

### HTTP/S

The Hyper-Text Transfer Protocol (HTTP/S)

- Verbs: `GET`, `POST`, `PUT`, `DELETE` etc
- URLs: `https://api.anthropic.com/v1/messages`
- Headers:
  - `Content-Type: application/json`
  - `anthropic-version: 2023-06-01`
  - `X-Api-Key: $ANTHROPIC_API_KEY`
- Payload:

```json
// JSON - JavaScript Object Notation
    {
      "model": "claude-opus-4-7",
      "max_tokens": 1024,
      "messages": [ ... ]
      ...
    }
```

---
eyebrow: HTTP and Web APIs
---

### A Simple web server using JavaScript.

<em>Again, focus on the gist, not the details.</em>

```ts
// simple-http-server.ts
import { createServer } from 'http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

```sh
% npx tsx simple-http-server.ts 
Server running at http://localhost:3000/
```

---
eyebrow: HTTP and Web APIs
---

### A Command Line Tool for simple HTTP experiments 

`curl` stands for 'Client URL'.  It's a command-line tool and library for transferring data with
URLs, supporting protocols like HTTP, HTTPS, and many others.

```sh
$ curl -v0 http://localhost:3000            # -v verbose, -0 use HTTP/1.0
* Connected to localhost (::1) port 3000
> GET / HTTP/1.0
> Host: localhost:3000
> User-Agent: curl/8.7.1
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< Content-Type: text/plain
< Date: Wed, 20 May 2026 06:29:20 GMT
< Connection: close
<
Hello, World!
```

---
eyebrow: HTTP and Web APIs
---

### BSD netcat 

`nc` (netcat) is a command-line utility for reading from and writing to network connections.

A much lower level tool that `curl` but allows us to see just how simple the HTTP protocol can be.

```sh
% nc -c localhost 3000
```

```sh
GET / HTTP/1.0

HTTP/1.1 200 OK
Content-Type: text/plain
Date: Wed, 20 May 2026 06:31:43 GMT
Connection: close

Hello, World!
```

---
eyebrow: HTTP and Web APIs
---

<em>And just to show that we're not making this stuff up...</em>

```sh
% nc -c google.com 80 | head
GET / HTTP/1.0

HTTP/1.0 200 OK
Content-Type: text/html; charset=ISO-8859-1
Date: Wed, 20 May 2026 06:38:39 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Security-Policy-Report-Only: object-src 'none';base-uri 'self';script-src 'nonce-wTRaAOyPbrgxMWYKRs_CYA' 'strict-dynamic' 'report-sample' 'unsafe-eval' 'unsafe-inline' https: http:;report-uri https://csp.withgoogle.com/csp/gws/other-hp
P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
Server: gws
X-XSS-Protection: 0
X-Frame-Options: SAMEORIGIN
...
```

---
layout: center
---

# `HTTP Demo Time!`

---
layout: section
---

# Elements of using a Frontier Model API

- Tokens
- Messages
- Multi-Modal Use (images, pdfs, code)
- Conversational Turns
- Context Windows
- Tool Usage
- System Prompts
- Memory
- Skills
- Model Context Protocol

---

# Tokens

---

# Messages

---

# Multi-Modal Use

## Images

## PDFs

## Code Execution

---

# Conversational Turns

---


# Context Windows

---

# Tool Usage

## Server Side Tools

## Local Tools

---

# Memory

---

# System Prompt

---

# Skills

---

# Model Context Protocol

---

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
