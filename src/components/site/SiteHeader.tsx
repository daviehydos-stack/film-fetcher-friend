import { Link } from "@tanstack/react-router";
import { LogIn, LogOut, Menu, Search, UserRound, X } from "lucide-react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/streaming/BrandMark";
import { navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ADMIN_EMAIL, publicCatalogue, publicPages } from "@/lib/avant-backend";
import {\n  customerSession,\n  rememberedCustomer,\n  signInCustomer,\n  signOutCustomer,\n  watchCustomerSession,\n} from "@/lib/google-auth";

export function SiteHeader() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false),
    [admin, setAdmin] = useState(false),
    [customer, setCustomer] = useState<any>(null),
    [authReady, setAuthReady] = useState(false),
    [authBusy, setAuthBusy] = useState(false),
    [cmsNav, setCmsNav] = useState<any[]>([]),
    [appearance, setAppearance] = useState<any>({}),
    [langs, setLangs] = useState<any>(null),
    [lang, setLang] = useState(() =>
      typeof window !== "undefined" ? localStorage.getItem("avant-language") || "en" : "en",
    );
  useEffect(() => {
    void publicPages()
      .then((x) => setCmsNav(x?.pages || []))
      .catch(() => {});
    void publicCatalogue()
      .then((x) => {
        const s = x?.languageSettings || {
          defaultLanguage: "en",
          enabledLanguages: ["en"],
          showSelector: true,
        };
        setLangs(s);
        setAppearance(x?.appearance || {});
        if (!localStorage.getItem("avant-language")) setLang(s.defaultLanguage || "en");
      })
      .catch(() => {});
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("avant-language", lang);
  }, [lang]);
  useEffect(() => {
    let live = true;
    const sync = async () => {
      try {
        const user = await customerSession();
        if (!live) return;
        setCustomer(user);
        setAdmin(String(user?.email || "").toLowerCase() === ADMIN_EMAIL);
      } finally {
        if (live) setAuthReady(true);
      }
    };
    void sync();
    const unwatch = watchCustomerSession(() => void sync());
    return () => {
      live = false;
      unwatch();
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const p = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = p;
      window.removeEventListener("keydown", key);
    };
  }, [open]);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 16);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  async function login() {
    setAuthBusy(true);
    try {
      const user = await signInCustomer(rememberedCustomer()?.email);
      setCustomer(user);
      setAdmin(String(user?.email || "").toLowerCase() === ADMIN_EMAIL);
    } finally {
      setAuthBusy(false);
    }
  }
  async function logout() {
    setAuthBusy(true);
    try {
      await signOutCustomer();
      setCustomer(null);
      setAdmin(false);
    } finally {
      setAuthBusy(false);
    }
  }
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-white transition-all duration-300",
        scrolled || open
          ? "border-b border-white/[.07] bg-[#050608]/88 shadow-[0_14px_40px_rgba(0,0,0,.28)] backdrop-blur-2xl"
          : "bg-gradient-to-b from-black/90 via-black/48 to-transparent",
      )}
    >
      <div className="mx-auto flex h-[64px] w-full min-w-0 max-w-[1800px] items-center gap-2 px-3 sm:h-[72px] sm:gap-7 sm:px-10 lg:px-14">
        <Link to="/" aria-label="Avant Movies home" className="min-w-0 shrink">
          {appearance?.branding?.logoUrl ? (
            <img
              src={appearance.branding.logoUrl}
              alt={appearance.siteName || "Avant Movies"}
              className="max-h-9 w-auto max-w-[9rem] object-contain sm:max-h-10 sm:max-w-44"
            />
          ) : (
            <BrandMark />
          )}
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {[
            ...navLinks,
            ...cmsNav
              .filter((p: any) => !navLinks.some((n) => n.to === "/" + p.slug))
              .map((p: any) => ({ to: "/" + p.slug, label: p.navigation_label || p.title })),
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/68 transition hover:bg-white/[.06] hover:text-white"
              activeProps={{ className: "bg-white/[.09] text-white hover:bg-white/[.13]" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex min-w-0 shrink-0 items-center gap-1 sm:gap-2">
          {langs?.showSelector !== false && (langs?.enabledLanguages || []).length > 1 ? (
            <select
              aria-label="Website language"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="hidden rounded-full border border-white/10 bg-black/30 px-3 py-2 text-xs font-semibold text-white md:block"
            >
              {(langs.enabledLanguages || []).map((id: string) => (
                <option key={id} value={id}>
                  {id === "en"
                    ? "English"
                    : id === "sw"
                      ? "Kiswahili"
                      : id === "fr"
                        ? "Français"
                        : id.toUpperCase()}
                </option>
              ))}
            </select>
          ) : null}
          {appearance?.header?.showSearch !== false ? (
            <Link
              to="/search"
              className="grid size-10 shrink-0 place-items-center rounded-full border border-transparent transition hover:border-white/10 hover:bg-white/10"
              aria-label="Search"
            >
              <Search className="size-5" />
            </Link>
          ) : null}
          {admin ? (
            <Link
              to="/admin"
              className="hidden rounded-full px-3 py-2 text-xs font-semibold text-orange-300 hover:bg-orange-400/10 lg:block"
            >
              Admin
            </Link>
          ) : null}
          {!authReady ? (
            <span
              className="hidden h-10 w-36 rounded-full bg-white/[.04] sm:block"
              aria-hidden="true"
            />
          ) : customer ? (
            <>
              <Link
                to="/account"
                aria-label="Account"
                className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[.06] py-1.5 pl-2 pr-3 sm:flex"
              >
                {customer.photoURL ? (
                  <img
                    src={customer.photoURL}
                    alt=""
                    className="size-7 rounded-full object-cover"
                  />
                ) : (
                  <span className="grid size-7 place-items-center rounded-full bg-orange-400/20">
                    <UserRound className="size-4" />
                  </span>
                )}
                <span className="max-w-28 truncate text-xs font-bold">
                  {customer.name || customer.email}
                </span>
              </Link>
              <button
                onClick={() => void logout()}
                disabled={authBusy}
                className="hidden size-10 place-items-center rounded-full hover:bg-white/10 sm:grid"
                aria-label="Sign out"
              >
                <LogOut className="size-4" />
              </button>
            </>
          ) : (
            <button
              onClick={() => void login()}
              disabled={authBusy}
              className="hidden min-h-10 items-center gap-2 rounded-full bg-white px-5 text-sm font-black text-black shadow-lg transition hover:scale-[1.02] hover:bg-white/90 sm:inline-flex"
            >
              <LogIn className="size-4" />
              {authBusy ? "Signing in…" : "Sign in"}
            </button>
          )}
          <button
            className="grid size-10 shrink-0 place-items-center rounded-full hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open ? (
        <nav className="max-h-[calc(100dvh-64px)] overflow-y-auto overscroll-contain border-t border-white/10 bg-[#07080a] px-3 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 shadow-2xl md:hidden sm:px-5 sm:py-4">
          {[
            ...navLinks,
            ...cmsNav
              .filter((p: any) => !navLinks.some((n) => n.to === "/" + p.slug))
              .map((p: any) => ({ to: "/" + p.slug, label: p.navigation_label || p.title })),
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-3 text-base font-semibold hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
          {!authReady ? (
            <div className="h-12" />
          ) : customer ? (
            <button
              onClick={() => void logout()}
              className="flex min-h-12 w-full items-center gap-3 rounded-xl px-3 text-left font-semibold hover:bg-white/5"
            >
              <LogOut className="size-5" />
              Sign out
            </button>
          ) : (
            <button
              onClick={() => void login()}
              className="mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-4 font-black text-black"
            >
              <LogIn className="size-5" />
              Sign in with Google
            </button>
          )}
          {admin ? (
            <Link
              to="/admin"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center rounded-xl px-3 font-semibold text-orange-300"
            >
              Admin
            </Link>
          ) : null}
        </nav>
      ) : null}
    </header>
  );
}
