---
tags:
  - field
category: post-training
status: tracking
parent:
  - "[[Post-training & Alignment]]"
related:
  - "[[Model Merging & Distillation]]"
enables:
  - "[[Agents & Tool Use]]"
---

## Problem Space: Supervised & Parameter-Efficient Fine-Tuning

## What seems genuinely hard here?
- Getting real behavior change from limited fine-tuning data without catastrophic forgetting of general capability
- Making PEFT methods (LoRA/QLoRA) match full fine-tuning quality on tasks that need broad, not narrow, behavior shifts

## Why hasn't it been solved?
- Technical constraints — low-rank adapters are a real capacity bottleneck for tasks that need to touch many parts of the model's knowledge, not just style
- Institutional / regulatory constraints — the best SFT datasets (curated instruction/reasoning traces) are proprietary, so open recipes lag closed ones

## What solutions feel fake?
- LoRA fine-tunes marketed as "fully customized models" when they're a thin, easily-overwritten behavioral layer on top of a frozen base

## What solutions feel inevitable?
- SFT increasingly used just to establish format/instruction-following, with the actual capability work pushed into RL-based post-training stages (see [[RL with Verifiable Rewards]])
- PEFT as the default for narrow, cheap customization; full fine-tuning reserved for cases that actually need it

## Notable tools / instances
- **LoRA: Low-Rank Adaptation of Large Language Models** (Hu, Shen, Wallis, Allen-Zhu, Li, Wang, Wang & Chen, Microsoft Research, ICLR 2022) — the foundational low-rank adapter paper; the reference method essentially every PEFT tool (Unsloth, Hugging Face PEFT) implements
- **QLoRA: Efficient Finetuning of Quantized LLMs** (Dettmers, Pagnoni, Holtzman & Zettlemoyer, University of Washington, NeurIPS 2023) — combined 4-bit quantization with LoRA to fine-tune a 65B model on a single 48GB GPU; Guanaco, trained with QLoRA in 24 GPU-hours, reached 99.3% of ChatGPT's Vicuna-benchmark score, the notable result that made single-GPU PEFT credible rather than a toy demonstration

## Key players
- [[Unsloth]] — fast, memory-efficient LoRA/QLoRA kernels; lowers the hardware bar enough for individual practitioners to run PEFT fine-tunes on a single consumer GPU
- [[Hugging Face]] — PEFT is the standard open-source library for LoRA/QLoRA and other adapter methods
- [[UW NLP (Zettlemoyer Lab)]] — authored QLoRA, the paper that made single-GPU PEFT practical and that Unsloth's and Hugging Face's stacks both build on

## Watch list
- github.com/unslothai/unsloth releases
- github.com/huggingface/peft releases

## Connections
**Parent:** [[Post-training & Alignment]]

**Enables:** [[Agents & Tool Use]]

**Related:** [[Model Merging & Distillation]]

**Key players:** [[Unsloth]], [[Hugging Face]], [[UW NLP (Zettlemoyer Lab)]]

