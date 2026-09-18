import { createFileRoute } from "@tanstack/react-router";
import { StreamingShell } from "@/components/streaming/StreamingShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy — Avant Movies" }, { name: "description", content: "Privacy information for the Avant Movies streaming service." }] }),
  component: Page,
});

function Page() {
  return <StreamingShell><main className="mx-auto min-h-[70vh] max-w-4xl px-5 pb-24 pt-28 sm:px-10 sm:pt-32"><p className="eyebrow">Legal</p><h1 className="mt-4 text-4xl font-black sm:text-6xl">Privacy</h1><div className="mt-8 rounded-lg border border-white/10 bg-surface p-6 sm:p-8"><p className="leading-7 text-muted-foreground">Avant Movies will use customer information only for operating the streaming service, access, support and payments. The production privacy policy should be reviewed and approved before launch.</p></div></main></StreamingShell>;
}