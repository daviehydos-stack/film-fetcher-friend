import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { catalogue } from "@/lib/site-data";
export const Route = createFileRoute("/movies")({ component: Movies });
function Movies() { return <CataloguePage eyebrow="Avant Movies" title="Movies" description="Feature films from Avant — Kenyan stories made to stay with you." items={catalogue.filter((item) => item.type === "movie")} />; }
