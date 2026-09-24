import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";
import { customerUser } from "./customer-auth.ts";

const H = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, apikey, content-type, x-avant-guest",
  "Cache-Control": "no-store",
};

function db() {
  const k = JSON.parse(Deno.env.get("SUPABASE_SECRET_KEYS") || "{}");
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    k.default || Deno.env.get("SUPABASE_SERVICE_ROLE_KEY"),
    { auth: { persistSession: false } },
  );
}

Deno.serve(async (r) => {
  if (r.method === "OPTIONS")
    return new Response("ok", { headers: H });

  try {
    let u: any = null;
    try {
      u = await customerUser(r);
    } catch {
      u = null;
    }

    const body = await r.json().catch(() => ({}));
    const { contentId } = body;

    if (!contentId)
      return Response.json(
        { error: "contentId is required" },
        { status: 400, headers: H },
      );

    const c = db();
    const now = new Date().toISOString();

    let resolvedId = contentId,
      episode: any = null,
      season: any = null,
      title: any = null;

    const { data: ep } = await c
      .from("episodes")
      .select(
        "id,season_id,title,vimeo_video_id,youtube_video_id,access_required,status",
      )
      .or(`id.eq.${contentId},legacy_key.eq.${contentId}`)
      .maybeSingle();

    episode = ep;

    if (episode) {
      if (episode.status !== "published")
        return Response.json(
          { authorized: false, reason: "content_unavailable" },
          { status: 200, headers: H },
        );

      const sr = await c
        .from("seasons")
        .select("id,series_id,status")
        .eq("id", episode.season_id)
        .maybeSingle();

      season = sr.data;

      if (!season || season.status !== "published")
        return Response.json(
          { authorized: false, reason: "content_unavailable" },
          { status: 200, headers: H },
        );

      const tr = await c
        .from("catalogue_titles")
        .select("id,slug,status,visible_from,visible_until")
        .eq("id", season.series_id)
        .maybeSingle();

      title = tr.data;
      resolvedId = episode.id;
    } else {
      const movieKey = String(contentId).replace(/-1$/, "");

      const tr = await c
        .from("catalogue_titles")
        .select("id,slug,status,visible_from,visible_until,content_type")
        .or(`slug.eq.${movieKey},legacy_key.eq.${movieKey}`)
        .maybeSingle();

      title = tr.data;

      if (title) resolvedId = title.id;
    }

    if (
      title &&
      (title.status !== "published" ||
        (title.visible_from && title.visible_from > now) ||
        (title.visible_until && title.visible_until < now))
    )
      return Response.json(
          { authorized: false, reason: "content_unavailable" },
          { status: 200, headers: H },
        );

    if (!episode && !title)
      return Response.json(
          { authorized: false, reason: "content_unavailable" },
          { status: 200, headers: H },
        );

    let vq = c
      .from("video_variants")
      .select("id,label,provider,provider_video_id,display_order")
      .eq("active", true)
      .eq("is_published", true)
      .order("display_order", { ascending: true });

    vq = episode
      ? vq.eq("episode_id", resolvedId)
      : vq.eq("title_id", resolvedId);

    const { data: variants, error: ve } = await vq;

    // Vimeo is the only supported playback provider. Ignore stale YouTube variants.
    const variant = (variants || []).find((v: any) => v.provider === "vimeo") || null;

    if (ve)
      return Response.json(
        { authorized: false, reason: "playback_configuration_error" },
        { status: 500, headers: H },
      );

    let pq = c
      .from("content_playback")
      .select(
        "content_id,season_id,vimeo_video_id,youtube_video_id,video_source,title,episode_id,active",
      )
      .eq("active", true);

    pq = episode
      ? pq.eq("episode_id", resolvedId)
      : pq.eq("content_id", resolvedId);

    const { data: legacy, error: pe } = await pq.maybeSingle();

    if (pe)
      return Response.json(
        { authorized: false, reason: "playback_configuration_error" },
        { status: 500, headers: H },
      );

    const p = variant
      ? {
          content_id: resolvedId,
          season_id: legacy?.season_id || season?.id || null,
          episode_id: episode?.id || null,
          title: legacy?.title || episode?.title || title?.slug || "",
          video_source: variant.provider,
          vimeo_video_id:
            variant.provider === "vimeo"
              ? variant.provider_video_id
              : null,
          youtube_video_id:
            variant.provider === "youtube"
              ? variant.provider_video_id
              : null,
        }
      : legacy;

    // Episodes already carry the canonical Vimeo id. Use it when older
    // content_playback/video_variants rows are empty or still contain legacy YouTube data.
    if (episode?.vimeo_video_id && (!p?.vimeo_video_id || p?.video_source === "youtube")) {
      p = {
        ...(p || {}),
        content_id: resolvedId,
        season_id: p?.season_id || season?.id || null,
        episode_id: episode.id,
        title: p?.title || episode.title || title?.slug || "",
        video_source: "vimeo",
        vimeo_video_id: episode.vimeo_video_id,
        youtube_video_id: null,
      };
    }

    if (!p || !p.vimeo_video_id)
      return Response.json(
          { authorized: false, reason: "content_unavailable" },
          { status: 200, headers: H },
        );

    const source = "vimeo";

    const makeEmbed = (start = 0) =>
      `https://player.vimeo.com/video/${p.vimeo_video_id}?dnt=1&title=0&byline=0&portrait=0&badge=0&controls=0&autoplay=1&playsinline=1#t=${start}s`;

    const availableVariants = (variants || []).map((v: any) => ({
      id: v.id,
      label: v.label,
      provider: v.provider,
      providerVideoId: v.provider_video_id,
      displayOrder: v.display_order,
    }));

    if (
      episode?.access_required === false ||
      (!episode &&
        ["relationship-goals", "granted"].includes(title?.slug))
    )
      return Response.json(
        {
          authorized: true,
          public: true,
          content: {
            id: resolvedId,
            legacyId: contentId,
            title: p.title,
            videoSource: source,
            vimeoVideoId: p.vimeo_video_id,
            youtubeVideoId: p.youtube_video_id,
            embedUrl: makeEmbed(),
            variants: availableVariants,
          },
          progress: null,
        },
        { headers: H },
      );

    if (!u?.sub)
      return Response.json(
        { authorized: false, reason: "payment_required" },
        { status: 403, headers: H },
      );

    const { data: hasAccess, error: accessError } = await c.rpc(
      "customer_has_access",
      {
        p_external_customer_id: u.sub,
        p_content_id: resolvedId,
        p_season_id: p.season_id || season?.id || null,
      },
    );

    if (accessError)
      return Response.json(
        { authorized: false, reason: "authorization_failed" },
        { status: 500, headers: H },
      );

    if (!hasAccess)
      return Response.json(
        { authorized: false, reason: "payment_required" },
        { status: 403, headers: H },
      );

    const { data: g } = await c
      .from("watch_progress")
      .select(
        "progress_seconds,duration_seconds,completed,last_watched_at",
      )
      .eq("external_customer_id", u.sub)
      .eq("content_id", resolvedId)
      .maybeSingle();

    const startAt = Math.max(0, g?.progress_seconds || 0);

    return Response.json(
      {
        authorized: true,
        content: {
          id: resolvedId,
          legacyId: contentId,
          title: p.title,
          videoSource: source,
          vimeoVideoId: p.vimeo_video_id,
          youtubeVideoId: p.youtube_video_id,
          embedUrl: makeEmbed(startAt),
          variants: availableVariants,
        },
        progress: g || null,
      },
      { headers: H },
    );
  } catch (e) {
    const message =
      e instanceof Error ? e.message : "Playback resolution failed";

    console.error("resolve-playback", message, e);

    return Response.json(
      { authorized: false, reason: "authorization_failed", detail: message },
      { status: 500, headers: H },
    );
  }
});