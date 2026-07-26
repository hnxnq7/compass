---
tags:
  - field
category: agents
status: active
parent:
  - "[[Agents & Tool Use]]"
depends_on:
  - "[[Vision-Language-Action Models & Embodied Robotics]]"
related:
  - "[[Agent Evaluation & Sandboxing]]"
---

## Problem Space: Computer-Use & Browser Agents

## What seems genuinely hard here?
- UI understanding that's robust to the constant, unannounced visual/DOM changes real websites and apps go through
- Giving an agent real permissions (clicking buy buttons, submitting forms, executing code) without the trust/liability question outrunning the capability

## Why hasn't it been solved?
- Technical constraints — screen/DOM state is messy and adversarial in ways curated benchmarks don't capture (ads, popups, A/B-tested layouts, CAPTCHAs)
- Institutional / regulatory constraints — permission and safety rails for autonomous action on real accounts are still being defined ad hoc per product rather than as an agreed standard

## What solutions feel fake?
- Demo videos of computer-use agents on clean, uncluttered UIs that don't resemble the actual adversarial mess of production websites

## What solutions feel inevitable?
- Sandboxed, verifiable environments becoming the default training/eval substrate for this subfield specifically, since real production sites are too unstable a training target
- Explicit confirmation/guardrail layers for irreversible actions (purchases, sends, deletes) becoming a standard product pattern, not left to individual agent judgment

## Key players
- [[OpenClaw]] — viral self-hosted personal agent with real filesystem/messaging permissions, a real-world stress test of this field's unresolved trust/permissions questions

## Watch list
-

## Connections
**Parent:** [[Agents & Tool Use]]

**Depends on:** [[Vision-Language-Action Models & Embodied Robotics]]

**Related:** [[Agent Evaluation & Sandboxing]]

