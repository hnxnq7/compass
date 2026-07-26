---
tags:
  - field
category: multimodal
status: active
parent:
  - "[[Multimodal & World Models]]"
depends_on:
  - "[[Foundation Model Training]]"
enables:
  - "[[Vision-Language-Action Models & Embodied Robotics]]"
related:
  - "[[Agents & Tool Use]]"
  - "[[Spatial Intelligence]]"
---

## Problem Space: Video Generation & World Models

## What seems genuinely hard here?
- Physical consistency over time — objects staying object-permanent, physics staying plausible across long generated clips
- Getting a model to represent *causal* structure (what happens if X) rather than just plausible-looking frame sequences
- Evaluation — there's no clean automatic metric for "does this violate physics" the way perplexity works for text

## Why hasn't it been solved?
- Technical constraints — video is enormously higher-dimensional than text/image, and compute cost scales with both spatial and temporal resolution
- Physical / biological constraints — models have no grounded interaction with the physical world, only passive video, so they learn correlational not causal dynamics
- Data — high-quality, diverse, long-horizon video is scarcer and more expensive to source/caption than text

## What solutions feel fake?
- Short, cherry-picked demo clips presented as evidence of general physical understanding
- "World model" branding applied to systems that are really just strong next-frame predictors with no explicit state or action-conditioning

## What solutions feel inevitable?
- Action-conditioned video models (trained with agent/robot interaction data, not just passive video) becoming the path to real world models
- Hybrid architectures combining diffusion (visual fidelity) with autoregressive or latent-space world modeling (temporal/causal structure)
- Video models converging with robotics — this is where "world model" claims will actually get tested against reality

## Notable tools / instances
- Sora 2, Veo 3.1, Kling, Seedance 2.0, HappyHorse-1.0 (pure video generation); World Labs' Marble (persistent 3D world generation, closer to "renderer")
- Fei-Fei Li's June 2026 taxonomy is a useful filter for evaluating any "world model" claim: is it functioning as a **renderer** (generates plausible-looking scenes), a **simulator** (predicts consequences of actions), or a **planner** (uses that prediction to choose actions)? Most current video models are still mainly renderers.

## Watch list
*Labs, people, papers, accounts to track for this field.*
-

## Connections
**Parent:** [[Multimodal & World Models]]

**Depends on:** [[Foundation Model Training]]

**Enables:** [[Vision-Language-Action Models & Embodied Robotics]]

**Related:** [[Agents & Tool Use]], [[Spatial Intelligence]]

