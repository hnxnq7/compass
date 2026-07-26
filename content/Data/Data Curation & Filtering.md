---
tags:
  - field
category: data
status: tracking
parent:
  - "[[Data]]"
related:
  - "[[Synthetic Data Generation & Model Collapse]]"
enables:
  - "[[Foundation Model Training]]"
---

## Problem Space: Data Curation & Filtering

## What seems genuinely hard here?
- Filtering for quality/diversity at web scale without a clean automatic proxy for "quality" that doesn't just select for a narrow style
- Balancing deduplication (avoiding memorization) against coverage (not throwing away legitimately rare, valuable examples)

## Why hasn't it been solved?
- Technical constraints — quality filters are themselves models with their own biases, so filtering is never neutral, it's another layer of induced distribution shift
- Institutional / regulatory constraints — the best curated datasets are proprietary competitive assets now, so the field's public knowledge lags well behind frontier lab practice

## What solutions feel fake?
- Filtering pipelines validated only by downstream benchmark score, which rewards filters that overfit to benchmark style rather than genuinely improving quality

## What solutions feel inevitable?
- Curation increasingly treated as a first-class research discipline (not a preprocessing chore) given synthetic data's dependence on it for avoiding collapse

## Watch list
-

## Connections
**Parent:** [[Data]]

**Enables:** [[Foundation Model Training]]

**Related:** [[Synthetic Data Generation & Model Collapse]]

