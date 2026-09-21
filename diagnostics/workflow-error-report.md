# Avant Movies — Workflow Error Monitor

This repository file keeps previous and current workflow failures together.

## Current failure

Run ID: 35596244137

Generated: 2026-09-21T11:52:20Z

### Current primary errors
~~~text
Lint and production build	Production build	2026-09-21T11:52:05.4630533Z Error: Error transforming route file /home/runner/work/film-fetcher-friend/film-fetcher-friend/src/routes/watch.$contentId.tsx: SyntaxError: Missing semicolon. (10:1007)
Lint and production build	Production build	2026-09-21T11:52:05.5911723Z ^[[31m✗^[[39m Build failed in 119ms
Lint and production build	Production build	2026-09-21T11:52:05.5915940Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-21T11:52:05.5917013Z Error: Crawling result not available
Lint and production build	Production build	2026-09-21T11:52:05.5921317Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-21T11:52:05.5922277Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-21T11:52:05.6617942Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-21T11:52:05.6632857Z ##[error]Process completed with exit code 1.
~~~

## Previous + current error history

---

## Failure recorded 2026-09-20T06:23:21Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-20T06:15:37Z","databaseId":35493764079,"displayTitle":"Harden Travel Mode cache boundaries across deployments","headSha":"b3dcf20b6987b76421627282f5108c44656027ab","jobs":[{"completedAt":"2026-09-20T06:16:57Z","conclusion":"failure","databaseId":106033150245,"name":"Lint and production build","startedAt":"2026-09-20T06:16:40Z","status":"completed","steps":[{"completedAt":"2026-09-20T06:16:42Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-20T06:16:41Z","status":"completed"},{"completedAt":"2026-09-20T06:16:43Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-20T06:16:42Z","status":"completed"},{"completedAt":"2026-09-20T06:16:45Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-20T06:16:43Z","status":"completed"},{"completedAt":"2026-09-20T06:16:46Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-20T06:16:45Z","status":"completed"},{"completedAt":"2026-09-20T06:16:54Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-20T06:16:46Z","status":"completed"},{"completedAt":"2026-09-20T06:16:54Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-20T06:16:54Z","status":"completed"},{"completedAt":"2026-09-20T06:16:55Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-20T06:16:54Z","status":"completed"},{"completedAt":"2026-09-20T06:16:55Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-20T06:16:55Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079/job/106033150245"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-20T06:16:57Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-20T06:16:54.8923028Z ^[[31m✗^[[39m Build failed in 1.58s
Lint and production build	Production build	2026-09-20T06:16:54.8928789Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:16:54.8941783Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:16:54.8942359Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:16:54.9765623Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:16:54.9778809Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-20T06:16:46.9259864Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-20T06:16:46.9260055Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-20T06:16:46.9290189Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-20T06:16:46.9290340Z ##[endgroup]
Lint and production build	Production build	2026-09-20T06:16:46.9351236Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-20T06:16:51.9895869Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-20T06:16:53.0907533Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-20T06:16:53.3129701Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-20T06:16:53.3221115Z ^[[2K
Lint and production build	Production build	2026-09-20T06:16:54.7931660Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-20T06:16:54.8503257Z rendering chunks...
Lint and production build	Production build	2026-09-20T06:16:54.8923028Z ^[[31m✗^[[39m Build failed in 1.58s
Lint and production build	Production build	2026-09-20T06:16:54.8928504Z ^[[31merror during build:
Lint and production build	Production build	2026-09-20T06:16:54.8928789Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:16:54.8928930Z 
Lint and production build	Production build	2026-09-20T06:16:54.8929180Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8929670Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/movies.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8929910Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8930909Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8931733Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8931935Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8932114Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8932186Z 
Lint and production build	Production build	2026-09-20T06:16:54.8932338Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8932907Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/tv-shows.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8933158Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8934107Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8935108Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8935298Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8935470Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8935537Z 
Lint and production build	Production build	2026-09-20T06:16:54.8935684Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8936036Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/genre.$genre.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8936278Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8937218Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8938118Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8938306Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8938476Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8938544Z 
Lint and production build	Production build	2026-09-20T06:16:54.8938689Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8939022Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/person.$person.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8939250Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8940192Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8940960Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8941146Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8941314Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8941433Z ^[[31m
Lint and production build	Production build	2026-09-20T06:16:54.8941783Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:16:54.8942359Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:16:54.8943049Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-20T06:16:54.8943553Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-20T06:16:54.8944057Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-20T06:16:54.8944622Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-20T06:16:54.8945231Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-20T06:16:54.8945774Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-20T06:16:54.8946379Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-20T06:16:54.8946695Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-20T06:16:54.8946832Z }^[[39m
Lint and production build	Production build	2026-09-20T06:16:54.9765623Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:16:54.9778809Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-20T06:23:32Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-20T06:15:37Z","databaseId":35493764079,"displayTitle":"Harden Travel Mode cache boundaries across deployments","headSha":"b3dcf20b6987b76421627282f5108c44656027ab","jobs":[{"completedAt":"2026-09-20T06:16:57Z","conclusion":"failure","databaseId":106033150245,"name":"Lint and production build","startedAt":"2026-09-20T06:16:40Z","status":"completed","steps":[{"completedAt":"2026-09-20T06:16:42Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-20T06:16:41Z","status":"completed"},{"completedAt":"2026-09-20T06:16:43Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-20T06:16:42Z","status":"completed"},{"completedAt":"2026-09-20T06:16:45Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-20T06:16:43Z","status":"completed"},{"completedAt":"2026-09-20T06:16:46Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-20T06:16:45Z","status":"completed"},{"completedAt":"2026-09-20T06:16:54Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-20T06:16:46Z","status":"completed"},{"completedAt":"2026-09-20T06:16:54Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-20T06:16:54Z","status":"completed"},{"completedAt":"2026-09-20T06:16:55Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-20T06:16:54Z","status":"completed"},{"completedAt":"2026-09-20T06:16:55Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-20T06:16:55Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079/job/106033150245"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-20T06:16:57Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-20T06:16:54.8923028Z ^[[31m✗^[[39m Build failed in 1.58s
Lint and production build	Production build	2026-09-20T06:16:54.8928789Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:16:54.8941783Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:16:54.8942359Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:16:54.9765623Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:16:54.9778809Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-20T06:16:46.9259864Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-20T06:16:46.9260055Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-20T06:16:46.9290189Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-20T06:16:46.9290340Z ##[endgroup]
Lint and production build	Production build	2026-09-20T06:16:46.9351236Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-20T06:16:51.9895869Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-20T06:16:53.0907533Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-20T06:16:53.3129701Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-20T06:16:53.3221115Z ^[[2K
Lint and production build	Production build	2026-09-20T06:16:54.7931660Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-20T06:16:54.8503257Z rendering chunks...
Lint and production build	Production build	2026-09-20T06:16:54.8923028Z ^[[31m✗^[[39m Build failed in 1.58s
Lint and production build	Production build	2026-09-20T06:16:54.8928504Z ^[[31merror during build:
Lint and production build	Production build	2026-09-20T06:16:54.8928789Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:16:54.8928930Z 
Lint and production build	Production build	2026-09-20T06:16:54.8929180Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8929670Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/movies.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8929910Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8930909Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8931733Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8931935Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8932114Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8932186Z 
Lint and production build	Production build	2026-09-20T06:16:54.8932338Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8932907Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/tv-shows.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8933158Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8934107Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8935108Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8935298Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8935470Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8935537Z 
Lint and production build	Production build	2026-09-20T06:16:54.8935684Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8936036Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/genre.$genre.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8936278Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8937218Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8938118Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8938306Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8938476Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8938544Z 
Lint and production build	Production build	2026-09-20T06:16:54.8938689Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8939022Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/person.$person.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8939250Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8940192Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8940960Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8941146Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8941314Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8941433Z ^[[31m
Lint and production build	Production build	2026-09-20T06:16:54.8941783Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:16:54.8942359Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:16:54.8943049Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-20T06:16:54.8943553Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-20T06:16:54.8944057Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-20T06:16:54.8944622Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-20T06:16:54.8945231Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-20T06:16:54.8945774Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-20T06:16:54.8946379Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-20T06:16:54.8946695Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-20T06:16:54.8946832Z }^[[39m
Lint and production build	Production build	2026-09-20T06:16:54.9765623Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:16:54.9778809Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-20T06:24:07Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-20T06:15:37Z","databaseId":35493764079,"displayTitle":"Harden Travel Mode cache boundaries across deployments","headSha":"b3dcf20b6987b76421627282f5108c44656027ab","jobs":[{"completedAt":"2026-09-20T06:16:57Z","conclusion":"failure","databaseId":106033150245,"name":"Lint and production build","startedAt":"2026-09-20T06:16:40Z","status":"completed","steps":[{"completedAt":"2026-09-20T06:16:42Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-20T06:16:41Z","status":"completed"},{"completedAt":"2026-09-20T06:16:43Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-20T06:16:42Z","status":"completed"},{"completedAt":"2026-09-20T06:16:45Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-20T06:16:43Z","status":"completed"},{"completedAt":"2026-09-20T06:16:46Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-20T06:16:45Z","status":"completed"},{"completedAt":"2026-09-20T06:16:54Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-20T06:16:46Z","status":"completed"},{"completedAt":"2026-09-20T06:16:54Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-20T06:16:54Z","status":"completed"},{"completedAt":"2026-09-20T06:16:55Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-20T06:16:54Z","status":"completed"},{"completedAt":"2026-09-20T06:16:55Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-20T06:16:55Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079/job/106033150245"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-20T06:16:57Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-20T06:16:54.8923028Z ^[[31m✗^[[39m Build failed in 1.58s
Lint and production build	Production build	2026-09-20T06:16:54.8928789Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:16:54.8941783Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:16:54.8942359Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:16:54.9765623Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:16:54.9778809Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-20T06:16:46.9259864Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-20T06:16:46.9260055Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-20T06:16:46.9290189Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-20T06:16:46.9290340Z ##[endgroup]
Lint and production build	Production build	2026-09-20T06:16:46.9351236Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-20T06:16:51.9895869Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-20T06:16:53.0907533Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-20T06:16:53.3129701Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-20T06:16:53.3221115Z ^[[2K
Lint and production build	Production build	2026-09-20T06:16:54.7931660Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-20T06:16:54.8503257Z rendering chunks...
Lint and production build	Production build	2026-09-20T06:16:54.8923028Z ^[[31m✗^[[39m Build failed in 1.58s
Lint and production build	Production build	2026-09-20T06:16:54.8928504Z ^[[31merror during build:
Lint and production build	Production build	2026-09-20T06:16:54.8928789Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:16:54.8928930Z 
Lint and production build	Production build	2026-09-20T06:16:54.8929180Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8929670Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/movies.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8929910Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8930909Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8931733Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8931935Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8932114Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8932186Z 
Lint and production build	Production build	2026-09-20T06:16:54.8932338Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8932907Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/tv-shows.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8933158Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8934107Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8935108Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8935298Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8935470Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8935537Z 
Lint and production build	Production build	2026-09-20T06:16:54.8935684Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8936036Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/genre.$genre.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8936278Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8937218Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8938118Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8938306Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8938476Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8938544Z 
Lint and production build	Production build	2026-09-20T06:16:54.8938689Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8939022Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/person.$person.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8939250Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8940192Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8940960Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8941146Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8941314Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8941433Z ^[[31m
Lint and production build	Production build	2026-09-20T06:16:54.8941783Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:16:54.8942359Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:16:54.8943049Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-20T06:16:54.8943553Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-20T06:16:54.8944057Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-20T06:16:54.8944622Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-20T06:16:54.8945231Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-20T06:16:54.8945774Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-20T06:16:54.8946379Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-20T06:16:54.8946695Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-20T06:16:54.8946832Z }^[[39m
Lint and production build	Production build	2026-09-20T06:16:54.9765623Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:16:54.9778809Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-20T06:24:56Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-20T06:15:37Z","databaseId":35493764079,"displayTitle":"Harden Travel Mode cache boundaries across deployments","headSha":"b3dcf20b6987b76421627282f5108c44656027ab","jobs":[{"completedAt":"2026-09-20T06:16:57Z","conclusion":"failure","databaseId":106033150245,"name":"Lint and production build","startedAt":"2026-09-20T06:16:40Z","status":"completed","steps":[{"completedAt":"2026-09-20T06:16:42Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-20T06:16:41Z","status":"completed"},{"completedAt":"2026-09-20T06:16:43Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-20T06:16:42Z","status":"completed"},{"completedAt":"2026-09-20T06:16:45Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-20T06:16:43Z","status":"completed"},{"completedAt":"2026-09-20T06:16:46Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-20T06:16:45Z","status":"completed"},{"completedAt":"2026-09-20T06:16:54Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-20T06:16:46Z","status":"completed"},{"completedAt":"2026-09-20T06:16:54Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-20T06:16:54Z","status":"completed"},{"completedAt":"2026-09-20T06:16:55Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-20T06:16:54Z","status":"completed"},{"completedAt":"2026-09-20T06:16:55Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-20T06:16:55Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079/job/106033150245"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-20T06:16:57Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-20T06:16:54.8923028Z ^[[31m✗^[[39m Build failed in 1.58s
Lint and production build	Production build	2026-09-20T06:16:54.8928789Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:16:54.8941783Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:16:54.8942359Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:16:54.9765623Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:16:54.9778809Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-20T06:16:46.9259864Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-20T06:16:46.9260055Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-20T06:16:46.9290189Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-20T06:16:46.9290340Z ##[endgroup]
Lint and production build	Production build	2026-09-20T06:16:46.9351236Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-20T06:16:51.9895869Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-20T06:16:53.0907533Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-20T06:16:53.3129701Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-20T06:16:53.3221115Z ^[[2K
Lint and production build	Production build	2026-09-20T06:16:54.7931660Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-20T06:16:54.8503257Z rendering chunks...
Lint and production build	Production build	2026-09-20T06:16:54.8923028Z ^[[31m✗^[[39m Build failed in 1.58s
Lint and production build	Production build	2026-09-20T06:16:54.8928504Z ^[[31merror during build:
Lint and production build	Production build	2026-09-20T06:16:54.8928789Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:16:54.8928930Z 
Lint and production build	Production build	2026-09-20T06:16:54.8929180Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8929670Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/movies.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8929910Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8930909Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8931733Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8931935Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8932114Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8932186Z 
Lint and production build	Production build	2026-09-20T06:16:54.8932338Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8932907Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/tv-shows.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8933158Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8934107Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8935108Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8935298Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8935470Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8935537Z 
Lint and production build	Production build	2026-09-20T06:16:54.8935684Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8936036Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/genre.$genre.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8936278Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8937218Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8938118Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8938306Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8938476Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8938544Z 
Lint and production build	Production build	2026-09-20T06:16:54.8938689Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:16:54.8939022Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/person.$person.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8939250Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8940192Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8940960Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:16:54.8941146Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:16:54.8941314Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:16:54.8941433Z ^[[31m
Lint and production build	Production build	2026-09-20T06:16:54.8941783Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:16:54.8942359Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:16:54.8943049Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-20T06:16:54.8943553Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-20T06:16:54.8944057Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-20T06:16:54.8944622Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-20T06:16:54.8945231Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-20T06:16:54.8945774Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-20T06:16:54.8946379Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-20T06:16:54.8946695Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-20T06:16:54.8946832Z }^[[39m
Lint and production build	Production build	2026-09-20T06:16:54.9765623Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:16:54.9778809Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-20T06:25:28Z

### Run metadata
~~~json
{"attempt":4,"conclusion":"failure","createdAt":"2026-09-20T06:15:37Z","databaseId":35493764079,"displayTitle":"Harden Travel Mode cache boundaries across deployments","headSha":"b3dcf20b6987b76421627282f5108c44656027ab","jobs":[{"completedAt":"2026-09-20T06:25:18Z","conclusion":"failure","databaseId":106034106449,"name":"Lint and production build","startedAt":"2026-09-20T06:25:04Z","status":"completed","steps":[{"completedAt":"2026-09-20T06:25:05Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-20T06:25:05Z","status":"completed"},{"completedAt":"2026-09-20T06:25:06Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-20T06:25:05Z","status":"completed"},{"completedAt":"2026-09-20T06:25:07Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-20T06:25:06Z","status":"completed"},{"completedAt":"2026-09-20T06:25:08Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-20T06:25:07Z","status":"completed"},{"completedAt":"2026-09-20T06:25:17Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-20T06:25:08Z","status":"completed"},{"completedAt":"2026-09-20T06:25:17Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-20T06:25:17Z","status":"completed"},{"completedAt":"2026-09-20T06:25:17Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-20T06:25:17Z","status":"completed"},{"completedAt":"2026-09-20T06:25:17Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-20T06:25:17Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079/job/106034106449"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-20T06:25:19Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35493764079"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-20T06:25:17.2862219Z ^[[31m✗^[[39m Build failed in 2.42s
Lint and production build	Production build	2026-09-20T06:25:17.2870212Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:25:17.2901115Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:25:17.2902264Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:25:17.3960094Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:25:17.3975360Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-20T06:25:08.7715287Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-20T06:25:08.7715697Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-20T06:25:08.7761563Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-20T06:25:08.7761900Z ##[endgroup]
Lint and production build	Production build	2026-09-20T06:25:08.7858563Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-20T06:25:13.1605627Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-20T06:25:14.4674545Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-20T06:25:14.8620326Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-20T06:25:14.8772333Z ^[[2K
Lint and production build	Production build	2026-09-20T06:25:17.1485647Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-20T06:25:17.2226986Z rendering chunks...
Lint and production build	Production build	2026-09-20T06:25:17.2862219Z ^[[31m✗^[[39m Build failed in 2.42s
Lint and production build	Production build	2026-09-20T06:25:17.2869551Z ^[[31merror during build:
Lint and production build	Production build	2026-09-20T06:25:17.2870212Z ^[[31mBuild failed with 4 errors:
Lint and production build	Production build	2026-09-20T06:25:17.2870503Z 
Lint and production build	Production build	2026-09-20T06:25:17.2870983Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:25:17.2872142Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/movies.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2872972Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2876624Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2879554Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:25:17.2880289Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:25:17.2880883Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2881095Z 
Lint and production build	Production build	2026-09-20T06:25:17.2881428Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:25:17.2882132Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/tv-shows.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2882572Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2884320Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2886466Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:25:17.2886838Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:25:17.2887175Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2887304Z 
Lint and production build	Production build	2026-09-20T06:25:17.2887583Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:25:17.2888231Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/genre.$genre.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2888686Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2890502Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2892255Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:25:17.2892604Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:25:17.2892922Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2893086Z 
Lint and production build	Production build	2026-09-20T06:25:17.2893353Z ^[[31m[MISSING_EXPORT] ^[[0m"getTitles" is not exported by "src/lib/site-data.ts".
Lint and production build	Production build	2026-09-20T06:25:17.2893973Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/routes/person.$person.tsx:4:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2894418Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2897899Z  ^[[38;5;246m4 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mgetTitles^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m-^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2899544Z  ^[[38;5;240m  │^[[0m          ────┬────  
Lint and production build	Production build	2026-09-20T06:25:17.2899902Z  ^[[38;5;240m  │^[[0m              ╰────── Missing export
Lint and production build	Production build	2026-09-20T06:25:17.2900222Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-20T06:25:17.2900438Z ^[[31m
Lint and production build	Production build	2026-09-20T06:25:17.2901115Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-20T06:25:17.2902264Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-20T06:25:17.2903322Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-20T06:25:17.2904332Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-20T06:25:17.2905328Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-20T06:25:17.2906697Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-20T06:25:17.2907908Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-20T06:25:17.2908984Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-20T06:25:17.2910156Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-20T06:25:17.2910763Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-20T06:25:17.2911017Z }^[[39m
Lint and production build	Production build	2026-09-20T06:25:17.3960094Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-20T06:25:17.3975360Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-21T11:17:07Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-21T11:16:38Z","databaseId":35593196008,"displayTitle":"Add cinematic auto-hide preview controls","headSha":"a2848fdcc356230389aa4634426861bef6e0ce04","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":106312112593,"name":"Lint and production build","startedAt":"2026-09-21T11:17:04Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35593196008/job/106312112593"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-21T11:17:04Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35593196008"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35593196008 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-21T11:17:29Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-21T11:16:38Z","databaseId":35593196008,"displayTitle":"Add cinematic auto-hide preview controls","headSha":"a2848fdcc356230389aa4634426861bef6e0ce04","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":106312223447,"name":"Lint and production build","startedAt":"2026-09-21T11:17:28Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35593196008/job/106312223447"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-21T11:17:27Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35593196008"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35593196008 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-21T11:17:54Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-21T11:16:38Z","databaseId":35593196008,"displayTitle":"Add cinematic auto-hide preview controls","headSha":"a2848fdcc356230389aa4634426861bef6e0ce04","jobs":[{"completedAt":"2026-09-21T11:17:45Z","conclusion":"failure","databaseId":106312223447,"name":"Lint and production build","startedAt":"2026-09-21T11:17:30Z","status":"completed","steps":[{"completedAt":"2026-09-21T11:17:31Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-21T11:17:30Z","status":"completed"},{"completedAt":"2026-09-21T11:17:32Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-21T11:17:31Z","status":"completed"},{"completedAt":"2026-09-21T11:17:34Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-21T11:17:32Z","status":"completed"},{"completedAt":"2026-09-21T11:17:35Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-21T11:17:34Z","status":"completed"},{"completedAt":"2026-09-21T11:17:43Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-21T11:17:35Z","status":"completed"},{"completedAt":"2026-09-21T11:17:43Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-21T11:17:43Z","status":"completed"},{"completedAt":"2026-09-21T11:17:43Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-21T11:17:43Z","status":"completed"},{"completedAt":"2026-09-21T11:17:43Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-21T11:17:43Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35593196008/job/106312223447"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-21T11:17:46Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35593196008"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-21T11:17:43.2572789Z ^[[31m✗^[[39m Build failed in 2.43s
Lint and production build	Production build	2026-09-21T11:17:43.2577663Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-21T11:17:43.2579505Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-21T11:17:43.2580536Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-21T11:17:43.3136297Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-21T11:17:43.3152269Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-21T11:17:35.5323492Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-21T11:17:35.5323848Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-21T11:17:35.5345646Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-21T11:17:35.5345945Z ##[endgroup]
Lint and production build	Production build	2026-09-21T11:17:35.5449124Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-21T11:17:39.2343124Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-21T11:17:40.3905340Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-21T11:17:40.8250746Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-21T11:17:40.8414412Z ^[[2K
Lint and production build	Production build	2026-09-21T11:17:43.2561891Z transforming...✓ 1988 modules transformed.
Lint and production build	Production build	2026-09-21T11:17:43.2572789Z ^[[31m✗^[[39m Build failed in 2.43s
Lint and production build	Production build	2026-09-21T11:17:43.2576908Z ^[[31merror during build:
Lint and production build	Production build	2026-09-21T11:17:43.2577663Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-21T11:17:43.2577840Z 
Lint and production build	Production build	2026-09-21T11:17:43.2578046Z ^[[31m[builtin:vite-transform] ^[[0mUnexpected token
Lint and production build	Production build	2026-09-21T11:17:43.2578465Z  -  in src/components/streaming/TitlePreviewModal.tsx at 10125..10126
Lint and production build	Production build	2026-09-21T11:17:43.2578861Z ^[[31m
Lint and production build	Production build	2026-09-21T11:17:43.2579505Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-21T11:17:43.2580536Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-21T11:17:43.2581467Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-21T11:17:43.2582389Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-21T11:17:43.2583298Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-21T11:17:43.2584297Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-21T11:17:43.2585381Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-21T11:17:43.2586332Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-21T11:17:43.2587756Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-21T11:17:43.2588319Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-21T11:17:43.2588829Z }^[[39m
Lint and production build	Production build	2026-09-21T11:17:43.3136297Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-21T11:17:43.3152269Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-21T11:51:32Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-21T11:50:59Z","databaseId":35596244137,"displayTitle":"Make Avant controls authoritative across playback providers","headSha":"4c2db1a1b38452f01e173924a18c089f967b2405","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":106321725474,"name":"Lint and production build","startedAt":"2026-09-21T11:51:29Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596244137/job/106321725474"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-21T11:51:29Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596244137"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35596244137 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-21T11:51:54Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-21T11:50:59Z","databaseId":35596244137,"displayTitle":"Make Avant controls authoritative across playback providers","headSha":"4c2db1a1b38452f01e173924a18c089f967b2405","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":106321828102,"name":"Lint and production build","startedAt":"2026-09-21T11:51:51Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596244137/job/106321828102"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-21T11:51:50Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596244137"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35596244137 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-21T11:52:20Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-21T11:50:59Z","databaseId":35596244137,"displayTitle":"Make Avant controls authoritative across playback providers","headSha":"4c2db1a1b38452f01e173924a18c089f967b2405","jobs":[{"completedAt":"2026-09-21T11:52:08Z","conclusion":"failure","databaseId":106321828102,"name":"Lint and production build","startedAt":"2026-09-21T11:51:53Z","status":"completed","steps":[{"completedAt":"2026-09-21T11:51:55Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-21T11:51:54Z","status":"completed"},{"completedAt":"2026-09-21T11:51:56Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-21T11:51:55Z","status":"completed"},{"completedAt":"2026-09-21T11:51:58Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-21T11:51:56Z","status":"completed"},{"completedAt":"2026-09-21T11:51:59Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-21T11:51:58Z","status":"completed"},{"completedAt":"2026-09-21T11:52:05Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-21T11:51:59Z","status":"completed"},{"completedAt":"2026-09-21T11:52:05Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-21T11:52:05Z","status":"completed"},{"completedAt":"2026-09-21T11:52:06Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-21T11:52:05Z","status":"completed"},{"completedAt":"2026-09-21T11:52:06Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-21T11:52:06Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596244137/job/106321828102"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-21T11:52:08Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596244137"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-21T11:52:05.4630533Z Error: Error transforming route file /home/runner/work/film-fetcher-friend/film-fetcher-friend/src/routes/watch.$contentId.tsx: SyntaxError: Missing semicolon. (10:1007)
Lint and production build	Production build	2026-09-21T11:52:05.5911723Z ^[[31m✗^[[39m Build failed in 119ms
Lint and production build	Production build	2026-09-21T11:52:05.5915940Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-21T11:52:05.5917013Z Error: Crawling result not available
Lint and production build	Production build	2026-09-21T11:52:05.5921317Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-21T11:52:05.5922277Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-21T11:52:05.6617942Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-21T11:52:05.6632857Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-21T11:51:59.5629870Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-21T11:51:59.5630122Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-21T11:51:59.5661673Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-21T11:51:59.5661886Z ##[endgroup]
Lint and production build	Production build	2026-09-21T11:51:59.5729844Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-21T11:52:04.2561936Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-21T11:52:05.3136007Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-21T11:52:05.4630533Z Error: Error transforming route file /home/runner/work/film-fetcher-friend/film-fetcher-friend/src/routes/watch.$contentId.tsx: SyntaxError: Missing semicolon. (10:1007)
Lint and production build	Production build	2026-09-21T11:52:05.4631985Z     at file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/router-generator/dist/esm/generator.js:143:13
Lint and production build	Production build	2026-09-21T11:52:05.4633459Z     at async generate (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/router-plugin/dist/esm/core/router-generator-plugin.js:39:4)
Lint and production build	Production build	2026-09-21T11:52:05.4635324Z     at async BasicMinimalPluginContext.configResolved (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/router-plugin/dist/esm/core/router-generator-plugin.js:56:4)
Lint and production build	Production build	2026-09-21T11:52:05.4636455Z     at async Promise.all (index 5)
Lint and production build	Production build	2026-09-21T11:52:05.4637207Z     at async resolveConfig (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:35909:2)
Lint and production build	Production build	2026-09-21T11:52:05.4638423Z     at async createBuilder (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33458:17)
Lint and production build	Production build	2026-09-21T11:52:05.4639647Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:765:19)
Lint and production build	Production build	2026-09-21T11:52:05.4712072Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-21T11:52:05.4825274Z ^[[2K
Lint and production build	Production build	2026-09-21T11:52:05.5907020Z transforming...✓ 178 modules transformed.
Lint and production build	Production build	2026-09-21T11:52:05.5911723Z ^[[31m✗^[[39m Build failed in 119ms
Lint and production build	Production build	2026-09-21T11:52:05.5915503Z ^[[31merror during build:
Lint and production build	Production build	2026-09-21T11:52:05.5915940Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-21T11:52:05.5916310Z 
Lint and production build	Production build	2026-09-21T11:52:05.5916602Z [plugin tanstack-start:route-tree-client-plugin]
Lint and production build	Production build	2026-09-21T11:52:05.5917013Z Error: Crawling result not available
Lint and production build	Production build	2026-09-21T11:52:05.5917803Z     at LoadPluginContextImpl.handler (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/start-router-plugin/plugin.js:69:32)
Lint and production build	Production build	2026-09-21T11:52:05.5918903Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1569:16)
Lint and production build	Production build	2026-09-21T11:52:05.5920281Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)^[[31m
Lint and production build	Production build	2026-09-21T11:52:05.5921317Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-21T11:52:05.5922277Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-21T11:52:05.5923196Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-21T11:52:05.5924403Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-21T11:52:05.5925367Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-21T11:52:05.5926495Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-21T11:52:05.5927517Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-21T11:52:05.5928414Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-21T11:52:05.5929243Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-21T11:52:05.5929818Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-21T11:52:05.5930160Z }^[[39m
Lint and production build	Production build	2026-09-21T11:52:05.6617942Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-21T11:52:05.6632857Z ##[error]Process completed with exit code 1.
~~~
