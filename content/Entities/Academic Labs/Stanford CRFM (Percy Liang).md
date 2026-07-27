---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Data Attribution & Provenance]]"
  - "[[Real-World _ Deployment Evals|Real-World / Deployment Evals]]"
  - "[[Open vs Closed Weight Governance]]"
---

## Stanford CRFM (Percy Liang)

*Stanford's Center for Research on Foundation Models, directed by Percy Liang — academic anchor for both the founding technique and the transparency/provenance side of data attribution, and for holistic, real-world-scenario benchmarking via HELM.*

## What they do
- Liang and then-PhD-student Pang Wei Koh wrote "Understanding Black-box Predictions via Influence Functions" (ICML 2017, best paper) — the paper that revived influence functions as a practical tool for tracing model predictions back to training examples, and the technique nearly every later attribution method (including MadryLab's TRAK) builds on or compares against
- CRFM separately publishes the Foundation Model Transparency Index, which scores labs on training-data disclosure — the provenance side of the field rather than the technical-attribution side
- Built and maintains HELM (Holistic Evaluation of Language Models — Liang, Bommasani et al., 2022), a living benchmark evaluating models across dozens of real-world scenarios and multiple metrics (accuracy, robustness, fairness, efficiency) rather than a single leaderboard number, explicitly aimed at closing the gap between benchmark scores and deployment-relevant behavior

## Where they fit
- Covers the two ends of [[Data Attribution & Provenance]] that MadryLab's TRAK doesn't: the original influence-functions formulation, and independent auditing of whether labs disclose training data at all
- The Foundation Model Transparency Index also functions as the closest thing [[Open vs Closed Weight Governance]] has to a standardized scorecard — it scores labs on release practices (including whether/how weights are shared) rather than taking a side in the open/closed debate
- HELM is the closest thing academia has produced to a standard for [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]'s core complaint — that single-metric benchmark scores are a weak predictor of real deployment behavior — by forcing multi-scenario, multi-metric evaluation instead

## Notable work / recent moves
- Foundation Model Transparency Index continues to track disclosure practices across major labs as a recurring benchmark
- Koh (now faculty at University of Washington) continues attribution-adjacent work; the 2017 paper remains the standard citation for "what is an influence function" in ML papers
- HELM has expanded into domain-specific variants (MedHELM, HELM Lite) continuing the same multi-scenario methodology

## Watch list
- crfm.stanford.edu, Foundation Model Transparency Index updates, crfm.stanford.edu/helm

## Connections
**Works in:** [[Data Attribution & Provenance]], [[Open vs Closed Weight Governance]], [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]
