import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import { StreamingShell } from "@/components/streaming/StreamingShell";
import { WHATSAPP } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — Avant Movies" }, { name: "description", content: "Contact Avant Movies about productions, streaming access and support." }] }),
  component: Page,
});

function Page() {
  return <StreamingShell><main className="mx-auto min-h-[70vh] max-w-5xl px-5 pb-24 pt-32 sm:px-10"><p className="eyebrow">Avant Movies</p><h1 className="mt-4 text-5xl font-black sm:text-7xl">Contact</h1><p className="mt-5 max-w-xl text-muted-foreground">Questions about Avant, streaming access or our productions? Reach the team through the official channels below.</p><div className="mt-10 grid gap-4 sm:grid-cols-2"><a href="mailto:business@avantcinema.com" className="rounded-lg border border-white/10 bg-surface p-6 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><Mail/><p className="mt-5 font-bold">Email</p><p className="mt-1 text-sm text-muted-foreground">business@avantcinema.com</p></a><a href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}`} target="_blank" rel="noreferrer" className="rounded-lg border border-white/10 bg-surface p-6 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"><MessageCircle/><p className="mt-5 font-bold">WhatsApp</p><p className="mt-1 text-sm text-muted-foreground">{WHATSAPP}</p></a></div></main></StreamingShell>;
}