# Palpluss integration decision

Avant Movies uses Palpluss for M-PESA collection.

## Confirmed public contract

- STK Push: `POST https://api.palpluss.com/v1/payments/stk`
- Authorization example uses `Basic <API key>`
- Request fields publicly shown: `phone`, `amount`, `accountReference`
- Palpluss sends real-time webhooks when transactions complete, fail or time out.
- Palpluss advertises signed webhook payloads.
- API credentials must remain server-side.

## Avant mapping

`PaymentProvider.id = "palpluss"`

Checkout sends the server-owned product amount and the internal payment reference as
`accountReference`. The browser never supplies the authoritative amount.

## Production gate

The public Palpluss pages do not expose enough detail to safely invent the webhook
signature algorithm/header or transaction lookup endpoint. Before enabling live access
granting, copy those exact values from the authenticated Palpluss developer docs/dashboard.

Until then, the adapter remains isolated and access is never granted merely because a
redirect or webhook body says payment succeeded.

Required server environment:

`PALPLUS_API_KEY`

Optional:

`PALPLUS_BASE_URL=https://api.palpluss.com`
