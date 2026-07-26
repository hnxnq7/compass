---
tags:
  - field-meta
---

## Where this goes eventually

Right now this is a static site, rebuilt on every push — you add/edit markdown and the graph updates on deploy. The end state: **a live layer on top of it** that pulls in daily signal per field (new papers, launches, notable takes) from X/Twitter and other sources, surfaces it against the existing field notes, and flags fields going quiet vs. fields heating up.

## Rough shape (fits the static-site model directly)
1. **Source layer** — per field, a short list of accounts/lists/search queries to watch. This can live in each field note's `Watch list` section, which doubles as config once it's structured.
2. **Ingestion** — a scheduled job (a GitHub Actions cron workflow, or a Claude scheduled task with push access to this repo) pulls recent posts matching each field's watch list and writes them to a dedicated linked "Feed" note per field (e.g. `Foundation Model Training — Feed.md`, linked from the main note) rather than editing the problem-space content itself.
3. **Commit & rebuild** — the ingestion job commits the updated feed note(s); Quartz's existing GitHub Actions deploy workflow rebuilds and republishes automatically. No separate "live" infrastructure needed — this is the same mechanism as any manual edit.
4. **Feedback loop** — promoting a signal into the main field note bumps its `status` (tracking → active), which shows up in the site the same way any other edit does.

If we ever want *sub-daily* / truly live updates instead of a daily batch, Quartz supports custom client-side components (it's not purely frozen HTML) — that's a later escalation, not a blocker now.

## Why not now
- The taxonomy needs to stabilize a bit more first — no point wiring live data into categories that are still being renamed and re-parented.
- X's API access for search/list pulls is paid and rate-limited; worth scoping cost once the `Watch list` sections have actual accounts in them.

## Next concrete step (when ready)
Pick 3-4 fields with populated `Watch list` entries, and prototype the ingestion job (writing to one linked Feed note) on just those before wiring the whole graph.
