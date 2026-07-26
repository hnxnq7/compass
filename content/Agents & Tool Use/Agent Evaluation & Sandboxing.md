---
tags:
  - field
category: agents
status: active
parent:
  - "[[Agents & Tool Use]]"
related:
  - "[[Long-Horizon Planning & Memory]]"
  - "[[Real-World _ Deployment Evals|Real-World / Deployment Evals]]"
---

## Problem Space: Agent Evaluation & Sandboxing

## What seems genuinely hard here?
- Building benchmarks that resemble real work rather than curated tasks that reward benchmark-specific tricks
- Testing genuinely long-running agents (hours to days) without eval cost/time itself becoming prohibitive

## Why hasn't it been solved?
- Technical constraints — a good sandbox needs to be realistic (representative of production conditions) AND safe (can't let a misbehaving agent cause real damage), and those two goals pull in different directions
- Institutional / regulatory constraints — the benchmarks that exist are new and fast-moving (mid-2026 saw SWE-Marathon, SentinelBench, LeanMarathon all launch within months of each other), so there's no settled standard yet

## What solutions feel fake?
- Single-number "agent capability score" leaderboards that collapse wildly different task types and time horizons into one metric

## What solutions feel inevitable?
- Reliability-horizon-style reporting (success rate as a function of task duration, not a single pass/fail number) becoming the standard way to report agent capability
- Sandboxed execution environments (code, browser, filesystem) becoming as standard for agent eval as unit tests are for software

## Key players
- [[METR]] — reliability-horizon methodology and independent pre-release evals for frontier labs
- [[E2B]] — Firecracker-microVM sandboxing infra widely adopted as the execution layer under other agents

## Watch list
- METR frontier risk reports and time-horizon updates
- SWE-Marathon, SentinelBench, LeanMarathon — new long-horizon benchmark suites to watch for consolidation vs. continued fragmentation

## Connections
**Parent:** [[Agents & Tool Use]]

**Related:** [[Long-Horizon Planning & Memory]], [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]

