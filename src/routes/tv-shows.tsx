import { createFileRoute } from "@tanstack/react-router";
import { CataloguePage } from "@/components/streaming/CataloguePage";
export const Route = createFileRoute("/tv-shows")({ component: Page });
function Page() { return <CataloguePage type="series" title="TV Shows" intro="Original series and episodic stories from Avant." />; }
