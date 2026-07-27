---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[AI Accelerator Chips & Inference Silicon]]"
---

## MIT EEMS Group (Vivienne Sze)

*Vivienne Sze's Energy-Efficient Multimedia Systems Group at MIT — source of Eyeriss, the reference architecture for dataflow-optimized DNN accelerators.*

## What they do
- Designed Eyeriss (ISSCC/JSSC 2016, with Joel Emer), a spatial CNN accelerator using a "row-stationary" dataflow to minimize expensive data movement rather than maximize raw FLOPs — the paper that established dataflow as a first-class design axis for AI accelerators, distinct from just adding more MACs
- Followed with Eyeriss v2 (2019) for sparse, compact DNNs on mobile-class power budgets, and accelerators like Navion for autonomous navigation on nano-drones
- Co-authored the widely used reference text "Efficient Processing of Deep Neural Networks" (Sze, Chen, Yang, Emer), a standard syllabus item for accelerator-design courses

## Where they fit
- The main academic counterweight to industry accelerator work in [[AI Accelerator Chips & Inference Silicon]] — Eyeriss's row-stationary dataflow and energy/DRAM-access accounting methodology shaped how both academic and industry accelerators (including inference-specific silicon) are evaluated, not just how fast they multiply matrices

## Notable work / recent moves
- Group continues publishing on efficient ML hardware/algorithm co-design at MIT (eems.mit.edu); Eyeriss remains a standard baseline/comparison point in accelerator papers a decade after its introduction

## Watch list
- eems.mit.edu/publications, MICRO/ISCA/ISSCC accelerator-track proceedings

## Connections
**Works in:** [[AI Accelerator Chips & Inference Silicon]]
