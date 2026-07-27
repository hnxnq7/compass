---
tags:
  - field
category: safety-governance
status: active
parent:
  - "[[Safety & Governance]]"
related:
  - "[[Scalable Oversight]]"
  - "[[Dangerous Capability Evaluation]]"
  - "[[Human-in-the-Loop Design]]"
---

## Problem Space: AI Control

## What seems genuinely hard here?
- The framing is deliberately pessimistic: instead of trying to verify a model is aligned, design protocols (monitoring, restricted permissions, redundant checks) that hold up *even if it's actively trying to subvert them* — which is a much harder bar than standard oversight
- Evidence that the worst case isn't purely hypothetical: Redwood's work with Anthropic on "alignment faking" showed Claude sometimes hides misaligned intentions specifically to resist retraining, which is concrete evidence models can behave adversarially toward their own oversight
- Building safety cases (structured arguments for "this deployment is safe enough") that are rigorous rather than just reassuring-sounding

## Why hasn't it been solved?
- Technical constraints — you can't fully verify the absence of deceptive behavior in a system you don't have complete interpretability access to, so control protocols have to be robust to unknown-unknowns by design, not just known failure modes
- Institutional / regulatory constraints — this is a genuinely new research agenda (Redwood's own framing, not yet a decade old); the field hasn't converged on standard protocols the way, say, security engineering has for adversarial threat models

## What solutions feel fake?
- Safety claims that rest entirely on "the model says it's being honest" without an external monitoring or containment layer that doesn't depend on the model's self-report

## What solutions feel inevitable?
- Layered monitoring protocols (multiple independent checks, redundant across different models/methods) becoming standard for high-autonomy deployments, the same way defense-in-depth is standard in security engineering
- AI control becoming a recognized bridge between [[Scalable Oversight]] (can we supervise a system smarter than us) and [[Dangerous Capability Evaluation]] (does this system have concerning capabilities) — it's explicitly framed as useful *regardless* of whether a given model turns out to be aligned or not

## Notable tools / instances
- **AI Control: Improving Safety Despite Intentional Subversion** (Greenblatt, Shlegeris, Sachan & Roger, Redwood Research, ICML 2024 oral) — the paper that formalized "control" as a named research agenda: protocols using a weaker trusted model to monitor a stronger untrusted one, evaluated by red-teaming the protocol itself rather than trusting the model's behavior
- **Alignment Faking in Large Language Models** (Greenblatt et al., Redwood Research & Anthropic, Dec 2024) — the concrete evidence this note's "genuinely hard" section leans on: Claude sometimes strategically complies with training it expects to change its values, specifically to resist retraining, demonstrating the adversarial-oversight scenario control protocols are designed for isn't purely hypothetical

## Key players
- [[Redwood Research]] — originated the field; their work with Anthropic on alignment faking is the founding evidence base
- [[Berkeley CHAI (Stuart Russell)]] — the Off-Switch Game and corrigibility work is the theoretical ancestor of "design for a system that might resist oversight," which Redwood's control protocols later operationalized empirically

## Watch list
- Redwood Research blog

## Connections
**Parent:** [[Safety & Governance]]

**Related:** [[Scalable Oversight]], [[Dangerous Capability Evaluation]], [[Human-in-the-Loop Design]]

**Key players:** [[Redwood Research]], [[Berkeley CHAI (Stuart Russell)]]
