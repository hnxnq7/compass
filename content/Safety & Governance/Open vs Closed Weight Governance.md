---
tags:
  - field
category: safety-governance
status: tracking
parent:
  - "[[Safety & Governance]]"
related:
  - "[[AI Policy & Regulation]]"
  - "[[Dangerous Capability Evaluation]]"
---

## Problem Space: Open vs Closed Weight Governance

## What seems genuinely hard here?
- Open weights are irreversible once released — any safety mitigation has to hold up against unlimited fine-tuning/jailbreaking by anyone, forever, with no ability to patch or revoke
- Balancing the genuine public-good arguments for openness (research access, avoiding concentration of power, auditability) against genuine risk arguments (removable safety tuning, harder to prevent misuse)

## Why hasn't it been solved?
- Institutional / regulatory constraints — regulatory frameworks increasingly try to draw hard lines (capability thresholds, compute thresholds) between what can and can't be released openly, but capability is continuous, not binary
- Technical constraints — there's no reliable technical way to make an open-weight release's safety tuning tamper-resistant against a determined fine-tuner with modest compute

## What solutions feel fake?
- "Open-weight but responsibly released" framing that doesn't grapple with the fact that any safety tuning included is trivially removable

## What solutions feel inevitable?
- Continued bifurcation: frontier-most capability stays closed/API-gated, while a capability tier behind the frontier gets released open-weight — this is already the observable pattern rather than a prediction
- Compute- or capability-threshold-based regulatory triggers (rather than blanket open/closed rules) becoming the standard regulatory mechanism, mirroring how [[AI Policy & Regulation]] frameworks are already structured

## Watch list
-

## Connections
**Parent:** [[Safety & Governance]]

**Related:** [[AI Policy & Regulation]], [[Dangerous Capability Evaluation]]

