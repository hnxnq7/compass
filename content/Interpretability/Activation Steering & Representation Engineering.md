---
tags:
  - field
category: interpretability
status: tracking
parent:
  - "[[Interpretability]]"
depends_on:
  - "[[Mechanistic Interpretability]]"
related:
  - "[[Preference Optimization]]"
---

## Problem Space: Activation Steering & Representation Engineering

## What seems genuinely hard here?
- Steering a discovered feature/direction without unpredictable side effects elsewhere in the model's behavior, given how entangled features are (superposition again)
- Distinguishing "steering toward a real concept" from "steering toward a spurious correlate" that happens to move the target metric

## Why hasn't it been solved?
- Technical constraints — steering vectors found via SAEs or contrastive activation differences aren't guaranteed to be causally clean; they can shift multiple entangled concepts at once
- Institutional / regulatory constraints — there's no standard benchmark for "did this steering intervention work as intended without side effects," so claims are hard to compare across papers

## What solutions feel fake?
- Steering demos on a single cherry-picked example (e.g. "detoxification" on one prompt) without systematic before/after evaluation

## What solutions feel inevitable?
- Steering as a cheaper alternative to full fine-tuning for narrow behavioral adjustments (e.g. detoxification via SAE-identified features), where it's already showing traction
- Convergence with [[Preference Optimization]]: both are ultimately trying to shift model behavior, just at different levels of the stack (representation-level vs. training-objective-level)

## Key players
- [[Goodfire]] — productized feature steering as a hosted API (Ember)
- [[Center for AI Safety (CAIS)]] — authored the founding "Representation Engineering: A Top-Down Approach to AI Transparency" paper
- [[Anthropic]] — "Golden Gate Claude" (2024) is the best-known public steering demo, clamping a single SAE feature
- [[Neuronpedia]] — hosts a public steering API built on open SAEs, alongside its feature-exploration tools

## Watch list
- Goodfire blog (goodfire.ai/blog)
- Neuronpedia steering API
- CAIS newsletter (newsletter.safe.ai)

## Connections
**Parent:** [[Interpretability]]

**Depends on:** [[Mechanistic Interpretability]]

**Related:** [[Preference Optimization]]

