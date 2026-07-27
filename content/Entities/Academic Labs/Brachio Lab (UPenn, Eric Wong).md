---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Behavioral Red-Teaming as Interpretability Proxy]]"
---

## Brachio Lab (UPenn, Eric Wong)

*Eric Wong's lab at Penn — "debugging machine learning," with automated red-teaming (PAIR, JailbreakBench) as its most visible output.*

## What they do
- Created PAIR (Prompt Automatic Iterative Refinement) — an automated black-box jailbreak algorithm that uses a separate attacker LLM to iteratively refine adversarial prompts against a target model, in far fewer queries than prior brute-force methods
- Co-created JailbreakBench (NeurIPS 2024 Datasets & Benchmarks), an open, standardized benchmark and leaderboard for jailbreak attacks and defenses, built with ETH Zurich, EPFL, and Sony AI
- Broader lab focus on explainability, robustness, and formal guarantees for ML systems, not just attack techniques

## Where they fit
- PAIR is one of the standard automated red-teaming methods frontier labs (Meta, Google DeepMind, Anthropic) actually run against their own models — a concrete academic contribution to the behavioral side of [[Behavioral Red-Teaming as Interpretability Proxy]], distinct from the crowdsourced (Gray Swan) and frontier-lab-internal (Apollo, Anthropic) approaches already tracked here

## Notable work / recent moves
- "Jailbreaking Black Box Large Language Models in Twenty Queries" (Chao et al., 2023) introduced PAIR
- JailbreakBench continues to track state-of-the-art attacks/defenses as a living leaderboard

## Watch list
- brachiolab.github.io
- jailbreakbench.github.io (leaderboard updates)

## Connections
**Works in:** [[Behavioral Red-Teaming as Interpretability Proxy]]
