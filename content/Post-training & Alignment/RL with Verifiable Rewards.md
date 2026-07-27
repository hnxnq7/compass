---
tags:
  - field
category: post-training
status: active
parent:
  - "[[Post-training & Alignment]]"
depends_on:
  - "[[Process & Outcome Reward Models]]"
enables:
  - "[[Agents & Tool Use]]"
related:
  - "[[Preference Optimization]]"
---

## Problem Space: RL with Verifiable Rewards

## What seems genuinely hard here?
- Extending "verifiable" beyond math/code into domains without a clean programmatic checker (most of real-world reasoning)
- Reward hacking against verifiers themselves — a model can learn to exploit quirks of an automated checker just as it can exploit a learned reward model

## Why hasn't it been solved?
- Technical constraints — verifiable-reward training only works where correctness is automatically checkable, which is a minority of tasks people actually care about
- Institutional / regulatory constraints — building good verifiers/sandboxes (code execution environments, math checkers) is itself substantial infrastructure work most teams underinvest in

## What solutions feel fake?
- RLVR results on math/code benchmarks generalized into claims about "reasoning" broadly, when the gains are concentrated in verifiable domains

## What solutions feel inevitable?
- RLVR (GRPO, DAPO, VAPO and variants) as the dominant post-training paradigm for reasoning-heavy models — by 2026 commentary already frames the old "pretrain then RLHF" recipe as obsolete
- Group-relative methods (comparing rollouts within a batch rather than training a separate value model) becoming standard for compute efficiency

## Notable tools / instances
- GRPO, DAPO, VAPO, and other REINFORCE-style group-relative RL variants
- **DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models** (Shao, Wang et al., DeepSeek-AI, 2024) — introduced GRPO itself; the paper nearly every group-relative RLVR method cites as its origin
- **DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning** (DeepSeek-AI, 2025) — showed pure RLVR (no SFT warm-start, in the R1-Zero variant) can elicit long chain-of-thought reasoning from a base model; the result that made "RLVR as the dominant post-training paradigm for reasoning" a 2026 consensus rather than a bet
- Sky-T1 (UC Berkeley Sky Computing Lab, NovaSky team, Jan 2025) — reproduced o1-preview-level math/code reasoning for under $450 of training compute with fully open data and code, the notable result that made GRPO-style reasoning RL reproducible outside a frontier lab's budget

## Key players
- [[DeepSeek]] — introduced GRPO (DeepSeekMath) and shipped DeepSeek-R1, the reference implementation most 2026 RLVR work cites or builds on
- [[Hugging Face]] — Open R1 reproduces DeepSeek-R1's GRPO pipeline in the open; TRL's GRPO trainer is a widely-used reference implementation
- [[Qwen (Alibaba)]] — one of the earliest and most visible non-DeepSeek adopters of GRPO-style training for reasoning-mode models
- [[UC Berkeley Sky Computing Lab]] — Sky-T1/SkyRL, the field's clearest fully-open academic reproduction of GRPO-style reasoning RL outside a frontier lab's compute budget

## Watch list
- github.com/huggingface/open-r1
- DeepSeek's arXiv technical reports

## Connections
**Parent:** [[Post-training & Alignment]]

**Depends on:** [[Process & Outcome Reward Models]]

**Enables:** [[Agents & Tool Use]]

**Related:** [[Preference Optimization]]

**Key players:** [[DeepSeek]], [[Hugging Face]], [[Qwen (Alibaba)]], [[UC Berkeley Sky Computing Lab]]

