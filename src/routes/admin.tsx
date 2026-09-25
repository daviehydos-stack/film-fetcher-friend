import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ name: "robots", content: "noindex, nofollow, noarchive" }] }),
  component: () => (
    <main className="grid min-h-screen place-items-center bg-[#07090D] px-6 text-white">
      <section className="text-center">
        <h1 className="text-5xl font-black">404</h1>
        <p className="mt-3 text-sm text-white/55">Page not found.</p>
        <a href="/" className="mt-5 inline-flex rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold">Return home</a>
      </section>
    </main>
  ),
});