---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Long-Context & Hybrid Attention Architectures]]"
  - "[[Mixture-of-Experts & Sparse Scaling]]"
  - "[[Model Architecture Research]]"
  - "[[KV-Cache Optimization & Compression]]"
  - "[[Speculative Decoding]]"
  - "[[RL with Verifiable Rewards]]"
---

## DeepSeek

*Chinese AI lab whose open-weight MoE releases have repeatedly set the pace on architecture efficiency — Multi-Head Latent Attention, sparse MoE routing, hybrid sparse/dense attention — and whose GRPO algorithm underpins most 2026 RLVR training.*

## What they do
- Ships frontier-scale open-weight models (V3, V4) under permissive licenses, forcing the rest of the field to react on price/performance
- Pioneered Multi-Head Latent Attention (MLA) to shrink KV-cache memory, and fine-grained/shared-expert MoE routing in V3
- V4 introduces a hybrid attention design (Compressed Sparse Attention + Heavily Compressed Attention) aimed at million-token context at low inference cost
- Introduced Group Relative Policy Optimization (GRPO) in the DeepSeekMath paper (Feb 2024), then used it to train DeepSeek-R1 (Jan 2025), the first open-weight reasoning model competitive with OpenAI's o1

## Where they fit
- Central to [[Mixture-of-Experts & Sparse Scaling]] — V3/V4's ~671B total / ~37B active parameter split is the reference point most other MoE efficiency claims get compared against
- Central to [[Long-Context & Hybrid Attention Architectures]] — V4's hybrid local/global attention pattern is the concrete example already cited in that note as the shipping version of "hybrid attention as inevitable"
- Relevant to [[Model Architecture Research]] as one of the few labs publishing enough architectural detail (technical reports, not just benchmark numbers) to be independently evaluated
- Relevant to [[KV-Cache Optimization & Compression]] — MLA shrinks KV-cache memory architecturally (at training/design time) rather than compressing an already-large cache after the fact
- Relevant to [[Speculative Decoding]] — Multi-Token Prediction (MTP) ships as a built-in draft mechanism trained alongside the main model, rather than a separately maintained draft model
- The origin point for [[RL with Verifiable Rewards]] as the dominant 2026 reasoning post-training paradigm — R1's technical report is the reference most other RLVR work cites or builds on, and GRPO is now the default group-relative RL algorithm family

## Notable work / recent moves
- DeepSeek-V3 technical report — MLA + auxiliary-loss-free load balancing for MoE routing, plus MTP as an auxiliary training objective that doubles as a self-speculative decoding mechanism at inference
- DeepSeek-V4 — hybrid CSA/HCA attention, MIT-licensed, targeting efficient million-token context
- DeepSeek-R1 (Jan 2025) — 671B-parameter open-weight reasoning model trained substantially via GRPO/RLVR, matching o1 on several benchmarks at a fraction of the price

## Watch list
- DeepSeek technical reports on arXiv, Hugging Face model releases

## Connections
**Works in:** [[Long-Context & Hybrid Attention Architectures]], [[Mixture-of-Experts & Sparse Scaling]], [[Model Architecture Research]], [[KV-Cache Optimization & Compression]], [[Speculative Decoding]], [[RL with Verifiable Rewards]]
