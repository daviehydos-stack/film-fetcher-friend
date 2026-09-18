# Avant Movies premium VOD rebuild

## Goal
Transform the current brochure-style Avant Cinema site into a real, cinematic streaming product. The first release will prioritize immersion, discovery, title details, and a credible viewing journey while preserving Avant’s existing catalogue and brand voice.

## Build sequence

### 1. Streaming design foundation
- Replace the burnt-orange website theme with a near-black cinematic system using warm copper/amber accents, off-white typography, soft shadows, subtle glass, and restrained motion.
- Introduce reusable streaming primitives: app navigation, hero controls, content rails, title cards, metadata badges, empty/loading/error states, and a minimal footer.
- Preserve reduced-motion, keyboard focus, high contrast, stable media dimensions, and mobile-specific navigation.

### 2. Exceptional homepage
- Rebuild `/` as a full-bleed featured-title experience led by **Back to Us**, not a marketing hero.
- Show its backdrop instantly, then attempt a delayed muted inline trailer only when a configured embeddable source exists; retain the poster and never expose a broken frame.
- Add Play, More Info, My List, and sound controls with appropriate disabled/sign-in states.
- Add curated horizontal rails sized for the real small catalogue: Featured on Avant, TV Shows, Movies, Award-Winning Stories, and Recently Added.
- Use larger artwork and editorial pacing rather than generating fake titles.

### 3. Discovery and title experiences
- Add working `/movies`, `/tv-shows`, `/search`, and `/my-list` routes.
- Implement fast local catalogue search, lightweight genre/type filtering, sorting, polished empty states, and mobile-friendly results.
- Replace legacy article-like production pages with cinematic detail pages containing backdrop, synopsis, metadata, trailer access, access state, and related titles.
- Build season selectors and episode lists for **This Is Life** and **A Better Life** from the existing episode catalogue.
- Keep legacy URLs working and redirect or restyle them rather than breaking known links.

### 4. Viewing foundation
- Add a minimal `/watch/$contentId` experience with a protected-viewing layout, back control, title/episode context, and previous/next episode structure.
- Use lazy video initialization and support Vimeo IDs/embed configuration without storing video files in the app.
- Until real Vimeo IDs and entitlements exist, trailers/free episodes can use verified existing sources and paid titles show a refined access-required state—never a fake unlock.
- Add client-side demo progress only for interface validation; persistent progress follows after Cloud confirmation.

### 5. Brand and support pages
- Add `/about`, `/awards`, and `/contact` with cinematic editorial treatment and verified Avant claims only.
- Add concise `/privacy`, `/terms`, and `/purchase-policy` placeholders clearly awaiting approved legal copy.
- Move the masterclass and **A Real Boy** away from the primary streaming navigation into a restrained “Studio” area.
- Add a minimal, non-functional-until-connected newsletter module and verified business contact details.

### 6. Cloud-backed application milestone — after frontend confirmation
- Enable Lovable Cloud only after the streaming experience is reviewed, then provide the SQL migrations as requested.
- Create a normalized catalogue model for titles, shows, seasons, episodes, genres, trailers, collections, homepage configuration, products/plans, payments, entitlements, watch progress, My List, customers, awards, newsletter, settings, and audit logs.
- Add strict row-level access: public published catalogue reads, owner-only customer data, server-verified entitlements, and separate `user_roles` with server-side admin checks.
- Keep pricing/payment providers modular. Do not invent final prices, access periods, providers, or catalogue migrations.

### 7. Customer access and payments
- Add low-friction identity only when needed for My List, progress, purchases, or playback.
- Implement provider-neutral server functions for transaction creation, verification, callback handling, entitlement creation, and entitlement validation.
- Resolve product pricing server-side, enforce idempotency, and never unlock content from a browser redirect.
- Prepare M-PESA first and card payments second without storing sensitive payment credentials.

### 8. Secure admin application
- Add a separately styled protected `/admin` area with role-gated access.
- Implement real CRUD for titles, shows, seasons, episodes, trailers, collections, homepage configuration, products/plans, customers, payments, entitlements, awards, newsletter, and editable site content.
- Show only meaningful metrics derived from stored data; never fabricate revenue.
- Show secret configuration as “Configured” status only, never return credentials to the browser.

## Technical approach
- Keep TanStack Start’s file-based routing and route-specific metadata.
- Centralize catalogue types and selectors now so the static prototype can move to Cloud without redesigning the UI.
- Use the existing Avant imagery as the initial visual library; retain source URLs until approved assets are supplied locally.
- Use semantic design tokens and existing interface components; no hardcoded visual colors in page code.
- Use Vimeo Player SDK-compatible fields and lazy embeds; no video uploads to application storage.
- Use server functions for app operations and signed public server routes only for payment webhooks.
- Add route-level skeletons/error states and verify desktop plus mobile rendering and interactions.

## Acceptance criteria for the first review
- Opening `/` unmistakably feels like a premium streaming service.
- The featured production dominates the first viewport and falls back cleanly when no trailer source exists.
- Every visible navigation item and CTA leads to a working experience.
- Search, filters, title details, season selection, episode lists, My List states, and watch/access states work without dead buttons.
- Existing real Avant titles and imagery are used without fabricated productions, awards, prices, or legal claims.
- The experience is polished at desktop and mobile sizes before Cloud schema work begins.
