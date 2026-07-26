---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Quantization]]"
---

## MIT HAN Lab (Song Han)

*Song Han's lab at MIT — AWQ, SmoothQuant, and StreamingLLM set the reference approach for activation-aware LLM quantization, adopted directly into NVIDIA TensorRT-LLM.*

## What they do
- Develops training-free, activation-aware quantization methods: SmoothQuant (INT8, migrates activation outliers into weights before quantizing), AWQ (4-bit weight-only, protects the small set of salient channels that matter most), and StreamingLLM (attention sinks for stable long-context serving)
- Ships AWQ as TinyChat for on-device inference; AWQ has around 19M+ Hugging Face downloads

## Where they fit
- The reference academic source for activation-aware quantization in [[Quantization]] — AWQ and SmoothQuant are the baseline most production quantization pipelines (including NVIDIA TensorRT-LLM) build on or get benchmarked against

## Notable work / recent moves
- AWQ won best paper at MLSys 2024
- SmoothQuant and AWQ both adopted into NVIDIA TensorRT-LLM

## Watch list
- hanlab.mit.edu, mit-han-lab GitHub org

## Connections
**Works in:** [[Quantization]]
