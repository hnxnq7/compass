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

## Notable tools / instances
- **WebArena: A Realistic Web Environment for Building Autonomous Agents** (Zhou, Xu, Zhu, Zhou, Lo, Sridhar, Cheng, Ou, Bisk, Fried, Alon, Neubig — CMU, ICLR 2024) — 812 long-horizon tasks on self-hosted, fully-functional site clones; the reference realism/reproducibility-balanced environment this field's agents are built and tested against
- **Mind2Web** (Deng et al. — Ohio State, NeurIPS 2023) — 2,000+ human action traces across 137 real websites; the canonical offline dataset for training and scoring web-action prediction before an agent ever touches a live browser

## Key players
- [[OpenClaw]] — viral self-hosted personal agent with real filesystem/messaging permissions, a real-world stress test of this field's unresolved trust/permissions questions
- [[CMU NeuLab (Graham Neubig)]] — built WebArena and VisualWebArena, the standard realistic-website benchmarks the field evaluates against

## Watch list
- webarena.dev and cs.cmu.edu/~neulab for new benchmark releases

## Connections
**Parent:** [[Agents & Tool Use]]

**Depends on:** [[Vision-Language-Action Models & Embodied Robotics]]

**Related:** [[Agent Evaluation & Sandboxing]]

