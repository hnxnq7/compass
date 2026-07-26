---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Benchmark Contamination & Saturation]]"
  - "[[LLM-as-Judge Evaluation]]"
---

## LMArena

*Runs the crowdsourced human-preference leaderboard (formerly Chatbot Arena), and produced the original research establishing LLM-as-a-judge as a method.*

## What they do
- Operates Arena (formerly Chatbot Arena / LMArena): users blind-vote between two anonymized model outputs, aggregated into a live Elo-style leaderboard
- Originated as LMSYS Org, an open academic research group spanning UC Berkeley, UC San Diego, and CMU; authored "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena" (NeurIPS 2023), the paper that established LLM-as-judge as a technique and produced its main empirical validation dataset
- Spun out of academia into a for-profit company, Arena Intelligence Inc., in January 2026

## Where they fit
- For [[Benchmark Contamination & Saturation]]: a live, continuously-refreshed human-preference benchmark is one structural answer to static-benchmark saturation, since votes on fresh prompts can't be memorized into training data the way a fixed test set can
- For [[LLM-as-Judge Evaluation]]: literally the origin of the method — MT-Bench is the canonical LLM-as-judge validation study, and the same group produced Vicuna, FastChat, and SGLang

## Notable work / recent moves
- Rebranded Chatbot Arena → LMArena (Sept 2024) → Arena (Jan 2026), alongside the for-profit spinout as Arena Intelligence Inc.

## Watch list
- Arena leaderboard, LMArena/Arena blog

## Connections
**Works in:** [[Benchmark Contamination & Saturation]], [[LLM-as-Judge Evaluation]]
