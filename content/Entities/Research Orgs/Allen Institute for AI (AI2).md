---
tags:
  - entity
type: research-org
status: active
works_in:
  - "[[Data Curation & Filtering]]"
---

## Allen Institute for AI (AI2)

*Seattle nonprofit AI research institute (founded by Paul Allen) that builds and open-sources full pretraining pipelines — models, data, and code together — rather than just publishing papers.*

## What they do
- Builds Dolma, an open corpus for language-model pretraining (3T tokens in its original release, now ~9.3T tokens in Dolma 3), along with the Dolma Toolkit for large-scale document tagging, filtering, and deduplication (Rust-backed Bloom-filter dedup, parallel processing)
- Uses Dolma to train OLMo, a fully open language model family (weights, data, training code, and logs all released) — now at OLMo 3, trained on Dolma 3
- Positions the whole stack as reproducible research infrastructure, in contrast to frontier labs that publish results without releasing the underlying data or curation pipeline

## Where they fit
- The clearest open, inspectable anchor for [[Data Curation & Filtering]] — most frontier-lab curation pipelines are proprietary and undocumented; AI2 is one of the few orgs publishing the actual filtering/dedup toolchain alongside the resulting model, which is what makes the field's public research possible at all

## Notable work / recent moves
- Dolma 3 / OLMo 3 release (2026): ~9.3T-token corpus spanning web pages, science PDFs (via AI2's olmOCR), code, math, and encyclopedic text

## Watch list
- allenai.org/blog, github.com/allenai/dolma

## Connections
**Works in:** [[Data Curation & Filtering]]
