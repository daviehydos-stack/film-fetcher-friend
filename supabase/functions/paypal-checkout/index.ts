import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { customerUser } from "./customer-auth.ts";

const H = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-avant-guest",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Cache-Control": "no-store",
};

function db() {
  const k = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}");
  return createClient(Deno.env.get("SUPABASE_URL")!, k.default || Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"), { auth: { persistSession: false } });
}

async function paypalToken(cfg: any) {
  const env = cfg.metadata?.environment === "live" ? "live" : "sandbox";
  const base = env === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";
  const id = String(cfg.metadata?.clientId || cfg.metadata?.client_id || cfg.metadata?.clientID || "");
  const secret = String(cfg.api_key || cfg.metadata?.clientSecret || cfg.metadata?.client_secret || cfg.metadata?.secret || "");
  if (!id || !secret) throw new Error("paypal_not_configured");
  const r = await fetch(`${base}/v1/oauth2/token`, { method: "POST", headers: { Authorization: "Basic " + btoa(id + ":" + secret), "Content-Type": "application/x-www-form-urlencoded" }, body: "grant_type=client_credentials" });
  const x = await r.json().catch(() => ({}));
  if (!r.ok || !x.access_token) throw new Error("paypal_auth_failed: " + (x?.error_description || x?.error || r.status));
  return { base, token: x.access_token };
}

Deno.serve(async (r) => {
  if (r.method === "OPTIONS") return new Response(null, { status: 204, headers: H });
  if (r.method !== "POST") return Response.json({ error: "method_not_allowed" }, { status: 405, headers: H });
  try {
    const body = await r.json();
    const action = String(body.action || "create");
    let u: any = null;
    try { u = await customerUser(r); } catch { u = null; }
    if (!u && action === "create") {
      const email = String(body.email || "").trim().toLowerCase();
      if (email && email.includes("@")) u = { sub: "guest-email:" + email, guest: true, email };
    }
    if (!u) return Response.json({ error: "Checkout session unavailable" }, { status: 401, headers: H });

    const c = db();
    const { data: cfg } = await c.from("admin_integration_credentials").select("api_key,metadata").eq("provider", "paypal").maybeSingle();
    if (!cfg || cfg.metadata?.enabled !== true) return Response.json({ error: "PayPal is disabled" }, { status: 503, headers: H });
    const pp = await paypalToken(cfg);

    if (action === "create") {
      const productId = String(body.productId || "");
      const email = String(body.email || "").trim().toLowerCase();
      const idem = String(body.idempotencyKey || "");
      if (!productId || !email || !idem) return Response.json({ error: "Missing product, email or idempotency key" }, { status: 400, headers: H });

      const { data: old } = await c.from("payments").select("*").eq("idempotency_key", idem).eq("provider", "paypal").maybeSingle();
      if (old?.provider_reference) return Response.json({ reference: old.reference, orderId: old.provider_reference, currency: String(old.currency || cfg.metadata?.checkoutCurrency || "USD").toUpperCase(), amountMinor: Number(old.amount_minor || 0), reused: true }, { headers: H });

      const { data: p } = await c.from("access_products").select("*").eq("id", productId).eq("active", true).single();
      if (!p) return Response.json({ error: "Product unavailable" }, { status: 404, headers: H });

      const reference = "AVANT-PP-" + crypto.randomUUID();
      const paypalCurrency = String(cfg.metadata?.checkoutCurrency || "USD").toUpperCase();
      const rate = Number(cfg.metadata?.kesPerUsd || 130);
      const paypalMinor = String(p.currency || "KES").toUpperCase() === "KES" ? Math.max(1, Math.round(Number(p.price_minor) / rate)) : Number(p.price_minor);

      const { data: pay, error } = await c.from("payments").insert({ reference, external_customer_id: u.sub, account_email: email, product_id: p.id, provider: "paypal", method: "paypal", amount_minor: paypalMinor, currency: paypalCurrency, status: "pending", idempotency_key: idem }).select().single();
      if (error) {
        if (String(error.code) === "23505") {
          const { data: existing } = await c.from("payments").select("*").eq("idempotency_key", idem).eq("provider", "paypal").maybeSingle();
          if (existing?.provider_reference) return Response.json({ reference: existing.reference, orderId: existing.provider_reference, currency: String(existing.currency || paypalCurrency).toUpperCase(), amountMinor: Number(existing.amount_minor || 0), reused: true }, { headers: H });
        }
        throw error;
      }

      const rr = await fetch(`${pp.base}/v2/checkout/orders`, { method: "POST", headers: { Authorization: "Bearer " + pp.token, "Content-Type": "application/json", "PayPal-Request-Id": idem }, body: JSON.stringify({ intent: "CAPTURE", purchase_units: [{ reference_id: reference, custom_id: pay.id, description: String(p.name || "Avant Movies access").slice(0, 127), amount: { currency_code: paypalCurrency, value: (paypalMinor / 100).toFixed(2) } }] }) });
      const x = await rr.json().catch(() => ({}));
      if (!rr.ok || !x.id) {
        await c.from("payments").update({ status: "failed", failure_reason: "PayPal order creation failed" }).eq("id", pay.id);
        return Response.json({ error: x?.message || "Unable to create PayPal order", detail: x?.details?.[0]?.description || x?.name || "", debug_id: x?.debug_id || "" }, { status: 502, headers: H });
      }
      await c.from("payments").update({ status: "processing", provider_reference: x.id, updated_at: new Date().toISOString() }).eq("id", pay.id);
      return Response.json({ reference, orderId: x.id, currency: paypalCurrency, amountMinor: paypalMinor }, { headers: H });
    }

    if (action === "capture") {
      const orderId = String(body.orderId || "");
      const reference = String(body.reference || "");
      const { data: pay } = await c.from("payments").select("*").eq("reference", reference).eq("provider", "paypal").maybeSingle();
      if (!pay || pay.provider_reference !== orderId) return Response.json({ error: "Payment not found" }, { status: 404, headers: H });
      if (pay.status === "successful") return Response.json({ ok: true, reference, status: "successful", reused: true }, { headers: H });

      const rr = await fetch(`${pp.base}/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`, { method: "POST", headers: { Authorization: "Bearer " + pp.token, "Content-Type": "application/json", "PayPal-Request-Id": "capture-" + pay.id } });
      const x = await rr.json().catch(() => ({}));
      const cap = x?.purchase_units?.[0]?.payments?.captures?.[0];
      const status = String(cap?.status || x?.status || "").toUpperCase();
      const value = Number(cap?.amount?.value || 0);
      const currency = String(cap?.amount?.currency_code || "").toUpperCase();
      if (!rr.ok || status !== "COMPLETED" || Math.abs(Math.round(value * 100) - Number(pay.amount_minor)) > 1 || currency !== String(pay.currency).toUpperCase()) return Response.json({ error: "PayPal payment was not completed or amount did not match", status }, { status: 409, headers: H });

      const { error } = await c.rpc("settle_verified_payment", { p_payment_id: pay.id, p_provider_reference: String(cap?.id || orderId), p_provider_status: status, p_provider_event_id: "paypal:" + String(cap?.id || orderId), p_payload: x });
      if (error) throw error;
      return Response.json({ ok: true, reference, status: "successful" }, { headers: H });
    }

    return Response.json({ error: "unknown_action" }, { status: 400, headers: H });
  } catch (e) {
    const message = e instanceof Error ? e.message : "PayPal checkout failed";
    console.error("paypal-checkout", message, e);
    return Response.json({ error: message, detail: message, code: (e as any)?.code || "" }, { status: 500, headers: H });
  }
});