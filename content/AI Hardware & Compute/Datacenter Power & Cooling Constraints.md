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

## Notable tools / instances
- **United States Data Center Energy Usage Report** (Shehabi et al. — LBNL, DOE, first published 2016, updated 2024/2025) — the report nearly every rack-power and grid-demand figure in this space traces back to
- Notable result: Google/DeepMind's 2016 ML-based cooling control cut datacenter cooling energy by ~40%, the earliest widely-cited proof that software (not just hardware) can move the efficiency needle — now table stakes rather than novel, which is part of why the field has moved on to harder physical constraints (grid interconnect, on-site generation)

## Key players
- [[Crusoe Energy]] — building gigawatt-scale behind-the-meter gas power for its own AI datacenters, the clearest live example of decoupling from grid interconnect queues
- [[Vertiv]] — liquid cooling/power infrastructure vendor whose backlog tracks the industry's cooling transition directly
- [[Oklo]] — SMR company with a signed, dated hyperscaler power deal (Meta), turning "eventually SMRs" into a real construction timeline
- [[LBNL Energy Technologies Area]] — DOE national lab producing the field's reference datacenter-energy-demand numbers, independent of vendor/operator self-reporting

## Watch list
- Vertiv earnings/backlog disclosures as a proxy for cooling-transition pace; Oklo NRC licensing milestones; Crusoe Energy buildout announcements; LBNL Data Center Energy Usage Report updates

## Connections
**Parent:** [[AI Hardware & Compute]]

**Enables:** [[Optical Interconnect & Co-Packaged Optics]]

**Related:** [[AI Accelerator Chips & Inference Silicon]]

