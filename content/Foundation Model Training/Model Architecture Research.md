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

## Notable tools / instances
- **Attention Is All You Need** (Vaswani et al., Google, NeurIPS 2017) — the transformer paper; still the fixed point every architecture claim in this field gets measured against
- **Mamba: Linear-Time Sequence Modeling with Selective State Spaces** (Gu & Dao, CMU/Princeton, 2023) — the clearest frontier-relevant challenge to pure attention, and the direct precursor to the hybrid designs now shipping (Jamba, Qwen3-Next)

## Key players
- [[DeepSeek]] — one of the few labs publishing enough architectural detail (MLA, hybrid attention, mHC residuals) to evaluate independently
- [[AI21 Labs]] — Jamba is the clearest frontier-scale validation that transformer+SSM hybrids can match pure-attention quality
- [[Google DeepMind]] — sustained architecture research at a scale where ablation results actually transfer to frontier models
- [[Stanford Hazy Research (Chris Ré Lab)]] — one of the few academic labs whose architecture ablations (S4, H3, FlashAttention) run independently of a frontier training budget and still hold up

## Watch list
- DeepSeek, AI21 Labs, and DeepMind technical reports/papers (see Key players)
- hazyresearch.stanford.edu/blog for independent architecture ablations
- arXiv listings for architecture papers claiming frontier-scale (not just small-ablation) validation

## Connections
**Parent:** [[Foundation Model Training]]

**Related:** [[Mixture-of-Experts & Sparse Scaling]], [[Long-Context & Hybrid Attention Architectures]]

**Key players:** [[DeepSeek]], [[AI21 Labs]], [[Google DeepMind]], [[Stanford Hazy Research (Chris Ré Lab)]]

