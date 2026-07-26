---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Program Synthesis]]"
---

## Diffblue

*Oxford spinout selling Diffblue Cover, an AI agent that writes and maintains Java unit tests — notable for using reinforcement learning search rather than an LLM to generate the tests.*

## What they do
- Diffblue Cover autonomously writes and maintains JUnit/TestNG unit tests for existing Java codebases; tests it generates compile, run, and validate real behavior rather than being suggestions a human has to check
- Explicitly built on reinforcement learning rather than LLM next-token prediction — the pitch is that this makes coverage claims and generated tests more trustworthy/deterministic than LLM-based code gen
- Long enterprise track record (defense contractors, air-gapped/offline deployment) predating the current LLM coding-agent wave; founded 2016 out of Daniel Kroening's group at Oxford

## Where they fit
- A concrete commercial counterpoint inside [[Program Synthesis]] to the field note's skepticism about "LLM code generation rebranded as program synthesis" — Diffblue's RL-search approach is closer to classical synthesis-with-guarantees than to LLM pattern completion, even though the target (test code) is narrower than general program synthesis
- Adjacent to [[Software Verification]] in spirit (both care about correctness guarantees beyond "looks plausible") but scoped specifically to test generation, not full programs

## Notable work / recent moves
- 

## Watch list
- diffblue.com resources/blog

## Connections
**Works in:** [[Program Synthesis]]
