---
tags:
  - field
category: post-training
status: tracking
parent:
  - "[[Post-training & Alignment]]"
related:
  - "[[Supervised & Parameter-Efficient Fine-Tuning]]"
enables:
  - "[[Inference & Serving Systems]]"
---

## Problem Space: Model Merging & Distillation

## What seems genuinely hard here?
- Merging independently-tuned checkpoints (different skills, different safety tunes) without destructive interference between them
- Distilling a large model's capability into a small one without just distilling its surface style while losing the underlying reasoning

## Why hasn't it been solved?
- Technical constraints — merge quality is highly sensitive to how similar the source checkpoints are; merging very different fine-tunes often just averages away both

## What solutions feel fake?
- Distilled "mini" models marketed as near-parity with their teacher based on benchmark scores that don't test the harder tail of capability

## What solutions feel inevitable?
- Merging as a cheap alternative to a full extra RL pass for combining style/safety/capability tunes, especially for teams without frontier-scale compute
- Distillation becoming the default path to cheap, fast models once a frontier "teacher" exists — most of the value has already moved downstream by the time a capability is a year old

## Key players
- [[Arcee AI]] — maintains MergeKit and DistillKit; merging/distillation as their entire product thesis rather than a side technique
- [[Sakana AI]] — Evolutionary Model Merge, automated evolutionary search over merge recipes instead of hand-tuning

## Watch list
- github.com/arcee-ai/mergekit releases
- Sakana AI research blog

## Connections
**Parent:** [[Post-training & Alignment]]

**Enables:** [[Inference & Serving Systems]]

**Related:** [[Supervised & Parameter-Efficient Fine-Tuning]]

**Key players:** [[Arcee AI]], [[Sakana AI]]

