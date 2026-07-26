---
tags:
  - field
category: applications
status: active
parent:
  - "[[Applications]]"
depends_on:
  - "[[Foundation Model Training]]"
related:
  - "[[AI for Scientific Discovery]]"
---

## Problem Space: AI for Biology, Genomics & Drug Discovery

## What seems genuinely hard here?
- Structure prediction (solved-ish by AlphaFold) is not the same as *function* or *interaction* prediction — knowing what a protein looks like doesn't tell you what a drug binding to it will actually do in a living system
- Wet-lab validation remains the real bottleneck: a model can generate thousands of candidate binders per day, but testing them is still bounded by physical lab throughput
- Biomolecular foundation models (genomic, protein, cell) are much newer and less mature than language models — the field is still working out what "scaling laws" even mean for DNA/protein sequence data

## Why hasn't it been solved?
- Physical / biological constraints — biology is stochastic and context-dependent in ways chemistry and physics are not; a model trained on one cell type or organism often doesn't transfer
- Technical constraints — high-quality labeled biomolecular data (binding affinities, functional assays) is orders of magnitude scarcer than text, and much of the best data is proprietary to pharma companies
- Institutional / regulatory constraints — drug approval timelines (FDA trials) are measured in years regardless of how fast the AI-driven discovery step gets, capping how much the front-end speedup actually compresses time-to-market

## What solutions feel fake?
- "AI discovers new drug" headlines that describe a promising *candidate* identified computationally, several years and phases of trials away from being an actual drug

## What solutions feel inevitable?
- Foundation models generalizing across biomolecular tasks (structure, function, docking, cellular phenotype) rather than one narrow model per task — already the direction genomic/protein foundation models are heading
- Large pharma paying for direct access to specialized biomolecular foundation models (licensing deals) rather than building everything in-house, mirroring how compute-heavy AI capability is licensed elsewhere
- "World models" of biology (mapping structure → function → design, not just structure prediction) as the next visible leap past AlphaFold-style structure prediction alone

## Notable tools / instances
- AlphaFold 3 (DeepMind) — structure prediction, the base most of the field builds on or benchmarks against

## Key players
- [[Isomorphic Labs]] — DeepMind spinout, AlphaFold-derived end-to-end drug design (IsoDDE), Lilly/Novartis deals
- [[EvolutionaryScale]] — ESM-3 protein language model, ex-Meta FAIR team, general-purpose protein foundation models
- [[Recursion Pharmaceuticals]] — high-throughput imaging + ML "TechBio" platform, longest-running public proof point either way

## Watch list
- Isomorphic Labs and EvolutionaryScale blogs/releases
- Recursion investor press releases
- AlphaFold/Boltz-family papers on arXiv

## Connections
**Parent:** [[Applications]]

**Depends on:** [[Foundation Model Training]]

**Related:** [[AI for Scientific Discovery]]

**Key players:** [[Isomorphic Labs]], [[EvolutionaryScale]], [[Recursion Pharmaceuticals]]
