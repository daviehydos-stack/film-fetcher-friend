import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { publicPageLinks, publicPageMeta } from "@/lib/seo";
export const Route = createFileRoute("/movies")({ head: () => ({ meta: publicPageMeta("/movies", "Kenyan Movies — Avant Movies", "Discover Kenyan feature films and independent cinema from Avant Movies.", "https://static.wixstatic.com/media/57086b_c12a5a80a97149a4a067d9857681e3e3~mv2.jpg/v1/fill/w_980,h_531,enc_auto/file.jpeg"), links: publicPageLinks("/movies") }), component: Page });
function Page() { return <CataloguePage type="movie" title="Movies" intro="Feature films from Avant — Kenyan stories made to stay with you." />; }
