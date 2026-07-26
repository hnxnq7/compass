---
tags:
  - entity
type: oss-project
status: active
works_in:
  - "[[Long-Context & Hybrid Attention Architectures]]"
  - "[[Mixture-of-Experts & Sparse Scaling]]"
  - "[[RL with Verifiable Rewards]]"
---

## Qwen (Alibaba)

*Alibaba's open-weight model family — Qwen3-Next paired hybrid linear/full attention with ultra-sparse MoE in one release, making it one of the clearest single examples of both trends this atlas tracks.*

## What they do
- Releases open-weight models (Qwen3, Qwen3-Next, Qwen3.5/3.6) under permissive licenses, widely used as a base for fine-tunes and research
- Qwen3-Next uses a 3:1 hybrid attention pattern (Gated DeltaNet linear attention for 75% of layers, standard attention for 25%) plus an ultra-sparse MoE (80B total / ~3B active params)
- Gated DeltaNet, popularized via Qwen3-Next, has since become a commonly reused linear-attention layer in other labs' hybrid designs (Kimi Linear, OLMo Hybrid)
- Adopted GRPO (originally DeepSeek's) to train reasoning-mode variants, one of the earliest and most visible non-DeepSeek adopters of group-relative RLVR

## Where they fit
- Concrete evidence for [[Long-Context & Hybrid Attention Architectures]]'s claim that hybrid local/global attention is becoming standard — Qwen3-Next matches ~32B-dense-model quality on <10% of the training compute
- Concrete evidence for [[Mixture-of-Experts & Sparse Scaling]]'s claim that MoE is now the default lever for scaling total capacity without proportional compute cost
- Evidence for [[RL with Verifiable Rewards]]'s claim that GRPO-style training has become the default reasoning post-training recipe beyond DeepSeek itself

## Notable work / recent moves
- Qwen3-Next-80B-A3B — hybrid attention + ultra-sparse MoE, released as open weights
- Qwen3.5/3.6 iterations continuing to refine the hybrid attention ratio

## Watch list
- Qwen GitHub, Alibaba Cloud community blog, Hugging Face releases

## Connections
**Works in:** [[Long-Context & Hybrid Attention Architectures]], [[Mixture-of-Experts & Sparse Scaling]], [[RL with Verifiable Rewards]]
