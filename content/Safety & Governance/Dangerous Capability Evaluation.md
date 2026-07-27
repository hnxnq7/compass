---
tags:
  - field
category: safety-governance
status: tracking
parent:
  - "[[Safety & Governance]]"
related:
  - "[[Scalable Oversight]]"
  - "[[Agent Evaluation & Sandboxing]]"
---

## Problem Space: Dangerous Capability Evaluation

## What seems genuinely hard here?
- Testing for capabilities (bio/cyber/persuasion uplift) without the evaluation itself becoming a how-to guide, or requiring dangerous infrastructure to run safely
- Absence of ground truth — for genuinely novel catastrophic capabilities, there's no historical incident base to calibrate an evaluation threshold against

## Why hasn't it been solved?
- Technical constraints — elicitation is an open problem: a model "failing" a dangerous-capability eval might just mean the red-teamer didn't find the right prompt, not that the capability is absent
- Institutional / regulatory constraints — labs run these evaluations largely in-house with limited external verification, so public trust in the results depends heavily on the lab's own credibility

## What solutions feel fake?
- A single pass/fail eval result presented as a durable safety guarantee, when capability elicitation techniques (and therefore what "passing" means) keep improving after the eval was run

## What solutions feel inevitable?
- Third-party evaluation organizations (in the mold of METR) becoming a more standard part of the release process for frontier models, not just an occasional external check
- Dangerous-capability thresholds becoming an explicit, named input to regulatory frameworks rather than an internal-only lab practice

## Notable tools / instances
- **Model Evaluation for Extreme Risks** (Shevlane, Anderljung et al., Google DeepMind & GovAI, 2023) — the field's foundational framing paper, distinguishing "dangerous capability evaluations" (can the model do this) from "alignment evaluations" (would it), a split most subsequent eval frameworks still use
- METR's "Measuring AI Ability to Complete Long Tasks" (2025) — tracks the length of tasks models can autonomously complete, doubling roughly every 7 months; the closest thing this field has to a quantitative trendline for autonomous-replication risk rather than a one-off pass/fail

## Key players
- [[METR]] — runs the autonomous-replication/frontier-risk evaluations most labs' capability claims get benchmarked against
- [[Apollo Research]] — specializes in evaluating deceptive/scheming behavior, the capability class standard benchmarks don't catch
- [[Johns Hopkins Center for Health Security]] — supplies the bio-uplift domain expertise (AIxBio program) that AI-native eval orgs generally lack, and one of the few groups with a real historical incident base to calibrate bio dangerous-capability thresholds against

## Watch list
- METR frontier risk reports
- International AI Safety Report (annual)

## Connections
**Parent:** [[Safety & Governance]]

**Related:** [[Scalable Oversight]], [[Agent Evaluation & Sandboxing]]

**Key players:** [[METR]], [[Apollo Research]], [[Johns Hopkins Center for Health Security]]

