---
tags:
  - entity
type: oss-project
status: active
works_in:
  - "[[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]]"
  - "[[KV-Cache Optimization & Compression]]"
---

## Mooncake

*KVCache-centric disaggregated serving architecture, open-sourced by Moonshot AI (maker of Kimi) — one of the clearest production proofs that separating prefill/decode and treating cache as a first-class resource works at real scale.*

## What they do
- Splits prefill and decode into independent resource pools connected through a dedicated KVCache pool, instead of pinning cache to whichever GPU happened to run prefill
- Treats KVCache placement and transfer as the central scheduling problem, not a side effect of the disaggregation split
- Originated at Moonshot AI for production Kimi traffic; now integrates directly with vLLM, SGLang, and NVIDIA Dynamo

## Where they fit
- The production reference case for [[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]] — cited across the disaggregation literature as one of the first systems to treat KVCache as a first-class, cross-pool systems resource rather than local GPU state
- Directly relevant to [[KV-Cache Optimization & Compression]] for the same reason: cache-aware scheduling and transfer as the design center, not an afterthought bolted onto an existing serving stack

## Notable work / recent moves
- Open-sourced and propagated into the broader serving ecosystem via direct integration with vLLM, SGLang, and NVIDIA Dynamo

## Watch list
- kvcache-ai/Mooncake on GitHub

## Connections
**Works in:** [[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]], [[KV-Cache Optimization & Compression]]
