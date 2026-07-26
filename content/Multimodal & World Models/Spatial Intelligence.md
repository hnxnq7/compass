---
tags:
  - field
category: multimodal
status: active
parent:
  - "[[Multimodal & World Models]]"
depends_on:
  - "[[Video Generation & World Models]]"
enables:
  - "[[Vision-Language-Action Models & Embodied Robotics]]"
---

## Problem Space: Spatial Intelligence

## What seems genuinely hard here?
- Building a persistent, consistent 3D representation of a space from 2D inputs (image/video/text) rather than a flat, unstructured latent
- Distinguishing genuine spatial reasoning (understanding occlusion, object permanence, physical layout) from surface-level texture/plausibility that only looks 3D-consistent in short clips
- Fei-Fei Li's own framing: most systems calling themselves "world models" are only doing one of three jobs (render / simulate / plan) — spatial intelligence specifically bets that the renderer and simulator functions are prerequisites the field hasn't actually nailed yet

## Why hasn't it been solved?
- Technical constraints — going from passive video (correlational) to a queryable, persistent 3D world model (causal, spatially grounded) is a different and harder problem than video generation alone
- Physical / biological constraints — human spatial cognition is grounded in embodied interaction (moving through space, touching things); most training data for these models is still passive and non-interactive

## What solutions feel fake?
- Impressive single-shot 3D scene generations that don't hold up under multi-view or long-horizon consistency checks (camera moves away and back, does the room stay the same?)

## What solutions feel inevitable?
- Convergence with robotics/embodied AI, since spatial intelligence's practical test is whether it lets an agent (physical or virtual) act correctly in the space it modeled
- Continued heavy capital investment given the framing of spatial intelligence as "complementary to, not a subset of, language intelligence" — this is a deliberate new front, not an extension of LLM scaling

## Notable tools / instances
- World Labs' Marble (persistent 3D world generation from image/video/text)

## Watch list
- World Labs research blog

## Connections
**Parent:** [[Multimodal & World Models]]

**Depends on:** [[Video Generation & World Models]]

**Enables:** [[Vision-Language-Action Models & Embodied Robotics]]

