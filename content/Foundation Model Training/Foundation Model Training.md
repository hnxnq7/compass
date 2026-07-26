---
tags:
  - field
  - field-root
category: foundation-models
status: active
depends_on:
  - "[[AI Hardware & Compute]]"
enables:
  - "[[Post-training & Alignment]]"
  - "[[Video Generation & World Models]]"
---

## Problem Space: Foundation Model Training

## What seems genuinely hard here?
- Getting more capability out of a fixed compute/data budget as high-quality text data runs out
- Architectures that beat vanilla transformer+attention at long context without giving up training stability
- Predicting downstream capability (not just loss) from scaling curves before you spend the run

## Why hasn't it been solved?
- Technical constraints — attention is O(n²); alternatives (SSMs, linear attention, hybrid) trade quality for efficiency in ways that only show up at scale
- Institutional / regulatory constraints — only a handful of labs can afford frontier-scale runs, so most "solutions" are untested at the scale that matters
- Data is finite — internet text is a depleting resource, and synthetic data has unresolved quality/collapse questions

## What solutions feel fake?
- Scaling-law extrapolations presented as certainties rather than fits with wide error bars
- "We solved long context" claims that don't hold up under needle-in-haystack-style adversarial eval

## What solutions feel inevitable?
- Increasing reliance on synthetic + curated data over raw scrape
- Mixture-of-experts as the default way to scale parameters without scaling compute 1:1
- Some hybrid attention/SSM architecture becoming standard for long-context models

## Children
- [[Long-Context & Hybrid Attention Architectures]]
- [[Mixture-of-Experts & Sparse Scaling]]
- [[Model Architecture Research]]
- [[Scaling Laws & Compute-Optimal Training]]

## Connections
**Depends on:** [[AI Hardware & Compute]]

**Enables:** [[Post-training & Alignment]], [[Video Generation & World Models]]

