# Avant Movies — Phase 3 title, series, and watch evolution

## Goal
Make discovery → title → trailer → access → watch → next/return feel like one considered cinema journey, while preserving Avant’s current application, routes, external backend, authentication, payment, entitlement, Vimeo/YouTube, My List, and progress contracts.

## Research translated into Avant decisions

Current public product research shows three useful patterns:
- Mainstream services reduce friction with a dominant Play/Resume action, explicit episode context, and immediate next-episode access.
- Apple TV-style “Up Next” and Netflix-style resume states work because the next action is obvious, but autoplay-heavy, catalogue-volume behavior does not suit Avant.
- MUBI, Criterion Channel, and BFI make films feel authored by foregrounding director, country, synopsis, and real supporting material. Criterion’s film-plus-extras model is especially useful when extras genuinely exist.

Avant will interpret these patterns rather than copy them:
- Make each title a short editorial journey, not a metadata dump or generic streaming template.
- Let real viewing progress determine the primary action: Watch, Continue, Resume Episode, or Next Episode.
- Treat filmmaker and production context as first-class only when the catalogue provides it.
- Keep trailers user-initiated on detail pages and enforce one active player.
- Expose access at the moment of intent, without mixing paid/free states ambiguously.
- Avoid fake recommendations, invented production facts, oversized ranking UI, and decorative post-watch gimmicks.

## Existing application assessment

### Keep
- `/title/$slug`, `/watch/$contentId`, `/episode/$slug/$episodeNumber`, and `/checkout/$productId` URLs.
- External catalogue, access, entitlement, checkout, Google sign-in, Vimeo/YouTube, progress, and My List calls.
- Existing return-context storage and native browser Back behavior.
- The global “one active player” event and reduced-motion support.
- Existing SEO and shareable episode URLs.

### Refine
- Live catalogue mapping, episode ordering, stable episode keys, and local fallbacks into one shared typed path.
- Resume state and progress indicators on title and episode surfaces.
- Access labels so free, owned, locked, loading, unavailable, and coming-soon states are unambiguous.
- Return-to-catalogue continuity and scroll restoration.

### Redesign
- Movie detail composition as an artwork-led editorial page.
- Series detail composition around Continue/Next, season selection, compact episodes, and progress.
- Trailer interaction as one focused, accessible cinematic overlay.
- Watch page as a distraction-free player with resilient loading/access/error states and calm episode continuity.
- Post-watch experience using only real sibling episodes and catalogue relationships.

### Remove or consolidate
- Duplicate inline backend-to-title/episode mappers.
- Repeated hero, modal, and watch preview player logic where it can conflict.
- Duplicate “About” sections and generic repeated recommendation blocks.
- Hover-only episode behavior on touch devices.

## Build sequence

### 1. Restore the current title/watch baseline
- Fix the blocking source parse failure first so title and watch routes render again.
- Resolve Phase 2’s direct strict-type regressions in shared catalogue/watch code without broad Admin, payment, or backend rewrites.
- Add shared helpers for deterministic episode ordering, stable content IDs, season grouping, progress lookup, and primary watch action.
- Preserve legacy `slug-n`, `legacy_key`, UUID, and movie-slug compatibility.

### 2. Build shared Phase 3 primitives
- Create a single accessible trailer experience supporting existing YouTube and Vimeo sources, focus trapping/restoration, Escape/close, explicit sound control, poster fallback, and one-player enforcement.
- Create reusable access/watch actions that render Watch Free, Watch, Continue, Resume Episode, Next Episode, Get Access, Access Active, or Coming Soon from existing state only.
- Create compact episode rows/cards with thumbnail, episode number, title, duration, description, progress, access, and active/next state.
- Add a restrained native Share action with clipboard fallback.

### 3. Redesign movie details
- Use immersive backdrop/poster composition with a concise first screen and a clear primary action.
- Reveal synopsis, real director/creator/cast/language/genre context, and real trailer/extras deeper in the page.
- Use the current catalogue’s related-title logic only when it produces supported relationships; label it neutrally rather than claiming unsupported editorial intent.
- Keep access and checkout handoff visually continuous.

### 4. Redesign series details
- Give series a dedicated structure: series identity → Continue/Next episode → seasons → compact episode browser → story/people → related discovery.
- Select the relevant season from progress when possible; otherwise use the first published season.
- Show episode progress and resume state from the existing local/server-compatible progress contract.
- Ensure season controls and episode browsing are touch-friendly and keyboard accessible.

### 5. Refine preview and page continuity
- Simplify catalogue preview into a true preview rather than a second full detail page.
- Preserve browsing context when opening title pages and returning, without overriding browser Back.
- Add short, purpose-led artwork/detail and detail/player transitions; reserve the Avant mark for entering playback and disable motion under reduced-motion preferences.

### 6. Rebuild the watch presentation around the film
- Keep existing authorization and protected playback calls unchanged.
- Present the player first, with a clear Back-to-title action and minimal context.
- Preserve YouTube/Vimeo progress saving, resume, fullscreen, and completion behavior.
- Make loading, source unavailable, sign-in required, access required, and temporary verification failures distinct and actionable.
- For series, show previous/next controls and a cancelable next-episode prompt only when real playback events indicate completion.
- After completion, offer only supported next steps: next episode, return to title/collection, or related catalogue titles derived from existing fields.

### 7. Responsive, accessibility, and regression verification
- Test movie detail, series detail, season switching, episode links, trailer, free playback, locked access, My List, resume, next episode, Back behavior, and missing artwork at small phone, modern phone, tablet portrait/landscape, laptop, desktop, and wide desktop.
- Verify keyboard focus, modal semantics, Escape behavior, touch targets, contrast, reduced motion, and single-player enforcement.
- Recheck Homepage, Movies, TV Shows, Watch Free, Search, My List, Account, checkout/payment routes, Admin, authentication, catalogue calls, entitlements, Continue Watching, progress, and Vimeo/YouTube handling.
- Confirm no horizontal overflow, runtime errors, dead links, or requests for fabricated episode IDs.

## Technical boundaries
- Frontend only. No Lovable Cloud, schema changes, migrations, payment API changes, authentication rewrite, Admin redesign, Vimeo replacement, or recommendation backend.
- No invented cast, country, language, awards, ratings, reviews, production facts, extras, or recommendations.
- Keep legacy URLs and backend payloads working while centralizing their frontend interpretation.
- Do not preload full videos or instantiate hidden players; mount video only for the active trailer/player.

## Current blocker noted by the audit
The current preview returns a source parse error before title and watch routes mount. Phase 3 starts by repairing that blocker and then validates the restored baseline before applying the redesign.
