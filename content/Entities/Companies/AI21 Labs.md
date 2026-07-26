---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Long-Context & Hybrid Attention Architectures]]"
  - "[[Model Architecture Research]]"
---

## AI21 Labs

*Israeli AI lab behind Jamba, the first production-grade hybrid Transformer-Mamba-MoE model — the clearest non-DeepSeek proof that hybrid attention/SSM architectures work at real scale.*

## What they do
- Builds Jamba: interleaved Transformer, Mamba (state-space), and MoE layers in a single model, rather than pure attention or pure SSM
- Optimizes explicitly for long-context throughput and memory — Jamba 1.5 Large claims 3x throughput over similarly-sized pure-Transformer models at long context
- Positions Jamba for enterprise long-document use cases (256K effective context, one of the largest among open-weight models)

## Where they fit
- The reference production example for [[Long-Context & Hybrid Attention Architectures]]'s claim that hybrid local/global (here: attention/SSM) designs are becoming the standard efficiency compromise
- Relevant to [[Model Architecture Research]] as a real-scale validation that transformer+SSM hybrids can match pure-attention quality while cutting inference cost — the exact kind of frontier-scale evidence that note flags as rare

## Notable work / recent moves
- Jamba 1.5 (Mini/Large) — hybrid SSM-Transformer-MoE, 256K context, 94B active params (Large)
- Jamba Reasoning 3B — small hybrid model aimed at on-device/edge reasoning

## Watch list
- ai21.com/research blog, Jamba model releases

## Connections
**Works in:** [[Long-Context & Hybrid Attention Architectures]], [[Model Architecture Research]]
