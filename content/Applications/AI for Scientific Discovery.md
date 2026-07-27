---
tags:
  - field
category: applications
status: tracking
parent:
  - "[[Applications]]"
depends_on:
  - "[[Foundation Model Training]]"
related:
  - "[[Proof Assistants & Formal Mathematics]]"
---

## Problem Space: AI for Scientific Discovery

## What seems genuinely hard here?
- Generating genuinely novel, correct hypotheses rather than plausible-sounding recombinations of existing literature
- Closing the loop with real-world validation (wet-lab, physical experiment) fast enough that AI-generated hypotheses can actually be tested at the rate they're produced

## Why hasn't it been solved?
- Technical constraints — scientific discovery requires calibrated uncertainty and genuine out-of-distribution reasoning, exactly where current models are least reliable
- Institutional / regulatory constraints — experimental validation is bottlenecked by physical lab throughput and funding cycles that move far slower than model iteration

## What solutions feel fake?
- "AI discovers new [material/drug/proof]" headlines that turn out to be literature-recombination or minor variations rather than genuinely novel discovery

## What solutions feel inevitable?
- Domains with fast, cheap, automatable validation (math via [[Proof Assistants & Formal Mathematics]], some simulation-based chemistry/materials science) becoming the earliest genuine wins, ahead of domains bottlenecked by slow physical experiments
- Closed-loop systems (AI proposes → automated lab executes → AI updates) replacing one-shot AI hypothesis generation as the dominant paradigm in the domains where automation is feasible

## Notable tools / instances
- Google DeepMind Co-Scientist — multi-agent hypothesis-generation system; reached peer review in Nature (May 2026) for AML drug repurposing and liver fibrosis findings, but did not achieve autonomous discovery or complete clinical trials
- **Autonomous chemical research with large language models** (Boiko, MacKnight, Kennedy, Gomes — CMU, Nature 2023) — "Coscientist," one of the first LLM-driven systems to plan a real chemistry experiment and hand it to robotic lab hardware for execution, predating and helping motivate the current closed-loop "AI Scientist" wave
- **Scaling deep learning for materials discovery / GNoME** (Merchant, Batzner, Schoenholz, Aykol, Cheon, Cubuk — DeepMind, Nature 2023) — identified 2.2M candidate stable inorganic crystal structures in 17 days (≈800 years of prior discovery pace); autonomous robotic synthesis at Berkeley Lab independently validated 41 of 58 predicted compounds (71% success), one of the field's clearest closed-loop propose→validate results

## Key players
- [[FutureHouse]] — nonprofit "AI Scientist" lab (Kosmos), biomedical research focus
- [[Sakana AI]] — The AI Scientist, first fully-automated pipeline to publish a peer-reviewed paper (Nature, March 2026)
- [[Periodic Labs]] — pairs AI scientists with autonomous physical labs, closed-loop materials discovery
- [[CMU Coscientist Lab (Gabe Gomes)]] — academic lab behind Coscientist, one of the earliest peer-reviewed, physically-validated closed-loop AI-discovery results

## Watch list
- FutureHouse's research announcements
- Sakana AI's research page / AI Scientist repo
- Periodic Labs' public updates
- Google DeepMind's Co-Scientist blog
- CMU Cloud Lab announcements (Gomes lab's execution substrate)

## Connections
**Parent:** [[Applications]]

**Depends on:** [[Foundation Model Training]]

**Related:** [[Proof Assistants & Formal Mathematics]]

**Key players:** [[FutureHouse]], [[Sakana AI]], [[Periodic Labs]], [[CMU Coscientist Lab (Gabe Gomes)]]

