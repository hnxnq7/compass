---
tags:
  - field
category: interpretability
status: tracking
parent:
  - "[[Interpretability]]"
related:
  - "[[Dangerous Capability Evaluation]]"
  - "[[Mechanistic Interpretability]]"
---

## Problem Space: Behavioral Red-Teaming as Interpretability Proxy

## What seems genuinely hard here?
- Using black-box behavioral probing to infer something about internal mechanism, when the same external behavior can arise from very different internal causes
- Adversarial red-teaming finds *that* a model can be induced into bad behavior, but not reliably *why* — which limits how much it can inform a durable fix versus a narrow patch

## Why hasn't it been solved?
- Technical constraints — without access to (or trust in) internals, red-teaming is fundamentally a behavioral, not mechanistic, method — it's a proxy by necessity, not by choice
- Institutional / regulatory constraints — red-teaming increasingly required for compliance (see [[AI Policy & Regulation]]) creates pressure to treat it as sufficient evidence of safety, when it's really a lower bound

## What solutions feel fake?
- Red-team reports treated as proof of general safety rather than evidence about the specific attack surface tested

## What solutions feel inevitable?
- Red-teaming and mechanistic interpretability converging as complementary evidence layers — behavioral probes to find failure modes, mechanistic analysis to explain and durably fix them
- Insurance and regulatory requirements (AI Security Riders, EU AI Act obligations) making documented red-teaming a standard compliance artifact regardless of its epistemic limits

## Watch list
-

## Connections
**Parent:** [[Interpretability]]

**Related:** [[Dangerous Capability Evaluation]], [[Mechanistic Interpretability]]

