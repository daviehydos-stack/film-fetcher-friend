import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { publicPageLinks, publicPageMeta } from "@/lib/seo";
export const Route = createFileRoute("/movies")({ head: () => ({ meta: publicPageMeta("/movies", "Kenyan Movies — Avant Movies", "Discover Kenyan feature films and independent cinema from Avant Movies."), links: publicPageLinks("/movies") }), component: Page });
function Page() { return <CataloguePage type="movie" title="Movies" intro="Feature films from Avant — Kenyan stories made to stay with you." />; }
