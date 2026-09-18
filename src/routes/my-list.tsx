import { createFileRoute } from "@tanstack/react-router";
import { StreamingShell } from "@/components/streaming/StreamingShell";

export const Route = createFileRoute("/my-list")({ component: MyListPage });
function MyListPage() {
  return <StreamingShell><main className="mx-auto min-h-[75vh] max-w-7xl px-5 pb-20 pt-32 sm:px-10 lg:px-14"><p className="text-xs font-semibold uppercase tracking-[.24em] text-primary">Your Avant</p><h1 className="mt-3 text-5xl font-black uppercase sm:text-6xl">My List</h1><div className="mt-12 rounded-xl border border-white/10 bg-white/[.03] px-6 py-16 text-center"><h2 className="text-xl font-bold">Your saved stories will live here.</h2><p className="mx-auto mt-3 max-w-lg text-muted-foreground">Save films and series while you browse. Account-backed syncing will connect here when the customer identity system is ready.</p></div></main></StreamingShell>;
}
