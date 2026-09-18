# AI #3 — Payments + Watch

Ownership starts at **Get Access / Watch** and ends at protected playback/progress.

## Invariants

1. Never trust amount, currency, duration, or access scope from the browser.
2. A success redirect never creates access. The provider transaction must be verified server-side.
3. Webhooks must be signature-verified, idempotent, and replay-safe.
4. Entitlements, not payment UI state, authorize full Vimeo content.
5. Provider credentials never reach the browser.
6. Commercial model remains data-driven: movie, season, bundle, subscription and time-limited access can coexist.
7. Vimeo IDs/embed metadata are stored; full movie files are not stored in Supabase/Vercel.

## Intended server operations

- create-payment(product_id, customer identity, provider)
- verify-payment(payment/reference)
- payment-webhook(provider)
- create-entitlement(verified payment)
- validate-entitlement(customer/session, content)
- save-watch-progress(customer/session, content, progress)

## Database contract

AI #2 may own the physical Supabase migrations. AI #3 requires these normalized concepts:

- products: type, billing_type, price, currency, duration_days, active
- product_content: product_id, content_id/season_id
- payments: reference, customer_id, product_id, provider, method, server-resolved amount/currency, status, verified_at
- payment_events: provider event id/hash, payment_id, payload metadata, processed_at (unique event key)
- entitlements: customer_id, product_id, content/season scope, payment_id, starts_at, expires_at, status
- watch_progress: customer_id, content_id, episode_id, progress_seconds, duration, last_watched_at, completed

Unique constraints should prevent duplicate payment references and duplicate entitlement grants for the same verified purchase.

## UI routes

- /checkout/:productId
- /payment/success (verification/polling state; not authorization)
- /payment/failed
- /watch/:contentId (server entitlement gate)

The current route scaffolds deliberately do not fake successful payments or playback.
