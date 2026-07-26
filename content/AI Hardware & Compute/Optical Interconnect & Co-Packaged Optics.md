---
tags:
  - field
category: compute
status: active
parent:
  - "[[AI Hardware & Compute]]"
depends_on:
  - "[[Datacenter Power & Cooling Constraints]]"
enables:
  - "[[AI Accelerator Chips & Inference Silicon]]"
---

## Problem Space: Optical Interconnect & Co-Packaged Optics

## What seems genuinely hard here?
- Keeping thousands of chips fed at scale-up bandwidths without the electrical I/O power budget eating the rack's entire power envelope
- Manufacturing co-packaged optics (CPO) at the reliability and yield levels datacenters require, not just lab demos

## Why hasn't it been solved?
- Physical constraints — copper interconnect power dissipation scales badly with bandwidth; optical I/O decouples bandwidth from electrical power but is a genuinely different manufacturing discipline (silicon photonics) bolted onto chip packaging
- Institutional / regulatory constraints — this requires coordination between chip vendors (NVIDIA, Broadcom) and optics/packaging supply chains that historically didn't need to move in lockstep

## What solutions feel fake?
- "CPO will be everywhere by [near-term date]" claims that gloss over yield and reliability at production scale

## What solutions feel inevitable?
- Optical interconnect becoming the default for scale-out (rack-to-rack) within a few years, industry commentary already treats this as settled
- Scale-up (chip-to-chip) optical links following once CPO yield matures — NVIDIA and Broadcom are both explicitly building toward this

## Notable tools / instances
- NVIDIA CPO-based switches (targeting ~409.6 Tb/s, 512×800Gb/s ports), Broadcom co-packaged optics

## Watch list
-

## Connections
**Parent:** [[AI Hardware & Compute]]

**Depends on:** [[Datacenter Power & Cooling Constraints]]

**Enables:** [[AI Accelerator Chips & Inference Silicon]]

