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

## Watch list
-

## Connections
**Parent:** [[Agents & Tool Use]]

**Depends on:** [[Long-Horizon Planning & Memory]]

**Related:** [[Spec-Driven Coding & Development]], [[Software Verification]], [[Applications]]

