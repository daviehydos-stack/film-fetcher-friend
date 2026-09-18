import { createFileRoute, notFound } from "@tanstack/react-router";
import { TitleDetail } from "@/components/streaming/TitleDetail";
import { getTitle } from "@/lib/site-data";
import { publicPageLinks, publicPageMeta, titleSchema } from "@/lib/seo";

export const Route = createFileRoute("/title/$slug")({
  loader: ({ params }) => {
    const item = getTitle(params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const path = `/title/${loaderData.slug}`;
    const title = `${loaderData.title} — Avant Movies`;
    return {
      meta: publicPageMeta(path, title, loaderData.shortDescription, loaderData.backdrop, loaderData.type === "movie" ? "video.movie" : "video.tv_show"),
      links: publicPageLinks(path),
      scripts: [{ type: "application/ld+json", children: JSON.stringify(titleSchema(loaderData)) }],
    };
  },
  component: TitleRoute,
});

function TitleRoute() {
  return <TitleDetail item={Route.useLoaderData()} />;
}
