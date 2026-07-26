---
tags:
  - field
category: agents
status: tracking
parent:
  - "[[Agents & Tool Use]]"
related:
  - "[[Long-Horizon Planning & Memory]]"
---

## Problem Space: Multi-Agent Systems

## What seems genuinely hard here?
- Showing a clear capability gain over one strong agent with good tools, rather than just adding coordination overhead and new failure modes (miscommunication, duplicated work)
- Designing communication protocols between agents that don't just re-create the same long-horizon reliability problems one level up

## Why hasn't it been solved?
- Technical constraints — coordination failures compound the same way single-agent step errors do, and now there's inter-agent state to keep synchronized too
- Institutional / regulatory constraints — evaluation is hard: most multi-agent benchmarks are self-reported by teams with an incentive to show the architecture working

## What solutions feel fake?
- "Multi-agent" framing applied to what's functionally a single agent calling itself in a loop with extra prompt scaffolding

## What solutions feel inevitable?
- Narrower specialist agents composed together, with clear task boundaries and a coordinator, beating one generalist agent specifically for high-stakes or highly parallel workflows
- Multi-agent architectures converging on a small number of well-tested coordination patterns rather than continued bespoke design per product

## Watch list
-

## Connections
**Parent:** [[Agents & Tool Use]]

**Related:** [[Long-Horizon Planning & Memory]]

