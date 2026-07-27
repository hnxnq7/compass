---
tags:
  - field
category: evals
status: active
parent:
  - "[[Evals]]"
related:
  - "[[LLM-as-Judge Evaluation]]"
  - "[[Agent Evaluation & Sandboxing]]"
  - "[[Enterprise AI & Vertical Copilots]]"
---

## Problem Space: Real-World / Deployment Evals

## What seems genuinely hard here?
- The gap between lab benchmark performance and actual deployment performance is large and well-documented (~37% gap in at least one recent framework's findings) — meaning benchmark scores are a weak predictor of what matters
- Production traffic is a moving target (users, use cases, and adversarial pressure all shift after launch), so a deployment eval frozen at launch time goes stale immediately

## Why hasn't it been solved?
- Technical constraints — real-world failure modes are often long-tail and rare, meaning a deployment eval set needs to be huge or continuously refreshed to catch them at all
- Institutional / regulatory constraints — most teams still treat evaluation as a pre-launch gate rather than a continuous production concern, so the tooling/culture for continuous deployment evals is less mature than for pre-launch benchmarks

## What solutions feel fake?
- Pre-launch benchmark scores cited as ongoing evidence of quality months into production, with no continuous monitoring behind the claim

## What solutions feel inevitable?
- Evaluation embedded directly into the deployment pipeline (every PR, every prompt change gated on quality metrics) rather than a one-time pre-launch checkpoint
- Production-traffic-sampled eval sets (not just synthetic/curated ones) becoming standard practice specifically to close the lab-to-deployment gap

## Notable tools / instances
- **Holistic Evaluation of Language Models (HELM)** (Liang, Bommasani et al., Stanford CRFM, 2022) — evaluates models across dozens of real-world scenarios and multiple metrics (accuracy, robustness, fairness, efficiency) rather than one leaderboard number; the closest academia has come to a standard for multi-scenario, deployment-relevant evaluation

## Watch list
- Braintrust blog/changelog
- Arize AI blog, Phoenix (open-source) GitHub repo
- LangChain's annual "State of AI Agents" report

## Key players
- [[Braintrust]] — unifies production traces, structured evals, and CI/CD quality gates into one workflow; a direct instance of evals-gating-releases rather than a pre-launch-only checkpoint
- [[Arize AI]] — observability platform (incl. open-source Phoenix) purpose-built to evaluate on live production traffic rather than static curated sets, closing the lab-to-deployment gap this note describes
- [[LangChain]] — LangSmith (their observability/tracing product) is one of the most widely adopted tools for tracing and evaluating agent runs in production
- [[Stanford CRFM (Percy Liang)]] — built and maintains HELM, the academic anchor for multi-scenario, multi-metric evaluation aimed at closing the lab-to-deployment gap rather than optimizing a single benchmark number

## Connections
**Parent:** [[Evals]]

**Related:** [[LLM-as-Judge Evaluation]], [[Agent Evaluation & Sandboxing]], [[Enterprise AI & Vertical Copilots]]

