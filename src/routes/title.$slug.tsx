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
      { property: "og:site_name", content: "Avant Cinema" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${loaderData.title} — Avant Movies` },
      { name: "twitter:description", content: loaderData.shortDescription },
      { name: "twitter:image", content: loaderData.backdrop },
    ] : [],
  }),
  component: TitleRoute,
});

function TitleRoute() {
  return <TitleDetail item={Route.useLoaderData()} />;
}
