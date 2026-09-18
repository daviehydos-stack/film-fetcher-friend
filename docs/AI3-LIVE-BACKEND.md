# AI3 live backend integration

Frontend deployment remains GitHub Pages. Dynamic payment, admin, entitlement and playback services are deployed as Supabase Edge Functions in project `bnuyhrsezkepsaebwlmu`.

Live functions: palpluss-checkout, palpluss-webhook, authorize-watch, save-watch-progress, resolve-playback, payment-status, entitlement-maintenance, my-library, admin-session, admin-api, admin-content, admin-customers.

Admin allowlist: hydrocephcare@gmail.com (super_admin, MFA required). Browser code contains no service-role, Palpluss or webhook secrets.

Firebase project: avant-movies-b6b94. GitHub Pages must provide the public Firebase Web API key as `VITE_FIREBASE_API_KEY` at build time for Google/TOTP admin sign-in. TOTP must also be enabled in Firebase Authentication/Identity Platform.

Palpluss settlement remains deliberately gated: webhook receipt does not mint access until the provider's exact signed-webhook/status-verification contract is confirmed. This prevents a browser redirect or untrusted callback from granting paid content.

No Resend/email implementation was found in the repository or deployed Edge Functions as of 2026-09-18; therefore no unused email code was falsely wired into production.
