---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Preference Optimization]]"
---

## Stanford IRIS Lab (Chelsea Finn)

*Chelsea Finn's Stanford lab — co-originated Direct Preference Optimization, the paper that turned preference-tuning from a two-stage RLHF pipeline into a single closed-form classification objective.*

## What they do
- Academic robotics/ML lab (Intelligence through Robotic Interaction at Scale) working broadly on learning algorithms that generalize from limited supervision; DPO grew out of that same "get more out of less/simpler supervision" thread applied to language model alignment
- Co-authored "Direct Preference Optimization: Your Language Model is Secretly a Reward Model" (Rafailov, Sharma, Mitchell, Ermon, Manning, Finn — Stanford, NeurIPS 2023): shows the RLHF reward-model-then-RL objective has a closed-form optimal policy, so preference data can train the policy directly via a binary cross-entropy loss, no reward model or RL loop required
- Work was supported through Stanford HAI and the Stanford Center for Research on Foundation Models (CRFM)

## Where they fit
- DPO is the specific technical inflection point this field's "what solutions feel inevitable" section describes — the reason a 2026 post-training stack default includes "DPO/SimPO/KTO variants" as a named stage rather than full RLHF
- Distinct from [[Hugging Face]] (which maintains TRL's DPO trainer, the reference implementation) and [[Scale AI]] (which supplies the preference-comparison data DPO and its variants train on) — this is the lab that produced the underlying method both build on

## Notable work / recent moves
- DPO's core result — matching or exceeding PPO-based RLHF on sentiment control, summarization, and single-turn dialogue while removing the separate reward-model-training and RL-sampling stages — is the empirical basis most DPO-family variants (IPO, KTO, SimPO) still cite as their starting point

## Watch list
- ai.stanford.edu/~cbfinn (publication list)

## Connections
**Works in:** [[Preference Optimization]]
