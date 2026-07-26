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

## Watch list
-

## Connections
**Parent:** [[Post-training & Alignment]]

**Enables:** [[Agents & Tool Use]]

**Related:** [[Model Merging & Distillation]]

