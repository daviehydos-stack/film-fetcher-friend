# Avant Movies — Workflow Error Report

## Current status

**Healthy — the current main branch is passing.**

Latest verified successful replacements:
- Avant Movies CI: run 35494453002, commit 55e3291
- GitHub Pages Preview: run 35494498327, commit 55e3291

## Resolved error

The historical failing run 35493764079 was tied to commit `b3dcf20` and failed because `getTitles` was not exported by `src/lib/site-data.ts`. It affected:
- `src/routes/movies.tsx`
- `src/routes/tv-shows.tsx`
- `src/routes/genre.$genre.tsx`
- `src/routes/person.$person.tsx`

That defect has been fixed on the current main branch and subsequent production builds pass.

The earlier diagnostics-workflow failure caused by a duplicate report-copy step was also fixed.

## Historical runs

Older failed/cancelled workflow entries remain visible in GitHub Actions because GitHub preserves workflow history. They are not current unresolved defects when a newer corrected main-branch run passes.

Do not retry obsolete commits merely to make historical entries green: rerunning an old commit executes the old source code and can reproduce an already-fixed error.

## Monitoring rule

Treat a failure as active only when the latest run for the current main branch fails. Keep historical failures here only as resolved diagnostic history.
