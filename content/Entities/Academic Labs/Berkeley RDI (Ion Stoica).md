---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Agent Evaluation & Sandboxing]]"
  - "[[Zero-Knowledge & Programmable Cryptography]]"
---

## Berkeley RDI (Center for Responsible, Decentralized Intelligence)

*UC Berkeley research initiative led by Ion Stoica, auditing and stress-testing the AI agent benchmarks the rest of the field treats as ground truth — and, through a separate research thread, one of academia's more active zero-knowledge-proofs groups.*

## What they do
- Multidisciplinary Berkeley center (Ion Stoica, Ion-adjacent RISELab/Sky Computing lineage) working on agentic AI infrastructure and evaluation
- Publishes systematic audits of widely-used agent benchmarks, probing them for exploitable scoring holes rather than just reporting leaderboard numbers
- Separately runs a dedicated zero-knowledge-proofs research program (rdi.berkeley.edu/zkp, with Dawn Song among the faculty involved) that produced Libra, an early proof system achieving both optimal prover time and succinct proof/verification size — plus a public ZKP course/MOOC that's become a common on-ramp into the field

## Where they fit
- Directly targets the "benchmarks that resemble real work vs. reward benchmark-specific tricks" problem this field is built around — they're the group that actually goes and finds the tricks
- Their "Establishing Best Practices for Building Rigorous Agentic Benchmarks" work is becoming a reference methodology for how new benchmarks (SWE-Marathon, SentinelBench, etc.) should be built to avoid the same failure modes
- The ZKP research thread is a genuine academic anchor for [[Zero-Knowledge & Programmable Cryptography]], distinct from the more industry/blockchain-embedded [[0xPARC]] — closer to a traditional university crypto-theory group

## Notable work / recent moves
- "How We Broke Top AI Agent Benchmarks" (2026) — audited eight major agent benchmarks (SWE-bench Verified, WebArena, OSWorld, GAIA, Terminal-Bench, FieldWorkArena, and others) and found exploitable scoring holes in all of them, including a 10-line Python script scoring perfectly on SWE-bench Verified and a fake `curl` wrapper hitting 100% on Terminal-Bench
- Co-authored "Establishing Best Practices for Building Rigorous Agentic Benchmarks" (arXiv 2507.02825), proposing a checklist for benchmark designers to close these holes

## Watch list
- rdi.berkeley.edu/blog
- New benchmark releases citing RDI's best-practices checklist
- rdi.berkeley.edu/zkp for the ZK-proofs research thread

## Connections
**Works in:** [[Agent Evaluation & Sandboxing]], [[Zero-Knowledge & Programmable Cryptography]]
