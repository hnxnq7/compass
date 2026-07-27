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

## Notable tools / instances
- **GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers** (Frantar, Ashkboos, Hoefler & Alistarh, IST Austria, ICLR 2023) — second-order-correction weight quantization; first method to make running a 175B model on a single GPU practical at 3-4 bits
- **AWQ: Activation-aware Weight Quantization for LLM Compression and Acceleration** (Lin et al., MIT HAN Lab, MLSys 2024 best paper) — protects the small set of salient weight channels identified from activation statistics, the reference 4-bit weight-only method
- **SmoothQuant: Accurate and Efficient Post-Training Quantization for Large Language Models** (Xiao et al., MIT HAN Lab, ICML 2023) — migrates activation outliers into weights before quantizing, enabling accurate INT8 W8A8

## Key players
- [[NVIDIA]] — Blackwell's fifth-gen Tensor Cores add native NVFP4/MXFP4 support, with TensorRT-LLM as the production stack built around it
- [[MIT HAN Lab (Song Han)]] — AWQ and SmoothQuant, both adopted directly into NVIDIA TensorRT-LLM, are the reference activation-aware quantization methods
- [[vLLM]] — ships FP8/INT4/AWQ/GPTQ quantization as core serving features rather than a bolt-on
- [[IST Austria (Dan Alistarh Lab)]] — GPTQ and SparseGPT are the reference second-order-correction methods, a methodologically distinct lineage from MIT HAN Lab's activation-aware approach

## Watch list
- mit-han-lab GitHub org, hanlab.mit.edu
- daslab.ista.ac.at, IST-DASLab GitHub org
- vLLM quantization docs, NVIDIA NVFP4 technical reports

## Connections
**Parent:** [[Inference & Serving Systems]]

**Depends on:** [[AI Accelerator Chips & Inference Silicon]]

**Key players:** [[NVIDIA]], [[MIT HAN Lab (Song Han)]], [[vLLM]], [[IST Austria (Dan Alistarh Lab)]]

