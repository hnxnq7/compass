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
- Benchmark scores that turn out to reward exploiting the scoring harness rather than the task — Berkeley RDI's 2026 audit found a 10-line Python script scoring perfectly on SWE-bench Verified, a fake `curl` wrapper hitting 100% on Terminal-Bench, and WebArena tasks solvable by reading the answer config directly off a local file URL, across all eight major agent benchmarks they tested

## What solutions feel inevitable?
- Reliability-horizon-style reporting (success rate as a function of task duration, not a single pass/fail number) becoming the standard way to report agent capability
- Sandboxed execution environments (code, browser, filesystem) becoming as standard for agent eval as unit tests are for software

## Notable tools / instances
- **SWE-bench: Can Language Models Resolve Real-World GitHub Issues?** (Jimenez, Yang, Wettig, Yao, Pei, Press, Narasimhan — Princeton, ICLR 2024) — real GitHub issue/PR benchmark that became the de facto coding-agent evaluation standard
- **WebArena: A Realistic Web Environment for Building Autonomous Agents** (Zhou et al. — CMU, ICLR 2024) — the reference self-hosted, fully-functional benchmark for browser agents
- **GAIA: a Benchmark for General AI Assistants** (Mialon, Fourrier, Wolf, LeCun, Scialom — Meta AI/Hugging Face, ICLR 2024) — general-assistant tool-use benchmark; humans score 92% vs. 15% for tool-equipped GPT-4 at release, the gap this whole field is trying to close

## Key players
- [[METR]] — reliability-horizon methodology and independent pre-release evals for frontier labs
- [[E2B]] — Firecracker-microVM sandboxing infra widely adopted as the execution layer under other agents
- [[Berkeley RDI (Ion Stoica)]] — academic lab systematically auditing agent benchmarks for exploitable scoring holes, and proposing best practices to close them

## Watch list
- METR frontier risk reports and time-horizon updates
- SWE-Marathon, SentinelBench, LeanMarathon — new long-horizon benchmark suites to watch for consolidation vs. continued fragmentation
- Berkeley RDI's blog for further benchmark audits

## Connections
**Parent:** [[Agents & Tool Use]]

**Related:** [[Long-Horizon Planning & Memory]], [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]

