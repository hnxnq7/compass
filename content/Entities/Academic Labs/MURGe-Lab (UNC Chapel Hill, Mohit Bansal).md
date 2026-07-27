---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Model Merging & Distillation]]"
---

## MURGe-Lab (UNC Chapel Hill, Mohit Bansal)

*Mohit Bansal's NLP lab at UNC Chapel Hill — source of TIES-Merging, one of the two or three techniques nearly every later model-merging paper benchmarks against.*

## What they do
- Academic NLP lab (UNC-AI Group) spanning multimodal learning, robustness, and generalization, with model merging as one specific, highly-cited thread
- Authored "TIES-Merging: Resolving Interference When Merging Models" (Yadav, Tam, Choshen, Raffel, Bansal — NeurIPS 2023): trims small-magnitude parameter changes and resolves sign conflicts between task vectors before merging, directly addressing the "very different fine-tunes just average away both" failure mode
- Broader lab output includes work on task arithmetic and compositional generalization that model merging builds on conceptually

## Where they fit
- TIES-Merging is the academic reference point for the destructive-interference problem this field's "what seems genuinely hard here" section names directly — trimming + sign resolution is the standard fix cited before any more elaborate (e.g. evolutionary) merge strategy
- Distinct from [[Arcee AI]]'s MergeKit (which implements TIES, DARE, and other recipes as a production tool) and [[Sakana AI]]'s evolutionary search (which searches over recipes rather than proposing a new one) — this is the underlying research the tooling layer packages

## Notable work / recent moves
- TIES-Merging remains one of the default merge methods implemented in MergeKit and cited as a baseline in nearly all subsequent model-merging papers (DARE-TIES, Mixup Model Merge, etc.)

## Watch list
- murgelab.cs.unc.edu

## Connections
**Works in:** [[Model Merging & Distillation]]
