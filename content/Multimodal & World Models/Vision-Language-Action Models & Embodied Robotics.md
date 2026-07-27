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

## Notable tools / instances
- **RT-2: Vision-Language-Action Models Transfer Web Knowledge to Robotic Control** (Google DeepMind, CoRL 2023) — the paper that coined the "VLA" framing itself: co-fine-tune a vision-language model on robot trajectories and internet-scale VQA data, treat actions as just another token
- **OpenVLA: An Open-Source Vision-Language-Action Model** (Kim, Pertsch, Karamcheti et al. — Stanford/UC Berkeley/DeepMind/TRI, CoRL 2024) — the open-source 7B model that became the field's community-standard fine-tuning baseline, outperforming closed RT-2-X on real-robot manipulation

## Key players
- [[Physical Intelligence]] — pure-play VLA foundation model lab (π0/π0.5/π0.7); bets a single hardware-agnostic model beats vertically integrated robot makers
- [[Figure AI]] — the opposite bet: builds its own Figure 02 humanoid hardware and Helix VLA model end-to-end
- [[Google DeepMind]] — Gemini Robotics/RT-2 lineage, backed by far more compute and multimodal-model resources than most pure robotics labs
- [[NVIDIA]] — Isaac GR00T is a leading humanoid-specific foundation-model/simulation stack, plus the Jetson/Cosmos infrastructure much of the field trains and deploys on
- [[Stanford IRIS Lab (Chelsea Finn)]] — co-created OpenVLA and contributed to Open X-Embodiment/RT-X; the academic counterweight to this field's otherwise all-company key-player list, and what most independent VLA fine-tuning work actually builds on

## Watch list
- Physical Intelligence research/blog (π-series releases)
- Figure AI blog (Figure 02 + Helix updates)
- Gemini Robotics release notes
- github.com/openvla; ai.stanford.edu/~cbfinn

## Connections
**Parent:** [[Multimodal & World Models]]

**Depends on:** [[Spatial Intelligence]], [[Video Generation & World Models]]

**Related:** [[Computer-Use & Browser Agents]], [[Multisensory Integration]]

**Key players:** [[Physical Intelligence]], [[Figure AI]], [[Google DeepMind]], [[NVIDIA]], [[Stanford IRIS Lab (Chelsea Finn)]]

