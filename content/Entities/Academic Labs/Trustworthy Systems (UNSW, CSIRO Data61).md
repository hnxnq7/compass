---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Software Verification]]"
---

## Trustworthy Systems (UNSW, CSIRO Data61)

*Gerwin Klein's group — built seL4, the first machine-checked proof of functional correctness for a complete general-purpose OS kernel, still the reference point for "what does full-scale software verification actually look like."*

## What they do
- Produced the seL4 microkernel together with a complete, machine-checked proof (in Isabelle/HOL) that the C implementation matches an abstract specification, down to binary-level correctness in later extensions — published as "seL4: Formal Verification of an OS Kernel" (Klein et al., SOSP 2009)
- seL4 remains deployed in real safety- and security-critical systems (aerospace, defense, automotive), making it one of the few formal-verification results that's both a landmark proof and an actual production artifact
- Continues extending verification guarantees (timing, information-flow, mixed-criticality) on top of the base correctness proof rather than treating it as a one-time result

## Where they fit
- The clearest "this is what full-scale, not toy-example, formal verification looks like" reference point for [[Software Verification]] — the note's core tension (formal proof vs. state-space explosion at real-system scale) is exactly what seL4 is the standing counterexample to
- Frequently paired with CompCert (INRIA, Xavier Leroy's verified C compiler) as the two projects that proved OS/compiler-scale verification was possible at all, not just isolated algorithms

## Notable work / recent moves
- seL4 Foundation continues stewarding the kernel and proofs as an open-source, actively maintained project (not a frozen research artifact)
- Ongoing work extends the original functional-correctness proof with timing and side-channel guarantees

## Watch list
- sel4.systems, trustworthy.systems (UNSW/Data61 group page)

## Connections
**Works in:** [[Software Verification]]
