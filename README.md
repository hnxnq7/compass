# 🧭 Compass

A map of fields and problem spaces across tech/AI — how they nest (broad category → specific field) and how they cross-connect. Built with [Quartz](https://quartz.jzhao.xyz/), deployed via GitHub Pages, rebuilt automatically on every push to `main`.

## Adding a field

1. Add a new `.md` file under `content/<Category>/` (pick the closest existing category folder).
2. Frontmatter: set `category`, `status` (`tracking` | `active` | `deep-dive` | `dormant`), and `parent: ["[[Broader Field]]"]`.
3. Fill in the Problem Space sections (what's genuinely hard, why it hasn't been solved, what solutions feel fake vs. inevitable).
4. Add `depends_on` / `enables` / `related` in frontmatter for cross-links, and mirror them in a `## Connections` section in the body (that's what makes them show up in the graph).
5. Push to `main` — the site rebuilds and redeploys itself.

See `content/index.md` for the current tree and category legend, and `content/Field Backlog.md` for fields flagged but not yet written up.

## Local dev

```
npm install
npx quartz plugin install
npx quartz build --serve
```
