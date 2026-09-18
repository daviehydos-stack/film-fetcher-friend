import { createFileRoute } from "@tanstack/react-router";
import { StreamingShell } from "@/components/streaming/StreamingShell";
export const Route = createFileRoute("/my-list")({ component: MyList });
function MyList() { return <StreamingShell><main className="mx-auto min-h-[70vh] max-w-[1500px] px-5 pb-20 pt-28 sm:px-10 lg:px-14"><p className="eyebrow">Your collection</p><h1 className="mt-3 text-4xl font-black sm:text-6xl">My List</h1><div className="mt-10 max-w-xl rounded-lg border border-white/10 bg-surface p-8"><h2 className="text-xl font-bold">Nothing here yet</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Save movies and shows you want to come back to. Account-backed My List will connect here when the customer backend is ready.</p></div></main></StreamingShell>; }
