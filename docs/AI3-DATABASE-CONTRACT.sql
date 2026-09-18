-- AI #3 payment/access contract. Coordinate table ownership with the backend/admin work.
-- This is intentionally provider- and commercial-model neutral.

create table if not exists access_products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  product_type text not null check (product_type in ('movie_access','season_access','bundle','subscription')),
  billing_type text not null check (billing_type in ('one_time','recurring')),
  price_minor bigint not null check (price_minor >= 0),
  currency text not null,
  duration_days integer,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  reference text not null unique,
  customer_id uuid not null,
  product_id uuid not null references access_products(id),
  provider text not null,
  method text not null,
  amount_minor bigint not null,
  currency text not null,
  status text not null default 'pending',
  provider_reference text,
  idempotency_key text unique,
  verified_at timestamptz,
  failure_reason text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists entitlements (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null,
  product_id uuid not null references access_products(id),
  payment_id uuid references payments(id),
  content_id uuid,
  season_id uuid,
  access_type text not null,
  starts_at timestamptz not null default now(),
  expires_at timestamptz,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  unique (payment_id, content_id, season_id)
);

create table if not exists watch_progress (
  customer_id uuid not null,
  content_id uuid not null,
  episode_id uuid,
  progress_seconds integer not null default 0,
  duration_seconds integer not null default 0,
  completed boolean not null default false,
  last_watched_at timestamptz not null default now(),
  primary key (customer_id, content_id, episode_id)
);

-- Browser clients must never be allowed to mark payments successful or mint entitlements.
-- RLS policies should allow customers to read only their own payment/entitlement/progress rows.
-- Payment verification, entitlement creation and privileged writes belong to server/Edge Functions.
