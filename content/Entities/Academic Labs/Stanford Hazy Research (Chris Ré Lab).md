---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Long-Context & Hybrid Attention Architectures]]"
  - "[[Model Architecture Research]]"
---

## Stanford Hazy Research (Chris Ré Lab)

*Chris Ré's systems-for-ML lab at Stanford — FlashAttention and the S4/H3 line of state-space work that fed directly into Mamba, still the reference lab for "make attention/SSMs actually fast on real hardware."*

## What they do
- Originated FlashAttention (IO-aware exact attention, adopted by essentially every major training/inference stack) and FlashAttention-2/3
- Built the S4 → H3 → FlashConv line of state-space-model research, the direct academic lineage that led to Mamba (Albert Gu, a Hazy Research collaborator, later at CMU)
- Keeps publishing at the intersection of hardware-aware kernels and long-sequence architecture, not just algorithms in the abstract

## Where they fit
- The clearest academic counterweight to the company-only "who ships hybrid attention" list in [[Long-Context & Hybrid Attention Architectures]] — FlashAttention is the systems substrate nearly every hybrid-attention model (DeepSeek, Qwen, Jamba) is actually trained and served on
- Also the standing academic reference in [[Model Architecture Research]] for whether SSM/attention hybrids hold up outside a single lab's frontier run — their ablations are some of the few done independently of a frontier training budget

## Notable work / recent moves
- FlashAttention (Dao et al., NeurIPS 2022) and FlashAttention-2 (2023) — now table-stakes in PyTorch, vLLM, SGLang, and most training frameworks
- H3 / "Hungry Hungry Hippos" and FlashConv — early proof that SSMs could be trained at billion-parameter scale, precursor to Mamba

## Watch list
- hazyresearch.stanford.edu/blog

## Connections
**Works in:** [[Long-Context & Hybrid Attention Architectures]], [[Model Architecture Research]]
