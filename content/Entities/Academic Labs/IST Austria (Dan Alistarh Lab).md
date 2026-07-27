---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Quantization]]"
---

## IST Austria (Dan Alistarh Lab)

*Dan Alistarh's Distributed Algorithms and Systems Lab at ISTA — GPTQ, SparseGPT, and QMoE are the reference post-training compression methods that most 4-bit-and-below quantization work still benchmarks against.*

## What they do
- Develops post-training compression algorithms with theoretical grounding (approximate second-order/Hessian information) rather than purely empirical calibration: GPTQ (weight quantization), SparseGPT (weight pruning), QMoE (sub-1-bit MoE compression)
- Distinct methodological lineage from MIT HAN Lab's activation-aware approach (AWQ/SmoothQuant) — GPTQ instead reconstructs weights layer-by-layer against a calibration set using second-order error correction

## Where they fit
- A second, methodologically distinct academic anchor for [[Quantization]] alongside [[MIT HAN Lab (Song Han)]] — GPTQ was the method that first made it practical to run a 175B-parameter model on a single GPU at 3-4 bits, and remains a standard baseline/backend (e.g. in AutoGPTQ, vLLM) years later

## Notable work / recent moves
- GPTQ: Accurate Post-Training Quantization for Generative Pre-trained Transformers (Frantar, Ashkboos, Hoefler & Alistarh, ICLR 2023) — quantizes 175B-parameter models in ~4 GPU-hours to 3-4 bits with minimal accuracy loss
- SparseGPT and QMoE extend the same second-order-correction approach to pruning and to trillion-parameter MoE compression respectively

## Watch list
- daslab.ista.ac.at, IST-DASLab GitHub org

## Connections
**Works in:** [[Quantization]]
