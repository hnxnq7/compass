---
tags:
  - field
  - field-root
category: evals
status: active
---

## Evals

How anyone actually knows whether a model or agent is good — increasingly the load-bearing bottleneck of the field, since capability is outrunning the field's ability to measure it honestly.

## Children
- [[Benchmark Contamination & Saturation]]
- [[LLM-as-Judge Evaluation]]
- [[Real-World _ Deployment Evals]]

## Cross-cutting notes
- 2026 consensus: static benchmarks are largely broken (contamination, gaming, saturation on MMLU-tier tests) and the field is moving toward layered eval — automated metrics + LLM-as-judge + human review — with real production gaps still ~37% between lab benchmark and deployment performance.
- Evals are becoming part of CI/CD for AI products (every PR runs evals) rather than a one-time pre-launch gate — this makes Evals as much a systems/tooling category as a research one.
