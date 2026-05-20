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

A frontier model is a foundation model that represents the cutting edge of AI capabilities; the most advanced,
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
- Context Window Compaction
- Tool Usage
- System Prompts
- Memory
- Skills
- Model Context Protocol

---
eyebrow: Elements / Tokens
class: dense
---

# Tokens

Frontier models don't read characters and they don't read words. They read <span
class="accent">tokens</span>.

A token is a sub-word fragment.  Common words map to a single token; longer or rarer words split
into two or three.  Whitespace and punctuation are tokens too.

```text
"The Bootstrap Factory builds production-ready products."
   ↓ tokenize
["The", " Bootstrap", " Factory", " builds", " production",
 "-ready", " products", "."]
```

<br>

<p class="quote">Rule of thumb: <span class="accent">~750 English words ≈ 1,000 tokens</span>.
A page of dense prose is roughly 500 tokens.  A novel is roughly 100,000.</p>

---
eyebrow: Elements / Tokens
class: dense
---

# Tokens are the unit of <span class="accent">cost</span>

Every byte you send to the model is tokenized.  Every byte the model returns is tokenized.  You
pay per million tokens, and you pay <span class="accent-cool">separately for input and
output</span>.

<hr>

| Model             | Input ($ / MTok) | Output ($ / MTok) |
| ----------------- | ---------------- | ----------------- |
| Claude Haiku 4.5  | $1               | $5                |
| Claude Sonnet 4.6 | $3               | $15               |
| <span class="accent">Claude Opus 4.1</span> | <span class="accent">$15</span> | <span class="accent">$75</span> |
| Claude Opus 4.6   | $15              | $75               |
| Claude Opus 4.7   | $5               | $25               |

<hr>
<br>

- Output tokens are <span class="accent">~5× more expensive</span> than input tokens
- A long system prompt is sent on <em>every</em> request. Costs compound fast
- Prompt caching, batch APIs, and choosing the right model are the three biggest cost levers

<br>

<p class="quote">If you don't have an intuition for tokens, <span class="accent-cool">you don't
have an intuition for cost</span>.</p>

---
eyebrow: Elements / Messages
class: dense
---

# Messages

A conversation with a frontier model is just an <span class="accent">array of messages</span>.

Each message has a <span class="accent">role</span> and some <span class="accent">content</span>.
There are two roles:

- `user`: what you (or your app) sent
- `assistant`: what the model said back

<br>

The model's job is simple: given the array, <span class="accent-cool">produce the next
assistant message</span>.  That's it.  That's inference.

<p class="quote">Every tool, every chat UI, every agent you'll see, Claude.ai, Claude Code,
CoWork, is built on top of this one primitive.</p>

---
eyebrow: Elements / Messages
class: dense
---

# The shape of a request

```json
POST https://api.anthropic.com/v1/messages

{
  "model": "claude-sonnet-4-6",
  "max_tokens": 1024,
  "messages": [
    { "role": "user",      "content": "What is the capital of Illinois?" },
    { "role": "assistant", "content": "Springfield." },
    { "role": "user",      "content": "And what's its population?" }
  ]
}
```

<br>

<em>That's the whole API.</em>  Everything else, system prompts, tools, images, PDFs, skills,
MCP, is <span class="accent">additional fields layered onto this same envelope</span>.

---
eyebrow: Elements / Multi-Modal Use
class: dense
---

# Multi-Modal Use

The `content` of a message doesn't have to be a string.  It can be an <span class="accent">array
of content blocks</span>, text, images, documents, and more, mixed together in a single
message.

```json
"content": [
  { "type": "text", "text": "What's in this diagram?" },
  { "type": "image",
    "source": { "type": "base64", "media_type": "image/png", "data": "iVBORw0KG..." } }
]
```

<p class="quote">The model treats text, pixels, and document structure as the <span
class="accent-cool">same kind of input</span>.  It's all just tokens under the hood.</p>

---
eyebrow: Elements / Multi-Modal Use
class: dense
---

# Images

Send a PNG, JPEG, GIF, or WebP as a `base64` blob or a URL.  The model can:

- Read text in the image, signs, screenshots, whiteboards, handwriting
- Describe scenes, count objects, identify diagrams
- Answer questions about charts, spreadsheets, and UI mockups
- Carry the image across multiple turns of a conversation

<br>

<em>Image tokens are computed from the resolution <span class="accent-cool">tokens ≈ (width ×
height) / 750</span>.</em>  A 1024×1024 image costs roughly 1,400
input tokens.  Large screenshots add up fast. <span class="accent">Resize before
sending</span>.

---
eyebrow: Elements / Multi-Modal Use
class: dense
---

# PDFs

