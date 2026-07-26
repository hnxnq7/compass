---
tags:
  - field
  - field-root
category: post-training
status: active
depends_on:
  - "[[Foundation Model Training]]"
enables:
  - "[[Agents & Tool Use]]"
related:
  - "[[Safety & Governance]]"
---

## Problem Space: Post-training & Alignment

## What seems genuinely hard here?
- Optimizing against a learned reward model without the policy learning to exploit its blind spots (reward hacking)
- Getting models to be honest about uncertainty rather than confidently fluent
- Making preference data reflect what you actually want, not just what raters can distinguish quickly

## Why hasn't it been solved?
- Technical constraints — RL on top of a pretrained LM is unstable and sample-inefficient; reward models are themselves approximations that drift from human judgment under optimization pressure
- Institutional / regulatory constraints — "what behavior is correct" is a values question, not just an ML question, and different labs encode different answers
- Feedback signal is expensive and noisy — human raters disagree with each other more than the eval metrics suggest

## What solutions feel fake?
- RLHF framed as "solving" alignment rather than as a behavior-shaping tool with known failure modes
- Benchmarks used as a stand-in for "aligned" when they mostly measure instruction-following polish

## What solutions feel inevitable?
- Process/step-level reward models replacing outcome-only reward models for reasoning tasks
- AI-generated preference data (RLAIF) becoming the majority of the training signal, with human data reserved for the hardest judgment calls
- Model merging / distillation as a cheaper alternative to full RL passes for style and safety tuning

## Children
- [[Model Merging & Distillation]]
- [[Preference Optimization]]
- [[Process & Outcome Reward Models]]
- [[RL with Verifiable Rewards]]
- [[Supervised & Parameter-Efficient Fine-Tuning]]

## Connections
**Depends on:** [[Foundation Model Training]]

**Enables:** [[Agents & Tool Use]]

**Related:** [[Safety & Governance]]

