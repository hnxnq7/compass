---
tags:
  - field
category: agents
status: active
parent:
  - "[[Agents & Tool Use]]"
depends_on:
  - "[[Long-Horizon Planning & Memory]]"
related:
  - "[[Spec-Driven Coding & Development]]"
  - "[[Software Verification]]"
  - "[[Applications]]"
---

## Problem Space: Coding Agents & AI Software Engineering

## What seems genuinely hard here?
- Reliability over a full feature (many files, many steps) rather than a single function-level completion
- Knowing when the agent is confidently wrong — a subtly incorrect refactor across a codebase is worse than a visible failure
- Ambiguous or incomplete specs upstream (what the human actually wants) propagating into confidently-wrong code downstream

## Why hasn't it been solved?
- Technical constraints — same long-horizon error compounding as any agent, but with a much less forgiving verifier than "did the test pass" once behavior is subtle
- Institutional / regulatory constraints — most orgs don't yet have codebases structured (specs, tests, docs) in a way that gives an agent a reliable ground truth to work against

## What solutions feel fake?
- "40-hour feature in 8 hours" case studies that don't disclose how much of that 8 hours was human review/correction, not agent time
- Ad-hoc prompting presented as equivalent to a structured engineering process

## What solutions feel inevitable?
- Spec-driven workflows (write the spec, derive the plan, then generate code) replacing ad-hoc prompting as the default for anything beyond toy tasks — see [[Spec-Driven Coding & Development]]
- Verification and coding agents converging: the same reliability problem (does this code actually do what's intended) connects this field directly to [[Software Verification]]

## Notable tools / instances
- **SWE-bench: Can Language Models Resolve Real-World GitHub Issues?** (Jimenez, Yang, Wettig, Yao, Pei, Press, Narasimhan — Princeton, ICLR 2024) — the reference benchmark nearly every coding agent reports against
- **SWE-agent** (Yang, Jimenez, Wettig, Lieret, Yao, Narasimhan, Press — Princeton/Stanford, NeurIPS 2024) — the agent-computer interface design that made SWE-bench tractable at scale, widely copied by subsequent coding agents
- Randomized controlled trials of GitHub Copilot across ~4,500 developers at Microsoft, Accenture, and a Fortune 100 manufacturer (Microsoft/MIT/Princeton/Wharton, 2024–2025) found a 26% average increase in weekly pull requests completed — one of the few outcome-measured (not vendor-reported) productivity results in the field, with junior/less-experienced developers seeing the largest gains

## Key players
- [[Cognition]] — Devin, one of the first commercially successful autonomous coding agents
- [[OpenCode]] — open-source, model-agnostic counterpart to closed coding agents
- [[Princeton NLP (Narasimhan Lab)]] — academic originator of SWE-bench and SWE-agent, the field's standard benchmark and reference agent scaffold

## Watch list
- Princeton NLP / princeton-nlp GitHub org for new SWE-bench variants

## Connections
**Parent:** [[Agents & Tool Use]]

**Depends on:** [[Long-Horizon Planning & Memory]]

**Related:** [[Spec-Driven Coding & Development]], [[Software Verification]], [[Applications]]

