-- Allow PayPal as a first-class payment method.
-- The PayPal checkout Edge Function inserts method='paypal'.
alter table public.payments
  drop constraint if exists payments_method_check;

alter table public.payments
  add constraint payments_method_check
  check (method = any (array[
    'mpesa'::text,
    'card'::text,
    'paypal'::text,
    'other'::text
  ]));
