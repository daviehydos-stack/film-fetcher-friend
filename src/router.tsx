import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const pagesBase = import.meta.env.BASE_URL === "/film-fetcher-friend/"
  ? "/film-fetcher-friend"
  : "/";

export const getRouter = () => {
  const queryClient = new QueryClient({defaultOptions:{queries:{staleTime:60_000,gcTime:30*60_000,refetchOnWindowFocus:false,refetchOnReconnect:false,retry:1}}});

  const router = createRouter({
    routeTree,
    context: { queryClient },
    basepath: pagesBase,
    scrollRestoration: true,
    defaultPreload: "intent",
    defaultPreloadDelay: 120,
    defaultPreloadStaleTime: 5 * 60_000,
  });

  return router;
};
