---
tags:
  - field
category: systems-inference
status: active
parent:
  - "[[Inference & Serving Systems]]"
depends_on:
  - "[[AI Accelerator Chips & Inference Silicon]]"
---

## Problem Space: Quantization

## What seems genuinely hard here?
- Quantizing aggressively (INT4/FP8) without silently degrading reasoning-heavy tasks that don't show up in casual perplexity-based eval
- Different layers/weights have very different sensitivity to precision loss, so uniform quantization is always leaving performance on the table somewhere

## Why hasn't it been solved?
- Technical constraints — outlier activations in specific channels are disproportionately important and resist naive low-bit quantization
- Institutional / regulatory constraints — quantization-quality tradeoffs are usually validated in-house against a lab's own eval suite, so public claims are hard to compare apples-to-apples

## What solutions feel fake?
- Quantization papers that report perplexity-preserved but skip downstream reasoning/tool-use accuracy, which degrades faster than perplexity under aggressive quantization

## What solutions feel inevitable?
- Hardware-aware low-bit formats (FP8, and increasingly INT4) becoming the default serving precision rather than an opt-in optimization, especially as accelerator silicon adds native support for them

## Key players
- [[NVIDIA]] — Blackwell's fifth-gen Tensor Cores add native NVFP4/MXFP4 support, with TensorRT-LLM as the production stack built around it
- [[MIT HAN Lab (Song Han)]] — AWQ and SmoothQuant, both adopted directly into NVIDIA TensorRT-LLM, are the reference activation-aware quantization methods
- [[vLLM]] — ships FP8/INT4/AWQ/GPTQ quantization as core serving features rather than a bolt-on

## Watch list
- mit-han-lab GitHub org, hanlab.mit.edu
- vLLM quantization docs, NVIDIA NVFP4 technical reports

## Connections
**Parent:** [[Inference & Serving Systems]]

**Depends on:** [[AI Accelerator Chips & Inference Silicon]]

**Key players:** [[NVIDIA]], [[MIT HAN Lab (Song Han)]], [[vLLM]]

