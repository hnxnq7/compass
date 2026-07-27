---
tags:
  - field
category: systems-inference
status: active
parent:
  - "[[Inference & Serving Systems]]"
related:
  - "[[Long-Context & Hybrid Attention Architectures]]"
  - "[[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]]"
---

## Problem Space: KV-Cache Optimization & Compression

## What seems genuinely hard here?
- KV cache grows linearly with context length AND concurrency, making it the dominant memory cost for long-context, high-concurrency agentic serving
- Compressing/evicting cache entries without silently dropping information the model actually needed for a later token

## Why hasn't it been solved?
- Technical constraints — memory bandwidth, not compute, is the bottleneck decode is bound by, and KV cache is exactly the thing eating that bandwidth
- Institutional / regulatory constraints — the workload mix (chat vs. agent vs. batch) that determines optimal cache strategy is shifting faster than serving stacks are redesigned around it

## What solutions feel fake?
- Cache compression numbers reported only on perplexity, not on downstream tasks (tool use, multi-step reasoning) that are more sensitive to lost context

## What solutions feel inevitable?
- KV-cache-aware routing and transfer (e.g. moving cache between prefill and decode pools) as a standard serving-stack feature, not a niche optimization
- This is one of the concrete reasons agentic workloads (many sequential calls, growing cache) are reshaping serving-system design in [[Agents & Tool Use]]

## Notable tools / instances
- **Efficient Streaming Language Models with Attention Sinks** (Xiao et al., MIT HAN Lab, ICLR 2024) — "StreamingLLM"; found that keeping a handful of initial "attention sink" tokens lets a finite attention window generalize to 4M+ tokens without fine-tuning, up to 22.2x faster than sliding-window recomputation
- **H2O: Heavy-Hitter Oracle for Efficient Generative Inference of Large Language Models** (Zhang et al., UT Austin/CMU/Stanford/UC Berkeley, NeurIPS 2023) — eviction policy built on the observation that a small set of "heavy hitter" tokens accounts for most attention mass; reduces KV-cache memory 5-10x at comparable accuracy

## Key players
- [[NVIDIA]] — KVTC (ICLR 2026, up to 20x compression via transform coding) plus Dynamo's KV Block Manager for cluster-scale cache coordination
- [[Google DeepMind]] — TurboQuant compresses KV cache to 3 bits with no measured accuracy loss (ICLR 2026), no calibration required
- [[DeepSeek]] — Multi-Head Latent Attention shrinks KV-cache memory architecturally at training time, instead of compressing an already-large cache after the fact
- [[Mooncake]] — treats KV cache as a first-class, disaggregated systems resource rather than local GPU state
- [[MIT HAN Lab (Song Han)]] — StreamingLLM's attention-sink finding is the academic reference point for cache eviction without downstream-task collapse

## Watch list
- Awesome-KV-Cache-Optimization survey (GitHub, tracks ACL 2026 literature)
- vLLM and SGLang release notes for new cache-management features
- mit-han-lab GitHub org for StreamingLLM follow-ups

## Connections
**Parent:** [[Inference & Serving Systems]]

**Related:** [[Long-Context & Hybrid Attention Architectures]], [[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]]

**Key players:** [[NVIDIA]], [[Google DeepMind]], [[DeepSeek]], [[Mooncake]], [[MIT HAN Lab (Song Han)]]

