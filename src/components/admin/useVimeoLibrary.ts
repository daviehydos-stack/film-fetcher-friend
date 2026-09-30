import { useCallback, useEffect, useRef, useState } from "react";
import { adminVimeoVideos, VimeoLibraryError } from "@/lib/avant-backend";

/**
 * Shared, non-blocking Vimeo library loader for every admin picker.
 * - Loads one page (50) at a time and appends with "Load more".
 * - Server-side search, stale requests are cancelled.
 * - Failures are classified (timeout / not connected / session ...) and never throw into the page.
 */
export function useVimeoLibrary(token: string, { auto = true }: { auto?: boolean } = {}) {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<VimeoLibraryError | null>(null);
  const [query, setQuery] = useState("");
  const [hasMore, setHasMore] = useState(false);
  const [total, setTotal] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const page = useRef(1);
  const run = useRef(0);
  const ctl = useRef<AbortController | null>(null);
  const live = useRef(true);

  useEffect(() => {
    live.current = true;
    return () => {
      live.current = false;
      ctl.current?.abort();
    };
  }, []);

  const fetchPage = useCallback(
    async (q: string, p: number, append: boolean) => {
      if (!token) return;
      ctl.current?.abort();
      const controller = new AbortController();
      ctl.current = controller;
      const id = ++run.current;
      if (append) setLoadingMore(true);
      else setLoading(true);
      setError(null);
      try {
        const r = await adminVimeoVideos(token, q, p, controller.signal);
        if (!live.current || id !== run.current) return;
        const incoming: any[] = r?.videos || [];
        page.current = p;
        setVideos((current) => {
          if (!append) return incoming;
          const seen = new Set(current.map((v) => String(v.id)));
          return [...current, ...incoming.filter((v) => !seen.has(String(v.id)))];
        });
        setHasMore(Boolean(r?.paging?.next));
        setTotal(Number(r?.total) || incoming.length);
        setLoaded(true);
      } catch (e: any) {
        if (!live.current || id !== run.current || controller.signal.aborted) return;
        setError(e instanceof VimeoLibraryError ? e : new VimeoLibraryError("unknown", "Unable to load the Vimeo library. Retry.", 0));
        if (!append) setVideos([]);
      } finally {
        if (live.current && id === run.current) {
          setLoading(false);
          setLoadingMore(false);
        }
      }
    },
    [token],
  );

  /** Fresh search (empty string = latest videos). */
  const load = useCallback(
    (q = "") => {
      setQuery(q);
      return fetchPage(q, 1, false);
    },
    [fetchPage],
  );
  const loadMore = useCallback(() => fetchPage(query, page.current + 1, true), [fetchPage, query]);
  /** Retries whatever failed last: the first page, or the next page when a "Load more" failed. */
  const retry = useCallback(() => (videos.length ? fetchPage(query, page.current + 1, true) : fetchPage(query, 1, false)), [fetchPage, query, videos.length]);

  useEffect(() => {
    if (auto && token) void load("");
  }, [auto, token, load]);

  const emptyMessage = !loading && !error && loaded && !videos.length ? (query ? "No videos match this search." : "No Vimeo videos found.") : "";

  return { videos, loading, loadingMore, error, errorMessage: error?.message || "", query, hasMore, total, loaded, emptyMessage, load, loadMore, retry };
}
