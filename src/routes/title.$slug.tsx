import { createFileRoute, notFound } from "@tanstack/react-router";
import { TitleDetail } from "@/components/streaming/TitleDetail";
import { getTitle } from "@/lib/site-data";
export const Route = createFileRoute("/title/$slug")({
  loader: ({ params }) => {
    const item = getTitle(params.slug);
    if (!item) throw notFound();
    return item;
  },
  component: TitleRoute,
});
function TitleRoute() { return <TitleDetail item={Route.useLoaderData()} />; }
