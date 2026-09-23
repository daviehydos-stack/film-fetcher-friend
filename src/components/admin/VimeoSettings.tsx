import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  Eye,
  EyeOff,
  Plug,
  RefreshCw,
  Save,
  Unplug,
  Video,
} from "lucide-react";
import {
  adminVimeoGet,
  adminVimeoSave,
  adminVimeoDisconnect,
  adminVimeoVideos,
  getAdminToken,
} from "@/lib/avant-backend";
export default function VimeoSettings() {
  const [clientId, setClientId] = useState(""),
    [clientSecret, setClientSecret] = useState(""),
    [accessToken, setAccessToken] = useState(""),
    [saved, setSaved] = useState<any>(null),
    [busy, setBusy] = useState(false),
    [note, setNote] = useState(""),
    [showSecret, setShowSecret] = useState(false),
    [showToken, setShowToken] = useState(false),
    [videos, setVideos] = useState<any[]>([]),
    [videoBusy, setVideoBusy] = useState(false),
    [replaceMode, setReplaceMode] = useState(false);
  async function load() {
    const t = getAdminToken();
    if (!t) return;
    try {
      const r = await adminVimeoGet(t);
      const v = r?.vimeo || { configured: false, connected: false };
      setSaved(v);
      setClientId(v.connected ? v.clientId || "" : "");
      if (!v.connected) {
        setClientSecret("");
        setAccessToken("");
        setVideos([]);
      }
    } catch (e: any) {
      setSaved({ configured: false, connected: false });
      setNote(e.message || "Could not load Vimeo settings");
    }
  }
  useEffect(() => {
    void load();
  }, []);
  async function action(testOnly = false) {
    const t = getAdminToken();
    if (!t) return;
    setBusy(true);
    setNote("");
    try {
      const r = await adminVimeoSave(t, { clientId, clientSecret, accessToken, testOnly });
      setNote(
        testOnly
          ? `Connection successful — ${r.account?.name || "Vimeo account"}`
          : "Vimeo connected and configuration saved.",
      );
      if (!testOnly) {
        setClientSecret("");
        setAccessToken("");
        await load();
      }
    } catch (e: any) {
      setNote(e.message || "Vimeo connection failed");
    } finally {
      setBusy(false);
    }
  }
  async function disconnect(replace = false) {
    if (
      !confirm(
        replace ? "Replace the connected Vimeo account? The current Vimeo credentials will be permanently removed from Avant, then you can enter the new account credentials." : "Disconnect Vimeo from Avant Movies? Saved Vimeo credentials will be permanently removed from Avant.",
      )
    )
      return;
    const t = getAdminToken();
    if (!t) return;
    setBusy(true);
    setNote("");
    try {
      await adminVimeoDisconnect(t, replace ? "replace" : "disconnect");
      setSaved({ configured: false, connected: false });
      setClientId("");
      setClientSecret("");
      setAccessToken("");
      setVideos([]);
      setReplaceMode(replace);
      await load();
      setNote(replace ? "Previous Vimeo credentials removed. Enter the new account credentials below." : "Vimeo disconnected. Saved Vimeo credentials were removed from Avant.");
    } catch (e: any) {
      setNote(e.message || "Could not disconnect Vimeo");
    } finally {
      setBusy(false);
    }
  }
  async function checkLibrary() {
    const t = getAdminToken();
    if (!t) return;
    setVideoBusy(true);
    setNote("");
    try {
      const r = await adminVimeoVideos(t, "");
      setVideos(r.videos || []);
      setNote(
        `✓ Vimeo library is ready — ${r.total ?? r.videos?.length ?? 0} video${(r.total ?? r.videos?.length ?? 0) === 1 ? "" : "s"} available.`,
      );
    } catch (e: any) {
      setNote(e.message || "Could not load Vimeo library");
    } finally {
      setVideoBusy(false);
    }
  }
  const needsToken = !saved?.configured;
  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-white/10 bg-white/[.025] p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex gap-3">
            <div className="grid size-10 place-items-center rounded-lg bg-white/10">
              <Video className="size-5" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-orange-300">
                Video integration
              </p>
              <h3 className="mt-1 text-xl font-semibold">Vimeo</h3>
              <p className="mt-1 text-sm text-white/45">
                Connect, replace or disconnect the Vimeo account used to host Avant Movies videos. Credentials belong to the currently connected account, not to a specific administrator.
              </p>
            </div>
          </div>
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${saved?.connected ? "bg-emerald-400/10 text-emerald-300" : "bg-white/10 text-white/50"}`}
          >
            {saved?.connected ? "Connected" : "Not connected"}
          </span>
        </div>
        {replaceMode&&!saved?.connected?<div className="mt-5 rounded-lg border border-orange-300/20 bg-orange-300/[.05] p-4 text-sm text-orange-100"><b>Ready for a new Vimeo account.</b><p className="mt-1 text-xs leading-5 text-white/45">The previous credentials are no longer stored in Avant. Paste this administrator’s Vimeo credentials below, test the connection, then Save & connect.</p></div>:null}
        {saved?.connected ? (
          <div className="mt-5 rounded-lg border border-emerald-400/15 bg-emerald-400/[.05] p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-emerald-300">
              <CheckCircle2 className="size-4" />
              Connected to {saved.accountName || "Vimeo"}
            </div>
            {saved.lastTestedAt ? (
              <p className="mt-1 text-xs text-white/40">
                Last verified {new Date(saved.lastTestedAt).toLocaleString()}
              </p>
            ) : null}
          </div>
        ) : null}
        <div className="mt-6 grid gap-4">
          <label className="text-sm text-white/55">
            Client ID
            <input
              value={clientId}
              onChange={(e) => setClientId(e.target.value)}
              placeholder="Paste Vimeo Client ID"
              className="mt-2 w-full rounded-lg border border-white/10 bg-[#111318] px-3 py-3 text-white outline-none focus:border-white/30"
            />
          </label>
          <SecretField
            label="Client Secret"
            value={clientSecret}
            setValue={setClientSecret}
            visible={showSecret}
            setVisible={setShowSecret}
            placeholder={saved?.clientSecretMasked || "Paste Vimeo Client Secret"}
          />
          <SecretField
            label="Access Token"
            value={accessToken}
            setValue={setAccessToken}
            visible={showToken}
            setVisible={setShowToken}
            placeholder={saved?.accessTokenMasked || "Paste Vimeo Personal Access Token"}
          />
        </div>
        <p className="mt-3 text-xs leading-5 text-white/35">
          {saved?.configured
            ? "Leave Client Secret or Access Token blank to keep the currently saved value."
            : "Credentials are sent to the protected Avant backend and are never written into the website source code."}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            disabled={busy || (needsToken && !accessToken)}
            onClick={() => void action(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold disabled:opacity-40"
          >
            <Plug className="size-4" />
            {busy ? "Checking…" : "Test connection"}
          </button>
          <button
            disabled={busy || (needsToken && !accessToken)}
            onClick={() => void action(false)}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-black disabled:opacity-40"
          >
            <Save className="size-4" />
            Save & connect
          </button>
          {saved?.configured ? (<><button disabled={busy} onClick={() => void disconnect(true)} className="inline-flex items-center gap-2 rounded-lg border border-orange-300/25 px-4 py-2.5 text-sm font-semibold text-orange-200"><RefreshCw className="size-4" />Replace account</button><button disabled={busy} onClick={() => void disconnect(false)} className="inline-flex items-center gap-2 rounded-lg border border-red-400/20 px-4 py-2.5 text-sm font-semibold text-red-200"><Unplug className="size-4" />Disconnect & remove credentials</button></>) : null}
        </div>
        {note ? (
          <p className="mt-4 rounded-lg border border-white/10 bg-black/20 p-3 text-sm text-white/65">
            {note}
          </p>
        ) : null}
      </section>
      {saved?.connected ? (
        <section className="rounded-xl border border-white/10 bg-white/[.025] p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.16em] text-emerald-300">
                Ready for content
              </p>
              <h3 className="mt-1 text-lg font-semibold">Vimeo library</h3>
              <p className="mt-1 text-sm text-white/45">
                Confirm Avant can browse this account and identify videos suitable for subscriber playback.
              </p>
            </div>
            <button
              disabled={videoBusy}
              onClick={() => void checkLibrary()}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold"
            >
              <RefreshCw className={`size-4 ${videoBusy ? "animate-spin" : ""}`} />
              {videoBusy ? "Loading…" : "Check video library"}
            </button>
          </div>
          {videos.length ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v) => (
                <div
                  key={v.id}
                  className="overflow-hidden rounded-lg border border-white/10 bg-black/20"
                >
                  {v.thumbnail ? (
                    <img src={v.thumbnail} alt="" className="aspect-video w-full object-cover" />
                  ) : null}
                  <div className="p-3">
                    <p className="truncate text-sm font-semibold">{v.name}</p>
                    <p className="mt-1 text-xs text-white/35">
                      {Math.floor((v.duration || 0) / 60)} min · {v.privacy || "privacy unknown"}
                    </p>
                    <p
                      className={`mt-1 text-[11px] font-semibold ${v.recommendedForPremium ? "text-emerald-300" : v.playable ? "text-amber-200" : "text-red-300"}`}
                    >
                      {v.embedHealth==="ready"
                        ? "Ready on Avant production site"
                        : v.embedHealth==="domain_restricted"
                          ? "Embed blocked · allow daviehydos-stack.github.io in Vimeo"
                          : v.recommendedForPremium
                            ? "Playable · verify embed domain"
                            : v.playable
                              ? "Playable · review privacy"
                              : "Not ready for playback"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          <p className="mt-4 text-xs text-white/35">
            To assign one: Movies & TV → open a series → season → episode → Choose from Vimeo. The
            picker fills the Vimeo ID, thumbnail and duration for you.
          </p>
        </section>
      ) : null}
      <section className="rounded-xl border border-white/10 bg-white/[.025] p-6">
        <p className="text-xs font-bold uppercase tracking-[.16em] text-white/35">Setup guide</p>
        <h3 className="mt-1 text-lg font-semibold">How to get Vimeo credentials</h3>
        <ol className="mt-4 space-y-3 text-sm leading-6 text-white/55">
          <li>
            <b className="text-white">1.</b> Sign in to Vimeo and open the Developer Apps page.
          </li>
          <li>
            <b className="text-white">2.</b> Create an app for Avant Movies, or open the existing
            Avant Movies app.
          </li>
          <li>
            <b className="text-white">3.</b> Copy the Client ID and Client Secret from the app
            authentication page.
          </li>
          <li>
            <b className="text-white">4.</b> Generate a personal access token with only the
            permissions Avant Movies needs. Add upload/edit permissions only if you want uploads
            managed from this admin.
          </li>
          <li>
            <b className="text-white">5.</b> Paste the credentials above, click{" "}
            <b className="text-white">Test connection</b>, then{" "}
            <b className="text-white">Save & connect</b>.
          </li>
        </ol>
        <a
          href="https://developer.vimeo.com/apps"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200"
        >
          Open Vimeo Developer Apps <ExternalLink className="size-4" />
        </a>
      </section>
    </div>
  );
}
function SecretField({ label, value, setValue, visible, setVisible, placeholder }: any) {
  return (
    <label className="text-sm text-white/55">
      {label}
      <div className="relative mt-2">
        <input
          type={visible ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className="w-full rounded-lg border border-white/10 bg-[#111318] px-3 py-3 pr-12 text-white outline-none placeholder:text-white/25 focus:border-white/30"
        />
        <button
          type="button"
          onClick={() => setVisible((x: boolean) => !x)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/35 hover:text-white"
          aria-label={visible ? "Hide credential" : "Show credential"}
        >
          {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
        </button>
      </div>
    </label>
  );
}
