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

## Watch list
- Lean community announcements, DeepMind AlphaProof updates

## Connections
**Parent:** [[Formal Methods & Verification]]

**Enables:** [[AI for Math Proofs]]

**Related:** [[Program Synthesis]]

