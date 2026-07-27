---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Speculative Decoding]]"
---

## SafeAI Lab (Waterloo, Hongyang Zhang)

*Hongyang Zhang's lab at the University of Waterloo / Vector Institute — originated the EAGLE series, the feature-level speculative-decoding method now shipped as a standard vLLM/SGLang backend.*

## What they do
- Develops inference-acceleration methods, principally the EAGLE / EAGLE-2 / EAGLE-3 line: drafting at the model's feature level (not just token level) to get much higher acceptance rates than earlier speculative-decoding methods
- Broader research interest spans efficient and safe LLM inference (Zhang's other line of work is LLM safety/robustness), but EAGLE is the lab's clearest sustained contribution to serving systems

## Where they fit
- The academic origin of the EAGLE family already cited in [[Speculative Decoding]]'s Notable tools/instances — now a standard backend in vLLM and SGLang, not just a research artifact
- Fills the academic-lab gap in a field whose Key players list (Together AI, DeepSeek, vLLM) was otherwise company-only

## Notable work / recent moves
- EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty (Li, Wei, Zhang & Zhang, ICML 2024) — 2.1-3.8x speedup over vanilla autoregressive decoding on MT-Bench, faster than both Lookahead and Medusa
- EAGLE-2 and EAGLE-3 extend the approach with dynamic draft trees and further feature-uncertainty refinements

## Watch list
- github.com/SafeAILab, hongyanz.github.io

## Connections
**Works in:** [[Speculative Decoding]]
