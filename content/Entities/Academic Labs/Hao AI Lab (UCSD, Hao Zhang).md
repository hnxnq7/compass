---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]]"
---

## Hao AI Lab (UCSD, Hao Zhang)

*Hao Zhang's lab at UC San Diego — originated DistServe, the paper that put prefill/decode disaggregation on the map, and keeps shipping the systems (vLLM contributions, LMArena) that production serving stacks are built on.*

## What they do
- Efficient and scalable ML systems research: LLM serving, distributed training, and open-source AI infrastructure
- Authored DistServe (OSDI 2024), the paper that introduced splitting prefill and decode across separate GPU pools for goodput-optimized serving
- Major open-source footprint — core contributions to vLLM, plus LMArena and FastVideo, reaching production traffic rather than staying paper-only

## Where they fit
- The academic origin point for [[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]] — DistServe is the paper NVIDIA Dynamo, Mooncake, and most other disaggregation systems cite as the reference architecture
- Hao Zhang won the OSDI 2021 Best Paper Award and is a 2026 Sloan Research Fellow, one of the few academics whose serving-systems work ships directly into production frameworks

## Notable work / recent moves
- DistServe (Zhong et al., OSDI 2024) — up to 4.48x goodput or 10.2x tighter SLO vs. co-located serving; the lab's own 2025 retrospective notes almost every production serving framework (NVIDIA Dynamo, llm-d, Ray Serve LLM, SGLang, vLLM, Mooncake) now runs on some form of disaggregation
- DFlash (2026) — block-diffusion speculative decoding reporting up to 15x higher throughput for gpt-oss-120b on NVIDIA Blackwell

## Watch list
- hao-ai-lab.github.io, haoailab.com/blogs

## Connections
**Works in:** [[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]]
