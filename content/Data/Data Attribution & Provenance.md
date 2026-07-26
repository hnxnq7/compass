---
tags:
  - field
category: data
status: tracking
parent:
  - "[[Data]]"
related:
  - "[[Safety & Governance]]"
  - "[[AI Policy & Regulation]]"
---

## Problem Space: Data Attribution & Provenance

## What seems genuinely hard here?
- Tracing a specific model output back to specific training examples at any scale beyond toy models
- Licensing/consent frameworks that were designed for discrete copies of works, not for statistical influence spread across billions of parameters

## Why hasn't it been solved?
- Technical constraints — influence-function-style attribution methods are expensive and approximate; nothing scales cleanly to frontier-size training sets
- Institutional / regulatory constraints — copyright law, still largely unsettled for training-data use across jurisdictions, is the actual bottleneck more than the ML technique

## What solutions feel fake?
- Watermarking schemes pitched as a provenance solution when they're trivially strippable and don't solve attribution for the vast majority of un-watermarked historical content

## What solutions feel inevitable?
- Licensing deals (direct publisher/platform agreements) substituting for technical attribution as the practical resolution, at least in the near term
- Content-credential standards (e.g. C2PA-style provenance metadata) becoming more common for AI-generated media specifically, even if training-data attribution stays unsolved

## Notable tools / instances
- Spawning AI's Do Not Train Registry — opt-out consent registry for creators; closest thing to working infrastructure for the "consent layer" problem, distinct from technical attribution
- C2PA / Content Credentials — provenance-metadata standard for AI-generated media (Adobe, Google, Meta, OpenAI, Microsoft among 6,000+ members as of 2026); solves output provenance, not training-data attribution
- ProRata — attribution-based revenue-share model for AI search, partnered with 500+ publications to split payouts by estimated content contribution

## Key players
- [[Human Native AI]] — data-licensing marketplace (now part of Cloudflare) betting that consent/payment at ingestion time is the practical fix, not technical attribution
- [[MadryLab (MIT)]] — source of TRAK, the reference method for scalable influence-function-based data attribution

## Watch list
- github.com/MadryLab/trak, C2PA membership/spec updates, Cloudflare's AI content-licensing announcements

## Connections
**Parent:** [[Data]]

**Related:** [[Safety & Governance]], [[AI Policy & Regulation]]

