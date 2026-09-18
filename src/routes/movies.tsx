import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { catalogue } from "@/lib/site-data";

export const Route = createFileRoute("/movies")({ component: MoviesPage });
function MoviesPage() {
  return <CataloguePage title="Movies" eyebrow="Avant Movies" description="Independent Kenyan films made to stay with you." items={catalogue.filter((item) => item.type === "movie")} />;
}
