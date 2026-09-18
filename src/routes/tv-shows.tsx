import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
export const Route = createFileRoute("/tv-shows")({ head: () => ({ meta: [{ title: "TV Shows — Avant Movies" }, { name: "description", content: "Discover original series and episodic stories from Avant Movies." }] }), component: Page });
function Page() { return <CataloguePage type="series" title="TV Shows" intro="Original series and episodic stories from Avant." />; }
