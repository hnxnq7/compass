---
tags:
  - field
category: formal-verification
status: active
parent:
  - "[[Formal Methods & Verification]]"
related:
  - "[[Software Verification]]"
  - "[[Coding Agents & AI Software Engineering]]"
  - "[[Human-in-the-Loop Design]]"
---

## Problem Space: Spec-Driven Coding & Development

## What seems genuinely hard here?
- Writing a spec precise enough to be genuinely "executable" (i.e. the actual source of truth an agent derives code from) without it becoming as much work as writing the code
- Keeping the spec and the generated implementation in sync over time as requirements change — specs rot the same way documentation rots unless the workflow enforces it

## Why hasn't it been solved?
- Technical constraints — no single spec format has become a true standard; every major AI coding tool (GitHub, AWS, Anthropic, Cursor, Google) shipped its own flavor of the workflow in the same ~12-month window, so the ecosystem is genuinely fragmented right now
- Institutional / regulatory constraints — this is a methodology and workflow shift as much as a tooling one; teams have to actually change how they write requirements, which is a slower adoption curve than installing a new tool

## What solutions feel fake?
- "10x fewer regenerate-from-scratch cycles" and similar headline stats without disclosing how much human spec-authoring/review time offset the agent-coding time saved

## What solutions feel inevitable?
- Spec-first workflows becoming the default for anything beyond small, throwaway scripts — ad-hoc prompting is already being framed retrospectively as the "dark ages" approach by mid-2026 commentary
- This is the direct connective tissue between [[Coding Agents & AI Software Engineering]] and [[Software Verification]]: same core idea (spec as source of truth, checkable against implementation), different rigor levels

## Notable tools / instances
*Concrete instances worth having on file even though the field, not the tool, is what's tracked on the graph.*
- GitHub Spec-Kit — open-source CLI, structured spec → plan → tasks → code workflow, supports 28 named agent platforms
- OpenSpec — most actively-maintained open-source SDD framework as of mid-2026
- AWS Kiro, Anthropic Claude Code, Cursor, Tessl, Google Antigravity, BMAD — each shipped a proprietary/integrated flavor of the same workflow

## Watch list
- GitHub Spec-Kit releases, OpenSpec releases

## Connections
**Parent:** [[Formal Methods & Verification]]

**Related:** [[Software Verification]], [[Coding Agents & AI Software Engineering]], [[Human-in-the-Loop Design]]

