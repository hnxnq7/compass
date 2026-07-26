---
tags:
  - field
category: post-training
status: tracking
parent:
  - "[[Post-training & Alignment]]"
enables:
  - "[[Preference Optimization]]"
  - "[[RL with Verifiable Rewards]]"
---

## Problem Space: Process & Outcome Reward Models

## What seems genuinely hard here?
- Getting reliable step-level (process) reward signal for reasoning chains without expensive step-by-step human annotation
- A reward model is itself an approximation that drifts from true human judgment under optimization pressure — the thing being optimized against isn't fixed

## Why hasn't it been solved?
- Technical constraints — outcome reward models (ORMs) only see the final answer, so they can't distinguish "right answer, bad reasoning" from "right answer, good reasoning," which matters for generalization
- Institutional / regulatory constraints — process-level labels are far more expensive to collect than outcome labels, so most public PRMs are trained on synthetic/auto-labeled step data of uncertain quality

## What solutions feel fake?
- PRM benchmark improvements that don't check whether the model is gaming the process reward with locally-plausible-looking-but-wrong steps

## What solutions feel inevitable?
- PRMs continuing to outperform ORMs on complex multi-step reasoning specifically because of the fine-grained credit assignment, pushing more labs to invest in them despite the annotation cost

## Watch list
-

## Connections
**Parent:** [[Post-training & Alignment]]

**Enables:** [[Preference Optimization]], [[RL with Verifiable Rewards]]

