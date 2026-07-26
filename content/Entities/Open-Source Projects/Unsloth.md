---
tags:
  - entity
type: oss-project
status: active
works_in:
  - "[[Supervised & Parameter-Efficient Fine-Tuning]]"
---

## Unsloth

*YC-backed open-source project (founded by Daniel and Michael Han) building fast, memory-efficient LoRA/QLoRA fine-tuning kernels.*

## What they do
- Ships optimized training kernels claiming 2-30x faster fine-tuning and ~70% less VRAM than standard LoRA/QLoRA implementations
- Makes fine-tuning 7B-70B open-weight models feasible on a single consumer GPU or one rented cloud GPU in hours rather than requiring a training cluster
- Released Unsloth Studio (March 2026), a no-code GUI covering the full fine-tune lifecycle (data prep, training, deployment)

## Where they fit
- The go-to low-friction tooling for [[Supervised & Parameter-Efficient Fine-Tuning]] at small scale — lowers the hardware bar enough that individual practitioners, not just labs, can run PEFT fine-tunes

## Notable work / recent moves
- Unsloth Studio (March 2026) — no-code fine-tuning GUI
- Continued kernel-level optimization work targeting consumer-GPU fine-tuning

## Watch list
- github.com/unslothai/unsloth

## Connections
**Works in:** [[Supervised & Parameter-Efficient Fine-Tuning]]
