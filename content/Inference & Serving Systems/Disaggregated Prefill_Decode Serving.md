---
tags:
  - field
category: systems-inference
status: active
parent:
  - "[[Inference & Serving Systems]]"
depends_on:
  - "[[AI Accelerator Chips & Inference Silicon]]"
related:
  - "[[KV-Cache Optimization & Compression]]"
---

## Problem Space: Disaggregated Prefill/Decode Serving

## What seems genuinely hard here?
- Prefill (compute-bound, parallelizable) and decode (memory-bound, sequential) want opposite hardware/scheduling profiles, but historically ran on the same GPU pool
- Transferring KV cache between separate prefill and decode pools without that transfer becoming its own latency bottleneck

## Why hasn't it been solved?
- Technical constraints — splitting the two phases across pools requires fast cache transfer (network/interconnect) that has to stay well under the latency budget it's trying to save
- Institutional / regulatory constraints — this is a fairly recent architectural shift (2025-2026), so tooling and best practices are still consolidating across multiple competing systems

## What solutions feel fake?
- Disaggregation benchmarks that only show throughput gains without reporting tail latency, which is what disaggregation risks making worse if cache transfer isn't fast enough

## What solutions feel inevitable?
- PD disaggregation becoming the default architecture for any high-throughput multi-tenant serving deployment, the same way sharding became default for databases at scale
- Extending the same disaggregation idea further — separating attention from FFN layers, or separating encoder/prefill/decode for multimodal models

## Notable tools / instances
- **DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving** (Zhong et al., Hao AI Lab/UCSD, OSDI 2024) — the landmark paper that put PD disaggregation on the map; reports up to 4.48x goodput or 10.2x tighter SLO vs. co-located serving
- **Splitwise: Efficient Generative LLM Inference Using Phase Splitting** (Patel et al., Microsoft/UW, ISCA 2024) — the parallel-discovery paper, framing disaggregation as a heterogeneous-hardware design space (cheaper decode-only nodes) rather than just a scheduling fix
- MemServe, MegaScale-Infer (attention/FFN disaggregation), EPD-Serve (multimodal encoder/prefill/decode disaggregation)

## Key players
- [[NVIDIA]] — Dynamo (GA March 2026) is becoming the reference orchestration layer, routing prefill/decode work across dedicated worker pools on top of vLLM/SGLang/TensorRT-LLM
- [[Mooncake]] — Moonshot AI's KVCache-centric architecture pushed disaggregation from research paper into production traffic, now integrated with vLLM, SGLang, and Dynamo
- [[vLLM]] — the open serving engine most disaggregation designs, including Dynamo, build on top of or integrate with
- [[Hao AI Lab (UCSD, Hao Zhang)]] — originated DistServe; almost every production disaggregation system (Dynamo, Mooncake, llm-d) traces back to this paper

## Watch list
- NVIDIA Dynamo GitHub/docs, kvcache-ai/Mooncake on GitHub
- Hao AI Lab (UCSD) blog (haoailab.com/blogs) — publishes disaggregation retrospectives

## Connections
**Parent:** [[Inference & Serving Systems]]

**Depends on:** [[AI Accelerator Chips & Inference Silicon]]

**Related:** [[KV-Cache Optimization & Compression]]

**Key players:** [[NVIDIA]], [[Mooncake]], [[vLLM]], [[Hao AI Lab (UCSD, Hao Zhang)]]

