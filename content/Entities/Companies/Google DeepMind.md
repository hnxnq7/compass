---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Model Architecture Research]]"
  - "[[Scaling Laws & Compute-Optimal Training]]"
  - "[[Mechanistic Interpretability]]"
  - "[[Video Generation & World Models]]"
  - "[[Vision-Language-Action Models & Embodied Robotics]]"
  - "[[KV-Cache Optimization & Compression]]"
---

## Google DeepMind

*Google's merged AI research org — authored the Chinchilla scaling laws that (until the current data-constrained era) defined what "compute-optimal" training meant for the whole field; also runs a dedicated mechanistic interpretability team.*

## What they do
- Trains and ships the Gemini model family, alongside sustained architecture and scaling-law research published as papers rather than just product releases
- Authored "Training Compute-Optimal Large Language Models" (Chinchilla, 2022) — showed most contemporary LLMs were significantly undertrained relative to their parameter count, resetting how labs allocated compute vs. data
- One of the few orgs with enough compute to run controlled architecture ablations at a scale where results actually transfer to frontier models
- Separately, a mechanistic interpretability team led by Neel Nanda (ex-Anthropic, under Chris Olah) released Gemma Scope and Gemma Scope 2 — open SAEs/transcoders on every layer of every Gemma model size (270M–27B params)
- Genie 3 (Jan 2026 release to Google AI Ultra subscribers) is an 11B-parameter autoregressive transformer generating real-time, navigable, playable 3D worlds at 720p/24fps from text or images, with persistent worlds, object permanence, and emergent physics — action-conditioned, not just a fixed video clip
- Ships Gemini Robotics (with the RT-2 lineage) applying the same model family to embodied control, making DeepMind one of the most-cited labs (alongside Physical Intelligence) for general-purpose VLA research

## Where they fit
- Chinchilla is the direct predecessor to the "data-aware scaling laws" framing [[Scaling Laws & Compute-Optimal Training]] flags as the current frontier — that note's core tension (compute-optimal vs. data availability) traces back to this work
- Relevant to [[Model Architecture Research]] as one of the handful of labs that can validate an architecture idea at the scale where small-ablation results stop being reliable
- Gemma Scope is the largest open-source SAE toolkit available, functionally democratizing [[Mechanistic Interpretability]] research for anyone without frontier-lab compute
- Genie is the sharpest existing example of the "simulator," not just "renderer," end of Fei-Fei Li's render/simulate/plan taxonomy used in [[Video Generation & World Models]] — it's interactive and action-conditioned, not just visually plausible
- Gemini Robotics puts DeepMind directly in [[Vision-Language-Action Models & Embodied Robotics]] alongside pure-play robotics labs, backed by far larger compute and multimodal-model resources than most competitors
- TurboQuant (ICLR 2026) compresses KV cache to 3 bits with no measured accuracy loss, directly relevant to [[KV-Cache Optimization & Compression]]

## Notable work / recent moves
- Chinchilla scaling laws (2022) — still the reference point cited against newer data-constrained scaling work
- Ongoing Gemini architecture and training-efficiency research
- Gemma Scope 2 release (2025) — SAEs & transcoders across all Gemma 3 sizes
- Genie 3 general release to Google AI Ultra subscribers, Jan 2026
- Gemini Robotics / RT-2 lineage continuing to ship as part of the broader Gemini model family
- TurboQuant KV-cache compression (ICLR 2026) — random orthogonal rotation before quantization, 6x memory reduction at 3 bits with zero measured accuracy loss

## Watch list
- DeepMind publications page, Gemini model/tech reports
- DeepMind Safety Research blog (Medium)
- Genie / Gemini Robotics release notes

## Connections
**Works in:** [[Model Architecture Research]], [[Scaling Laws & Compute-Optimal Training]], [[Mechanistic Interpretability]], [[Video Generation & World Models]], [[Vision-Language-Action Models & Embodied Robotics]], [[KV-Cache Optimization & Compression]]
