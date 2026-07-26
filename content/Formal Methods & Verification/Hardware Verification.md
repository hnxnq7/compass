---
tags:
  - field
category: formal-verification
status: active
parent:
  - "[[Formal Methods & Verification]]"
depends_on:
  - "[[AI Hardware & Compute]]"
related:
  - "[[Software Verification]]"
---

## Problem Space: Hardware Verification

## What seems genuinely hard here?
- Generating SystemVerilog Assertions (SVAs) from natural-language specs that are ambiguous or incomplete, without silently under- or over-constraining the property
- Formal coverage closure — proving you've actually covered the meaningful state space, not just the properties someone thought to write
- RTL and spec are both "loosely structured text" from a tool's point of view; bridging that gap reliably (not just plausibly) is the open problem

## Why hasn't it been solved?
- Technical constraints — hardware bugs are often in the interaction between modules (protocol violations, corner-case timing), which is exactly where formal state-space explosion is worst
- Institutional / regulatory constraints — verification engineers with both RTL and formal-methods expertise are scarce and expensive, historically the actual bottleneck on verification throughput, not tooling

## What solutions feel fake?
- LLM-generated SVAs presented as verification-complete when they haven't been checked against formal coverage — a plausible-looking assertion isn't the same as a correct one

## What solutions feel inevitable?
- Agentic, multi-step verification pipelines (plan → generate assertions → prove → analyze counterexamples → analyze coverage) replacing single-shot LLM assertion generation, since each step benefits from tool-augmented iteration rather than one forward pass
- Knowledge-graph-augmented approaches to keep spec/RTL/assertion relationships explicit rather than relying on an LLM's implicit context window

## Notable tools / instances
- Cadence Agentic Verification (multi-agent UVM/SVA generation), Saarthi ("first AI formal verification engineer" — plans, generates SVAs, proves properties, analyzes counterexamples/coverage), SVAgent, ProofLoop (tool-augmented ReAct agent with in-the-loop formal solvers)

## Watch list
- DVCon proceedings

## Connections
**Parent:** [[Formal Methods & Verification]]

**Depends on:** [[AI Hardware & Compute]]

**Related:** [[Software Verification]]

