---
tags:
  - entity
type: research-org
status: active
works_in:
  - "[[Scaling Laws & Compute-Optimal Training]]"
  - "[[Benchmark Contamination & Saturation]]"
  - "[[Synthetic Data Generation & Model Collapse]]"
---

## Epoch AI

*Nonprofit that tracks AI training trends independently of any lab — the closest thing to a neutral referee on whether scaling-law claims hold up. Also builds frontier benchmarks, and became a live case study in how hard it is to keep one clean.*

## What they do
- Publishes empirical research on training compute trends, data availability, algorithmic efficiency, and hardware constraints across the whole industry, not just one lab's models
- Estimates that compute for training has risen ~4x/year while algorithmic efficiency gains have cut compute needs ~3x/year, for a combined effective-compute growth of roughly 12x/year
- Runs the ongoing "can AI scaling continue through 2030" analysis, evaluating power, chip supply, and data scarcity as separate binding constraints
- Also built and maintains FrontierMath, a very hard AI-math benchmark, with a held-out problem subset meant to enable independent verification

## Where they fit
- Directly relevant to [[Scaling Laws & Compute-Optimal Training]]'s core tension — data as the binding constraint rather than compute — since Epoch is the primary independent source quantifying when that constraint actually bites
- Provides the outside verification that note flags as rare: independent scaling-law and compute-trend analysis not run by a frontier lab with an incentive to make its own numbers look good
- Also the reference source for [[Synthetic Data Generation & Model Collapse]]'s resource-constraint framing — the field's central premise (that high-quality human text is finite and depleting, forcing reliance on synthetic data) rests substantially on Epoch's own human-data-exhaustion projections (estimated window: 2026-2032)
- For [[Benchmark Contamination & Saturation]]: FrontierMath's held-out set became the center of a contamination controversy after it emerged that OpenAI (a funder) had access to most of the problem set and solutions, and a later AI-assisted audit found errors in roughly 42% of the problems — showing that even a benchmark explicitly designed against contamination can still fail on integrity/quality grounds

## Notable work / recent moves
- "Can AI scaling continue through 2030?" — constraint-by-constraint analysis of power, chips, and data
- Ongoing compute-trends and scaling-laws literature tracking on epoch.ai
- FrontierMath v2 audit and corrections after the ~42% error-rate finding (2026)

## Watch list
- epoch.ai/topics/scaling, Epoch AI blog and data updates, FrontierMath leaderboard

## Connections
**Works in:** [[Scaling Laws & Compute-Optimal Training]], [[Synthetic Data Generation & Model Collapse]], [[Benchmark Contamination & Saturation]]
