---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Human-in-the-Loop Design]]"
  - "[[AI Control]]"
---

## Berkeley CHAI (Center for Human-Compatible AI)

*Stuart Russell's Berkeley research center, founded 2016 — originated the theoretical framework (assistance games, corrigibility) for why an AI system should defer to human correction at all.*

## What they do
- Academic AI safety center studying "provably beneficial" AI: systems that are uncertain about human goals by design and so remain open to correction, rather than pursuing a fixed objective regardless of human feedback
- Core research threads: assistance games (a generalization of cooperative inverse RL), corrigibility, and the "off-switch problem" — formal conditions under which an agent won't resist being paused or shut down

## Where they fit
- This note's central question — "how much human is enough, and when should the agent defer" — is exactly what CHAI's assistance-games framework was built to formalize; graduated-autonomy and irreversibility-gating both descend from this line of work
- Distinct from product-layer HITL tooling (like [[HumanLayer]]): CHAI works the theoretical layer underneath it — why deference is the right default, not just how to route an approval request
- Also the academic root of [[AI Control]]'s core question — the Off-Switch Game is the formal ancestor of "design protocols that hold up even if the model is actively trying to subvert them," the pessimistic framing [[Redwood Research]] later operationalized into concrete control protocols

## Notable work / recent moves
- **Cooperative Inverse Reinforcement Learning** (Hadfield-Menell, Russell, Abbeel, Dragan; NeurIPS 2016) — formalized the human-AI relationship as a shared-reward cooperative game, the basis for "assistance games"
- **The Off-Switch Game** (Hadfield-Menell, Dragan, Abbeel, Russell; IJCAI 2017) — formal conditions under which a rational agent doesn't resist a human shutting it down, the theoretical root of "corrigibility"

## Watch list
- humancompatible.ai (publications, progress reports)

## Connections
**Works in:** [[Human-in-the-Loop Design]], [[AI Control]]
