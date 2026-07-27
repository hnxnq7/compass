---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Preference Optimization]]"
  - "[[Vision-Language-Action Models & Embodied Robotics]]"
---

## Stanford IRIS Lab (Chelsea Finn)

*Chelsea Finn's Stanford lab (Intelligence through Robotic Interaction at Scale) — co-originated Direct Preference Optimization, and separately co-created OpenVLA and contributed to Open X-Embodiment/RT-X, making it an academic anchor for both post-training and robot-learning fields.*

## What they do
- Academic robotics/ML lab working broadly on learning algorithms that generalize from limited supervision; DPO grew out of that same "get more out of less/simpler supervision" thread applied to language model alignment
- Co-authored "Direct Preference Optimization: Your Language Model is Secretly a Reward Model" (Rafailov, Sharma, Mitchell, Ermon, Manning, Finn — Stanford, NeurIPS 2023): shows the RLHF reward-model-then-RL objective has a closed-form optimal policy, so preference data can train the policy directly via a binary cross-entropy loss, no reward model or RL loop required
- Work was supported through Stanford HAI and the Stanford Center for Research on Foundation Models (CRFM)
- On the robotics side: co-created OpenVLA (with UC Berkeley, Google DeepMind, and Toyota Research Institute), the open-source 7B-parameter vision-language-action model that became the field's community-standard fine-tuning baseline, and contributed to Open X-Embodiment/RT-X, the cross-institution, cross-robot-embodiment dataset and model effort

## Where they fit
- DPO is the specific technical inflection point this field's "what solutions feel inevitable" section describes — the reason a 2026 post-training stack default includes "DPO/SimPO/KTO variants" as a named stage rather than full RLHF
- Distinct from [[Hugging Face]] (which maintains TRL's DPO trainer, the reference implementation) and [[Scale AI]] (which supplies the preference-comparison data DPO and its variants train on) — this is the lab that produced the underlying method both build on
- Also the clearest academic counterweight, inside [[Vision-Language-Action Models & Embodied Robotics]], to that field's company-heavy key-player list (Physical Intelligence, Figure AI, DeepMind, NVIDIA) — Finn co-founded Physical Intelligence, but IRIS Lab's open releases (OpenVLA, Open X-Embodiment) are what most academic and independent VLA work actually builds on

## Notable work / recent moves
- DPO's core result — matching or exceeding PPO-based RLHF on sentiment control, summarization, and single-turn dialogue while removing the separate reward-model-training and RL-sampling stages — is the empirical basis most DPO-family variants (IPO, KTO, SimPO) still cite as their starting point
- "OpenVLA: An Open-Source Vision-Language-Action Model" (Kim, Pertsch, Karamcheti, et al. incl. Finn & Levine; Stanford/UC Berkeley/DeepMind/TRI, CoRL 2024) — outperformed closed alternatives like RT-2-X on real-robot manipulation while remaining fully open

## Watch list
- ai.stanford.edu/~cbfinn (publication list)
- github.com/openvla

## Connections
**Works in:** [[Preference Optimization]], [[Vision-Language-Action Models & Embodied Robotics]]
