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

## Notable tools / instances
- **Generative Agents: Interactive Simulacra of Human Behavior** (Park, O'Brien, Cai, Morris, Liang, Bernstein — Stanford, UIST 2023) — the canonical "believable multi-agent society" paper; a sandbox of LLM agents with memory that produced emergent social behavior (planning a party, spreading information) without being scripted to
- **AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation** (Wu et al. — Microsoft Research, COLM 2024) — the widely-adopted conversable-agent framework paper, a reference point for the "coordinator + specialist agents" pattern this note treats as inevitable

## Key players
- [[LangChain]] — LangGraph's explicit-state, explicit-handoff graph model, the most widely adopted production substrate
- [[CrewAI]] — role-based, low-friction alternative design point; useful signal for which coordination pattern actually wins in production
- [[Oxford FLAIR (Jakob Foerster)]] — foundational multi-agent RL lab (coordination, communication protocols, JaxMARL infrastructure); the academic anchor for this field's RL-trained (not just LLM-prompted) coordination research

## Watch list
- LangGraph GitHub releases
- CrewAI GitHub releases
- blog.foersterlab.com for FLAIR's transition into Foerster's new Oxford lab

## Connections
**Parent:** [[Agents & Tool Use]]

**Related:** [[Long-Horizon Planning & Memory]]

