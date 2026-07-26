---
tags:
  - field
category: evals
status: active
parent:
  - "[[Evals]]"
related:
  - "[[LLM-as-Judge Evaluation]]"
---

## Problem Space: Benchmark Contamination & Saturation

## What seems genuinely hard here?
- Detecting contamination (benchmark data leaking into training data) reliably, when the leakage can be indirect (paraphrased, translated, embedded in a larger corpus) rather than exact-match
- Static benchmarks saturate (MMLU-tier tests already 88%+) faster than new, harder ones can be built and validated, so the field is in a constant benchmark-replacement treadmill

## Why hasn't it been solved?
- Technical constraints — identical model weights can score 10-20 percentage points apart depending on the evaluation harness alone, meaning a huge amount of reported variance isn't even about the model
- Institutional / regulatory constraints — labs have a direct incentive to score well on widely-cited benchmarks, which structurally works against the benchmark's own integrity over time (Goodhart's law in action)

## What solutions feel fake?
- Leaderboard rankings compared across different evaluation harnesses as if they were apples-to-apples

## What solutions feel inevitable?
- Continuous, harder-tier benchmark replacement (GPQA-style and domain-specific evals replacing saturated general ones) as a permanent treadmill rather than a one-time fix
- Held-out, periodically-refreshed private eval sets becoming standard practice specifically to blunt contamination incentives

## Watch list
- epoch.ai trends database/blog and the FrontierMath leaderboard
- Scale AI's SEAL leaderboards page
- Arena (LMArena) leaderboard

## Key players
- [[Epoch AI]] — builds FrontierMath; its own held-out set became a contamination controversy after a funder (OpenAI) turned out to have access to most of the problem set, plus a later audit found errors in ~42% of problems
- [[Scale AI]] — SEAL lab runs private, held-out leaderboards (Humanity's Last Exam, SWE-Bench Pro, GSM1k) specifically to keep eval data out of training corpora
- [[LMArena]] — live, crowdsourced human-preference leaderboard that resists memorization-style contamination since votes are on fresh prompts, not a fixed test set

## Connections
**Parent:** [[Evals]]

**Related:** [[LLM-as-Judge Evaluation]]

