---
tags:
  - field
category: multimodal
status: active
parent:
  - "[[Multimodal & World Models]]"
related:
  - "[[Multisensory Integration]]"
  - "[[Interpretability]]"
---

## Problem Space: Neuro-AI & Brain-Inspired Models

## What seems genuinely hard here?
- Decoding rich, structured signal (video, language, intent) from noisy, low-resolution biological signals like EEG, where signal-to-noise and inter-subject variability are severe
- Knowing whether a model that predicts brain activity well is capturing a genuine shared computational principle, or just curve-fitting noise with enough capacity
- Bridging computational neuroscience's causal, mechanistic standards with deep learning's correlational, benchmark-driven standards — the two fields reward different kinds of "success"

## Why hasn't it been solved?
- Technical constraints — EEG/fMRI data is scarce, expensive, and low-resolution compared to the internet-scale data that drives progress elsewhere in AI
- Physical / biological constraints — individual brains vary enough that models trained on one subject's data often fail to generalize to another without heavy recalibration

## What solutions feel fake?
- Brain-to-video/text decoding demos on small, in-distribution held-out sets from the *same* subjects and *same* recording sessions used for training, presented as general decoding capability

## What solutions feel inevitable?
- Cross-pollination with [[Multisensory Integration]] and [[Interpretability]] — both fields are converging on the same underlying question (how does a system, biological or artificial, combine and weight signal), just from opposite directions
- RNN/state-space models explicitly designed around neurobiological temporal-integration principles gaining traction as a middle ground between pure ML architectures and biological plausibility

## Notable tools / instances
- EEG2Video — decodes dynamic visual perception (video) directly from EEG signals, a concrete example of the brain-decoding side of this field
- MindCine, Neuro-3D — recent (2026) EEG/fMRI-to-video and EEG-to-3D reconstruction pipelines, part of the same wave of brain-decoding work
- **Using Goal-Driven Deep Learning Models to Understand Sensory Cortex** (Yamins & DiCarlo, Nature Neuroscience 2016) — the field-defining paper establishing that task-optimized (not neurally-fit) deep networks are the best current predictive models of primate visual cortex; the template most later NeuroAI comparisons follow
- **A Deep Learning Framework for Neuroscience** (Richards et al., Nature Neuroscience 2019) — widely-cited cross-lab consensus paper framing systems neuroscience around objective functions, learning rules, and architectures as the three things to compare between brains and networks

## Key players
- [[Numenta]] — longest-running "brain-inspired, not just brain-metaphor" company; NuPIC applies cortical-column-derived sparsity to run transformers efficiently on CPUs
- [[Thousand Brains Project]] — nonprofit spun out of Numenta to carry the open Thousand Brains Theory research and its Monty framework forward outside a commercial roadmap
- [[Flatiron Institute (Center for Computational Neuroscience)|Flatiron Institute — Center for Computational Neuroscience (CCN)]] — PI-led NeuroAI research (SueYeon Chung's group) on whether representational geometry is a shared computational currency between brains and deep nets
- [[DiCarlo Lab (MIT)]] — established the goal-driven deep learning paradigm itself and runs Brain-Score, the standard public benchmark scoring how well vision models predict primate cortical responses

## Watch list
- Numenta / Thousand Brains Project release notes (Monty framework)
- Flatiron Institute CCN publications page
- brain-score.org (leaderboard), dicarlolab.mit.edu

## Connections
**Parent:** [[Multimodal & World Models]]

**Related:** [[Multisensory Integration]], [[Interpretability]]

**Key players:** [[Numenta]], [[Thousand Brains Project]], [[Flatiron Institute (Center for Computational Neuroscience)|Flatiron Institute — CCN]], [[DiCarlo Lab (MIT)]]

