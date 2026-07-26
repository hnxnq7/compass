---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Agent Evaluation & Sandboxing]]"
---

## E2B

*Open-source, cloud runtime built specifically for sandboxing AI-agent code execution, using Firecracker microVMs.*

## What they do
- Provides isolated Linux sandboxes (microVMs) that spin up in well under a second, for running AI-generated/agent code safely outside the host environment
- Kernel-level isolation via Firecracker rather than container-based isolation, aimed at being both fast enough for interactive agent loops and safe enough for untrusted code
- SDK-first design targeted specifically at AI use cases: coding agents, computer use, deep research, RL environments

## Where they fit
- One of the clearest infrastructure answers to the "realistic AND safe" tension flagged in [[Agent Evaluation & Sandboxing]] — a sandbox agents can actually act freely inside without risking the host
- Widely adopted by other agent builders (reported use by Perplexity, Hugging Face, Groq, Manus) as the execution layer underneath their own agents

## Notable work / recent moves
- \$21M Series A (July 2025, led by Insight Partners), ~\$32M total raised
- Reports 500M+ sandboxes run and 2M+ monthly SDK downloads as of 2026

## Watch list
- E2B GitHub releases, e2b.dev blog

## Connections
**Works in:** [[Agent Evaluation & Sandboxing]]
