---
title: Tech & AI Atlas
tags:
  - field-meta
---

A map of fields and problem spaces across tech/AI — how they nest (broad category → specific field) and how they cross-connect (`depends_on` / `enables` / `related`, visible in the graph in the sidebar). Grounded in research as of July 2026; meant to keep growing.

## Tree

- [[AI Hardware & Compute]]
  - [[AI Accelerator Chips & Inference Silicon]]
  - [[Datacenter Power & Cooling Constraints]]
  - [[Optical Interconnect & Co-Packaged Optics]]
- [[Agents & Tool Use]]
  - [[Agent Evaluation & Sandboxing]]
  - [[Coding Agents & AI Software Engineering]]
  - [[Computer-Use & Browser Agents]]
  - [[Long-Horizon Planning & Memory]]
  - [[Multi-Agent Systems]]
- [[Applications]]
  - [[AI for Math Proofs]]
  - [[AI for Scientific Discovery]]
  - [[Enterprise AI & Vertical Copilots]]
- [[Data]]
  - [[Data Attribution & Provenance]]
  - [[Data Curation & Filtering]]
  - [[Synthetic Data Generation & Model Collapse]]
- [[Evals]]
  - [[Benchmark Contamination & Saturation]]
  - [[LLM-as-Judge Evaluation]]
  - [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]
- [[Formal Methods & Verification]]
  - [[Hardware Verification]]
  - [[Program Synthesis]]
  - [[Proof Assistants & Formal Mathematics]]
  - [[Software Verification]]
  - [[Spec-Driven Coding & Development]]
- [[Foundation Model Training]]
  - [[Long-Context & Hybrid Attention Architectures]]
  - [[Mixture-of-Experts & Sparse Scaling]]
  - [[Model Architecture Research]]
  - [[Scaling Laws & Compute-Optimal Training]]
- [[Inference & Serving Systems]]
  - [[Disaggregated Prefill_Decode Serving|Disaggregated Prefill/Decode Serving]]
  - [[KV-Cache Optimization & Compression]]
  - [[Quantization]]
  - [[Speculative Decoding]]
- [[Interpretability]]
  - [[Activation Steering & Representation Engineering]]
  - [[Behavioral Red-Teaming as Interpretability Proxy]]
  - [[Mechanistic Interpretability]]
- [[Multimodal & World Models]]
  - [[Multisensory Integration]]
  - [[Neuro-AI & Brain-Inspired Models]]
  - [[Spatial Intelligence]]
  - [[Video Generation & World Models]]
  - [[Vision-Language-Action Models & Embodied Robotics]]
- [[Post-training & Alignment]]
  - [[Model Merging & Distillation]]
  - [[Preference Optimization]]
  - [[Process & Outcome Reward Models]]
  - [[RL with Verifiable Rewards]]
  - [[Supervised & Parameter-Efficient Fine-Tuning]]
- [[Safety & Governance]]
  - [[AI Policy & Regulation]]
  - [[Dangerous Capability Evaluation]]
  - [[Open vs Closed Weight Governance]]
  - [[Scalable Oversight]]

## Category legend
- **compute** — chips, accelerators, interconnect, datacenters
- **data** — curation, synthetic data, data engines, licensing
- **foundation-models** — pretraining, architectures, scaling laws
- **post-training** — RLHF/RLAIF, SFT, preference optimization, distillation
- **systems-inference** — serving, quantization, speculative decoding, KV cache
- **agents** — planning, memory, tool use, multi-agent
- **multimodal** — vision-language, video, spatial/world models, robotics, neuro-AI
- **interpretability** — mechanistic interp, probing, evals of internals
- **safety-governance** — alignment theory, policy, security, red-teaming
- **formal-verification** — software/hardware verification, spec-driven dev, formal math
- **applications** — coding agents, science, healthcare, finance, verticals
- **evals** — benchmarks, eval methodology, leaderboards

## How this is organized
- **`parent`** (frontmatter) = one primary broader field — the tree edge shown above. Root category notes (tagged `field-root`) have no parent.
- **`depends_on` / `enables` / `related`** (frontmatter + each note's "Connections" section) = cross-links for interconnections that don't fit the tree — e.g. [[Coding Agents & AI Software Engineering]] lives under Agents but relates to [[Spec-Driven Coding & Development]] under Formal Methods. These are what make the sidebar graph a real graph, not just a tree.
- Folders (`AI Hardware & Compute/`, `Data/`, etc.) group notes by category purely for browsing — they mirror `category:` but aren't what drives the graph.
- Each note follows a "Problem Space" format: what's genuinely hard, why it hasn't been solved, what solutions feel fake vs. inevitable, notable concrete tools (kept as plain text, not graph nodes — the graph tracks fields, not products), and a watch list.

## Updating this
This is a static site built from markdown with [Quartz](https://quartz.jzhao.xyz/) — every push to `main` rebuilds and redeploys it via GitHub Actions. To add a field: create a new note in the relevant category folder, set `category`/`status`/`parent` in frontmatter, fill in the Problem Space sections, and list its cross-links under `depends_on`/`enables`/`related` (and mirror them in a "Connections" section in the body so they show up in the graph). Push, and the site updates itself.
