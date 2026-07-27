---
tags:
  - field
category: applications
status: active
parent:
  - "[[Applications]]"
depends_on:
  - "[[Agents & Tool Use]]"
related:
  - "[[Real-World _ Deployment Evals|Real-World / Deployment Evals]]"
---

## Problem Space: AI for Trading & Quant

## What seems genuinely hard here?
- LLMs are good at *processing* (news, filings, alternative data) but the honest 2026 consensus is they don't generate alpha directly — the actual edge still comes from classical quant methods, so the hard problem is knowing where the LLM layer stops adding value and starts adding noise
- Backtesting an LLM-driven strategy is unusually treacherous: the model may have memorized market-moving events from its training data, making paper returns look better than any live strategy could achieve
- Latency and determinism — most LLM inference is far too slow and non-deterministic for anything near execution/HFT; the realistic integration point is research and signal generation, not the trading loop itself

## Why hasn't it been solved?
- Technical constraints — financial time series are low signal-to-noise and non-stationary, exactly the regime where large pretrained models (tuned for internet-text regularities) transfer worst
- Institutional / regulatory constraints — firms that find genuine edge have zero incentive to publish it, so the public literature is systematically biased toward the applications that *don't* work as well (sentiment analysis, document parsing) rather than the ones that do

## What solutions feel fake?
- "AI hedge fund" pitches that imply an LLM is doing discretionary trading end-to-end, when in practice the fund's actual edge is still classical statistical arbitrage with an LLM bolted on for research productivity

## What solutions feel inevitable?
- Hybrid pipelines — LLMs for alternative-data ingestion (news sentiment, earnings call transcripts, satellite imagery, filings) feeding classical quant models that make the actual trading decisions
- Continued 20%+ measured alpha gains specifically from alternative-data-plus-ML approaches, separate from any generative-AI hype cycle
- Growing regulatory attention on AI-driven trading systems as they scale, following the same trajectory as [[AI Policy & Regulation]] elsewhere

## Notable tools / instances
- **Empirical Asset Pricing via Machine Learning** (Gu, Kelly, Xiu — Yale/Chicago Booth, Review of Financial Studies 2020) — the canonical academic paper comparing ML methods (trees, neural nets, regression) on cross-sectional return prediction; the reference point for what "genuine ML edge" looks like in the public literature, versus the unpublished proprietary edge this note's whole framing revolves around

## Key players
- [[Two Sigma]] — quant fund running an explicit 2026 "AI-first" mandate across research and operations, not just trading signals
- [[Renaissance Technologies]] — the benchmark case for genuine ML-driven edge kept deliberately unpublished
- [[Numerai]] — crowdsourced/blockchain-incentivized alternative to hiring quants in-house, backed by JPMorgan

## Watch list
- Two Sigma's research/insights publications
- Numerai's tournament results and blog
- Industry alt-data / AI-in-trading reporting (public disclosures are the only real signal here, given the field's own opacity incentives)

## Connections
**Parent:** [[Applications]]

**Depends on:** [[Agents & Tool Use]]

**Related:** [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]

**Key players:** [[Two Sigma]], [[Renaissance Technologies]], [[Numerai]]
