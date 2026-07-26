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

## Key players
- [[DeepSeek]] — V4's hybrid Compressed/Heavily-Compressed Sparse Attention is the concrete shipping example cited above
- [[AI21 Labs]] — Jamba is the clearest production-grade hybrid Transformer-Mamba model, 256K effective context
- [[Qwen (Alibaba)]] — Qwen3-Next's 3:1 linear/full attention ratio, matching ~32B-dense quality on <10% of the compute

## Watch list
- DeepSeek, AI21 Labs, and Qwen technical reports/model releases (see Key players)
- arXiv listings for hybrid/sparse attention papers (search terms: "hybrid attention," "linear attention," "long context")

## Connections
**Parent:** [[Foundation Model Training]]

**Enables:** [[Inference & Serving Systems]], [[Agents & Tool Use]]

**Related:** [[Model Architecture Research]]

**Key players:** [[DeepSeek]], [[AI21 Labs]], [[Qwen (Alibaba)]]

