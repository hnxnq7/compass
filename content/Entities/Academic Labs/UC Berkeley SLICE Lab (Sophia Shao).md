---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Hardware Verification]]"
---

## UC Berkeley SLICE Lab (Sophia Shao)

*Yakun Sophia Shao's computer architecture lab at Berkeley — one of the more active academic groups studying where LLM-generated Verilog/RTL actually breaks, including hallucinated hardware behavior that formal coverage is supposed to catch.*

## What they do
- Focuses on domain-specific hardware design methodology and deep-learning accelerators generally; LLM-assisted RTL/Verilog generation is a specific research thread, not the lab's whole identity
- Published "Improving LLM Performance in Generating Verilog by Fine-Tuning" (Berkeley EECS TR, 2025) and "Haven: Hallucination-Mitigated LLM for Verilog Code Generation Aligned with HDL Engineers" (2025), both aimed at the gap between plausible-looking generated RTL and RTL that's actually correct
- Works from the HDLBits/VerilogEval problem sets that have become the de facto benchmark for this subfield

## Where they fit
- Direct academic counterpart to the EDA-vendor agentic pipelines (Cadence, Synopsys) covered in [[Hardware Verification]] — where the vendors ship agentic assertion-generation products, SLICE studies the underlying failure mode (hallucinated RTL/assertions) that makes formal coverage checking necessary in the first place
- "Haven" is a concrete instance of the note's core claim that a plausible-looking assertion isn't the same as a correct one

## Notable work / recent moves
- Sophia Shao received an NSF CAREER award (2024) for work spanning hardware acceleration and design methodology
- Lab continues iterating on fine-tuning and hallucination-mitigation approaches for RTL generation as of 2025

## Watch list
- slice.eecs.berkeley.edu, VerilogEval leaderboard updates

## Connections
**Works in:** [[Hardware Verification]]
