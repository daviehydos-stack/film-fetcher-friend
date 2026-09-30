import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { publicPageLinks, publicPageMeta } from "@/lib/seo";

export const Route = createFileRoute("/watch-free")({
  head: () => ({
    meta: publicPageMeta("/watch-free", "Watch Free Kenyan Films & Short Films Online — Avant Cinema", "Stream free Kenyan films and short films on Avant Cinema, including Granted and Relationship Goals. No payment, no sign-up needed to start watching.", "https://static.wixstatic.com/media/57086b_f94334c3e6d24692a3c297230928ed11~mv2.jpg/v1/fill/w_1920,h_1080,q_90,enc_auto/file.jpeg"),
    links: publicPageLinks("/watch-free"),
  }),
  component: WatchFreePage,
});

function WatchFreePage() {
  return <CataloguePage mode="free" title="Watch for Free" intro="Open-access films and episodes, selected from the Avant catalogue." />;
}