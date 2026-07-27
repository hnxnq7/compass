---
tags:
  - field
category: applications
status: tracking
parent:
  - "[[Applications]]"
depends_on:
  - "[[Agents & Tool Use]]"
related:
  - "[[Real-World _ Deployment Evals|Real-World / Deployment Evals]]"
---

## Problem Space: Enterprise AI & Vertical Copilots

## What seems genuinely hard here?
- Integrating with messy, heterogeneous enterprise data/systems (legacy software, inconsistent records) that look nothing like clean benchmark inputs
- Proving ROI on deployments where the failure mode isn't a crash but a subtly wrong answer that costs real money or compliance risk later

## Why hasn't it been solved?
- Technical constraints — enterprise workflows are long-tail and domain-specific; a copilot tuned for one company's processes doesn't transfer cleanly to another's
- Institutional / regulatory constraints — regulated verticals (finance, healthcare, legal) layer compliance requirements on top of the raw capability problem, and those requirements are themselves in flux (see [[AI Policy & Regulation]])

## What solutions feel fake?
- Vendor case studies measuring adoption/usage rather than measured business outcomes or error rates in production

## What solutions feel inevitable?
- Narrow, deeply-integrated vertical copilots (built around one workflow, one dataset shape) continuing to outperform generic horizontal copilots dropped into a business unchanged
- Evaluation moving in-house and continuous (see [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]) as enterprises stop trusting vendor benchmarks for their own risk decisions

## Notable tools / instances
- **Generative AI at Work** (Brynjolfsson, Li, Raymond — Stanford/MIT, NBER/QJE 2023) — RCT-style study of ~5,000 customer-support agents using an AI copilot; novice workers improved ~34% while top performers saw minimal gains or slight quality decline. The landmark empirical "skill-leveling" result and a rare outcome-measured (not vendor-reported) enterprise AI study
- Randomized controlled trials of GitHub Copilot across ~4,500 developers at Microsoft, Accenture, and a Fortune 100 manufacturer (Microsoft/MIT/Princeton/Wharton, 2024–2025) found a 26% average increase in weekly pull requests completed — see also [[Coding Agents & AI Software Engineering]]

## Key players
- [[Harvey]] — legal copilot, \$300M ARR by May 2026, majority of AmLaw 100 as customers — the field's clearest vertical-copilot success case
- [[Sierra]] — customer-support agents, \$15.8B valuation (May 2026); illustrative of the shift from copilot to autonomous agent
- [[Hippocratic AI]] — healthcare voice agents scoped deliberately to non-diagnostic use, showing how regulated verticals layer safety scoping onto the capability problem
- [[Stanford Digital Economy Lab (Erik Brynjolfsson)]] — academic source of outcome-measured (not vendor-reported) enterprise AI productivity research, including the "skill-leveling" finding above

## Watch list
- Harvey, Sierra, and Hippocratic AI's own blogs/announcements
- Bessemer Venture Partners' vertical AI reporting
- Gartner's enterprise agent adoption forecasts
- digitaleconomy.stanford.edu for new field-experiment results

## Connections
**Parent:** [[Applications]]

**Depends on:** [[Agents & Tool Use]]

**Related:** [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]

**Key players:** [[Harvey]], [[Sierra]], [[Hippocratic AI]], [[Stanford Digital Economy Lab (Erik Brynjolfsson)]]

