---
title: Overview
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
  - [[Human-in-the-Loop Design]]
  - [[Long-Horizon Planning & Memory]]
  - [[Multi-Agent Systems]]
- [[Applications]]
  - [[AI for Biology, Genomics & Drug Discovery]]
  - [[AI for Math Proofs]]
  - [[AI for Scientific Discovery]]
  - [[AI for Trading & Quant]]
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
  - [[Zero-Knowledge & Programmable Cryptography]]
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
  - [[AI Control]]
  - [[AI Policy & Regulation]]
  - [[Dangerous Capability Evaluation]]
  - [[Open vs Closed Weight Governance]]
  - [[Scalable Oversight]]

## Entities

A second, lighter layer alongside the fields above: the companies, labs, and projects actually doing the work (89 as of this writing). Each links into the fields it `works_in` — check a field's Backlinks panel to see who's active there, or an entity's own page for what it touches. Browse them by type in the Explorer sidebar under `Entities/`, or via the full list below.

**Companies (54)**
[[AI21 Labs]] · [[AMI Labs]] · [[Anthropic]] · [[Arcee AI]] · [[Arize AI]] · [[Axiom]] · [[Ayar Labs]] · [[Braintrust]] · [[Cadence]] · [[Celestial AI]] · [[Cerebras]] · [[Cognition]] · [[Confident AI]] · [[CrewAI]] · [[Crusoe Energy]] · [[DeepSeek]] · [[Diffblue]] · [[E2B]] · [[EvolutionaryScale]] · [[Figure AI]] · [[General Intuition]] · [[Goodfire]] · [[Google DeepMind]] · [[Gray Swan AI]] · [[Groq]] · [[Harmonic]] · [[Harvey]] · [[Hippocratic AI]] · [[Hugging Face]] · [[Human Native AI]] · [[HumanLayer]] · [[Isomorphic Labs]] · [[LMArena]] · [[LangChain]] · [[Mistral AI]] · [[Mostly AI]] · [[NVIDIA]] · [[Numenta]] · [[Numerai]] · [[Oklo]] · [[OpenAI]] · [[Patronus AI]] · [[Periodic Labs]] · [[Physical Intelligence]] · [[Recursion Pharmaceuticals]] · [[Renaissance Technologies]] · [[Sakana AI]] · [[Scale AI]] · [[Sierra]] · [[Synopsys]] · [[Together AI]] · [[Two Sigma]] · [[Vertiv]] · [[World Labs]]

**Academic Labs (12)**
[[Hao AI Lab (UCSD, Hao Zhang)]] · [[IST Austria (Dan Alistarh Lab)]] · [[MIT CAP Group (Solar-Lezama Lab)]] · [[MIT HAN Lab (Song Han)]] · [[MIT Media Lab (Multisensory Intelligence Group)]] · [[MIT PLV (Chlipala Lab)]] · [[MadryLab (MIT)]] · [[SafeAI Lab (Waterloo, Hongyang Zhang)]] · [[Stanford Hazy Research (Chris Ré Lab)]] · [[UCLA Shams Lab (Multisensory Processing Lab)]] · [[UToPiA (UT Austin, Isil Dillig)]] · [[Xena Project (Imperial, Kevin Buzzard)]]

**Open-Source Projects (9)**
[[Letta]] · [[Mooncake]] · [[Neuronpedia]] · [[OpenClaw]] · [[OpenCode]] · [[Qwen (Alibaba)]] · [[RLHFlow]] · [[Unsloth]] · [[vLLM]]

**Research Orgs (14)**
[[0xPARC]] · [[Allen Institute for AI (AI2)]] · [[Apollo Research]] · [[CSET (Georgetown)]] · [[Center for AI Safety (CAIS)]] · [[Common Crawl Foundation]] · [[Epoch AI]] · [[Flatiron Institute (Center for Computational Neuroscience)]] · [[FutureHouse]] · [[GovAI (Centre for the Governance of AI)]] · [[METR]] · [[Project Numina]] · [[Redwood Research]] · [[Thousand Brains Project]]

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

**Fields** (the tree above) are problem spaces, not products — "Spec-Driven Coding & Development," not "Spec-Kit."
- **`parent`** (frontmatter) = one primary broader field — the tree edge shown above. Root category notes (tagged `field-root`) have no parent.
- **`depends_on` / `enables` / `related`** (frontmatter + each note's "Connections" section) = cross-links for interconnections that don't fit the tree — e.g. [[Coding Agents & AI Software Engineering]] lives under Agents but relates to [[Spec-Driven Coding & Development]] under Formal Methods. These are what make the sidebar graph a real graph, not just a tree.
- Folders (`AI Hardware & Compute/`, `Data/`, etc.) group notes by category purely for browsing — they mirror `category:` but aren't what drives the graph.
- Each note follows a "Problem Space" format: what's genuinely hard, why it hasn't been solved, what solutions feel fake vs. inevitable, a watch list, and (where relevant) `## Notable tools / instances` for one-off products kept as plain text, not graph nodes.

**Entities** (the second layer above) are organizations, labs, and projects with real sustained identity — a company, a lab, an open-source project. The bar for "gets a node" is *sustained identity*, not "was mentioned once": a single CLI flag or one paper stays plain text in a field's `Notable tools / instances`; the team/org behind it gets an entity page if it's worth tracking on its own. An entity's `works_in` frontmatter is its edge into the fields graph, mirrored in a `## Key players` section on the relevant field note(s) and a `## Connections` section on the entity's own page.

## Updating this
This is a static site built from markdown with [Quartz](https://quartz.jzhao.xyz/) — every push to `main` rebuilds and redeploys it via GitHub Actions. To add a field: create a new note in the relevant category folder, set `category`/`status`/`parent` in frontmatter, fill in the Problem Space sections, and list its cross-links under `depends_on`/`enables`/`related` (mirrored in a body "Connections" section). To add an entity: copy `_templates/Entity Template.md` into `content/Entities/<Type>/`, set `works_in`, and add it to the relevant field note(s)' `## Key players` section. Push, and the site updates itself.
