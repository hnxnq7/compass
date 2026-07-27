---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Activation Steering & Representation Engineering]]"
  - "[[Mechanistic Interpretability]]"
---

## Bau Lab (Northeastern)

*David Bau's lab at Northeastern's Khoury College — studies the structure and interpretation of deep networks, with a throughline from model editing (ROME/MEMIT) to activation-level steering.*

## What they do
- Developed ROME (Rank-One Model Editing) and its multi-layer extension MEMIT — causal tracing methods that locate and edit factual associations inside GPT-style models by identifying which MLP weights are decisive for a given prediction
- Builds general interpretability tooling — Network Dissection, causal tracing, function vectors, concept sliders — aimed at making internal model structure legible and directly manipulable
- Recent work applies activation-space "persona vectors" to measure and steer risky behavioral traits, both at inference time and as a regularizer during fine-tuning

## Where they fit
- One of the few academic labs (as opposed to frontier-lab safety teams) doing sustained, publication-driven work that spans both [[Mechanistic Interpretability]] (causal tracing, circuit-level editing) and [[Activation Steering & Representation Engineering]] (persona vectors, representation steering) — the same causal-intervention toolkit underlies both

## Notable work / recent moves
- ROME (NeurIPS 2022) and MEMIT remain widely-cited reference implementations for locate-and-edit model editing
- Co-authored "Open Problems in Mechanistic Interpretability" (TMLR 2025) with Neel Nanda, Yonatan Belinkov, and others — a field-wide survey of what's still unsolved
- Ongoing 2026 work on persona vectors for detecting and steering emergent misalignment

## Watch list
- baulab.info (publications, code releases)
- github.com/kmeng01 (ROME/MEMIT) and github.com/davidbau

## Connections
**Works in:** [[Activation Steering & Representation Engineering]], [[Mechanistic Interpretability]]
