---
tags:
  - field
  - field-root
category: compute
status: tracking
enables:
  - "[[Foundation Model Training]]"
  - "[[Inference & Serving Systems]]"
---

## Problem Space: AI Hardware & Compute

## What seems genuinely hard here?
- Memory bandwidth scaling slower than compute (HBM generations lag FLOP growth), making chips increasingly memory-bound
- Interconnect at datacenter scale — keeping thousands of chips fed without the network becoming the bottleneck
- Power and cooling as the actual ceiling on cluster size, not chip design itself

## Why hasn't it been solved?
- Physical constraints — fab process scaling (Moore's Law) is slowing, and packaging/interconnect innovation is now doing more of the work than transistor shrink
- Institutional / regulatory constraints — export controls and a concentrated supply chain (EUV lithography, advanced packaging) mean capacity is politically gated, not just engineering-gated
- Building a chip takes years; by the time it ships, the workload it was designed for (dense training vs. MoE vs. long-context inference) may have shifted

## What solutions feel fake?
- Peak-FLOP marketing numbers that ignore real-world utilization, which is often 30-50% of peak
- "Custom AI chip beats GPUs" claims that don't account for the software/compiler ecosystem gap

## What solutions feel inevitable?
- Chiplet-based designs and advanced packaging as the primary lever once monolithic die scaling plateaus
- Inference-specific silicon (optimized for memory bandwidth, not FLOPs) diverging further from training silicon
- Optical interconnect replacing copper for rack-to-rack and eventually chip-to-chip links

## Children
- [[AI Accelerator Chips & Inference Silicon]]
- [[Datacenter Power & Cooling Constraints]]
- [[Optical Interconnect & Co-Packaged Optics]]

## Connections
**Enables:** [[Foundation Model Training]], [[Inference & Serving Systems]]

