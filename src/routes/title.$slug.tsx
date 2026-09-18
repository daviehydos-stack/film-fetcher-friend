import { createFileRoute, notFound } from "@tanstack/react-router";
import { TitleDetail } from "@/components/streaming/TitleDetail";
import { getTitle } from "@/lib/site-data";

export const Route = createFileRoute("/title/$slug")({
  component: TitlePage,
});

function TitlePage() {
  const { slug } = Route.useParams();
  const item = getTitle(slug);
  if (!item) throw notFound();
  return <TitleDetail item={item} />;
}
