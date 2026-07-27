---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[LLM-as-Judge Evaluation]]"
  - "[[RL with Verifiable Rewards]]"
---

## UC Berkeley Sky Computing Lab

*Ion Stoica's systems lab at Berkeley — the academic lab where Chatbot Arena and MT-Bench, the two founding techniques behind LLM-as-judge evaluation, were built before LMArena spun out as a company.*

## What they do
- Successor to Berkeley's RISELab (Spark, Ray lineage); builds open systems for AI infrastructure — vLLM and SkyPilot both trace back here — with LLM evaluation as one strand of the work
- Grad students Wei-Lin Chiang and Anastasios Angelopoulos, advised by Ion Stoica, built Chatbot Arena as a lab research project starting 2023; it ran inside the lab (under the LMSYS org) until the 2025 spinout into the standalone company LMArena
- Co-authored "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" (Zheng et al., NeurIPS 2023 Datasets & Benchmarks), the paper that validated LLM-as-judge against human preference data and remains the standard citation for the technique

## Where they fit
- The academic origin point for [[LLM-as-Judge Evaluation]] as a validated methodology, distinct from [[LMArena]] the company it became — the lab did the founding research, the company now runs the leaderboard at scale
- Sits in the same Berkeley systems lineage as [[Berkeley RDI (Ion Stoica)]], which does adjacent benchmark-auditing work for agents specifically
- Also a rare fully-open academic entrant in [[RL with Verifiable Rewards]], normally dominated by frontier labs (DeepSeek, Alibaba) — Sky-T1/SkyRL exist specifically to make GRPO-style reasoning RL reproducible outside a frontier lab's compute budget

## Notable work / recent moves
- MT-Bench/Chatbot Arena's core finding — GPT-4-as-judge agrees with human preference rankings over 80% of the time, comparable to human-human agreement — is the empirical basis nearly every production LLM-as-judge deployment leans on
- Continues publishing systems research (serving, agentic infra) alongside the evaluation lineage that produced Arena
- The lab's NovaSky team open-sourced Sky-T1 (Jan 2025) — a 32B reasoning model reproducing o1-preview-level math/code performance for under \$450 of training compute, releasing data and code as a fully reproducible RLVR-adjacent recipe — and followed with SkyRL, an open RL post-training framework for reasoning models

## Watch list
- sky.cs.berkeley.edu, sky.cs.berkeley.edu/projects

## Connections
**Works in:** [[LLM-as-Judge Evaluation]], [[RL with Verifiable Rewards]]
