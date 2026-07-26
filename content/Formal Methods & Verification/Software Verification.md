---
tags:
  - field
category: formal-verification
status: active
parent:
  - "[[Formal Methods & Verification]]"
related:
  - "[[Spec-Driven Coding & Development]]"
  - "[[Coding Agents & AI Software Engineering]]"
  - "[[Program Synthesis]]"
---

## Problem Space: Software Verification

## What seems genuinely hard here?
- Formal proof requires a formal spec, and writing a correct, complete spec is often as hard as writing correct code — verification doesn't remove the ambiguity problem, it relocates it
- Scaling formal methods (model checking, theorem proving) beyond small, isolated modules to full real-world systems with mutable state, concurrency, and external dependencies

## Why hasn't it been solved?
- Technical constraints — state-space explosion makes exhaustive model checking intractable for anything beyond a bounded subsystem
- Institutional / regulatory constraints — formal verification expertise is rare and expensive, so it's historically been reserved for safety-critical niches (aerospace, some crypto) rather than mainstream software

## What solutions feel fake?
- "AI-verified" marketing claims where an LLM merely wrote tests or reviewed code, with no actual formal proof involved — verification and testing are not the same epistemic guarantee

## What solutions feel inevitable?
- LLM-assisted formalization (turning natural-language requirements into formal specs) lowering the historical labor bottleneck, the same shift already visible in [[Hardware Verification]] and [[Proof Assistants & Formal Mathematics]]
- Convergence with [[Spec-Driven Coding & Development]]: both rest on the same premise — that a precise, checkable spec should be the source of truth — just aimed at different rigor levels (formal proof vs. practical correctness)

## Watch list
-

## Connections
**Parent:** [[Formal Methods & Verification]]

**Related:** [[Spec-Driven Coding & Development]], [[Coding Agents & AI Software Engineering]], [[Program Synthesis]]

