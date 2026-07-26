---
tags:
  - field
category: multimodal
status: active
parent:
  - "[[Multimodal & World Models]]"
depends_on:
  - "[[Spatial Intelligence]]"
  - "[[Video Generation & World Models]]"
related:
  - "[[Computer-Use & Browser Agents]]"
  - "[[Multisensory Integration]]"
---

## Problem Space: Vision-Language-Action Models & Embodied Robotics

## What seems genuinely hard here?
- Closing the "perception-decision-execution" loop reliably in physically diverse, unstructured real-world environments, not curated lab settings
- Models still largely *imitate* patterns from training demonstrations rather than genuinely predicting the physical consequences of an action before taking it
- Sim-to-real transfer — behavior learned in simulation or from video doesn't reliably generalize to real actuators, friction, and sensor noise

## Why hasn't it been solved?
- Physical / biological constraints — the physical world has combinatorially more edge cases than any feasible training distribution can cover
- Technical constraints — VLA models lack explicit forward models of physics, so they can't "imagine" outcomes before acting the way a world model in principle could supply

## What solutions feel fake?
- Warehouse/manipulation demo reels presented as general-purpose robotic competence when they're narrow, pre-tuned tasks

## What solutions feel inevitable?
- Integrating predictive world models directly into the VLA loop (so the policy can evaluate likely outcomes before committing to an action) rather than pure imitation — this is explicitly where the field is heading as of 2026
- Convergence of robot foundation models with the broader [[Video Generation & World Models]] / [[Spatial Intelligence]] research, since all three need the same underlying capability: predicting what happens next in physical space

## Watch list
-

## Connections
**Parent:** [[Multimodal & World Models]]

**Depends on:** [[Spatial Intelligence]], [[Video Generation & World Models]]

**Related:** [[Computer-Use & Browser Agents]], [[Multisensory Integration]]

