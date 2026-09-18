import { createFileRoute, notFound } from "@tanstack/react-router";
import { TitleDetail } from "@/components/streaming/TitleDetail";
import { getTitle } from "@/lib/site-data";

export const Route = createFileRoute("/title/$slug")({
  loader: ({ params }) => {
    const item = getTitle(params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.title} — Avant Movies` },
      { name: "description", content: loaderData.shortDescription },
      { property: "og:title", content: `${loaderData.title} — Avant Movies` },
      { property: "og:description", content: loaderData.shortDescription },
      { property: "og:image", content: loaderData.backdrop },
      { property: "og:type", content: loaderData.type === "movie" ? "video.movie" : "video.tv_show" },
    ] : [],
  }),
  component: TitleRoute,
});

function TitleRoute() {
  return <TitleDetail item={Route.useLoaderData()} />;
}