Send a PDF directly, no extraction step required.  Claude reads both the <span
class="accent">text layer</span> and the <span class="accent">visual layout</span>: tables,
figures, page structure, even handwritten annotations.

- Up to 100 pages or 32 MB per document
- Each page bills as text tokens + image tokens
- Pages with charts, equations, or scanned content benefit most from PDF mode (vs. raw text
  extraction)

<br>
<p class="quote">This is the unlock for <span class="accent-cool">contracts, research papers,
financial filings, and engineering drawings</span>.  Anything where the layout itself carries
meaning.</p>

---
eyebrow: Elements / Multi-Modal Use
class: dense
---

# Code Execution

Some Anthropic-hosted tools let the model <span class="accent">run code</span> as part of
producing its answer; typically Python in a sandboxed container.

```json
"tools": [{ "type": "code_execution_20250522", "name": "code_execution" }]
```

When the model decides it needs to compute something (parse a CSV, plot a chart, run a
regression) it writes the code, executes it server-side, sees the result, and folds the output
back into its response.

<br>

<p class="quote">This is how you go from <span class="accent">"the model talked about the
data"</span> to <span class="accent-cool">"the model actually analyzed the data"</span>.</p>

---
eyebrow: Elements / Conversational Turns
class: dense
---

# Conversational Turns

A "turn" is one user message and the assistant message that follows it.

The API is <span class="accent">stateless</span>.  The model has no memory of yesterday, no
memory of an hour ago, <span class="accent-cool">no memory of the previous turn</span>.  Every
request sends the entire conversation history and any other supporting content.

```json
"messages": [
  { "role": "user",      "content": "Pick a number between 1 and 10." },
  { "role": "assistant", "content": "7." },
  { "role": "user",      "content": "What did you pick?" }
]
```

If you forget to include turn N-1, the model genuinely doesn't know what it just said.

<p class="quote">Every chat UI you've ever used is keeping the transcript on its end and
re-sending it on every request.  <span class="accent">The "conversation" lives in your app, not
in the model</span>.</p>

---
layout: center
---

# `Messages API Demo Time!`

---
eyebrow: Elements / Context Windows
class: dense
---

# Context Windows

The <span class="accent">context window</span> is the maximum number of tokens the model can see
in a single request; system prompt, full message history, tool definitions, attachments, and
the response, all combined.

Remember: every turn <span class="accent">continuously appends to the `messages` array</span>.
Nothing leaves.  Your `user` message, the model's `assistant` reply, the next `user`, the next
`assistant`.  Each turn is two new entries, each carries its full <span
class="accent">`content`</span>, and the <span class="accent-cool">entire array is re-sent on
every request</span>.

- A few plain-text turns is nothing.  But <span class="accent">tool results, PDFs, screenshots,
  and long agent loops</span> add up fast. A single "innocent" turn can drop tens of thousands
  of tokens into `content`
- The window fills <em>monotonically</em>; every turn is bigger than the last
- Models get measurably worse near their limits

<br>

<p class="quote">The context window is the model's <span class="accent">working memory</span>.
Every turn fills it a little more; <span class="accent-cool">stuffing it isn't the same as
using it well</span>.</p>

---
eyebrow: Elements / Context Window Compaction
class: dense
---

# Context Window Compaction

As your session approaches the model's context window limit, the product steps in and runs <span
class="accent">compaction</span> automatically on the server-side.

Compaction reads the conversation so far, replaces older turns with a <span class="accent">concise
summary</span>, and keeps the most recent turns verbatim.  The summary becomes the new "head" of
the conversation; the original turns drop out of what gets sent to the model on the next turn.

```text
[turn 1, turn 2, turn 3, ..., turn 47]
           ↓ compact
[summary of turns 1–40, turn 41, ..., turn 47]
```

- Triggered <span class="accent">automatically</span> as the conversation approaches the
  model's limit. You don't have to ask.
- Information <em>is</em> lost. Compaction is a deliberate trade against running out of room

<p class="quote">After compaction, the model <span class="accent-cool">knows the gist of
  what came before, not every detail</span>.</p>

---
eyebrow: Elements / Tool Usage
class: dense
---

# Tool Usage

By default, the model can only do one thing: produce text.

<span class="accent">Tools</span> let it do more.  You declare a set of functions the model is
allowed to call; the model decides when to call them and with what arguments.

```json
"tools": [
  {
    "name": "get_weather",
    "description": "Get the current weather for a city.",
    "input_schema": {
      "type": "object",
      "properties": { "city": { "type": "string" } },
      "required": ["city"]
    }
  }
]
```

<br>

<p class="quote">This is the single feature that turns a chatbot into an <span
class="accent-cool">agent</span>.</p>

---
eyebrow: Elements / Tool Usage
class: dense
---

# Server-Side Tools

