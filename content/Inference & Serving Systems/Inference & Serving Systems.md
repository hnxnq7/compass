---
tags:
  - field
  - field-root
category: systems-inference
status: tracking
depends_on:
  - "[[Foundation Model Training]]"
  - "[[AI Hardware & Compute]]"
enables:
  - "[[Agents & Tool Use]]"
---

## Problem Space: Inference & Serving Systems

## What seems genuinely hard here?
- Serving long-context, agentic workloads (many sequential calls, growing KV cache) cheaply at scale
- Squeezing latency down for interactive use without sacrificing throughput for batch use — the two want opposite scheduling
- Quantizing aggressively without silently degrading reasoning-heavy tasks that don't show up in casual eval

## Why hasn't it been solved?
- Technical constraints — memory bandwidth, not compute, is usually the bottleneck; KV cache grows linearly with context and concurrency
- Institutional / regulatory constraints — the workload mix (chat vs. agents vs. batch) is shifting faster than serving stacks can be redesigned around it
- Cost pressure and quality pressure point in opposite directions, and the industry hasn't converged on where to sit

## What solutions feel fake?
- Quantization benchmarks that only test perplexity, not downstream reasoning or tool-use accuracy
- "Infinite context" claims that don't account for the quadratic-ish cost of actually attending over it

## What solutions feel inevitable?
- Disaggregated prefill/decode serving becoming standard for high-throughput deployments
- Speculative decoding (small draft model + big verifier) as a default latency optimization
- Hardware-aware quantization (FP8/INT4) becoming the default rather than an opt-in

## Children
- [[Disaggregated Prefill_Decode Serving]]
- [[KV-Cache Optimization & Compression]]
- [[Quantization]]
- [[Speculative Decoding]]

## Connections
**Depends on:** [[Foundation Model Training]], [[AI Hardware & Compute]]

**Enables:** [[Agents & Tool Use]]

