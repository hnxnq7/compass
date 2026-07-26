---
tags:
  - entity
type: research-org
status: active
works_in:
  - "[[Data Curation & Filtering]]"
---

## Common Crawl Foundation

*501(c)(3) nonprofit that has run monthly open web crawls since 2008 — the raw corpus underneath most public LLM pretraining datasets (C4, RefinedWeb, FineWeb, Dolma, and others all start here).*

## What they do
- Crawls the open web monthly, archiving 3-5 billion new pages per crawl (petabytes of raw pages, metadata, and text extracts going back to 2008)
- Freely distributes the archive, making it the default upstream source that downstream filtering pipelines (RefinedWeb, DataComp-LM, Dolma, FineWeb) all draw from and then heavily filter
- Founded by Gil Elbaz (Chairman); run by Executive Director Rich Skrenta with a small (~18-person) staff
- Released CommonLID in early 2026, a language-identification benchmark covering 109 languages, extending its role beyond raw crawling into data-quality tooling

## Where they fit
- The literal raw-material layer for [[Data Curation & Filtering]] — nearly every quality-filtering pipeline in the field is defined relative to what has to be thrown away from a Common Crawl snapshot, which is why the org's crawl coverage and format decisions quietly shape what "web-scale pretraining data" even means

## Notable work / recent moves
- CommonLID language-ID benchmark (early 2026)

## Watch list
- commoncrawl.org blog, monthly crawl announcements

## Connections
**Works in:** [[Data Curation & Filtering]]
