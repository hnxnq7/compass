---
tags:
  - field
category: foundation-models
status: active
parent:
  - "[[Foundation Model Training]]"
related:
  - "[[Mixture-of-Experts & Sparse Scaling]]"
  - "[[Long-Context & Hybrid Attention Architectures]]"
---

## Problem Space: Model Architecture Research

## What seems genuinely hard here?
- Finding an architecture change that actually holds up at frontier scale, not just on small ablations — most published wins evaporate above a certain parameter count
- Attention's O(n²) cost vs. state-space models' efficiency-but-quality tradeoff, still not cleanly resolved

## Why hasn't it been solved?
- Technical constraints — architecture search at scale costs full training runs; only a handful of labs can afford to validate an idea at the size where it matters
- Institutional / regulatory constraints — most rigorous architecture comparisons happen inside labs and aren't published, so the public literature lags real practice

## What solutions feel fake?
- Small-scale ablation papers claiming an architecture "beats transformers" without any frontier-scale validation

## What solutions feel inevitable?
- Hybrid designs (transformer blocks + state-space/Mamba components) becoming the norm rather than a novelty, since pure-SSM models keep underperforming pure attention on quality benchmarks
- MoE as the default lever for scaling total parameters without proportionally scaling active compute (see [[Mixture-of-Experts & Sparse Scaling]])

## Watch list
-

## Connections
**Parent:** [[Foundation Model Training]]

**Related:** [[Mixture-of-Experts & Sparse Scaling]], [[Long-Context & Hybrid Attention Architectures]]

