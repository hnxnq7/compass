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
- **Thinking in Space: How Multimodal Large Language Models See, Remember, and Recall Spaces** (Yang, Yang, Gupta, Han, Fei-Fei Li, Saining Xie — NYU/Yale/Stanford, CVPR 2025) — introduced VSI-Bench, the reference benchmark for testing whether MLLMs actually build persistent 3D spatial cognition from video rather than pattern-matching individual frames
- Notable result: VSI-Bench found MLLMs meaningfully subhuman at spatial cognition even while saturating other visual benchmarks — concrete evidence for the field's core bet that spatial reasoning is a distinct, unsolved capability, not a side effect of scaling language-vision models further

## Key players
- [[World Labs]] — Fei-Fei Li's company; Marble is the reference example of a system targeting persistent, queryable 3D representation rather than passive video
- [[General Intuition]] — different bet within the same field: trains agents to act spatially using gameplay video as a cheap source of action-labeled spatial-temporal data, rather than generating 3D scenes
- [[NVIDIA]] — shows up as capital/compute backing the category (backed World Labs' \$1B round) rather than as a model builder itself
- [[NYU Xie Lab (Saining Xie)]] — the academic anchor for the field: built VSI-Bench and Cambrian-S in direct collaboration with Fei-Fei Li, giving the field's most visible industry bet (World Labs) an independent academic evaluation benchmark

## Watch list
- World Labs research blog
- General Intuition funding/product announcements
- vision-x-nyu.github.io (VSI-Bench, Cambrian-S project pages)

## Connections
**Parent:** [[Multimodal & World Models]]

**Depends on:** [[Video Generation & World Models]]

**Enables:** [[Vision-Language-Action Models & Embodied Robotics]]

**Key players:** [[World Labs]], [[General Intuition]], [[NVIDIA]], [[NYU Xie Lab (Saining Xie)]]

