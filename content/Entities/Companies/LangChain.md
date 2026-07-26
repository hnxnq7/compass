---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Multi-Agent Systems]]"
  - "[[Real-World _ Deployment Evals|Real-World / Deployment Evals]]"
---

## LangChain

*Maker of LangGraph, the graph-based state-machine framework that's become a default substrate for production multi-agent orchestration, plus LangSmith for tracing and evaluating those agents in production.*

## What they do
- Builds LangGraph: a stateful, graph-based framework where multiple agents collaborate, hand off tasks, and branch across a persistent shared state object
- Also builds LangSmith (observability/tracing/evals for agent runs) and Deep Agents (long-running agent workflows), positioning the stack for production use rather than prototyping
- LangGraph reached 1.0 GA in October 2025, signaling a move from experimental framework to production-grade infrastructure

## Where they fit
- One of the most widely adopted concrete substrates for [[Multi-Agent Systems]] — the explicit-state, explicit-handoff design is a direct answer to the field's "communication protocol" problem, whatever its eventual limits turn out to be
- Worth tracking as the framework a large share of enterprise multi-agent deployments are actually built on, separate from whether the underlying coordination-pattern questions are settled
- For [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]: LangSmith is one of the most widely adopted tools for tracing and evaluating agent runs against real production traffic, alongside Arize AI and Braintrust

## Notable work / recent moves
- LangGraph 1.0 GA (October 2025)
- Widely compared against CrewAI, Microsoft AutoGen, and OpenAI's Agents SDK as one of the leading production multi-agent frameworks as of 2026

## Watch list
- LangChain blog, LangGraph GitHub releases

## Connections
**Works in:** [[Multi-Agent Systems]], [[Real-World _ Deployment Evals|Real-World / Deployment Evals]]
