---
tags:
  - field
category: foundation-models
status: active
parent:
  - "[[Foundation Model Training]]"
related:
  - "[[Model Architecture Research]]"
enables:
  - "[[Inference & Serving Systems]]"
---

## Problem Space: Mixture-of-Experts & Sparse Scaling

## What seems genuinely hard here?
- Routing tokens to experts in a way that's both load-balanced (for training/inference efficiency) and semantically meaningful (experts actually specialize)
- Serving MoE models efficiently — large total parameter count but sparse activation creates awkward memory/compute tradeoffs at inference

## Why hasn't it been solved?
- Technical constraints — naive routers collapse to using only a few experts unless explicitly regularized, and that regularization itself trades off against quality
- Institutional / regulatory constraints — routing/load-balancing tricks that work are often treated as competitive trade secrets, so public MoE recipes lag frontier practice

## What solutions feel fake?
- MoE parameter counts quoted as if they were dense-equivalent capability, when active-parameter count is the more honest compute/quality comparator

## What solutions feel inevitable?
- MoE as the default architecture for any frontier-scale open-weight release — by mid-2026 it's already the dominant pattern, adopted in over 60% of open releases
- Latent/shared-expert variants (keeping total capacity high while shrinking active parameters further) becoming standard

## Watch list
-

## Connections
**Parent:** [[Foundation Model Training]]

**Enables:** [[Inference & Serving Systems]]

**Related:** [[Model Architecture Research]]

