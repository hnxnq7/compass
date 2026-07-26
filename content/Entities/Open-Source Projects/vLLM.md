---
tags:
  - entity
type: oss-project
status: active
works_in:
  - "[[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]]"
  - "[[Quantization]]"
  - "[[Speculative Decoding]]"
---

## vLLM

*The dominant open-source LLM serving engine — originated PagedAttention, and is now the common substrate most disaggregation, quantization, and speculative-decoding work integrates with or ships through.*

## What they do
- Originated PagedAttention (paged, non-contiguous KV-cache memory management) and prefix caching, the baseline serving-efficiency approach most other engines have since replicated
- Ships FP8/INT4/AWQ/GPTQ quantization and EAGLE/EAGLE-3/Medusa/MTP speculative decoding as core, first-class backends rather than external plugins
- Increasingly the integration point other systems build on top of — NVIDIA Dynamo orchestrates prefill/decode pools of vLLM workers, and Mooncake integrates with it directly

## Where they fit
- Sits underneath multiple inference-optimization fields in this atlas — [[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]], [[Quantization]], and [[Speculative Decoding]] all ship through, or get benchmarked against, vLLM
- The default reference implementation new inference techniques get measured against before anyone considers them production-ready

## Notable work / recent moves
- Native FP8 KV-cache quantization on Hopper/Blackwell
- Continues absorbing new techniques (EAGLE-3, MTP, disaggregated serving support) as first-class features rather than external patches

## Watch list
- vllm-project/vllm on GitHub, vLLM blog and release notes

## Connections
**Works in:** [[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]], [[Quantization]], [[Speculative Decoding]]
