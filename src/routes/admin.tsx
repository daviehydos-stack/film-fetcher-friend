import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin — Avant Cinema" }, { name: "robots", content: "noindex, nofollow, noarchive" }] }),
  beforeLoad: () => { throw redirect({ to: "/studio-vault-7k9" }); },
});
