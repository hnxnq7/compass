---
tags:
  - field
category: data
status: tracking
parent:
  - "[[Data]]"
related:
  - "[[Safety & Governance]]"
  - "[[AI Policy & Regulation]]"
---

## Problem Space: Data Attribution & Provenance

## What seems genuinely hard here?
- Tracing a specific model output back to specific training examples at any scale beyond toy models
- Licensing/consent frameworks that were designed for discrete copies of works, not for statistical influence spread across billions of parameters

## Why hasn't it been solved?
- Technical constraints — influence-function-style attribution methods are expensive and approximate; nothing scales cleanly to frontier-size training sets
- Institutional / regulatory constraints — copyright law, still largely unsettled for training-data use across jurisdictions, is the actual bottleneck more than the ML technique

## What solutions feel fake?
- Watermarking schemes pitched as a provenance solution when they're trivially strippable and don't solve attribution for the vast majority of un-watermarked historical content

## What solutions feel inevitable?
- Licensing deals (direct publisher/platform agreements) substituting for technical attribution as the practical resolution, at least in the near term
- Content-credential standards (e.g. C2PA-style provenance metadata) becoming more common for AI-generated media specifically, even if training-data attribution stays unsolved

## Watch list
-

## Connections
**Parent:** [[Data]]

**Related:** [[Safety & Governance]], [[AI Policy & Regulation]]

