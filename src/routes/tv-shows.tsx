import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { catalogue } from "@/lib/site-data";

export const Route = createFileRoute("/tv-shows")({ component: ShowsPage });
function ShowsPage() {
  return <CataloguePage title="TV Shows" eyebrow="Avant Series" description="Binge-worthy Kenyan stories, one episode at a time." items={catalogue.filter((item) => item.type === "series")} />;
}
