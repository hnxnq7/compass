---
tags:
  - field
category: formal-verification
status: active
parent:
  - "[[Formal Methods & Verification]]"
enables:
  - "[[AI for Math Proofs]]"
related:
  - "[[Program Synthesis]]"
---

## Problem Space: Proof Assistants & Formal Mathematics

## What seems genuinely hard here?
- Autoformalization — converting informal mathematical statements/proofs (natural language + notation) into a formal language (Lean) without losing or distorting meaning
- Search over proof space is enormous for genuinely novel theorems; unlike verification of known results, discovery requires finding a proof that doesn't yet exist anywhere

## Why hasn't it been solved?
- Technical constraints — training signal for novel-theorem-proving is inherently scarce (there's no large corpus of "how mathematicians actually think through a new proof")
- Institutional / regulatory constraints — formalizing a field's existing body of knowledge into Lean is itself decades of unfinished human labor that AI tools are only now starting to accelerate

## What solutions feel fake?
- "Solved by AI" framing applied to formalizing a known, published proof — the harder and more interesting claim is genuine novel-result discovery

## What solutions feel inevitable?
- Test-time RL / evolutionary search over proof variants at inference time (rather than only relying on pretraining) becoming standard for the hardest problems, since it's already showing results at frontier labs
- This directly feeds [[AI for Math Proofs]] as an application area, and the same autoformalization techniques generalize toward [[Software Verification]] and [[Hardware Verification]]

## Notable tools / instances
- AlphaProof / AlphaProof Nexus (DeepMind) — autonomous proofs of 9 Erdős problems, May 2026
- Lean 4, TorchLean (PyTorch↔Lean bridge), Math Inc.'s Gauss system (formalized sphere-packing-in-24-dimensions proof), Pythagoras-Prover
- **Solving Olympiad Geometry Without Human Demonstrations** (Trinh, Wu, Le, He, Luong — DeepMind/NYU, Nature 2024) — the AlphaGeometry paper; solved 25 of 30 IMO geometry benchmark problems (vs. 10 for the prior best method), the landmark result for synthetic-data-trained, human-demonstration-free theorem proving
- **The Lean Mathematical Library** (mathlib community, CPP 2020) — describes mathlib's design; the single unified library nearly all Lean formalization work, human- and AI-driven alike, builds on top of

## Key players
- [[Xena Project (Imperial, Kevin Buzzard)]] — human-driven formalization at the frontier of pure math (leading the Fermat's Last Theorem formalization), a useful contrast to AI-driven provers like AlphaProof
- [[CMU ICARM (Jeremy Avigad)]] — Lean co-designer and mathlib maintainer, now directing an NSF-funded institute explicitly built around the AI/formal-proof intersection — the AI-forward complement to Xena's human-driven approach

## Watch list
- Lean community announcements, DeepMind AlphaProof updates

## Connections
**Parent:** [[Formal Methods & Verification]]

**Enables:** [[AI for Math Proofs]]

**Related:** [[Program Synthesis]]

