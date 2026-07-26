---
tags:
  - entity
type: company
status: active
works_in:
  - "[[Benchmark Contamination & Saturation]]"
  - "[[Preference Optimization]]"
---

## Scale AI

*Data-labeling and eval-infrastructure company whose SEAL lab runs private, held-out leaderboards specifically to blunt benchmark contamination. Its original core business — RLHF/preference annotation for frontier labs — is the human-feedback supply chain preference optimization trains on.*

## What they do
- Core business is data labeling/annotation for AI training; SEAL (Safety, Evaluation, and Alignment Lab) is its research arm running expert-evaluated leaderboards (Humanity's Last Exam, SWE-Bench Pro, GSM1k, and others)
- Keeps SEAL evaluation datasets private and unpublished specifically so they can't be scraped into pretraining corpora
- Originally built its scale on RLHF/preference-comparison annotation (response ranking, pairwise preference labeling) for frontier labs' alignment training

## Where they fit
- A concrete, operating example of the note's predicted "inevitable" fix: held-out, periodically-refreshed private eval sets as standard practice against contamination, rather than a one-time patch
- Sits directly upstream of [[Preference Optimization]] — the note flags human preference labeling as expensive and noisy, and Scale AI (alongside competitors like Surge AI) is one of the main suppliers of that data to frontier labs

## Notable work / recent moves
- GSM1k built specifically to measure existing contamination on GSM8k, matched for difficulty/structure against a held-out set
- SWE-Bench Pro maintains a separate held-out split (858 instances) alongside its public leaderboard
- Humanity's Last Exam keeps an additional held-out private question set to periodically check for overfitting to the public release

## Watch list
- Scale SEAL leaderboards page

## Connections
**Works in:** [[Benchmark Contamination & Saturation]], [[Preference Optimization]]
