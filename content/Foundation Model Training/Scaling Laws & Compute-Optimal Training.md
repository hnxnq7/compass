---
tags:
  - field
category: foundation-models
status: tracking
parent:
  - "[[Foundation Model Training]]"
depends_on:
  - "[[AI Hardware & Compute]]"
related:
  - "[[Synthetic Data Generation & Model Collapse]]"
---

## Problem Space: Scaling Laws & Compute-Optimal Training

## What seems genuinely hard here?
- Predicting downstream capability (not just loss) from a scaling curve — loss-optimal isn't the same as capability-optimal, and the gap is where most surprises live
- Data is now often the binding constraint rather than compute, which breaks the classic compute-optimal framing (Chinchilla-style) that assumed data was effectively unlimited

## Why hasn't it been solved?
- Technical constraints — scaling laws are empirical fits with wide error bars, extrapolated well past the regime they were measured in
- Institutional / regulatory constraints — only frontier labs can run experiments at the scale where the laws might break, so independent verification is rare

## What solutions feel fake?
- Scaling-law extrapolations presented as near-certainties in public communication rather than as fits with real uncertainty

## What solutions feel inevitable?
- Data-aware scaling laws (jointly modeling compute AND available high-quality data, including synthetic data quality) replacing pure compute-optimal framings

## Watch list
-

## Connections
**Parent:** [[Foundation Model Training]]

**Depends on:** [[AI Hardware & Compute]]

**Related:** [[Synthetic Data Generation & Model Collapse]]

