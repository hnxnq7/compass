---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Mechanistic Interpretability]]"
  - "[[Activation Steering & Representation Engineering]]"
  - "[[Behavioral Red-Teaming as Interpretability Proxy]]"
---

## Anthropic

*AI safety-focused lab building Claude; runs the most visible mechanistic interpretability research program at a frontier lab.*

## What they do
- Interpretability team (built on Chris Olah's early circuits work) develops sparse autoencoders, cross-layer transcoders, and attribution graphs to trace how Claude computes its outputs
- Publishes findings via the Transformer Circuits Thread; "On the Biology of a Large Language Model" (2025) traced multi-step planning, hallucination, and jailbreak-resistance circuits in Claude 3.5 Haiku
- First frontier lab to fold interpretability into a pre-deployment safety review — examined Claude Sonnet 4.5's internal features for dangerous capabilities and deceptive tendencies before release
- Demonstrated feature-level activation steering publicly with "Golden Gate Claude" (2024), clamping a single SAE feature to alter behavior
- Runs its own frontier red-teaming program alongside safety research collaborations (e.g. "Alignment Faking in Large Language Models" with Redwood Research)

## Where they fit
- The clearest existence proof that circuit-level [[Mechanistic Interpretability]] can scale to frontier-size models and feed real deployment decisions, not stay academic
- "Golden Gate Claude" is a direct, well-known instance of [[Activation Steering & Representation Engineering]] in production
- Treats interpretability evidence as the complement to behavioral red-teaming, which is the core tension explored in [[Behavioral Red-Teaming as Interpretability Proxy]]

## Notable work / recent moves
- "On the Biology of a Large Language Model" / Circuit Tracing methods papers (2025)
- Interpretability-informed pre-deployment assessment of Claude Sonnet 4.5
- Stated goal to "reliably detect most AI model problems by 2027" using interpretability tooling

## Watch list
- Transformer Circuits Thread (transformer-circuits.pub)
- Anthropic alignment/interpretability blog posts

## Connections
**Works in:** [[Mechanistic Interpretability]], [[Activation Steering & Representation Engineering]], [[Behavioral Red-Teaming as Interpretability Proxy]]
