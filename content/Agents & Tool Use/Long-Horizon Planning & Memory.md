---
tags:
  - field
category: agents
status: active
parent:
  - "[[Agents & Tool Use]]"
depends_on:
  - "[[RL with Verifiable Rewards]]"
related:
  - "[[Agent Evaluation & Sandboxing]]"
---

## Problem Space: Long-Horizon Planning & Memory

## What seems genuinely hard here?
- Errors compound multiplicatively across steps — a 95%-per-step agent is roughly a coin flip by step 20, so reliability at long horizons requires near-perfect per-step accuracy or active error recovery
- Credit assignment under sparse, delayed reward — knowing which of 50 earlier actions caused a failure discovered at step 200
- Giving agents useful, bounded memory without it becoming an unstructured context-stuffing hack that degrades attention over the rest of the task

## Why hasn't it been solved?
- Technical constraints — most training data is single-turn; genuine multi-step task traces with clear outcome signal are scarce
- Institutional / regulatory constraints — measuring "reliability horizon" itself is new science; METR's own tracking shows the doubling time for reliable task-completion horizon compressing (~4.3 months as of mid-2026), so the target keeps moving

## What solutions feel fake?
- Demos on narrow, pre-vetted tasks presented as evidence of general long-horizon reliability
- Reliability numbers reported at 50% success threshold without also reporting the much lower 80%+ threshold that matters for anything unsupervised

## What solutions feel inevitable?
- Hierarchical goal decomposition with explicit replanning loops and structured (not just longer-context) memory becoming standard agent architecture, not an add-on
- Reliability-horizon benchmarking (METR-style) becoming a standard capability metric alongside raw task accuracy

## Watch list
-

## Connections
**Parent:** [[Agents & Tool Use]]

**Depends on:** [[RL with Verifiable Rewards]]

**Related:** [[Agent Evaluation & Sandboxing]]

