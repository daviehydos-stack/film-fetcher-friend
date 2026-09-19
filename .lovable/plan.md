# Avant Movies Phase 1 — Homepage Evolution

## Goal
Polish the existing Avant Movies homepage without replacing its architecture, routes, data sources, authentication, playback, access, payment, account, admin, My List, Continue Watching, or transition systems. No Lovable Cloud and no backend work.

## Existing product audit

### Keep
- The full-bleed featured production, immediate artwork, delayed muted trailer, sound control, and off-screen playback pause.
- The dark cinematic foundation, restrained orange accent, compact Avant wordmark, transparent-to-solid header, and existing footer identity.
- Existing title cards, preview modal, My List actions, access checks, Continue Watching, Vimeo/YouTube handling, CMS catalogue fallback, and Avant play transition.
- Existing routes and component contracts, including `/movies`, `/tv-shows`, `/my-list`, `/title/$slug`, `/watch/$contentId`, account, checkout, payment, and admin paths.
- Current no-overflow behavior and touch-sized controls across phone, tablet, and desktop.

### Refine
- The homepage currently exceeds 4,000px and repeats the same small catalogue through Recently Added, Featured, Available Now, type rows, genre rows, and the closing editorial block.
- The hero is strong but the desktop composition is too empty at wide sizes, mobile actions consume too much vertical space, and fallback artwork can become soft or poorly cropped.
- Section headings and cards are visually uniform, so the page feels like repeated generic streaming rails instead of editorial curation.
- Header controls become undersized on large desktop and expose Admin Login too prominently in the customer experience.
- The footer needs clearer Avant storytelling, contact, Our Story, Behind the Scenes, legal, and social grouping.
- Loading currently jumps from empty state to remote content instead of using stable artwork/skeleton space.

### Replace only where necessary
- Remove the numbered `RankedRail` from the homepage; its giant outlined numbers are the clearest Netflix-like element.
- Replace the many automatic genre/recent/reversed rails on the homepage with a concise curated sequence. Keep the generic rail available for catalogue pages.
- Remove the redundant closing homepage statement because the evolved footer will carry Avant’s identity and mission more effectively.

## Homepage implementation

1. **Preserve the hero, improve its composition**
   - Keep the same featured-title source, autoplay timing, muted default, sound control, fallback behavior, access-aware action, My List, and detail modal.
   - Improve desktop text scale/placement and artwork framing without making the title oversized.
   - On phones, reduce action density, keep the primary action unmistakable, and retain a visible hint of the next section.
   - Add a subtle Kenyan/African cinema context line using real title metadata when available, never decorative stereotypes or invented claims.

2. **Create a short, deduplicated curation model**
   - Build homepage groups from the existing live catalogue and admin collections without changing the backend response.
   - Order: conditional Continue Watching, Available Now, Movies, TV Shows, Watch for Free, Footer.
   - Exclude the hero from the first collection and avoid repeating a title across homepage groups where the catalogue permits.
   - Keep Continue Watching compact and render it only when the viewer has progress.
   - Omit empty groups gracefully rather than filling them with duplicate or invented titles.

3. **Give each group an intentional role**
   - **Available Now:** a compact editorial showcase without ranking numbers.
   - **Movies:** a concise preview with a clear link to the existing Movies page.
   - **TV Shows:** a concise series preview with a clear link to TV Shows; no episode-management clutter.
   - **Watch for Free:** use only content already identified as freely playable by existing data/media state, with a clear free label and the same visual quality as paid titles.
   - Reuse the existing title card and preview behavior, adding small presentation variants only where needed.

4. **Polish shared chrome without redesigning it**
   - Refine header sizing, focus states, scroll treatment, mobile menu spacing, and customer/admin hierarchy while preserving every destination and auth action.
   - Reorganize the footer around Avant identity, “It’s time to feel again,” contact/help, Our Story, Behind the Scenes where an existing valid destination exists, legal links, and existing social links.
   - Preserve CMS-provided branding, navigation, appearance, and copyright overrides.

5. **Motion, loading, and performance**
   - Keep the Avant play transition and single-player enforcement.
   - Use restrained reveal/crossfade motion on homepage artwork and sections, with full reduced-motion support.
   - Add stable loading placeholders for the remote catalogue while preserving immediate fallback content.
   - Keep below-fold images lazy, prevent layout shift, and never load multiple preview players simultaneously.

## Responsive verification
- Test at 390×844, 768×1024, 1280×1800, and a wide desktop viewport.
- Verify header/menu, hero crop and controls, horizontal touch scrolling, modal opening/closing, My List, Continue Watching, title navigation, free/play/access labels, footer links, and no horizontal overflow.
- Confirm the homepage is materially shorter, the numbered presentation is absent, title repetition is reduced, and existing routes still load.
- Check console/network behavior and preserve the external Supabase integration unchanged.

## Scope boundaries
- Homepage and minimal shared header/footer/design-token refinements only.
- No Cloud activation, schema, migration, backend, payment API, authentication rewrite, admin redesign, or unrelated page redesign.
- The shared Drive folder will be treated as the client’s approved asset library; only relevant existing imagery will be used, with no invented productions or claims.
