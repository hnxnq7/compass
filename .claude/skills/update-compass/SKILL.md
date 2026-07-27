---
name: update-compass
description: Keeps "Compass" — Rachel's tech/AI field atlas (this repo, live at https://hnxnq7.github.io/compass/) in sync with new information. Trigger this proactively, without being asked, whenever something that plausibly belongs in the atlas surfaces during a conversation: a new model, technique, paper, lab, tool, product launch, or AI/tech policy development mentioned by the user, or turned up by a WebSearch/WebFetch call made earlier in the same turn. Also trigger on direct requests like "add this to Compass," "update the atlas," "does this fit anywhere in Compass," or "update compass with X." This is meant to fire often and stay lightweight — one or two small edits per run, not a rewrite.
---

# Updating Compass

Compass is a static site (Quartz, deployed to GitHub Pages) that maps fields and problem spaces across tech/AI as an interconnected tree. It only stays useful if it stays current — that's the whole point of this skill. Each run should be a small, surgical update, not a full pass over the site. See this repo's `CLAUDE.md` for the full content model and known gotchas before your first edit here.

## 1. Pin down what's actually new

Before touching any files, state plainly what the new piece of information is (a specific model, paper, tool, launch, policy move, etc.) and where it came from (the user, or a specific search result). Don't extrapolate beyond what's actually known — if a detail is fuzzy, leave it fuzzy in the note rather than filling in a plausible-sounding specific.

## 2. Get the repo up to date

Make sure you're working in a clone of `git@github.com:hnxnq7/compass.git` (clone it if you don't have one locally yet), and `git pull` before editing — this may be running in a different session than last time, and stale local state will cause confusing merge conflicts later.

## 3. Find where this fits

Read `content/index.md` — it has the full nested tree of every note in the atlas plus a category legend, and is the fastest way to get oriented. For a more targeted search, `grep -ril <keyword> content/` or grep frontmatter (`category:`, `tags:`, `parent:`) across `content/**/*.md`.

New information is often relevant to more than one note. For example, a new spec-driven-coding tool launch could touch both `Spec-Driven Coding & Development` and `Coding Agents & AI Software Engineering` — check both the note that's the most direct fit and any notes it `depends_on`/`enables`/`relates to`.

## 4. Update existing notes (the common case)

Each field note follows this structure:

```
---
tags: [field]
category: <slug>
status: tracking | active | deep-dive | dormant
parent: ["[[Root Note]]"]
depends_on / enables / related: ["[[Other Note]]", ...]
---
## Problem Space: <Name>
## What seems genuinely hard here?
## Why hasn't it been solved?
## What solutions feel fake?
## What solutions feel inevitable?
## Notable tools / instances       (plain text — see note below)
## Watch list
## Connections                     (hand-written, mirrors the frontmatter)
```

Match the note's existing terse, opinionated voice — short bullets, not paragraphs. Where to put the new information depends on what kind of update it is:

- **A concrete product, paper, or launch** → `## Notable tools / instances` or `## Watch list`. Keep these as plain text, not `[[wikilinks]]` — the graph tracks *fields and problem spaces*, not products. A tool is worth naming here even though it doesn't get a graph node.
- **Evidence that changes the field's actual trajectory** → update `## What solutions feel fake?` / `## What solutions feel inevitable?` if the new information genuinely shifts that read, not just because something happened.
- **Evidence of real momentum** → bump `status` from `tracking` to `active` (or `active` to `deep-dive` if you're about to substantially deepen a note). Don't bump status for routine incremental news.
- **A newly relevant connection to another field** → add it to `depends_on` / `enables` / `related` in the frontmatter, *and* mirror it in the `## Connections` section in the body. These two are not auto-synced — Quartz has no Dataview here, unlike the original Obsidian version this was ported from, so the Connections section is hand-maintained. Forgetting this half is the easiest way to leave the graph and the page text disagreeing with each other.

## 5. New field, not just new information about an existing one?

Most of the time, default to a one-line bullet in `content/Field Backlog.md` under the right category heading — this is the low-effort, low-commitment way to flag something without fully writing it up.

Only create a full new note if there's enough substance to actually fill in the Problem Space sections meaningfully (not just a name and a guess). If you do create one:

1. Put it in the right `content/<Category>/` folder, matching its `category:`.
2. Set `parent: ["[[Root Note]]"]` to its closest broader field, plus any `depends_on`/`enables`/`related`.
3. Add it to that parent's `## Children` list — this is a hand-written list, not a live query, so the new note won't appear there on its own.
4. Add it to the nested tree in `content/index.md` — same reason, it's hand-written.

Skipping steps 3 or 4 is the most common way a new note ends up "orphaned": it exists and its own page works fine, but nothing else on the site links to it, so no one finds it via browsing.

## 6. Check links before committing

From the repo root:

```
python3 .claude/skills/update-compass/scripts/check_links.py content
```

This catches the two failure modes that are easy to introduce by hand: a typo'd `[[wikilink]]` target, or forgetting that any note whose *display* name contains a `/` (e.g. "Real-World / Deployment Evals") has to be filed under a filename using `_` instead, and linked via the alias form `[[Real-World _ Deployment Evals|Real-World / Deployment Evals]]` — a plain slash in a wikilink target breaks Quartz's routing.

Also check for the dollar-sign/LaTeX gotcha if your edit added any `$amount` prose: `grep -rn '\$[0-9].*\$[0-9]' content/` — two or more literal `$` on one line gets auto-detected as inline math by the KaTeX plugin and breaks. Escape as `\$`.

## 7. Commit and push

```
git add -A
git commit -m "<what changed>: <one-line reason, citing the source>"
git push
```

Example message: `update Spec-Driven Coding & Development: add Tessl's Dec 2026 GA launch`. The push alone triggers the site's GitHub Actions deploy workflow — there's no separate deploy step, and no need to run a local build first unless you want to sanity-check the output (`npx quartz build --serve` from the repo root).

## 8. Report back

Tell the user, briefly: which note(s) you touched or created, and a one-line summary of the change. No need to link the live URL every time — mention it if this was a first-time or notable update, otherwise the commit message speaks for itself.
