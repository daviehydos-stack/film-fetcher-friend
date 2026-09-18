import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { publicPageLinks, publicPageMeta } from "@/lib/seo";
export const Route = createFileRoute("/tv-shows")({ head: () => ({ meta: publicPageMeta("/tv-shows", "Kenyan TV Shows & Series — Avant Movies", "Discover Kenyan series and episodic stories from Avant Movies."), links: publicPageLinks("/tv-shows") }), component: Page });
function Page() { return <CataloguePage type="series" title="TV Shows" intro="Original series and episodic stories from Avant." />; }
