import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { publicPageLinks, publicPageMeta } from "@/lib/seo";

export const Route = createFileRoute("/watch-free")({
  head: () => ({
    meta: publicPageMeta("/watch-free", "Watch Free African Films & Series — Avant Movies", "Watch selected African short films, movies and episodes free on Avant Movies."),
    links: publicPageLinks("/watch-free"),
  }),
  component: WatchFreePage,
});

function WatchFreePage() {
  return <CataloguePage mode="free" title="Watch for Free" intro="Open-access films and episodes, selected from the Avant catalogue." />;
}