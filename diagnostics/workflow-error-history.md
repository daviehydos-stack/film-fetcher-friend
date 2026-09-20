
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
