# Avant Movies — Workflow Error Report

## Current status

**Healthy — latest workflows are passing.**

Verified on 2026-09-20:
- Avant Movies CI: success (run 35493955765)
- GitHub Pages preview deployment: success (run 35493976227)

## Resolved errors

- Fixed missing `getTitles` export that broke Movies, TV Shows, Genre and Person route builds.
- Fixed duplicate diagnostics persistence step that referenced the wrong report path.
- Historical cancelled runs were superseded by successful runs against the corrected main branch.

## How to use this file

This file is the repository-visible current health report. The error-report workflow also retains failure artifacts for diagnosis. Historical cancelled runs do not represent the current main branch when a newer run for the corrected branch succeeds.
