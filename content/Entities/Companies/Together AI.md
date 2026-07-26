---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Speculative Decoding]]"
---

## Together AI

*Open-model inference cloud; ATLAS is its self-learning speculative decoding system, adapting the draft model to live traffic instead of freezing it after offline training.*

## What they do
- Runs an inference/training cloud for open-weight models, competing on cost and latency against closed-model APIs
- Built ATLAS (Adaptive-Learning Speculator System) — a speculator that keeps learning from production traffic in real time rather than shipping a frozen, offline-trained draft model
- Publishes research on distribution-aware speculative decoding, including accelerating RL rollouts

## Where they fit
- Pushes [[Speculative Decoding]] past its main production weakness — a draft model that goes stale as traffic and target models shift — toward continuously adapting speculation

## Notable work / recent moves
- ATLAS reports up to 400% inference speedup over a vLLM baseline, plus a 1.5x day-0 speedup on brand-new frontier models with no prior draft training
- \$800M Series C closed July 2026 at an \$8.3B valuation
- ICML 2026 research on distribution-aware speculative decoding for accelerating RL rollouts

## Watch list
- Together AI engineering blog, ATLAS release notes

## Connections
**Works in:** [[Speculative Decoding]]
