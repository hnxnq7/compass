---
tags:
  - field
category: safety-governance
status: tracking
parent:
  - "[[Safety & Governance]]"
depends_on:
  - "[[RL with Verifiable Rewards]]"
related:
  - "[[Dangerous Capability Evaluation]]"
  - "[[AI Control]]"
  - "[[Human-in-the-Loop Design]]"
---

## Problem Space: Scalable Oversight

## What seems genuinely hard here?
- Supervising a system whose task performance is starting to exceed the supervisor's ability to directly verify correctness — the core "oversight gap" problem
- Building continuous, near-real-time oversight for autonomous agents (as opposed to periodic human review) without that oversight itself becoming an automated rubber stamp

## Why hasn't it been solved?
- Technical constraints — techniques like debate or recursive reward modeling are promising in theory but largely untested at the scale/autonomy level regulators are now writing standards for
- Institutional / regulatory constraints — NIST's February 2026 initiative on autonomous-agent standards (identity, action logging, containment boundaries) is brand new; the technical oversight methods and the emerging regulatory requirements haven't yet converged into one coherent practice

## What solutions feel fake?
- "Human in the loop" claimed as sufficient oversight when the human is rubber-stamping outputs they can't actually verify at the volume/speed agents operate at

## What solutions feel inevitable?
- Oversight embedded directly into the AI lifecycle (continuous observability, structured risk assessment) rather than bolted on as a periodic audit — already the direction governance platforms are moving
- Action logging and auditability becoming a baseline infrastructure requirement for any agent with real-world permissions, driven as much by regulation as by research conviction

## Notable tools / instances
- **AI Safety via Debate** (Irving, Christiano & Amodei, OpenAI, 2018) — the founding proposal for using two AI systems arguing opposing sides, judged by a human, to make judgments verifiable beyond the judge's own unassisted ability; still the standard reference point for "debate" as a scalable-oversight technique
- **Measuring Progress on Scalable Oversight for Large Language Models** (Bowman et al., NYU/Anthropic, 2022) — one of the first empirical (not just theoretical) tests of whether human-plus-AI assistance can match unassisted expert judgment on genuinely hard questions
- GPQA (Rein, Hou, Bowman et al., NYU, 2023) — the "Google-proof" graduate-level QA benchmark built specifically so scalable-oversight techniques have a real oversight gap to close; now a standard component of frontier model eval suites

## Key players
- [[Redwood Research]] — originated the [[AI Control]] framing as a complementary, more pessimistic approach to this same oversight problem
- [[NYU Alignment Research Group]] — ran the field's first systematic empirical tests of scalable-oversight techniques and built GPQA, the benchmark most subsequent oversight-gap work is evaluated against

## Watch list
- NIST autonomous AI agent standards initiative

## Connections
**Parent:** [[Safety & Governance]]

**Depends on:** [[RL with Verifiable Rewards]]

**Related:** [[Dangerous Capability Evaluation]], [[AI Control]], [[Human-in-the-Loop Design]]

**Key players:** [[Redwood Research]], [[NYU Alignment Research Group]]

