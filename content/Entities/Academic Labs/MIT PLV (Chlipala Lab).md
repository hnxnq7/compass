---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Software Verification]]"
  - "[[Proof Assistants & Formal Mathematics]]"
---

## MIT PLV (Programming Languages & Verification Group)

*Adam Chlipala's group at MIT CSAIL — machine-checked proofs of correctness for real systems, not just toy programs.*

## What they do
- Builds tools for machine-checked mathematical proofs of correctness for systems like compilers, runtime systems, and file systems, mostly using the Coq proof assistant
- Notable projects include FSCQ (the first file system with a machine-checked crash-safety proof) and Ur/Web (a language bringing strong correctness guarantees to web applications)
- Research spans object-capability systems, proof-carrying code, and whole-program optimizing compilers, applied to computer architecture, cryptography, databases, and OS design

## Where they fit
- One of the clearest academic anchors for [[Software Verification]] specifically — the group's whole thesis is that formal verification should be usable for real, deployed systems, not just isolated algorithms
- Adjacent to [[Proof Assistants & Formal Mathematics]] via shared reliance on Coq, though the group's focus is systems correctness rather than pure mathematics

## Notable work / recent moves
- Extending the Bedrock2 verified-compilation approach with "omnisemantics" to prove timing upper bounds (Jamner, Kammer, Nag, Chlipala), ongoing as of Jan 2026
- Two papers at PLDI'26 (June 2026): "Causality and Semantic Separation" (PL-style soundness/completeness theorems for causal-diagram d-separation) and "A Mechanized Algebra of Verified Data Structures for Optimizing Sparse Tensor Programs"
- 2025: "Pyrosome: Verified Compilation for Modular Metatheory" (OOPSLA2) and "Securing Cryptographic Software via Typed Assembly Language" (CCS 2025)

## Watch list
- plv.csail.mit.edu, and github.com/mit-plv (fiat-crypto, rewriter, bedrock2 repos)

## Connections
**Works in:** [[Software Verification]], [[Proof Assistants & Formal Mathematics]]