Anthropic hosts a growing set of tools the model can call directly. <span class="accent">You
don't run anything</span>.  The model invokes them, Anthropic's infrastructure executes them,
and the result flows back into the response.

- `web_search`: live web access
- `code_execution`: sandboxed Python
- `computer_use`: GUI control (mouse, keyboard, screenshots)
- `text_editor`: file read/write within a managed workspace

Enabled by adding a single entry to the `tools` array.  No webhook, no callback, no servers of
your own to operate.

<p class="quote">These are the <span class="accent-cool">batteries-included</span> tools.
Cheapest way to get from "demo" to "actually useful".</p>

---
eyebrow: Elements / Tool Usage
class: dense
---

# Local (Client-Side) Tools

For anything specific to <em>your</em> system, your database, your CRM, your internal API,
you declare the tool's name and schema, but <span class="accent">your code executes it</span>.

1. You send messages + tool definitions
2. Model returns a `tool_use` block with arguments
3. Your code runs the function
4. You send back a `tool_result` message
5. Model continues the conversation, with the result now in context

```json
{ "role": "user", "content": [
    { "type": "tool_result", "tool_use_id": "...", "content": "72°F, sunny" }
]}
```
<br>

<p class="quote">Every "AI agent" you've ever seen is some variation of this <span
class="accent-cool">loop</span>, running until the model decides it's done.</p>

---
layout: center
---

# `Tool Use Demo Time!`

---
eyebrow: Elements / Memory
class: dense
---

# Memory

The API is stateless, but the <span class="accent">products built on top of it don't have to
be</span>.

"Memory" is anything that survives between conversations.  It's not a feature of the model; it's
a pattern your application implements:

- **Conversation history**: store transcripts, replay relevant chunks
- **Summarized memory**: periodically condense old turns into a short brief
- **Long-term facts**: extract things like <em>"user prefers metric units"</em> into a side
  store, and inject them as a system prompt
- **Memory tools**: give Claude read/write access to a memory file as a tool

<br>

<p class="quote"><span class="accent-cool">The model doesn't remember you.  Your application
does</span>, and feeds the model what it needs to know at the start of each conversation.</p>

---
eyebrow: Elements / System Prompt
class: dense
---

# System Prompt

A separate, top-level instruction that sets the model's <span class="accent">role, tone,
constraints, and ground rules</span>.

```json
{
  "model": "claude-sonnet-4-6",
  "system": "You are a senior staff engineer at The Bootstrap Factory.  Be blunt, technical, and direct.  Never invent APIs.",
  "messages": [ ... ]
}
```

- Sent on <span class="accent">every</span> request, it's not "remembered" across calls
- Applied <em>before</em> any user message. Sets the frame for the whole conversation
- This is where you put <span class="accent-cool">persona, format requirements, refusal
  policies, and domain context</span>
- Watch the length: a 5,000-token system prompt costs 5,000 input tokens per turn

<br>

<p class="quote">If the model is misbehaving, the system prompt is almost always the first place
to look.</p>

---
eyebrow: Elements / Skills
class: dense
---

# Skills

A <span class="accent">Skill</span> is a packaged capability.  A folder containing a `SKILL.md`,
optional scripts, and reference material, that the model loads <em>only when needed</em>.

```text
my-skill/
  SKILL.md          # description + instructions
  scripts/
    do_thing.py
  reference/
    spec.pdf
```

- The model sees only the skill's <span class="accent">name and short description</span> by
  default
- When it judges the skill relevant, it reads the full `SKILL.md` and follows the instructions
- This is <span class="accent-cool">progressive disclosure</span>: keep the context window
  lean, expand on demand

<br>

<p class="quote">Anthropic ships skills for things like <code>docx</code>, <code>pdf</code>,
and <code>xlsx</code>.  You can write your own for anything repeatable; onboarding flows,
report templates, internal playbooks.</p>

---
eyebrow: Elements / Model Context Protocol
class: dense
---

# Model Context Protocol

An <span class="accent">open protocol</span> for connecting frontier models to tools and data.

- **MCP Servers**: wrap a system (Slack, GitHub, your database, a filesystem) and expose its
  capabilities as tools, resources, and prompts
- **MCP Clients**: the model's host (Claude Desktop, CoWork, Claude Code) speaks the protocol
  and surfaces the server's tools to the model
- **Transport**: `stdio` for local servers, `http` for remote

<br>

```json
"tools": [ ...mcp_server.list_tools() ]
```

<br>

<p class="quote">Before MCP, every integration was bespoke.  After MCP, <span
class="accent-cool">any model can talk to any system</span> that ships a server.  This is the
ecosystem layer.</p>

---
layout: center
eyebrow: Finally!
---

# `Q&A Time`

---
layout: center
---

# `Many Thanks for Taking Part!`

Wes Cravens - 2026
