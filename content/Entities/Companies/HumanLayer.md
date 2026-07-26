---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Human-in-the-Loop Design]]"
---

## HumanLayer

*YC-backed startup (F24) building human-in-the-loop approval infrastructure for AI agents — pause-and-ask-a-human as an API primitive.*

## What they do
- SDK/API letting tool-calling agents pause and request human approval, feedback, or input at any step before executing consequential actions (database writes, outbound emails, etc.)
- Routes approval requests through existing channels (Slack, email, SMS, WhatsApp) rather than requiring a bespoke review UI
- Has since expanded from a pure approvals SDK into a broader IDE/cloud platform for teams shipping code primarily through AI agents

## Where they fit
- A concrete, product-level instance of the gating pattern [[Human-in-the-Loop Design]] argues is most durable — approval required specifically at consequential/irreversible steps, not a blanket review gate
- Founder Dex Horthy also popularized "context engineering" as a term, tying this back to the same practical, ship-focused end of agent design

## Notable work / recent moves
- Open-source repo (github.com/humanlayer/humanlayer) past 11,000 GitHub stars
- Evolved product from approvals-only SDK to a full agent-coding IDE and collaborative cloud platform

## Watch list
- HumanLayer GitHub repo and changelog

## Connections
**Works in:** [[Human-in-the-Loop Design]]
