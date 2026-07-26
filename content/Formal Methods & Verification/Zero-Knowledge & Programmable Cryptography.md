---
tags:
  - field
category: formal-verification
status: tracking
parent:
  - "[[Formal Methods & Verification]]"
related:
  - "[[Proof Assistants & Formal Mathematics]]"
  - "[[Software Verification]]"
---

## Problem Space: Zero-Knowledge & Programmable Cryptography

## What seems genuinely hard here?
- A ZK proof is, structurally, a proof that a computation was performed correctly without revealing the inputs — which puts this field on the same conceptual axis as [[Proof Assistants & Formal Mathematics]] and [[Software Verification]], but circuit-level ZK tooling is far less mature than mainstream proof assistants
- Circuit design for ZK systems is still closer to hand-written assembly than high-level programming — expressing an arbitrary computation as an arithmetic circuit efficiently is a real skill bottleneck, not just a tooling gap
- Fully homomorphic encryption (FHE) and multiparty computation (MPC), the other "programmable cryptography" primitives, remain orders of magnitude too slow for most real-world computation

## Why hasn't it been solved?
- Technical constraints — proving systems trade off proof size, prover time, and verifier time; there's no single dominant scheme, and picking the right one is domain-specific
- Institutional / regulatory constraints — most of the funding, talent, and urgency in this space currently comes from the crypto/blockchain ecosystem specifically, which narrows the deployed use cases (verified computation for blockchains) relative to the primitive's actual generality

## What solutions feel fake?
- "Zero-knowledge AI" claims that use ZK proofs as a marketing layer on top of a system where the actual computation being proven is trivial or irrelevant to the stated privacy claim

## What solutions feel inevitable?
- Programmable cryptography (ZK, FHE, MPC, obfuscation) generalizing past blockchain-specific use cases into verified computation and privacy-preserving ML more broadly, as circuit tooling matures
- Convergence with formal verification proper — proving a ZK circuit actually implements its intended computation is itself a formal-methods problem, not a separable one

## Key players
- [[0xPARC]] — research/education hub for ZK, MPC, FHE, and obfuscation, closely tied to the Ethereum ecosystem

## Watch list
- 

## Connections
**Parent:** [[Formal Methods & Verification]]

**Related:** [[Proof Assistants & Formal Mathematics]], [[Software Verification]]
