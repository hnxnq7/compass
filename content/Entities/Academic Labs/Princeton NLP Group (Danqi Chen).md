---
tags:
  - entity
type: academic-lab
status: active
works_in:
  - "[[Benchmark Contamination & Saturation]]"
---

## Princeton NLP Group (Danqi Chen)

*Danqi Chen's lab at Princeton — co-authored the Min-K% Prob method, one of the two or three most-cited reference-free techniques for detecting whether a benchmark or document was in an LLM's pretraining data.*

## What they do
- Co-developed "Detecting Pretraining Data from Large Language Models" (Shi, Ajith, Xia, Huang, Liu, Blevins, Chen, Zettlemoyer — ICLR 2024), which introduces Min-K% Prob: a black-box membership-inference method that needs no reference model or knowledge of the pretraining corpus, just token-level probabilities from the model itself
- Also introduced the WikiMIA benchmark (built from Wikipedia snippets provably written before/after a given model's training cutoff) as a ground-truth test bed for contamination-detection methods, since most other benchmarks can't establish ground truth about what a closed model actually saw
- Broader lab output spans retrieval-augmented generation, long-context modeling, and LLM evaluation methodology — contamination detection is one recurring thread, not the lab's sole focus

## Where they fit
- Min-K% Prob and WikiMIA are the closest thing [[Benchmark Contamination & Saturation]] has to a standard toolkit: nearly every later contamination/membership-inference paper (Min-K%++, divergence-based calibration methods, etc.) benchmarks against this one
- Distinct from watermarking or dynamic-benchmark approaches to the same problem — this is post-hoc detection on already-trained, potentially closed models, which is the harder and more common real-world case

## Notable work / recent moves
- Min-K% Prob has been applied beyond benchmark contamination to copyrighted-book detection and machine-unlearning privacy audits, underscoring that "was this in the training set" is a general-purpose question, not just an eval-integrity one
- Follow-on work (Min-K%++, ICLR 2025) from other groups improves on the original method, treating it as the baseline to beat

## Watch list
- nlp.cs.princeton.edu, Danqi Chen's publication page

## Connections
**Works in:** [[Benchmark Contamination & Saturation]]
