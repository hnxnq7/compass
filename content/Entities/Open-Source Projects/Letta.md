---
tags:
  - entity
type: oss-project
status: active
works_in:
  - "[[Long-Horizon Planning & Memory]]"
---

## Letta

*Open-source stateful-agent framework (formerly MemGPT) that gives agents OS-inspired, self-managed memory instead of just a longer context window.*

## What they do
- Model-agnostic framework for building agents that manage their own memory via tool calls, rather than an external RAG pipeline bolted on top
- Memory hierarchy modeled on OS virtual memory: main context (working memory, seen every turn), recall storage (searchable recent history), archival storage (long-term searchable knowledge)
- Originated as the MemGPT research project at UC Berkeley before spinning out as a company (seed round led by Felicis, with Founders Fund and YC, September 2024)

## Where they fit
- A direct, structural answer to the memory half of [[Long-Horizon Planning & Memory]]'s core problem — "giving agents useful, bounded memory without unstructured context-stuffing" — rather than just extending context length

## Notable work / recent moves
- Rebranded from MemGPT to Letta while continuing to maintain the open-source repo (23.9k+ GitHub stars)

## Watch list
- Letta GitHub repo, letta.com/blog

## Connections
**Works in:** [[Long-Horizon Planning & Memory]]
