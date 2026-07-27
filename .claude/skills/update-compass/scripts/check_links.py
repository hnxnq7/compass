#!/usr/bin/env python3
"""
Verify every [[wikilink]] in a Compass content tree resolves to a real note.

Usage: python3 check_links.py /path/to/compass/content

Exits 1 and prints the offending links/files if anything is broken.
Run this before every commit — Quartz resolves links by filename, so a
typo or a stale rename fails silently at build time otherwise.
"""
import re
import os
import sys
import glob


def main():
    content_dir = sys.argv[1] if len(sys.argv) > 1 else "."
    files = glob.glob(os.path.join(content_dir, "**", "*.md"), recursive=True)
    existing = {os.path.splitext(os.path.basename(f))[0] for f in files}

    link_re = re.compile(r"\[\[([^\]|]+)(\|[^\]]+)?\]\]")
    missing = {}
    for f in files:
        with open(f, encoding="utf-8") as fh:
            content = fh.read()
        for m in link_re.finditer(content):
            target = m.group(1).strip()
            if target not in existing:
                missing.setdefault(target, []).append(f)

    if missing:
        print("BROKEN LINKS FOUND:")
        for target, srcs in sorted(missing.items()):
            print(f"  {target!r} <- {srcs}")
        print(f"\n{len(missing)} broken link target(s) across {len(files)} files.")
        sys.exit(1)

    print(f"All links resolve. {len(files)} files checked.")


if __name__ == "__main__":
    main()
