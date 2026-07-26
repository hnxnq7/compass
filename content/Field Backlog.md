---
tags:
  - field-meta
---

Pull from here when you want to flesh out a new field. No pressure to fill in order — capture the name when it crosses your radar, promote it to a full note in `Fields/` (copy `_templates/Field Template.md`, set `parent:` to the relevant root) once you have something to say about it.

*(Last swept 2026-07-26, after a 13-way parallel research pass that populated Key players/Watch lists across the whole atlas and added an 85-entity Entities layer. Items below marked with a name are ones that pass specifically surfaced.)*

## compute
- Edge / on-device inference chips
- Photonic compute (distinct from optical *interconnect* — compute done optically, not just data movement)
- Memory technologies beyond HBM (CXL-attached memory pools, processing-in-memory)
- Grid/utility-scale energy policy for AI (interconnection queues, permitting, utility regulation — distinct from the on-site generation covered in [[Datacenter Power & Cooling Constraints]], which is more the engineering workaround than the policy bottleneck itself)

## data
- Web-scale data licensing deals and the marketplace infrastructure around them (Human Native AI, Spawning AI, ProRata — the practical substitute for unsolved attribution, see [[Data Attribution & Provenance]]); consent/opt-out registries are the same cluster
- Domain-specific data engines (e.g. robotics teleoperation data, medical data) as their own emerging discipline
- Data-exhaustion/scarcity forecasting as its own topic — currently just cited from both [[Scaling Laws & Compute-Optimal Training]] and [[Synthetic Data Generation & Model Collapse]] via Epoch AI's projections, but "are we running out of human data" might deserve its own treatment as the connective thread

## foundation-models
- Tokenization-free / byte-level models
- Continual / lifelong learning (updating a deployed model without full retraining or catastrophic forgetting)
- Linear attention as a subfield distinct from hybrid attention broadly — Gated DeltaNet-style approaches now reused across multiple labs' designs (Qwen3-Next, Kimi Linear, OLMo Hybrid) independently
- Test-Time Compute / Inference-Time Scaling — reasoning models spending variable compute at inference (extended chain-of-thought, best-of-N, tree search/MCTS at decode time); sits between [[RL with Verifiable Rewards]] and [[Inference & Serving Systems]] with no field of its own yet

## post-training
- Self-play / self-improvement loops (model generates its own training curriculum)
- Unlearning / targeted forgetting (removing specific knowledge post-hoc without full retrain)
- RLHF/preference-data annotation as an industry (Scale AI, Surge AI-style vendors) — a distinct data-supply-chain layer feeding [[Preference Optimization]] and [[Process & Outcome Reward Models]], currently only represented as entities, not as its own problem space

## systems-inference
- Heterogeneous multi-accelerator serving (mixing GPU/TPU/custom silicon in one serving fleet)
- Structured/constrained decoding (grammar-constrained generation, JSON-mode enforcement) — adjacent to [[Speculative Decoding]] but a distinct sub-problem
- Inference-serving cost/observability tooling — routing/load-balancing across heterogeneous backends, autoscaling for bursty agentic traffic

## agents
- Tool-use protocol standardization (MCP-style interop between agents and external tools) — distinct from **agent-to-agent communication protocol standardization** (Google's A2A and similar handoff protocols), which is a related but separate strand worth splitting out if it keeps growing
- Agent identity & authentication (who/what an agent is acting as — directly downstream of NIST's Feb 2026 autonomous-agent standards work, see [[AI Policy & Regulation]])
- Agent memory as its own subfield, distinct from planning — currently folded into [[Long-Horizon Planning & Memory]], but memory-architecture work (Letta/MemGPT-style OS-inspired hierarchies, vector/episodic stores) is arguably its own discipline

## multimodal
- Vision-language grounding as its own subfield (distinct from the generation-heavy [[Video Generation & World Models]] and action-heavy [[Vision-Language-Action Models & Embodied Robotics]])
- Audio / speech foundation models
- Tactile/haptic sensing (GelSight, Meta's Digit 360, dedicated sensor companies) — substantial enough (funding, humanoid-grasping applications) to outgrow its current plain-text mention under [[Multisensory Integration]]
- Robot foundation model infrastructure / sim2real tooling (NVIDIA Isaac Sim and similar) — currently a sub-theme inside [[Vision-Language-Action Models & Embodied Robotics]], not its own note
- "Physical AI" as a possible umbrella spanning world models + robotics + autonomous vehicles (NVIDIA and others use this framing) — judgment call on whether it's a real missing category or marketing language duplicating the existing tree

## interpretability
- Weight-space analysis (studying parameters directly, not just activations)
- Cross-model interpretability (do different models converge on the same internal features? — "universality" research)
- Commercial interpretability tooling as a product category (Goodfire's Ember API, Neuronpedia's public steering API) — "interpretability-as-a-service" distinct from research-lab interpretability

## safety-governance
- AI insurance & liability markets (AI Security Riders, carrier-mandated red-teaming — an informal enforcement layer moving faster than law)
- Export controls & compute governance (chip-level policy, distinct from model/output-level policy)
- AI scheming / deceptive alignment as its own research agenda — Apollo Research's whole identity is built around this ("Science of Scheming"), and it's distinct enough from both [[Dangerous Capability Evaluation]] (broader capability elicitation) and [[Behavioral Red-Teaming as Interpretability Proxy]] (methodology-focused) to arguably deserve its own note

## formal-verification
- SMT/model-checking solver scaling (the classical bottleneck underneath most of this category)
- Hardware security property verification (side-channel / info-flow proofs, related to but distinct from functional [[Hardware Verification]])
- LLM-assisted hardware design/RTL generation, as distinct from verification — FormalRTL-style work coupling LLM generation with formal equivalence checking
- Neurosymbolic AI as a standalone field bridging [[Program Synthesis]], Interpretability, and Model Architecture Research
- AI-driven test generation / test synthesis (Diffblue is one instance) — sits between [[Program Synthesis]] and [[Software Verification]] without quite belonging to either

## applications
- AI in healthcare (diagnostics, clinical documentation — heavy regulatory overlap with [[AI Policy & Regulation]]); Hippocratic AI's growth is a concrete signal this may be big enough to split from [[Enterprise AI & Vertical Copilots]]
- AI in law / legal tech — Harvey's growth is the same signal for legal specifically (contract review, e-discovery, compliance)
- Personal/consumer AI agents (distinct from enterprise copilots — different trust and privacy constraints)
- AI for materials science (Periodic Labs, GNoME-style work) — adjacent to both [[AI for Scientific Discovery]] and [[AI for Biology, Genomics & Drug Discovery]] but distinct (inorganic chemistry/superconductors vs. biomolecules)
- Formal verification of AI-generated code — the seam between [[AI for Math Proofs]], [[Software Verification]], and [[Coding Agents & AI Software Engineering]] (Axiom's actual commercial use case); check whether this is already covered before writing a new note

## evals
- Third-party evaluation organizations as their own institutional category (METR-style orgs, distinct from the methodology covered in [[Real-World _ Deployment Evals|Real-World / Deployment Evals]] and [[LLM-as-Judge Evaluation]])
- Human/crowdsourced preference benchmarking (LMArena's live-voting model) — structurally distinct from both automated LLM-as-judge and static benchmark contamination, no dedicated note yet
- Benchmark governance / conflict-of-interest (the FrontierMath episode, where a funder had insider access to a "held-out" set) — a narrower institutional-integrity angle distinct from technical contamination-detection
