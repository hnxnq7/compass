---
tags:
  - field
category: compute
status: tracking
parent:
  - "[[AI Hardware & Compute]]"
enables:
  - "[[Optical Interconnect & Co-Packaged Optics]]"
related:
  - "[[AI Accelerator Chips & Inference Silicon]]"
---

## Problem Space: Datacenter Power & Cooling Constraints

## What seems genuinely hard here?
- Rack power has gone from 30kW to 80-180kW in a couple of years with projections toward 600kW — grid interconnect and cooling infrastructure can't be redesigned that fast
- Power, not chip supply, is becoming the binding constraint on how much compute a lab can actually deploy

## Why hasn't it been solved?
- Physical constraints — grid capacity and permitting for new power generation/transmission move on multi-year timelines that don't match datacenter buildout ambitions
- Institutional / regulatory constraints — siting, utility negotiation, and local political approval for gigawatt-scale sites are slow and adversarial in many jurisdictions

## What solutions feel fake?
- "We'll just build more solar/gas peaker plants" answers that skip over interconnection queue timelines, which are often the actual bottleneck

## What solutions feel inevitable?
- On-site/behind-the-meter power generation (gas turbines, eventually SMRs) for the largest training clusters, decoupling them from grid interconnect queues
- Liquid cooling becoming mandatory rather than optional as rack density keeps climbing

## Watch list
-

## Connections
**Parent:** [[AI Hardware & Compute]]

**Enables:** [[Optical Interconnect & Co-Packaged Optics]]

**Related:** [[AI Accelerator Chips & Inference Silicon]]

