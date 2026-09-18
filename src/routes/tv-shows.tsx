import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { publicPageLinks, publicPageMeta } from "@/lib/seo";
export const Route = createFileRoute("/tv-shows")({ head: () => ({ meta: publicPageMeta("/tv-shows", "Kenyan TV Shows & Series — Avant Movies", "Discover Kenyan series and episodic stories from Avant Movies.", "https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_1834,h_1032,enc_auto/file.png"), links: publicPageLinks("/tv-shows") }), component: Page });
function Page() { return <CataloguePage type="series" title="TV Shows" intro="Original series and episodic stories from Avant." />; }
