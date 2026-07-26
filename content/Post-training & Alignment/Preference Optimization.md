---
tags:
  - field
category: post-training
status: active
parent:
  - "[[Post-training & Alignment]]"
depends_on:
  - "[[Process & Outcome Reward Models]]"
related:
  - "[[RL with Verifiable Rewards]]"
---

## Problem Space: Preference Optimization

## What seems genuinely hard here?
- Getting a stable, RL-free training signal from pairwise preferences without the model overfitting to superficial cues raters latch onto (length, tone, formatting)
- Preference data reflecting what's actually wanted rather than just what raters can quickly distinguish

## Why hasn't it been solved?
- Technical constraints — DPO-style methods are simpler and more stable than full RLHF, but they optimize against a fixed offline dataset, so they can't correct for distribution shift the way online RL can
- Institutional / regulatory constraints — human preference labeling is expensive and inherently noisy; raters disagree with each other more than eval metrics suggest

## What solutions feel fake?
- Benchmark wins on preference-optimized models presented as "more aligned" when they mostly reflect optimizing for rater-legible surface polish

## What solutions feel inevitable?
- The field's 2026 default is now a modular stack — SFT, then preference optimization (DPO/SimPO/KTO variants), then RL with verifiable rewards for reasoning-heavy domains — rather than any single method doing everything
- AI-generated preference data (RLAIF) increasingly supplying the volume, with scarce human data reserved for the hardest judgment calls

## Key players
- [[Scale AI]] — one of the main suppliers of RLHF/preference-comparison annotation to frontier labs, the human-feedback supply chain this field trains on
- [[Hugging Face]] — TRL's DPO trainer is the default open-source reference implementation most non-frontier teams build on

## Watch list
- github.com/huggingface/trl releases

## Connections
**Parent:** [[Post-training & Alignment]]

**Depends on:** [[Process & Outcome Reward Models]]

**Related:** [[RL with Verifiable Rewards]]

**Key players:** [[Scale AI]], [[Hugging Face]]

