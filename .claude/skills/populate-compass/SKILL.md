---
name: populate-compass
description: Deep-research enrichment pass for "Compass," Rachel's tech/AI field atlas (this repo, live at https://hnxnq7.github.io/compass/). Use this when the user wants to flesh out thin/underpopulated notes, audit the atlas for coverage gaps, populate Key players / Watch list entries with real researched names (not placeholders), or process a batch of names/topics they've dropped in chat (labs, companies, tools) into the right place in the atlas. This is a deliberate, research-heavy sweep — distinct from update-compass, which does small reactive edits when one new fact surfaces. Trigger on requests like "populate compass," "flesh out X," "this file is underpopulated," "add key players to every field," or a list of names/topics the user wants slotted in. Can run per-file (given one note to enrich) or as a full sweep (given a batch of notes, e.g. one category folder).
---

# Populating Compass

Compass's fields graph is only as useful as it is populated — an empty `## Watch list` or missing `## Key players` section means the note is a stub, not a real map of the field. This skill does the actual research to fix that, one note (or one batch of notes) at a time. See this repo's `CLAUDE.md` for the full content model and known gotchas before your first edit here.

## Per-note procedure

For each note you're enriching:

1. **Read it first.** Note its title, `category`, existing `## Notable tools / instances` and `## Key players` (if any), and its `related`/`depends_on`/`enables` neighbors — you don't want to suggest a key player that's really a better fit for a neighboring field, or duplicate one already listed there.

2. **Decide what's actually missing.** A note needs work if `## Watch list` is empty/placeholder, `## Key players` is absent or has fewer than ~2 entries, or (for entity notes) `## Notable work / recent moves` is empty. Don't touch sections that already have real content just to pad them.

3. **Research it for real.** Use WebSearch — 1-3 targeted queries per note is usually enough (e.g. `"<field name>" research labs 2026`, `"<field name>" companies startups 2026`). Don't invent plausible-sounding names; if a search doesn't turn up a clear answer, leave the section shorter rather than fill it with a guess.

4. **Add Key players (2-4 is a good target, not a hard minimum).** For each one:
   - Judge whether it's an **entity** (a company, academic lab, open-source project, or research org with sustained identity — worth its own page) or a **one-off tool/product** (stays as plain text in `## Notable tools / instances` instead). The bar: would this still be worth tracking in six months, independent of the specific paper/feature that surfaced it? See `content/index.md`'s "How this is organized" section for the full rationale, and look at existing entities in `content/Entities/*/` for the format/tone to match.
   - If it's a new entity: copy `_templates/Entity Template.md` into the right `content/Entities/<Type>/` subfolder (`Companies`, `Academic Labs`, `Open-Source Projects`, or `Research Orgs` — add a new type folder only if none of these fit), fill it in from your research, and set `works_in` to point back at the note(s) it's relevant to.
   - If it's an existing entity already in `content/Entities/`, just link to it — don't create a duplicate. Grep `content/Entities/` first.
   - Add a `## Key players` section (or extend the existing one) on the field note with a one-line reason for each link, and make sure the entity's own `works_in`/`## Connections` points back. This reciprocal link is what makes it show up in the graph and in Quartz's Backlinks panel — a one-directional mention doesn't.

5. **Fill Watch list** with what you'd actually check periodically for this field — a lab's blog, a project's GitHub, a specific conference, a named tracker (e.g. METR's reports, an arXiv search). Skip it if research didn't turn up anything concrete; an empty Watch list is honest, a fabricated one isn't.

6. **Note gaps you notice but don't fix.** While researching a field, you'll often notice an adjacent subfield, a company, or a whole application area that isn't covered anywhere in the atlas yet. Don't create it on the spot (that requires more judgment than a research pass — is it really distinct, where does it fit in the tree) — instead, collect it to report back. If running standalone, add a bullet to `content/Field Backlog.md` under the closest category heading. If running as part of a larger sweep, just note it in your final summary instead so the coordinating pass can decide.

## Wiring checklist (easy to forget)

- New entity note → added to the relevant field note(s)' `## Key players`, and the field note(s) added to the entity's `works_in` frontmatter + `## Connections`
- New entity note → added to `content/index.md`'s `## Entities` section, under the right type heading
- Any new `[[wikilink]]` → resolves to a real filename (run `python3 .claude/skills/update-compass/scripts/check_links.py content` from the repo root before finishing — it's fast and catches typos and the `/`-in-filename gotcha)
- Any new `$amount` prose (funding rounds, valuations) → if a note ends up with two or more literal `$` on one line, escape them as `\$` or the KaTeX plugin will auto-detect it as inline math and break the page

## When you're done

Run the link checker. If you're doing a standalone single-note or small pass, commit and push yourself (same pattern as update-compass: `git add -A && git commit -m "populate <note>: add key players/watch list" && git push` from the repo root) — the push alone triggers the deploy. If you're one of several parallel passes in a larger sweep, leave the commit to whoever's coordinating the sweep instead, and just report back: which notes you touched, which entities you created, and the list of gaps you noticed but didn't fix.
