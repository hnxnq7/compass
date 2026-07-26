---
tags:
  - field
category: foundation-models
status: active
parent:
  - "[[Foundation Model Training]]"
related:
  - "[[Model Architecture Research]]"
enables:
  - "[[Inference & Serving Systems]]"
  - "[[Agents & Tool Use]]"
---

## Problem Space: Long-Context & Hybrid Attention Architectures

## What seems genuinely hard here?
- Extending usable context (not just claimed context) — models often degrade well before their advertised window, especially on needle-in-haystack-style retrieval under distraction
- KV-cache growth is roughly linear in context length, so "long context" is really a joint architecture + serving-systems problem, not architecture alone

## Why hasn't it been solved?
- Technical constraints — full attention over very long sequences is expensive; sliding-window/local attention saves compute but can silently lose long-range dependencies
- Institutional / regulatory constraints — evaluating "does the model actually use its full context" well requires adversarial benchmarks most labs don't publish against

## What solutions feel fake?
- Marketed context-window sizes that aren't backed by degradation curves showing quality across the full window

## What solutions feel inevitable?
- Hybrid local/global attention patterns (some layers local, some global) as the standard efficiency/quality compromise — already shipping (e.g. DeepSeek V4-Pro's hybrid attention cutting inference FLOPs to ~27% and KV cache to ~10% of its predecessor at 1M context)
- This directly depends on [[Foundation Model Training]] architecture choices and directly enables agent workloads in [[Agents & Tool Use]] that need long, growing context

## Watch list
-

## Connections
**Parent:** [[Foundation Model Training]]

**Enables:** [[Inference & Serving Systems]], [[Agents & Tool Use]]

**Related:** [[Model Architecture Research]]

