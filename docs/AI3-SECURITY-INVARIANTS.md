# AI #3 security invariants

1. Browser redirects are UX only. They never create entitlements.
2. Webhook signatures are verified by the configured provider adapter.
3. A positive webhook event is re-verified against the provider before access is granted.
4. Payment creation is idempotent. Repeated requests reuse the same pending transaction.
5. Entitlement creation is idempotent for a payment/access target.
6. Product price, currency and duration come from server-owned product records, never browser input.
7. Vimeo playback metadata is returned only after server-side entitlement resolution for protected content.
8. Customers may read only their own payments, entitlements and watch progress.
9. Service credentials, M-PESA secrets and card-provider secrets remain server-side.
10. The commercial model stays data-driven: movie, season, bundle and subscription products use the same payment/access pipeline.
