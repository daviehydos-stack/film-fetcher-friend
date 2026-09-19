# Avant Movies — Phase 2 discovery evolution

## Goal
Extend the approved Phase 1 product into a distinctive, efficient discovery experience without redesigning the homepage or changing any backend contracts.

## Build sequence

1. **Restore a clean build**
   - Resolve the current strict TypeScript failures with narrow safety fixes: guarded array entries, exact optional-property construction, bracket access for indexed environment/window fields, complete effect returns, and valid route metadata.
   - Preserve behavior while correcting types; do not rewrite authentication, payment, access, or transition logic.
   - Trace the reported missing episode response and prevent invalid frontend episode requests without masking genuine backend failures.

2. **Create one shared catalogue data layer**
   - Consolidate the repeated live-catalogue mapping used by Home, catalogue pages, and Search.
   - Preserve the existing external Supabase response, 60-second request cache, static fallback records, media identifiers, and access fields.
   - Derive free content only from genuinely playable, explicitly unlocked movie or episode sources.

3. **Evolve Movies and TV Shows as distinct destinations**
   - Replace the current duplicated numbered rails with an original editorial catalogue composition using a compact feature, useful filter/sort controls, and a deduplicated responsive collection grid.
   - Movies will emphasize complete films and short-form stories; TV Shows will emphasize series context such as available seasons/episodes when real data supports it.
   - Keep the existing title preview, My List, access handling, transitions, and title navigation.

4. **Add Watch for Free**
   - Create `/watch-free` only from verified free catalogue entries and add it to customer navigation.
   - Give free productions the same premium treatment as paid titles, with clear immediate-watch status rather than bargain styling.
   - Add unique route metadata and keep direct watch/title links aligned with existing routes.

5. **Refine Search**
   - Use typed URL search state so queries and filters survive Back/Forward navigation.
   - Search only real fields available in the merged catalogue, with immediate results, keyboard-friendly controls, useful suggestions before typing, and a composed no-results state.
   - Build a touch-first mobile search layout without creating a second search service.

6. **Responsive and regression verification**
   - Test Movies, TV Shows, Watch for Free, Search, cards, preview, navigation, filters, and Back behavior at small phone, 390×844, 768×1024, 1280px, and wide desktop sizes.
   - Confirm no page overflow, duplicate catalogue padding, empty categories, competing video playback, broken links, or exposed technical errors.
   - Recheck Homepage, My List, title/watch, account, checkout/payment, Admin, media playback, and external Supabase integration for regressions.

## Design direction
The discovery pages will remain recognizably Avant while becoming denser and more editorial than the homepage. Composition will be driven by the real catalogue and artwork, not competitor patterns: no numbered rankings, no repeated reverse-order rails, no fake popularity, and no invented African metadata.

## Boundaries
- Frontend only; no Lovable Cloud, migrations, backend replacement, payment work, auth rebuild, Admin redesign, or Vimeo architecture changes.
- No Phase 3 detail/player redesign beyond shared corrections required for discovery.
- Preserve all existing public URLs and backend contracts.
