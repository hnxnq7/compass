---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Scalable Oversight]]"
---

## NYU Alignment Research Group

*Sam Bowman's lab at NYU — ran one of the first systematic empirical studies of scalable oversight techniques, and built GPQA, the "Google-proof" benchmark scalable-oversight work is evaluated against.*

## What they do
- Academic NLP/alignment lab doing empirical work on longer-term risks from highly capable AI systems, with debate, amplification, and recursive reward modeling as the specific techniques it tests
- Authored "Measuring Progress on Scalable Oversight for Large Language Models" (Bowman et al., 2022), one of the first papers to empirically test whether non-expert-plus-AI-assistance can match expert judgment on hard questions
- Built GPQA (Rein, Hou, Bowman et al.): a graduate-level, "Google-proof" Q&A benchmark of questions PhDs with full internet access still get wrong — specifically constructed so scalable-oversight techniques have a genuine oversight gap to close, not an easy benchmark they can already solve without assistance

## Where they fit
- GPQA is the closest thing this field has to a standard testbed for its central problem — supervising a system whose performance exceeds the supervisor's ability to directly verify correctness — since by construction the "supervisor" (a PhD, unassisted) can't verify GPQA answers alone
- Sam Bowman's dual NYU/Anthropic affiliation makes this lab one of the direct bridges between this field's academic technique development (debate, weak-to-strong generalization) and its use inside a frontier lab's actual alignment pipeline

## Notable work / recent moves
- GPQA remains a standard component of frontier model eval suites (used by OpenAI, Anthropic, Google DeepMind, and others) specifically as a proxy for expert-level, hard-to-verify task performance
- Continues publishing scalable-oversight evaluation datasets and weak-to-strong generalization studies through 2026

## Watch list
- wp.nyu.edu/arg

## Connections
**Works in:** [[Scalable Oversight]]
