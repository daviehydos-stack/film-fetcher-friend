import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
export const Route = createFileRoute("/movies")({ head: () => ({ meta: [{ title: "Movies — Avant Movies" }, { name: "description", content: "Discover feature films from Avant Movies." }] }), component: Page });
function Page() { return <CataloguePage type="movie" title="Movies" intro="Feature films from Avant — Kenyan stories made to stay with you." />; }
