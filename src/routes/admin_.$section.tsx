import { createFileRoute } from "@tanstack/react-router";
import { AdminPage } from "./admin";

export const Route = createFileRoute("/admin/$section")({
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow" }] }),
  beforeLoad: ({ params }) => { if (params.section === "assistant") throw new Error("removed_admin_section") },
  component: AdminPage,
  errorComponent: () => (
    <main className="grid min-h-screen place-items-center bg-[#07090D] px-6 text-white">
      <section className="max-w-md text-center">
        <h1 className="text-2xl font-semibold">Avant Admin</h1>
        <p className="mt-3 text-sm text-white/55">This admin section could not be opened safely.</p>
        <a href="/admin" className="mt-5 inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-black">Return to Dashboard</a>
      </section>
    </main>
  ),
});
