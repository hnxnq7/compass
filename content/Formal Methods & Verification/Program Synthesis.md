---
tags:
  - field
category: formal-verification
status: tracking
parent:
  - "[[Formal Methods & Verification]]"
related:
  - "[[Software Verification]]"
  - "[[Coding Agents & AI Software Engineering]]"
---

## Problem Space: Program Synthesis

## What seems genuinely hard here?
- Synthesizing programs that are correct by construction from a spec, rather than plausible-looking code that merely passes the visible test cases
- Search space explosion — the space of programs satisfying a partial spec is enormous, and most synthesis approaches only work within narrow, restricted domain-specific languages

## Why hasn't it been solved?
- Technical constraints — general-purpose program synthesis at the scale of real production code remains far harder than the narrow, well-scoped domains (regex synthesis, spreadsheet formulas) where it has actually worked well
- Institutional / regulatory constraints — LLM-based code generation has largely displaced classical program synthesis in mainstream attention, even though it offers a weaker correctness guarantee, because it's more general-purpose out of the box

## What solutions feel fake?
- LLM code generation rebranded as "program synthesis" when it lacks the defining correctness-by-construction guarantee classical synthesis aims for

## What solutions feel inevitable?
- Hybrid approaches — LLM-generated candidates constrained or verified by classical synthesis/formal methods — capturing the generality of LLMs with more of the correctness guarantee of classical synthesis
- Convergence with [[Software Verification]] as verification tooling gets cheap enough (via AI-assisted formalization) to check LLM-generated code more rigorously than test cases alone

## Notable tools / instances
*Concrete instances worth having on file even though the field, not the tool, is what's tracked on the graph.*
- Diffblue Cover — RL-search-based (not LLM) Java unit test generation, correctness-by-construction rather than plausible-looking output

## Key players
- [[MIT CAP Group (Solar-Lezama Lab)]] — originated Sketch/Rosette, arguably reignited program synthesis as an active research field
- [[UToPiA (UT Austin, Isil Dillig)]] — program synthesis + verification, recent focus on neurosymbolic (LLM + symbolic) synthesis
- [[Diffblue]] — commercial counterpoint to LLM code-gen: RL-search-based test synthesis with real correctness guarantees, not just plausible output

## Watch list
- cap.csail.mit.edu, utopia.cs.utexas.edu, PLDI/POPL proceedings

## Connections
**Parent:** [[Formal Methods & Verification]]

**Related:** [[Software Verification]], [[Coding Agents & AI Software Engineering]]

