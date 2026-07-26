---
tags:
  - field
category: compute
status: active
parent:
  - "[[AI Hardware & Compute]]"
enables:
  - "[[Foundation Model Training]]"
  - "[[Inference & Serving Systems]]"
related:
  - "[[Datacenter Power & Cooling Constraints]]"
---

## Problem Space: AI Accelerator Chips & Inference Silicon

## What seems genuinely hard here?
- Designing for a workload mix (dense training vs. MoE vs. long-context inference) that shifts faster than a 2-3 year chip design cycle
- Memory bandwidth (HBM) scaling slower than compute, making chips increasingly memory-bound rather than FLOP-bound
- Training silicon and inference silicon diverging into genuinely different optimization targets, fragmenting what "an AI chip" even means

## Why hasn't it been solved?
- Physical constraints — HBM4 (~2TB/s/chip, ~60% faster than HBM3e) is the current ceiling; another generational jump takes years
- Institutional / regulatory constraints — advanced packaging and EUV lithography capacity is concentrated in a handful of fabs, so scaling is politically as well as physically gated

## What solutions feel fake?
- Peak-FLOP marketing numbers that ignore real-world utilization (often 30-50% of peak)

## What solutions feel inevitable?
- Wafer-scale designs (e.g. Cerebras) carving out a durable niche specifically for inference workloads needing massive parallelism on one die
- Inference-specific silicon (optimized for memory bandwidth, not FLOPs) continuing to diverge from training silicon

## Notable tools / instances
- Cerebras wafer-scale engine, NVIDIA Blackwell/Rubin lines, HBM4 memory generation

## Watch list
-

## Connections
**Parent:** [[AI Hardware & Compute]]

**Enables:** [[Foundation Model Training]], [[Inference & Serving Systems]]

**Related:** [[Datacenter Power & Cooling Constraints]]

