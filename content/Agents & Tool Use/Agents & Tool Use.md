---
tags:
  - field
  - field-root
category: agents
status: active
depends_on:
  - "[[Post-training & Alignment]]"
  - "[[Inference & Serving Systems]]"
enables:
  - "[[Applications]]"
---

## Problem Space: Agents & Tool Use

## What seems genuinely hard here?
- Reliability compounding over long horizons — a 95%-per-step agent is a coin flip by step 20
- Giving agents useful, bounded memory without it becoming a context-stuffing hack
- Evaluating agents on tasks that resemble real work, not curated benchmark tasks that reward benchmark-specific tricks

## Why hasn't it been solved?
- Technical constraints — errors compound multiplicatively across steps, and there's no clean way to have the model reliably notice it's off track
- Institutional / regulatory constraints — giving agents real permissions (file system, payments, code execution) runs into trust and liability questions faster than the capability matures
- Good long-horizon training signal is scarce — most training data is single-turn, not multi-step task traces

## What solutions feel fake?
- Demos on narrow, pre-vetted tasks presented as evidence of general agentic reliability
- "Multi-agent" architectures that add coordination overhead without a clear capability gain over a single strong agent with good tools

## What solutions feel inevitable?
- Sandboxed, verifiable environments (code execution, browser, computer-use) as the default training and eval substrate for agents
- Self-verification / self-critique steps built into the agent loop rather than bolted on after
- Narrower, more reliable "specialist" agents composed together beating one generalist agent for high-stakes workflows

## Children
- [[Agent Evaluation & Sandboxing]]
- [[Coding Agents & AI Software Engineering]]
- [[Computer-Use & Browser Agents]]
- [[Long-Horizon Planning & Memory]]
- [[Multi-Agent Systems]]

## Connections
**Depends on:** [[Post-training & Alignment]], [[Inference & Serving Systems]]

**Enables:** [[Applications]]

