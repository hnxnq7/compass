---
tags:
  - field
category: agents
status: active
parent:
  - "[[Agents & Tool Use]]"
related:
  - "[[Scalable Oversight]]"
  - "[[AI Control]]"
  - "[[Spec-Driven Coding & Development]]"
---

## Problem Space: Human-in-the-Loop Design

## What seems genuinely hard here?
- There's no general formula for "how much human is enough" — the right answer depends on reversibility of the action, cost of a wrong action, and how well-calibrated the agent's own uncertainty is, and all three vary per task within the same project
- Classifying a project once at the start ("this needs human review") undersells the real question, which is *where specifically* in the workflow, *what kind* of human judgment is needed there (approval? correction? just visibility?), and *how much* human time that actually costs at scale
- Over-gating is its own failure mode: too many checkpoints and the human becomes a rubber stamp who stops actually reading — the same failure mode already flagged in [[Scalable Oversight]] applied at ordinary-project scale, not just frontier-model scale

## Why hasn't it been solved?
- Technical constraints — an agent's own confidence isn't a reliable signal for when it should ask for help; overconfident wrong answers and underconfident correct ones both break naive "ask when unsure" gating
- Institutional / regulatory constraints — most teams pick a gating policy ad hoc per product rather than from a shared framework, so lessons don't transfer between projects or companies

## What solutions feel fake?
- "Human in the loop" as a checkbox/compliance answer, satisfied by inserting one generic approval step regardless of what's actually risky about the specific action

## What solutions feel inevitable?
- Graduated autonomy-level frameworks (explicit levels from fully-manual to fully-autonomous, closer to SAE's self-driving levels than a binary human/no-human split) becoming the standard vocabulary for scoping a project's oversight needs up front
- Gating specifically on *irreversibility* (human approval required before anything that can't be undone, autonomous through everything reversible) as the most durable practical pattern, since it doesn't require trusting the agent's self-reported confidence
- This becoming a standard part of the same spec that [[Spec-Driven Coding & Development]] argues should already be the source of truth — deciding gating policy is naturally a spec-time decision, not a runtime afterthought

## Notable tools / instances
- Cloud Security Alliance's "Agentic AI Autonomy Levels and Control Framework" (March 2026) — six-level autonomy/governance taxonomy
- "Bounded Autonomy" — agents operate independently within strict guardrails, escalating to a human only when predefined situational boundaries are exceeded
- **Cooperative Inverse Reinforcement Learning** (Hadfield-Menell, Russell, Abbeel, Dragan — Berkeley, NeurIPS 2016) — formalized the human-AI relationship as a shared-reward "assistance game," the theoretical basis most graduated-autonomy framing descends from
- **The Off-Switch Game** (Hadfield-Menell, Dragan, Abbeel, Russell — Berkeley, IJCAI 2017) — formal conditions under which a rational agent won't resist being paused or shut down; the reference paper for "corrigibility"

## Key players
- [[HumanLayer]] — approval-as-API-primitive, routes agent pause/approve requests through Slack/email/SMS rather than a bespoke review UI
- [[Berkeley CHAI (Stuart Russell)]] — academic origin of assistance games and corrigibility, the theoretical layer underneath product-level gating decisions

## Watch list
- HumanLayer GitHub repo and changelog
- humancompatible.ai for new CHAI publications
- EU AI Act Article 14 enforcement (effective Aug 2026) — regulatory pressure toward mandatory human oversight for high-risk agentic AI, worth tracking as it forces the "how much human is enough" question into law

## Connections
**Parent:** [[Agents & Tool Use]]

**Related:** [[Scalable Oversight]], [[AI Control]], [[Spec-Driven Coding & Development]]
