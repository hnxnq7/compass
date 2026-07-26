---
tags:
  - field
category: multimodal
status: active
parent:
  - "[[Multimodal & World Models]]"
related:
  - "[[Vision-Language-Action Models & Embodied Robotics]]"
  - "[[Neuro-AI & Brain-Inspired Models]]"
---

## Problem Space: Multisensory Integration

## What seems genuinely hard here?
- Combining fundamentally mismatched signal types (vision, touch, audio, sometimes olfaction/gustation) into one coherent representation, when each modality has different noise characteristics, timescales, and reliability
- Reliability-weighted fusion — knowing when to trust vision over touch (or vice versa) under conflicting or ambiguous input, the way biological brains do context-dependently
- Most AI systems are still single- or dual-modality; true multisensory fusion at the sensor + representation level is far less mature than vision-language work

## Why hasn't it been solved?
- Technical constraints — there isn't yet a settled architecture for fusing more than two modalities without one dominating or the fusion becoming a late, shallow concatenation
- Physical / biological constraints — building the actual sensor hardware (tactile, olfactory) to feed a multisensory model is itself a hard, underinvested robotics problem, not just an ML one

## What solutions feel fake?
- "Multimodal" branding applied to systems that are really vision-language-only, with other senses either absent or bolted on as an afterthought

## What solutions feel inevitable?
- Recurrent/temporal architectures explicitly modeling the probabilistic, context-dependent weighting seen in biological multisensory integration, rather than static fusion
- Energy-autonomous, self-powered multisensory hardware (e.g. triboelectric sensing) as a path toward multisensory robots that aren't tethered by sensor power budgets

## Notable tools / instances
- MIT Media Lab's Multisensory Intelligence research group — the most direct academic anchor for this field
- UCLA Multisensory Processing Lab (Shams Lab) — computational/behavioral research on human multisensory integration, relevant as ground truth for AI models to match against

## Watch list
- MIT Media Lab Multisensory Intelligence group publications

## Connections
**Parent:** [[Multimodal & World Models]]

**Related:** [[Vision-Language-Action Models & Embodied Robotics]], [[Neuro-AI & Brain-Inspired Models]]

