import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
import { catalogue } from "@/lib/site-data";
export const Route = createFileRoute("/tv-shows")({ component: TvShows });
function TvShows() { return <CataloguePage eyebrow="Avant Movies" title="TV Shows" description="Original series and episodic stories from Avant." items={catalogue.filter((item) => item.type === "series")} />; }
