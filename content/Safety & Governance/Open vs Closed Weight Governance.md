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

## Notable tools / instances
- **On the Societal Impact of Open Foundation Models** (Kapoor, Bommasani, Klyman, Longpre et al., Stanford CRFM, 2024) — the reference framing paper for weighing open-release marginal risk against marginal benefit, cited by most subsequent policy proposals that try to move past "open bad / closed good" as a binary
- Stanford Foundation Model Transparency Index (Bommasani, Liang et al., ongoing since 2023) — scores major labs on release-practice disclosure; the closest thing this field has to a standardized scorecard rather than a one-off audit

## Key players
- [[Hugging Face]] — the default hosting/distribution layer for open weights; makes "irreversible once released" literally true at infrastructure scale
- [[Mistral AI]] — runs the open/closed bifurcation as an active commercial and sovereignty strategy, not a hypothetical
- [[Stanford CRFM (Percy Liang)]] — publishes the Foundation Model Transparency Index and the leading academic framing of open-weight societal-impact tradeoffs

## Watch list
- Stanford HAI Foundation Model Transparency Index
- Hugging Face policy blog

## Connections
**Parent:** [[Safety & Governance]]

**Related:** [[AI Policy & Regulation]], [[Dangerous Capability Evaluation]]

**Key players:** [[Hugging Face]], [[Mistral AI]], [[Stanford CRFM (Percy Liang)]]

