import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
export const Route = createFileRoute("/movies")({ component: Page });
function Page() { return <CataloguePage type="movie" title="Movies" intro="Feature films from Avant — Kenyan stories made to stay with you." />; }
