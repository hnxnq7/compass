---
tags:
  - entity
type: academic-lab
status: dormant
works_in:
  - "[[Data Attribution & Provenance]]"
---

## MadryLab (MIT)

*Aleksander Madry's MIT CSAIL lab — source of TRAK, the influence-function-based method that made training-data attribution computationally tractable at scale.*

## What they do
- Developed TRAK (ICML 2023): approximates influence functions via linearization, random projection, and leave-one-out corrections, making data attribution 2-3 orders of magnitude cheaper than prior methods while preserving ranking accuracy
- Applied TRAK across modalities — ImageNet classifiers, CLIP, BERT/mT5 — to trace specific model outputs back to specific training examples
- Broader lab focus historically includes adversarial robustness and reliable/trustworthy ML, under Aleksander Madry

## Where they fit
- One of the main academic anchors for the technical side of [[Data Attribution & Provenance]] — TRAK is the reference method cited by most subsequent scalable-attribution work, distinct from the licensing/consent-layer approach companies like Human Native AI take

## Notable work / recent moves
- Madry joined OpenAI in 2024 as a top safety executive (head of Preparedness, later reassigned to reasoning research), taking leave from MIT; he departed OpenAI in May 2026
- Lab activity has been reduced during Madry's leave, though TRAK's codebase (github.com/MadryLab/trak) remains the field's reference implementation

## Watch list
- github.com/MadryLab, madry.mit.edu

## Connections
**Works in:** [[Data Attribution & Provenance]]
