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
---

# With great power... comes...

Generative AI tools act as an on-demand collaborator that amplifies output.  It's important to
understand the fundamentals of how these tools work so that patterns and practices can be
centralized for the greater good of the Enterprise.

---
layout: intro 
eyebrow: Who?
---

# Democratization and<br>Early Adoption

Thanks to all for participating in the Claude trial.  Now comes the responsibility.<br><br>
Enterprise AI adoption typically begins with a small group of early adopters—often technical teams or curious individuals—experimenting with tools to solve specific problems, which then sparks broader interest across the organization. As successes become visible and tools become more accessible, usage democratizes outward to non-technical employees, transforming AI from a specialized capability into a shared resource available to anyone who can benefit from it.

---
layout: intro 
eyebrow: What?
---

# How do these tools work? 

We'll explore how generative AI tooling works from the ground up.  It's important to understand
how these systems are built so that you can function as good advisors and customers to those who
will be building enterprise wide tooling.

---

# Topics 

- History of AI
- Generative AI Tools
- Quick background on HTTP APIs
- Messages & Inference  

---
class: dense
---

# History of AI

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
---

# Modern AI

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
eyebrow: Everyday User Tools
---

## Generative AI Tools - w/ Claude 

- Chat (web) [https://claude.ai](https://claude.ai/new)
- Code CLI
- Desktop
  - Chat
  - CoWork
  - Code
- Design [https://claude.ai/design](https://claude.ai/design)
<br><br><br>
<v-click><em>We'll go behind the scenes to understand the frontier model functionality that drives
these tools.</em></v-click>

---
layout: section 
---

# Some Technical Background

<em>Don't worry if this is foreign and unfamiliar to you.  You're not alone we promise you.  It's
not important that you grasp all of the details.  What's important is that you get the 'gist' of
what's being demonstrated.  The general takeaway is that this stuff is pretty simple behind the
scenes and there is no magick!</em>

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
// JSON
    {
      "model": "claude-opus-4-7",
      "max_tokens": 1024,
      "messages": [ ... ]
      ...
    }
```

---
eyebrow: HTTP and WEB APIs
---

`curl` stands for Client URL (often written as "Client for URLs"). It's a command-line tool and library for transferring data with URLs, supporting protocols like HTTP, HTTPS, FTP, SFTP, and many others.

Both `libcurl`, and a CLI tool.


```sh
$ curl -v http://localhost:3000
```

```sh
* Connected to localhost (::1) port 3000
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/8.7.1
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< Content-Type: text/plain
< Date: Wed, 20 May 2026 05:20:50 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
<
Hello, World!
```


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
