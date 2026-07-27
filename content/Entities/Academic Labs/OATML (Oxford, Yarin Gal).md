---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Synthetic Data Generation & Model Collapse]]"
---

## OATML (Oxford, Yarin Gal)

*Oxford Applied and Theoretical Machine Learning Group, led by Yarin Gal — the lab that named and formally characterized model collapse.*

## What they do
- Ilia Shumailov (then in Gal's OATML group, with Cambridge co-authors) wrote "The Curse of Recursion: Training on Generated Data Makes Models Forget" (2023), later peer-reviewed and extended as "AI models collapse when trained on recursively generated data" (Nature, July 2024) — the paper that gave "model collapse" its name and showed the effect across VAEs, Gaussian mixture models, and LLMs, not just one architecture
- Core finding: models trained recursively on their own (or predecessor models') outputs lose distributional tails within a few generations, even when some original data is retained in the mix — the mechanism this field's "why hasn't it been solved" section describes as progressive error accumulation
- Broader OATML focus is uncertainty estimation and robust/trustworthy ML under Gal, with model collapse as one applied thread

## Where they fit
- The originating academic lab for [[Synthetic Data Generation & Model Collapse]] as a named phenomenon — nearly every subsequent paper on the topic (including the accumulation-based mitigations that complicate the "just add more synthetic data" story) cites this work as the starting point

## Notable work / recent moves
- The Nature paper's core result is now the standard citation for model collapse; follow-up work by other groups (e.g. Gerstgrasser et al., "Is Model Collapse Inevitable?", 2024) shows accumulating real and synthetic data rather than replacing avoids collapse — the nuance this field's note already flags as what "solutions feel fake" gets wrong

## Watch list
- oatml.cs.ox.ac.uk/news, Shumailov's publication feed

## Connections
**Works in:** [[Synthetic Data Generation & Model Collapse]]
