---
tags:
  - field
category: interpretability
status: active
parent:
  - "[[Interpretability]]"
related:
  - "[[Activation Steering & Representation Engineering]]"
enables:
  - "[[Safety & Governance]]"
---

## Problem Space: Mechanistic Interpretability

## What seems genuinely hard here?
- Superposition — models pack more features than they have dimensions, so individual neurons rarely correspond to single interpretable concepts
- Scaling circuit-level analysis to frontier-size models without the method itself costing more compute than training a small model
- Validating that a discovered "feature" or "circuit" is causally load-bearing, not just a plausible-looking correlation found by an automated search

## Why hasn't it been solved?
- Technical constraints — sparse autoencoders help decompose activations into more monosemantic features, but consistency across training runs/seeds is still an open problem — the same "feature" isn't reliably rediscovered
- Institutional / regulatory constraints — genuinely rigorous circuit analysis is extremely labor-intensive; automated approaches (like sparse circuit learning) trade some rigor for scalability

## What solutions feel fake?
- Feature-discovery papers that show a cherry-picked handful of clean, interpretable features without reporting what fraction of all discovered features are actually interpretable

## What solutions feel inevitable?
- Interpretability tooling moving from academic curiosity into practical debugging/auditing infrastructure — this shift is already visible by 2026
- Expansion beyond text into audio, code, and multimodal models, since the same superposition problem exists everywhere models compress information

## Notable tools / instances
- Sparse autoencoders (SAEs), CircuitLasso (scalable sparse-regression circuit learning)

## Watch list
-

## Connections
**Parent:** [[Interpretability]]

**Enables:** [[Safety & Governance]]

**Related:** [[Activation Steering & Representation Engineering]]

