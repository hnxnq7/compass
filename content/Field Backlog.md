---
tags:
  - field-meta
---

Pull from here when you want to flesh out a new field. No pressure to fill in order — capture the name when it crosses your radar, promote it to a full note in `Fields/` (copy `_template/Field Template.md`, set `parent:` to the relevant root) once you have something to say about it.

*(Last swept 2026-07-25 — most of the July pass got promoted to full notes; what's left below is either narrower/more speculative, or genuinely didn't fit anywhere yet.)*

## compute
- Edge / on-device inference chips
- Photonic compute (distinct from optical *interconnect* — compute done optically, not just data movement)
- Memory technologies beyond HBM (CXL-attached memory pools, processing-in-memory)

## data
- Web-scale data licensing deals (the practical substitute for unsolved attribution — see [[Data Attribution & Provenance]])
- Domain-specific data engines (e.g. robotics teleoperation data, medical data) as their own emerging discipline

## foundation-models
- Tokenization-free / byte-level models
- Continual / lifelong learning (updating a deployed model without full retraining or catastrophic forgetting)

## post-training
- Self-play / self-improvement loops (model generates its own training curriculum)
- Unlearning / targeted forgetting (removing specific knowledge post-hoc without full retrain)

## systems-inference
- Heterogeneous multi-accelerator serving (mixing GPU/TPU/custom silicon in one serving fleet)

## agents
- Tool-use protocol standardization (MCP-style interop between agents and external tools)
- Agent identity & authentication (who/what an agent is acting as — directly downstream of NIST's Feb 2026 autonomous-agent standards work, see [[AI Policy & Regulation]])

## multimodal
- Vision-language grounding as its own subfield (distinct from the generation-heavy [[Video Generation & World Models]] and action-heavy [[Vision-Language-Action Models & Embodied Robotics]])
- Audio / speech foundation models

## interpretability
- Weight-space analysis (studying parameters directly, not just activations)
- Cross-model interpretability (do different models converge on the same internal features? — "universality" research)

## safety-governance
- AI insurance & liability markets (AI Security Riders, carrier-mandated red-teaming — an informal enforcement layer moving faster than law)
- Export controls & compute governance (chip-level policy, distinct from model/output-level policy)

## formal-verification
- SMT/model-checking solver scaling (the classical bottleneck underneath most of this category)
- Hardware security property verification (side-channel / info-flow proofs, related to but distinct from functional [[Hardware Verification]])

## applications
- AI in healthcare (diagnostics, clinical documentation — heavy regulatory overlap with [[AI Policy & Regulation]])
- AI in law / legal tech
- Personal/consumer AI agents (distinct from enterprise copilots — different trust and privacy constraints)

## evals
- Third-party evaluation organizations as their own institutional category (METR-style orgs, distinct from the methodology covered in [[Real-World _ Deployment Evals|Real-World / Deployment Evals]] and [[LLM-as-Judge Evaluation]])
