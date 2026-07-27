---
tags:
  - field
category: data
status: active
parent:
  - "[[Data]]"
enables:
  - "[[Foundation Model Training]]"
  - "[[Post-training & Alignment]]"
related:
  - "[[Data Curation & Filtering]]"
---

## Problem Space: Synthetic Data Generation & Model Collapse

## What seems genuinely hard here?
- Generating data that adds real signal rather than just amplifying the generating model's own blind spots and biases
- Detecting collapse early — degradation in diversity/tail coverage is subtle and doesn't show up in aggregate loss until it's already baked in

## Why hasn't it been solved?
- Technical constraints — a model trained recursively on its own outputs provably degrades (progressive error accumulation) unless real data keeps a non-shrinking share of the mix
- Institutional / regulatory constraints — with projections that most new online content will be synthetic, the "real data" anchor itself is getting harder to source and verify at web scale

## What solutions feel fake?
- Framing model collapse as solved by simply "adding more synthetic data" without addressing the real/synthetic ratio, which is what MIT-adjacent research shows actually matters
- Synthetic data volume presented as the win condition when curation discipline and diversity are what the evidence points to

## What solutions feel inevitable?
- Held-out real-data test sets and distribution-overlap checks becoming a standard pipeline stage, not an afterthought
- RAG-style live retrieval from human-maintained sources as a partial hedge against a synthetic-saturated web

## Notable tools / instances
- Gretel — synthetic data platform acquired by NVIDIA (2025, ~$320M+) and folded into NVIDIA's generative AI developer tooling
- Apple's "Synthetic Data 2.0" — 2026 Siri overhaul built on synthetic data generated from proprietary user interactions rather than scraped web data
- **AI models collapse when trained on recursively generated data** (Shumailov, Shumaylov, Zhao, Gal et al. — Oxford/Cambridge, Nature 2024; preprint as "The Curse of Recursion," 2023) — the paper that named and formally characterized model collapse across VAEs, Gaussian mixture models, and LLMs; the standard citation for the phenomenon this field is named after
- **Is Model Collapse Inevitable? Breaking the Curse of Recursion by Accumulating Real and Synthetic Data** (Gerstgrasser et al., 2024) — the key follow-up result showing collapse is avoidable if synthetic data accumulates alongside (rather than replaces) real data across generations; the evidence behind this note's "feels fake" framing that ratio, not volume, is what matters

## Key players
- [[Mostly AI]] — long-running dedicated synthetic-data vendor (structured/tabular), a useful contrast case against open-ended generative collapse risk
- [[Epoch AI]] — source of the human-data-exhaustion projections (2026-2032) that motivate the field's urgency
- [[OATML (Oxford, Yarin Gal)]] — the lab behind the original model collapse paper; still the field's primary academic anchor for the phenomenon itself, as opposed to mitigation strategies

## Watch list
- epoch.ai/data-insights, Epoch AI Substack (The Epoch Brief), arXiv "model collapse" search, oatml.cs.ox.ac.uk/news

## Connections
**Parent:** [[Data]]

**Enables:** [[Foundation Model Training]], [[Post-training & Alignment]]

**Related:** [[Data Curation & Filtering]]

