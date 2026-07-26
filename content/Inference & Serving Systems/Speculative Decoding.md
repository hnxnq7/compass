---
tags:
  - field
category: systems-inference
status: active
parent:
  - "[[Inference & Serving Systems]]"
depends_on:
  - "[[Model Merging & Distillation]]"
---

## Problem Space: Speculative Decoding

## What seems genuinely hard here?
- Picking/training a draft model that's cheap enough to be worth running but correlated enough with the target model for a high acceptance rate
- Acceptance rate varies wildly by task (high on templated text, low on genuinely novel reasoning), so speedup isn't uniform in production

## Why hasn't it been solved?
- Technical constraints — decode is memory-bandwidth-bound and sequential; speculative decoding trades extra compute (running a draft model) for fewer serial steps, but that tradeoff inverts if the draft model is a poor predictor
- Institutional / regulatory constraints — maintaining a well-matched draft model alongside every target model is real ongoing engineering overhead most teams underbudget for

## What solutions feel fake?
- Headline "Nx faster" speculative decoding numbers measured on best-case, high-acceptance-rate workloads rather than representative production traffic

## What solutions feel inevitable?
- Speculative decoding as a default latency optimization at any serious inference provider, same category as quantization — not optional, just infrastructure
- Adaptive variants that tune speculation depth/draft choice per-request based on observed acceptance rate, rather than a fixed static config

## Notable tools / instances
- EAGLE / EAGLE-2 / EAGLE-3 (SafeAI Lab, U Waterloo) — feature-uncertainty draft trees, now a standard vLLM/SGLang backend
- Medusa — multiple decoding heads predicting several future tokens simultaneously

## Key players
- [[Together AI]] — ATLAS adaptive speculator keeps learning from live production traffic instead of freezing a draft model after offline training
- [[DeepSeek]] — Multi-Token Prediction ships as a built-in draft mechanism trained alongside the main model, rather than a separately maintained draft model
- [[vLLM]] — EAGLE/EAGLE-3, Medusa, and MTP all ship as first-class speculative decoding backends

## Watch list
- Together AI engineering blog (ATLAS)
- SafeAILab/EAGLE on GitHub

## Connections
**Parent:** [[Inference & Serving Systems]]

**Depends on:** [[Model Merging & Distillation]]

**Key players:** [[Together AI]], [[DeepSeek]], [[vLLM]]

