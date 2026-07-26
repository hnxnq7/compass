---
tags:
  - entity
type: research-org
status: active
works_in:
  - "[[Agent Evaluation & Sandboxing]]"
  - "[[Long-Horizon Planning & Memory]]"
  - "[[Dangerous Capability Evaluation]]"
---

## METR

*Berkeley nonprofit (Model Evaluation and Threat Research) that originated the "task-completion time horizon" metric for frontier AI agents.*

## What they do
- Evaluates frontier models' ability to carry out long-horizon, agentic tasks that could pose catastrophic risk, founded 2022
- Publishes the task-completion time horizon metric: the human-expert task duration an AI agent can complete at a given reliability threshold (50% and 80% variants)
- Runs pre-deployment capability evaluations for frontier labs and publishes frontier risk reports

## Where they fit
- Direct source of the reliability-horizon framing used throughout [[Long-Horizon Planning & Memory]] — their tracking (time horizon doubling roughly every 7 months 2019–2024, ~4 months since) is the empirical basis for "errors compound, but horizons are still growing fast"
- A model for what a credible third-party evaluator/sandbox operator looks like for [[Agent Evaluation & Sandboxing]], as benchmarks proliferate and self-reported numbers lose credibility
- Also runs frontier-risk/dangerous-capability evaluations proper (autonomous replication, misalignment-in-deployment pilots) — the closest thing [[Dangerous Capability Evaluation]] has to a standard third-party bar

## Notable work / recent moves
- Time Horizon 1.1 model (January 2026), refining the original March 2025 "Measuring AI Ability to Complete Long Software Tasks" methodology
- Continues running independent pre-release evaluations of frontier models from multiple labs

## Watch list
- METR frontier risk reports and time-horizon updates (metr.org/research, metr.org/time-horizons)

## Connections
**Works in:** [[Agent Evaluation & Sandboxing]], [[Long-Horizon Planning & Memory]], [[Dangerous Capability Evaluation]]
