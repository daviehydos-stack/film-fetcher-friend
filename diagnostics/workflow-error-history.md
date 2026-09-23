
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

---

## Failure recorded 2026-09-21T11:53:26Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"failure","createdAt":"2026-09-21T11:52:46Z","databaseId":35596395967,"displayTitle":"Speed up Avant player startup and lazy-load secondary video","headSha":"c4258ef682de1a5b758e086c314c9552aa1fdb5d","jobs":[{"completedAt":"2026-09-21T11:53:19Z","conclusion":"failure","databaseId":106322171295,"name":"Lint and production build","startedAt":"2026-09-21T11:53:08Z","status":"completed","steps":[{"completedAt":"2026-09-21T11:53:09Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-21T11:53:08Z","status":"completed"},{"completedAt":"2026-09-21T11:53:10Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-21T11:53:09Z","status":"completed"},{"completedAt":"2026-09-21T11:53:11Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-21T11:53:10Z","status":"completed"},{"completedAt":"2026-09-21T11:53:13Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-21T11:53:11Z","status":"completed"},{"completedAt":"2026-09-21T11:53:18Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-21T11:53:13Z","status":"completed"},{"completedAt":"2026-09-21T11:53:18Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-21T11:53:18Z","status":"completed"},{"completedAt":"2026-09-21T11:53:18Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-21T11:53:18Z","status":"completed"},{"completedAt":"2026-09-21T11:53:18Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-21T11:53:18Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596395967/job/106322171295"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-21T11:53:20Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596395967"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-21T11:53:18.0375840Z Error: Error transforming route file /home/runner/work/film-fetcher-friend/film-fetcher-friend/src/routes/watch.$contentId.tsx: SyntaxError: Missing semicolon. (10:1007)
Lint and production build	Production build	2026-09-21T11:53:18.2042045Z ^[[31m✗^[[39m Build failed in 152ms
Lint and production build	Production build	2026-09-21T11:53:18.2047080Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-21T11:53:18.2048129Z Error: Crawling result not available
Lint and production build	Production build	2026-09-21T11:53:18.2053319Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-21T11:53:18.2054697Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-21T11:53:18.2988041Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-21T11:53:18.3008385Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-21T11:53:13.0246155Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-21T11:53:13.0246746Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-21T11:53:13.0285545Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-21T11:53:13.0285828Z ##[endgroup]
Lint and production build	Production build	2026-09-21T11:53:13.0362604Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-21T11:53:16.5940108Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-21T11:53:17.8368274Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-21T11:53:18.0375840Z Error: Error transforming route file /home/runner/work/film-fetcher-friend/film-fetcher-friend/src/routes/watch.$contentId.tsx: SyntaxError: Missing semicolon. (10:1007)
Lint and production build	Production build	2026-09-21T11:53:18.0395197Z     at file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/router-generator/dist/esm/generator.js:143:13
Lint and production build	Production build	2026-09-21T11:53:18.0415411Z     at async generate (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/router-plugin/dist/esm/core/router-generator-plugin.js:39:4)
Lint and production build	Production build	2026-09-21T11:53:18.0455565Z     at async BasicMinimalPluginContext.configResolved (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/router-plugin/dist/esm/core/router-generator-plugin.js:56:4)
Lint and production build	Production build	2026-09-21T11:53:18.0484441Z     at async Promise.all (index 5)
Lint and production build	Production build	2026-09-21T11:53:18.0495504Z     at async resolveConfig (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:35909:2)
Lint and production build	Production build	2026-09-21T11:53:18.0497335Z     at async createBuilder (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33458:17)
Lint and production build	Production build	2026-09-21T11:53:18.0500827Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:765:19)
Lint and production build	Production build	2026-09-21T11:53:18.0502463Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-21T11:53:18.0649016Z ^[[2K
Lint and production build	Production build	2026-09-21T11:53:18.2035848Z transforming...✓ 178 modules transformed.
Lint and production build	Production build	2026-09-21T11:53:18.2042045Z ^[[31m✗^[[39m Build failed in 152ms
Lint and production build	Production build	2026-09-21T11:53:18.2046598Z ^[[31merror during build:
Lint and production build	Production build	2026-09-21T11:53:18.2047080Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-21T11:53:18.2047356Z 
Lint and production build	Production build	2026-09-21T11:53:18.2047588Z [plugin tanstack-start:route-tree-client-plugin]
Lint and production build	Production build	2026-09-21T11:53:18.2048129Z Error: Crawling result not available
Lint and production build	Production build	2026-09-21T11:53:18.2049010Z     at LoadPluginContextImpl.handler (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/start-router-plugin/plugin.js:69:32)
Lint and production build	Production build	2026-09-21T11:53:18.2050359Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1569:16)
Lint and production build	Production build	2026-09-21T11:53:18.2052068Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)^[[31m
Lint and production build	Production build	2026-09-21T11:53:18.2053319Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-21T11:53:18.2054697Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-21T11:53:18.2055739Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-21T11:53:18.2056740Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-21T11:53:18.2057721Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-21T11:53:18.2059038Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-21T11:53:18.2060230Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-21T11:53:18.2061325Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-21T11:53:18.2062271Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-21T11:53:18.2062862Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-21T11:53:18.2063118Z }^[[39m
Lint and production build	Production build	2026-09-21T11:53:18.2988041Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-21T11:53:18.3008385Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-21T11:53:52Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-21T11:52:46Z","databaseId":35596395967,"displayTitle":"Speed up Avant player startup and lazy-load secondary video","headSha":"c4258ef682de1a5b758e086c314c9552aa1fdb5d","jobs":[{"completedAt":"2026-09-21T11:53:41Z","conclusion":"failure","databaseId":106322270069,"name":"Lint and production build","startedAt":"2026-09-21T11:53:29Z","status":"completed","steps":[{"completedAt":"2026-09-21T11:53:31Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-21T11:53:30Z","status":"completed"},{"completedAt":"2026-09-21T11:53:31Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-21T11:53:31Z","status":"completed"},{"completedAt":"2026-09-21T11:53:33Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-21T11:53:31Z","status":"completed"},{"completedAt":"2026-09-21T11:53:34Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-21T11:53:33Z","status":"completed"},{"completedAt":"2026-09-21T11:53:40Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-21T11:53:34Z","status":"completed"},{"completedAt":"2026-09-21T11:53:40Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-21T11:53:40Z","status":"completed"},{"completedAt":"2026-09-21T11:53:40Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-21T11:53:40Z","status":"completed"},{"completedAt":"2026-09-21T11:53:40Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-21T11:53:40Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596395967/job/106322270069"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-21T11:53:42Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35596395967"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-21T11:53:40.2769376Z Error: Error transforming route file /home/runner/work/film-fetcher-friend/film-fetcher-friend/src/routes/watch.$contentId.tsx: SyntaxError: Missing semicolon. (10:1007)
Lint and production build	Production build	2026-09-21T11:53:40.4507007Z ^[[31m✗^[[39m Build failed in 160ms
Lint and production build	Production build	2026-09-21T11:53:40.4512409Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-21T11:53:40.4513367Z Error: Crawling result not available
Lint and production build	Production build	2026-09-21T11:53:40.4518516Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-21T11:53:40.4519618Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-21T11:53:40.5367395Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-21T11:53:40.5385069Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-21T11:53:34.6576346Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-21T11:53:34.6576676Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-21T11:53:34.6614394Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-21T11:53:34.6614679Z ##[endgroup]
Lint and production build	Production build	2026-09-21T11:53:34.6701728Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-21T11:53:38.8245676Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-21T11:53:40.0591082Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-21T11:53:40.2769376Z Error: Error transforming route file /home/runner/work/film-fetcher-friend/film-fetcher-friend/src/routes/watch.$contentId.tsx: SyntaxError: Missing semicolon. (10:1007)
Lint and production build	Production build	2026-09-21T11:53:40.2803489Z     at file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/router-generator/dist/esm/generator.js:143:13
Lint and production build	Production build	2026-09-21T11:53:40.2823567Z     at async generate (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/router-plugin/dist/esm/core/router-generator-plugin.js:39:4)
Lint and production build	Production build	2026-09-21T11:53:40.2826722Z     at async BasicMinimalPluginContext.configResolved (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/router-plugin/dist/esm/core/router-generator-plugin.js:56:4)
Lint and production build	Production build	2026-09-21T11:53:40.2828735Z     at async Promise.all (index 5)
Lint and production build	Production build	2026-09-21T11:53:40.2844690Z     at async resolveConfig (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:35909:2)
Lint and production build	Production build	2026-09-21T11:53:40.2846863Z     at async createBuilder (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33458:17)
Lint and production build	Production build	2026-09-21T11:53:40.2848992Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:765:19)
Lint and production build	Production build	2026-09-21T11:53:40.2887065Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-21T11:53:40.3040821Z ^[[2K
Lint and production build	Production build	2026-09-21T11:53:40.4500721Z transforming...✓ 178 modules transformed.
Lint and production build	Production build	2026-09-21T11:53:40.4507007Z ^[[31m✗^[[39m Build failed in 160ms
Lint and production build	Production build	2026-09-21T11:53:40.4511919Z ^[[31merror during build:
Lint and production build	Production build	2026-09-21T11:53:40.4512409Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-21T11:53:40.4512877Z 
Lint and production build	Production build	2026-09-21T11:53:40.4513027Z [plugin tanstack-start:route-tree-client-plugin]
Lint and production build	Production build	2026-09-21T11:53:40.4513367Z Error: Crawling result not available
Lint and production build	Production build	2026-09-21T11:53:40.4514205Z     at LoadPluginContextImpl.handler (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/start-router-plugin/plugin.js:69:32)
Lint and production build	Production build	2026-09-21T11:53:40.4515486Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1569:16)
Lint and production build	Production build	2026-09-21T11:53:40.4517151Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)^[[31m
Lint and production build	Production build	2026-09-21T11:53:40.4518516Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-21T11:53:40.4519618Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-21T11:53:40.4520633Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-21T11:53:40.4521803Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-21T11:53:40.4522782Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-21T11:53:40.4524079Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-21T11:53:40.4525279Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-21T11:53:40.4526365Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-21T11:53:40.4527336Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-21T11:53:40.4527960Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-21T11:53:40.4528224Z }^[[39m
Lint and production build	Production build	2026-09-21T11:53:40.5367395Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-21T11:53:40.5385069Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-22T06:31:49Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"failure","createdAt":"2026-09-22T06:31:17Z","databaseId":35695202626,"displayTitle":"Use title-specific entitlements on streaming cards","headSha":"37f5bb26f77a6abc801a39f0f7dd36765cb412d5","jobs":[{"completedAt":"2026-09-22T06:31:39Z","conclusion":"failure","databaseId":106640440160,"name":"Lint and production build","startedAt":"2026-09-22T06:31:20Z","status":"completed","steps":[{"completedAt":"2026-09-22T06:31:22Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-22T06:31:21Z","status":"completed"},{"completedAt":"2026-09-22T06:31:23Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-22T06:31:22Z","status":"completed"},{"completedAt":"2026-09-22T06:31:25Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-22T06:31:23Z","status":"completed"},{"completedAt":"2026-09-22T06:31:25Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-22T06:31:25Z","status":"completed"},{"completedAt":"2026-09-22T06:31:37Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-22T06:31:25Z","status":"completed"},{"completedAt":"2026-09-22T06:31:37Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-22T06:31:37Z","status":"completed"},{"completedAt":"2026-09-22T06:31:37Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-22T06:31:37Z","status":"completed"},{"completedAt":"2026-09-22T06:31:37Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-22T06:31:37Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35695202626/job/106640440160"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-22T06:31:40Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35695202626"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-22T06:31:37.4304910Z ^[[31m✗^[[39m Build failed in 2.22s
Lint and production build	Production build	2026-09-22T06:31:37.4309417Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-22T06:31:37.4320867Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-22T06:31:37.4321896Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-22T06:31:37.4830685Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-22T06:31:37.4845406Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-22T06:31:25.9744410Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-22T06:31:25.9744720Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-22T06:31:25.9765948Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-22T06:31:25.9766245Z ##[endgroup]
Lint and production build	Production build	2026-09-22T06:31:25.9824164Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-22T06:31:33.6045940Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-22T06:31:34.8250031Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-22T06:31:35.2066012Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-22T06:31:35.2244635Z ^[[2K
Lint and production build	Production build	2026-09-22T06:31:37.4296109Z transforming...✓ 1988 modules transformed.
Lint and production build	Production build	2026-09-22T06:31:37.4304910Z ^[[31m✗^[[39m Build failed in 2.22s
Lint and production build	Production build	2026-09-22T06:31:37.4308893Z ^[[31merror during build:
Lint and production build	Production build	2026-09-22T06:31:37.4309417Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-22T06:31:37.4309693Z 
Lint and production build	Production build	2026-09-22T06:31:37.4310094Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-22T06:31:37.4311203Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/HomeHero.tsx:61:48 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-22T06:31:37.4311673Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-22T06:31:37.4315741Z  ^[[38;5;246m61 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mw^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mF^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mC^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m ^[[0m^[[38;5;249m(^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249m)^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mA^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mS^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249ma^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-22T06:31:37.4319016Z  ^[[38;5;240m   │^[[0m                                                ┬  
Lint and production build	Production build	2026-09-22T06:31:37.4319413Z  ^[[38;5;240m   │^[[0m                                                ╰── 
Lint and production build	Production build	2026-09-22T06:31:37.4320024Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-22T06:31:37.4320238Z ^[[31m
Lint and production build	Production build	2026-09-22T06:31:37.4320867Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-22T06:31:37.4321896Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-22T06:31:37.4322835Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-22T06:31:37.4323729Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-22T06:31:37.4324621Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-22T06:31:37.4325947Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-22T06:31:37.4327029Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-22T06:31:37.4327989Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-22T06:31:37.4328893Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-22T06:31:37.4329452Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-22T06:31:37.4329695Z }^[[39m
Lint and production build	Production build	2026-09-22T06:31:37.4830685Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-22T06:31:37.4845406Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-22T06:32:19Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-22T06:31:17Z","databaseId":35695202626,"displayTitle":"Use title-specific entitlements on streaming cards","headSha":"37f5bb26f77a6abc801a39f0f7dd36765cb412d5","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":106640670668,"name":"Lint and production build","startedAt":"2026-09-22T06:32:16Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35695202626/job/106640670668"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-22T06:32:16Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35695202626"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35695202626 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-22T06:33:10Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-22T06:32:41Z","databaseId":35695307402,"displayTitle":"Fix entitlement UI source formatting","headSha":"8e3c09a71f35eaaecdc6c57125e3d6741c5b9348","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-22T06:33:09Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35695307402"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35695307402 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-22T06:33:42Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-22T06:32:41Z","databaseId":35695307402,"displayTitle":"Fix entitlement UI source formatting","headSha":"8e3c09a71f35eaaecdc6c57125e3d6741c5b9348","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-22T06:33:40Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35695307402"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35695307402 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-22T06:34:08Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-22T06:32:41Z","databaseId":35695307402,"displayTitle":"Fix entitlement UI source formatting","headSha":"8e3c09a71f35eaaecdc6c57125e3d6741c5b9348","jobs":[{"completedAt":"2026-09-22T06:34:00Z","conclusion":"failure","databaseId":106641001383,"name":"Lint and production build","startedAt":"2026-09-22T06:33:44Z","status":"completed","steps":[{"completedAt":"2026-09-22T06:33:45Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-22T06:33:45Z","status":"completed"},{"completedAt":"2026-09-22T06:33:46Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-22T06:33:45Z","status":"completed"},{"completedAt":"2026-09-22T06:33:48Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-22T06:33:46Z","status":"completed"},{"completedAt":"2026-09-22T06:33:49Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-22T06:33:48Z","status":"completed"},{"completedAt":"2026-09-22T06:33:58Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-22T06:33:49Z","status":"completed"},{"completedAt":"2026-09-22T06:33:58Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-22T06:33:58Z","status":"completed"},{"completedAt":"2026-09-22T06:33:58Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-22T06:33:58Z","status":"completed"},{"completedAt":"2026-09-22T06:33:58Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-22T06:33:58Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35695307402/job/106641001383"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-22T06:34:00Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35695307402"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-22T06:33:58.2770222Z ^[[31m✗^[[39m Build failed in 2.49s
Lint and production build	Production build	2026-09-22T06:33:58.2775728Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-22T06:33:58.2786858Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-22T06:33:58.2787921Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-22T06:33:58.3903424Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-22T06:33:58.3923196Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-22T06:33:49.7356176Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-22T06:33:49.7356507Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-22T06:33:49.7397633Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-22T06:33:49.7397924Z ##[endgroup]
Lint and production build	Production build	2026-09-22T06:33:49.7503046Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-22T06:33:54.0562580Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-22T06:33:55.3938162Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-22T06:33:55.7898447Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-22T06:33:55.8045471Z ^[[2K
Lint and production build	Production build	2026-09-22T06:33:58.2762201Z transforming...✓ 1988 modules transformed.
Lint and production build	Production build	2026-09-22T06:33:58.2770222Z ^[[31m✗^[[39m Build failed in 2.49s
Lint and production build	Production build	2026-09-22T06:33:58.2775111Z ^[[31merror during build:
Lint and production build	Production build	2026-09-22T06:33:58.2775728Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-22T06:33:58.2775983Z 
Lint and production build	Production build	2026-09-22T06:33:58.2776317Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-22T06:33:58.2777019Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitleCard.tsx:78:48 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-22T06:33:58.2777520Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-22T06:33:58.2781315Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mw^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mF^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mC^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m ^[[0m^[[38;5;249m(^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249m)^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mA^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mS^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249ma^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-22T06:33:58.2784905Z  ^[[38;5;240m   │^[[0m                                                ┬  
Lint and production build	Production build	2026-09-22T06:33:58.2785348Z  ^[[38;5;240m   │^[[0m                                                ╰── 
Lint and production build	Production build	2026-09-22T06:33:58.2785975Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-22T06:33:58.2786208Z ^[[31m
Lint and production build	Production build	2026-09-22T06:33:58.2786858Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-22T06:33:58.2787921Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-22T06:33:58.2788900Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-22T06:33:58.2789833Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-22T06:33:58.2790741Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-22T06:33:58.2792186Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-22T06:33:58.2793307Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-22T06:33:58.2794332Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-22T06:33:58.2795272Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-22T06:33:58.2795857Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-22T06:33:58.2796127Z }^[[39m
Lint and production build	Production build	2026-09-22T06:33:58.3903424Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-22T06:33:58.3923196Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-22T20:51:06Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-22T20:50:31Z","databaseId":35782881076,"displayTitle":"Sync Lovable payment recovery and admin access","headSha":"4f5ab3ebe3ffec83c2c73276d47eb75af91f3099","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":106932658312,"name":"Lint and production build","startedAt":"2026-09-22T20:51:04Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35782881076/job/106932658312"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-22T20:51:04Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35782881076"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35782881076 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-22T20:51:37Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-22T20:50:31Z","databaseId":35782881076,"displayTitle":"Sync Lovable payment recovery and admin access","headSha":"4f5ab3ebe3ffec83c2c73276d47eb75af91f3099","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":106932834920,"name":"Lint and production build","startedAt":"2026-09-22T20:51:35Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35782881076/job/106932834920"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-22T20:51:34Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35782881076"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35782881076 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-22T20:52:07Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-22T20:50:31Z","databaseId":35782881076,"displayTitle":"Sync Lovable payment recovery and admin access","headSha":"4f5ab3ebe3ffec83c2c73276d47eb75af91f3099","jobs":[{"completedAt":"2026-09-22T20:51:55Z","conclusion":"failure","databaseId":106932834920,"name":"Lint and production build","startedAt":"2026-09-22T20:51:37Z","status":"completed","steps":[{"completedAt":"2026-09-22T20:51:39Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-22T20:51:38Z","status":"completed"},{"completedAt":"2026-09-22T20:51:39Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-22T20:51:39Z","status":"completed"},{"completedAt":"2026-09-22T20:51:41Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-22T20:51:39Z","status":"completed"},{"completedAt":"2026-09-22T20:51:43Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-22T20:51:41Z","status":"completed"},{"completedAt":"2026-09-22T20:51:53Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-22T20:51:43Z","status":"completed"},{"completedAt":"2026-09-22T20:51:53Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-22T20:51:53Z","status":"completed"},{"completedAt":"2026-09-22T20:51:53Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-22T20:51:53Z","status":"completed"},{"completedAt":"2026-09-22T20:51:53Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-22T20:51:53Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35782881076/job/106932834920"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-22T20:51:56Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35782881076"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-22T20:51:53.1785399Z ^[[31m✗^[[39m Build failed in 2.52s
Lint and production build	Production build	2026-09-22T20:51:53.1796867Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-22T20:51:53.1807486Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-22T20:51:53.1809316Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-22T20:51:53.2847705Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-22T20:51:53.2865018Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-22T20:51:43.2016064Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-22T20:51:43.2016430Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-22T20:51:43.2058383Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-22T20:51:43.2058677Z ##[endgroup]
Lint and production build	Production build	2026-09-22T20:51:43.2158193Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-22T20:51:48.8419659Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-22T20:51:50.1820577Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-22T20:51:50.6630373Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-22T20:51:50.6776098Z ^[[2K
Lint and production build	Production build	2026-09-22T20:51:53.0285470Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-22T20:51:53.1130620Z rendering chunks...
Lint and production build	Production build	2026-09-22T20:51:53.1785399Z ^[[31m✗^[[39m Build failed in 2.52s
Lint and production build	Production build	2026-09-22T20:51:53.1796415Z ^[[31merror during build:
Lint and production build	Production build	2026-09-22T20:51:53.1796867Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-22T20:51:53.1797110Z 
Lint and production build	Production build	2026-09-22T20:51:53.1797615Z ^[[31m[MISSING_EXPORT] ^[[0m"publicCommerceSettings" is not exported by "src/lib/avant-backend.ts".
Lint and production build	Production build	2026-09-22T20:51:53.1798682Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/site/Pricing.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-22T20:51:53.1799469Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-22T20:51:53.1802324Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mpublicCommerceSettings^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m-^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-22T20:51:53.1805035Z  ^[[38;5;240m  │^[[0m          ───────────┬──────────  
Lint and production build	Production build	2026-09-22T20:51:53.1805620Z  ^[[38;5;240m  │^[[0m                     ╰──────────── Missing export
Lint and production build	Production build	2026-09-22T20:51:53.1806178Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-22T20:51:53.1806505Z ^[[31m
Lint and production build	Production build	2026-09-22T20:51:53.1807486Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-22T20:51:53.1809316Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-22T20:51:53.1810846Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-22T20:51:53.1812503Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-22T20:51:53.1814400Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-22T20:51:53.1816022Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-22T20:51:53.1817757Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-22T20:51:53.1819731Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-22T20:51:53.1821155Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-22T20:51:53.1822277Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-22T20:51:53.1822634Z }^[[39m
Lint and production build	Production build	2026-09-22T20:51:53.2847705Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-22T20:51:53.2865018Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T06:09:17Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-23T06:08:50Z","databaseId":35825424383,"displayTitle":"Fix admin navigation when customer session expires","headSha":"5c3fa928b55c996bcf43b7bed15b6c9c8526a022","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T06:09:15Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825424383"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35825424383 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T06:09:45Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T06:08:50Z","databaseId":35825424383,"displayTitle":"Fix admin navigation when customer session expires","headSha":"5c3fa928b55c996bcf43b7bed15b6c9c8526a022","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T06:09:42Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825424383"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35825424383 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T06:10:09Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T06:08:50Z","databaseId":35825424383,"displayTitle":"Fix admin navigation when customer session expires","headSha":"5c3fa928b55c996bcf43b7bed15b6c9c8526a022","jobs":[{"completedAt":"2026-09-23T06:10:00Z","conclusion":"failure","databaseId":107066166438,"name":"Lint and production build","startedAt":"2026-09-23T06:09:45Z","status":"completed","steps":[{"completedAt":"2026-09-23T06:09:47Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T06:09:46Z","status":"completed"},{"completedAt":"2026-09-23T06:09:47Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T06:09:47Z","status":"completed"},{"completedAt":"2026-09-23T06:09:49Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T06:09:47Z","status":"completed"},{"completedAt":"2026-09-23T06:09:50Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T06:09:49Z","status":"completed"},{"completedAt":"2026-09-23T06:09:59Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T06:09:50Z","status":"completed"},{"completedAt":"2026-09-23T06:09:59Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T06:09:59Z","status":"completed"},{"completedAt":"2026-09-23T06:09:59Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T06:09:59Z","status":"completed"},{"completedAt":"2026-09-23T06:09:59Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T06:09:59Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825424383/job/107066166438"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T06:10:01Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825424383"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T06:09:59.0513991Z ^[[31m✗^[[39m Build failed in 2.68s
Lint and production build	Production build	2026-09-23T06:09:59.0521518Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T06:09:59.0535457Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T06:09:59.0537562Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T06:09:59.1640436Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T06:09:59.1656216Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T06:09:50.7381953Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T06:09:50.7382330Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T06:09:50.7449731Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T06:09:50.7450063Z ##[endgroup]
Lint and production build	Production build	2026-09-23T06:09:50.7577129Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T06:09:54.7371733Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-23T06:09:55.9503478Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T06:09:56.3685912Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T06:09:56.3839144Z ^[[2K
Lint and production build	Production build	2026-09-23T06:09:58.9074731Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-23T06:09:58.9868306Z rendering chunks...
Lint and production build	Production build	2026-09-23T06:09:59.0513991Z ^[[31m✗^[[39m Build failed in 2.68s
Lint and production build	Production build	2026-09-23T06:09:59.0520757Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T06:09:59.0521518Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T06:09:59.0521804Z 
Lint and production build	Production build	2026-09-23T06:09:59.0522424Z ^[[31m[MISSING_EXPORT] ^[[0m"publicCommerceSettings" is not exported by "src/lib/avant-backend.ts".
Lint and production build	Production build	2026-09-23T06:09:59.0523831Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/site/Pricing.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T06:09:59.0524738Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T06:09:59.0528779Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mpublicCommerceSettings^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m-^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T06:09:59.0532159Z  ^[[38;5;240m  │^[[0m          ───────────┬──────────  
Lint and production build	Production build	2026-09-23T06:09:59.0532983Z  ^[[38;5;240m  │^[[0m                     ╰──────────── Missing export
Lint and production build	Production build	2026-09-23T06:09:59.0533619Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-23T06:09:59.0533997Z ^[[31m
Lint and production build	Production build	2026-09-23T06:09:59.0535457Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T06:09:59.0537562Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T06:09:59.0538705Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T06:09:59.0539749Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T06:09:59.0541005Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T06:09:59.0542121Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T06:09:59.0543330Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T06:09:59.0544420Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T06:09:59.0545705Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T06:09:59.0546555Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T06:09:59.0546847Z }^[[39m
Lint and production build	Production build	2026-09-23T06:09:59.1640436Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T06:09:59.1656216Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T06:12:06Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T06:11:34Z","databaseId":35825630266,"displayTitle":"Show Admin link for all signed-in screen sizes","headSha":"cb5eb52960a3efa0691104cac23a3fe66d011eb9","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107066682901,"name":"Lint and production build","startedAt":"2026-09-23T06:12:00Z","status":"in_progress","steps":[{"completedAt":"2026-09-23T06:12:02Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T06:12:01Z","status":"completed"},{"completedAt":"2026-09-23T06:12:03Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T06:12:02Z","status":"completed"},{"completedAt":"2026-09-23T06:12:04Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T06:12:03Z","status":"completed"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Install dependencies","number":4,"startedAt":"2026-09-23T06:12:04Z","status":"in_progress"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Production build","number":5,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Post Setup Bun","number":9,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Post Checkout","number":10,"startedAt":"0001-01-01T00:00:00Z","status":"pending"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825630266/job/107066682901"}],"name":"Avant Movies CI","status":"in_progress","updatedAt":"2026-09-23T06:12:01Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825630266"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35825630266 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T06:12:33Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T06:11:34Z","databaseId":35825630266,"displayTitle":"Show Admin link for all signed-in screen sizes","headSha":"cb5eb52960a3efa0691104cac23a3fe66d011eb9","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107066813446,"name":"Lint and production build","startedAt":"2026-09-23T06:12:31Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825630266/job/107066813446"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T06:12:31Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825630266"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35825630266 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T06:13:07Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T06:11:34Z","databaseId":35825630266,"displayTitle":"Show Admin link for all signed-in screen sizes","headSha":"cb5eb52960a3efa0691104cac23a3fe66d011eb9","jobs":[{"completedAt":"2026-09-23T06:12:57Z","conclusion":"failure","databaseId":107066813446,"name":"Lint and production build","startedAt":"2026-09-23T06:12:33Z","status":"completed","steps":[{"completedAt":"2026-09-23T06:12:35Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T06:12:34Z","status":"completed"},{"completedAt":"2026-09-23T06:12:36Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T06:12:35Z","status":"completed"},{"completedAt":"2026-09-23T06:12:38Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T06:12:36Z","status":"completed"},{"completedAt":"2026-09-23T06:12:39Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T06:12:38Z","status":"completed"},{"completedAt":"2026-09-23T06:12:54Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T06:12:39Z","status":"completed"},{"completedAt":"2026-09-23T06:12:54Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T06:12:54Z","status":"completed"},{"completedAt":"2026-09-23T06:12:54Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T06:12:54Z","status":"completed"},{"completedAt":"2026-09-23T06:12:54Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T06:12:54Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825630266/job/107066813446"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T06:12:58Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825630266"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T06:12:54.4030232Z ^[[31m✗^[[39m Build failed in 2.85s
Lint and production build	Production build	2026-09-23T06:12:54.4038040Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T06:12:54.4050139Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T06:12:54.4052018Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T06:12:54.5110177Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T06:12:54.5127605Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T06:12:39.9936160Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T06:12:39.9936491Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T06:12:39.9981724Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T06:12:39.9982028Z ##[endgroup]
Lint and production build	Production build	2026-09-23T06:12:40.0068522Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T06:12:49.7178044Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-23T06:12:51.1109732Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T06:12:51.5493489Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T06:12:51.5649888Z ^[[2K
Lint and production build	Production build	2026-09-23T06:12:54.2427673Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-23T06:12:54.3234486Z rendering chunks...
Lint and production build	Production build	2026-09-23T06:12:54.4030232Z ^[[31m✗^[[39m Build failed in 2.85s
Lint and production build	Production build	2026-09-23T06:12:54.4037027Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T06:12:54.4038040Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T06:12:54.4038582Z 
Lint and production build	Production build	2026-09-23T06:12:54.4039447Z ^[[31m[MISSING_EXPORT] ^[[0m"publicCommerceSettings" is not exported by "src/lib/avant-backend.ts".
Lint and production build	Production build	2026-09-23T06:12:54.4040615Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/site/Pricing.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T06:12:54.4041318Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T06:12:54.4044453Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mpublicCommerceSettings^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m-^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T06:12:54.4047390Z  ^[[38;5;240m  │^[[0m          ───────────┬──────────  
Lint and production build	Production build	2026-09-23T06:12:54.4048045Z  ^[[38;5;240m  │^[[0m                     ╰──────────── Missing export
Lint and production build	Production build	2026-09-23T06:12:54.4048575Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-23T06:12:54.4048896Z ^[[31m
Lint and production build	Production build	2026-09-23T06:12:54.4050139Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T06:12:54.4052018Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T06:12:54.4053743Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T06:12:54.4055313Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T06:12:54.4057138Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T06:12:54.4058825Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T06:12:54.4060858Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T06:12:54.4062458Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T06:12:54.4063921Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T06:12:54.4065090Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T06:12:54.4065497Z }^[[39m
Lint and production build	Production build	2026-09-23T06:12:54.5110177Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T06:12:54.5127605Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T06:18:30Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-23T06:17:57Z","databaseId":35826106218,"displayTitle":"Make Admin navigation available to all signed-in users","headSha":"4532b821485c8bccadfab04c278fcc23b3d59cbe","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T06:18:28Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35826106218"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35826106218 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T06:18:54Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T06:17:57Z","databaseId":35826106218,"displayTitle":"Make Admin navigation available to all signed-in users","headSha":"4532b821485c8bccadfab04c278fcc23b3d59cbe","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T06:18:52Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35826106218"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35826106218 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T06:19:19Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T06:17:57Z","databaseId":35826106218,"displayTitle":"Make Admin navigation available to all signed-in users","headSha":"4532b821485c8bccadfab04c278fcc23b3d59cbe","jobs":[{"completedAt":"2026-09-23T06:19:09Z","conclusion":"failure","databaseId":107068282367,"name":"Lint and production build","startedAt":"2026-09-23T06:18:55Z","status":"completed","steps":[{"completedAt":"2026-09-23T06:18:56Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T06:18:56Z","status":"completed"},{"completedAt":"2026-09-23T06:18:57Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T06:18:56Z","status":"completed"},{"completedAt":"2026-09-23T06:18:58Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T06:18:57Z","status":"completed"},{"completedAt":"2026-09-23T06:19:00Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T06:18:58Z","status":"completed"},{"completedAt":"2026-09-23T06:19:08Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T06:19:00Z","status":"completed"},{"completedAt":"2026-09-23T06:19:08Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T06:19:08Z","status":"completed"},{"completedAt":"2026-09-23T06:19:08Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T06:19:08Z","status":"completed"},{"completedAt":"2026-09-23T06:19:08Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T06:19:08Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35826106218/job/107068282367"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T06:19:10Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35826106218"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T06:19:08.0520979Z ^[[31m✗^[[39m Build failed in 2.53s
Lint and production build	Production build	2026-09-23T06:19:08.0531475Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T06:19:08.0548218Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T06:19:08.0550559Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T06:19:08.1676276Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T06:19:08.1699154Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T06:19:00.4277814Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T06:19:00.4278133Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T06:19:00.4315696Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T06:19:00.4315985Z ##[endgroup]
Lint and production build	Production build	2026-09-23T06:19:00.4404395Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T06:19:03.7670791Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (21 URLs, 0 videos, 13 image pages).
Lint and production build	Production build	2026-09-23T06:19:05.0911536Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T06:19:05.5244014Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T06:19:05.5398732Z ^[[2K
Lint and production build	Production build	2026-09-23T06:19:07.8936076Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-23T06:19:07.9809601Z rendering chunks...
Lint and production build	Production build	2026-09-23T06:19:08.0520979Z ^[[31m✗^[[39m Build failed in 2.53s
Lint and production build	Production build	2026-09-23T06:19:08.0530309Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T06:19:08.0531475Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T06:19:08.0532102Z 
Lint and production build	Production build	2026-09-23T06:19:08.0532917Z ^[[31m[MISSING_EXPORT] ^[[0m"publicCommerceSettings" is not exported by "src/lib/avant-backend.ts".
Lint and production build	Production build	2026-09-23T06:19:08.0534581Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/site/Pricing.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T06:19:08.0536033Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T06:19:08.0540125Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mpublicCommerceSettings^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m-^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T06:19:08.0543731Z  ^[[38;5;240m  │^[[0m          ───────────┬──────────  
Lint and production build	Production build	2026-09-23T06:19:08.0544819Z  ^[[38;5;240m  │^[[0m                     ╰──────────── Missing export
Lint and production build	Production build	2026-09-23T06:19:08.0546045Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-23T06:19:08.0546758Z ^[[31m
Lint and production build	Production build	2026-09-23T06:19:08.0548218Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T06:19:08.0550559Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T06:19:08.0552708Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T06:19:08.0554815Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T06:19:08.0557503Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T06:19:08.0559821Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T06:19:08.0562306Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T06:19:08.0564549Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T06:19:08.0566931Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T06:19:08.0568559Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T06:19:08.0569271Z }^[[39m
Lint and production build	Production build	2026-09-23T06:19:08.1676276Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T06:19:08.1699154Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:13:36Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"failure","createdAt":"2026-09-23T10:13:05Z","databaseId":35847505085,"displayTitle":"Remove all YouTube catalogue references","headSha":"380344cbb3aa2f2b651a3c9d827b668649567e53","jobs":[{"completedAt":"2026-09-23T10:13:25Z","conclusion":"failure","databaseId":107137108258,"name":"Lint and production build","startedAt":"2026-09-23T10:13:08Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:13:09Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:13:09Z","status":"completed"},{"completedAt":"2026-09-23T10:13:11Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:13:09Z","status":"completed"},{"completedAt":"2026-09-23T10:13:13Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:13:11Z","status":"completed"},{"completedAt":"2026-09-23T10:13:14Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:13:13Z","status":"completed"},{"completedAt":"2026-09-23T10:13:23Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:13:14Z","status":"completed"},{"completedAt":"2026-09-23T10:13:23Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:13:23Z","status":"completed"},{"completedAt":"2026-09-23T10:13:23Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:13:23Z","status":"completed"},{"completedAt":"2026-09-23T10:13:23Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:13:23Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847505085/job/107137108258"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:13:25Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847505085"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:13:23.0227760Z ^[[31m✗^[[39m Build failed in 2.35s
Lint and production build	Production build	2026-09-23T10:13:23.0235223Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:13:23.0298523Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:13:23.0299612Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:13:23.1284214Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:13:23.1301442Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:13:14.5648760Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:13:14.5649088Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:13:14.5690806Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:13:14.5691102Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:13:14.5774212Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:13:19.0017700Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (61 URLs, 0 videos, 53 image pages).
Lint and production build	Production build	2026-09-23T10:13:20.2949782Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:13:20.6750238Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:13:20.6893188Z ^[[2K
Lint and production build	Production build	2026-09-23T10:13:23.0209507Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:13:23.0227760Z ^[[31m✗^[[39m Build failed in 2.35s
Lint and production build	Production build	2026-09-23T10:13:23.0234848Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:13:23.0235223Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:13:23.0235506Z 
Lint and production build	Production build	2026-09-23T10:13:23.0235882Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:13:23.0236855Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:13:23.0237816Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:13:23.0244403Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:13:23.0249562Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:13:23.0249998Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:13:23.0250346Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:13:23.0250488Z 
Lint and production build	Production build	2026-09-23T10:13:23.0250724Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:13:23.0251432Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:13:23.0252161Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:13:23.0267587Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:13:23.0279800Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:13:23.0280325Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:13:23.0288820Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:13:23.0296060Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:13:23.0296951Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:13:23.0297614Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:13:23.0297849Z ^[[31m
Lint and production build	Production build	2026-09-23T10:13:23.0298523Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:13:23.0299612Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:13:23.0300631Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:13:23.0301576Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:13:23.0302516Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:13:23.0303587Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:13:23.0304716Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:13:23.0305859Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:13:23.0306777Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:13:23.0307456Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:13:23.0307712Z }^[[39m
Lint and production build	Production build	2026-09-23T10:13:23.1284214Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:13:23.1301442Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:13:54Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T10:13:25Z","databaseId":35847538238,"displayTitle":"Remove YouTube from admin and content management","headSha":"576ff9224633252840a132c94523706e5868613c","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107137354257,"name":"Lint and production build","startedAt":"2026-09-23T10:13:52Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847538238/job/107137354257"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:13:51Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847538238"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35847538238 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:14:28Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:13:25Z","databaseId":35847538238,"displayTitle":"Remove YouTube from admin and content management","headSha":"576ff9224633252840a132c94523706e5868613c","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T10:14:22Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847538238"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35847538238 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:14:53Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:13:05Z","databaseId":35847505085,"displayTitle":"Remove all YouTube catalogue references","headSha":"380344cbb3aa2f2b651a3c9d827b668649567e53","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T10:14:49Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847505085"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35847505085 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:15:08Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:13:25Z","databaseId":35847538238,"displayTitle":"Remove YouTube from admin and content management","headSha":"576ff9224633252840a132c94523706e5868613c","jobs":[{"completedAt":"2026-09-23T10:14:57Z","conclusion":"failure","databaseId":107137601093,"name":"Lint and production build","startedAt":"2026-09-23T10:14:41Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:14:43Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:14:42Z","status":"completed"},{"completedAt":"2026-09-23T10:14:43Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:14:43Z","status":"completed"},{"completedAt":"2026-09-23T10:14:45Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:14:43Z","status":"completed"},{"completedAt":"2026-09-23T10:14:46Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:14:45Z","status":"completed"},{"completedAt":"2026-09-23T10:14:55Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:14:46Z","status":"completed"},{"completedAt":"2026-09-23T10:14:55Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:14:55Z","status":"completed"},{"completedAt":"2026-09-23T10:14:55Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:14:55Z","status":"completed"},{"completedAt":"2026-09-23T10:14:55Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:14:55Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847538238/job/107137601093"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:14:58Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847538238"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:14:55.6312365Z ^[[31m✗^[[39m Build failed in 1.47s
Lint and production build	Production build	2026-09-23T10:14:55.6316688Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:14:55.6364003Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:14:55.6364954Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:14:55.6726230Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:14:55.6739116Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:14:46.5408973Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:14:46.5409283Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:14:46.5432954Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:14:46.5433323Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:14:46.5496268Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:14:53.0244535Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (61 URLs, 0 videos, 53 image pages).
Lint and production build	Production build	2026-09-23T10:14:53.9090894Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:14:54.1617253Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:14:54.1725551Z ^[[2K
Lint and production build	Production build	2026-09-23T10:14:55.6302474Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:14:55.6312365Z ^[[31m✗^[[39m Build failed in 1.47s
Lint and production build	Production build	2026-09-23T10:14:55.6316272Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:14:55.6316688Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:14:55.6316904Z 
Lint and production build	Production build	2026-09-23T10:14:55.6317093Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:14:55.6317637Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:14:55.6318028Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:14:55.6322554Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:14:55.6326633Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:14:55.6327054Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:14:55.6327384Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:14:55.6327507Z 
Lint and production build	Production build	2026-09-23T10:14:55.6327731Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:14:55.6328336Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:14:55.6328932Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:14:55.6339958Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:14:55.6349200Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:14:55.6349703Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:14:55.6356163Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:14:55.6361739Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:14:55.6362508Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:14:55.6363113Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:14:55.6363376Z ^[[31m
Lint and production build	Production build	2026-09-23T10:14:55.6364003Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:14:55.6364954Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:14:55.6365800Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:14:55.6366682Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:14:55.6367565Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:14:55.6368466Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:14:55.6369453Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:14:55.6370365Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:14:55.6371194Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:14:55.6371741Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:14:55.6371983Z }^[[39m
Lint and production build	Production build	2026-09-23T10:14:55.6726230Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:14:55.6739116Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:15:35Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:13:05Z","databaseId":35847505085,"displayTitle":"Remove all YouTube catalogue references","headSha":"380344cbb3aa2f2b651a3c9d827b668649567e53","jobs":[{"completedAt":"2026-09-23T10:15:23Z","conclusion":"failure","databaseId":107137698228,"name":"Lint and production build","startedAt":"2026-09-23T10:15:00Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:15:02Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:15:01Z","status":"completed"},{"completedAt":"2026-09-23T10:15:03Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:15:02Z","status":"completed"},{"completedAt":"2026-09-23T10:15:05Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:15:03Z","status":"completed"},{"completedAt":"2026-09-23T10:15:08Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:15:05Z","status":"completed"},{"completedAt":"2026-09-23T10:15:21Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:15:08Z","status":"completed"},{"completedAt":"2026-09-23T10:15:21Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:15:21Z","status":"completed"},{"completedAt":"2026-09-23T10:15:21Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:15:21Z","status":"completed"},{"completedAt":"2026-09-23T10:15:21Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:15:21Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847505085/job/107137698228"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:15:23Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35847505085"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:15:21.0364281Z ^[[31m✗^[[39m Build failed in 1.99s
Lint and production build	Production build	2026-09-23T10:15:21.0371263Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:15:21.0420950Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:15:21.0421766Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:15:21.1189941Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:15:21.1205455Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:15:08.6200032Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:15:08.6200299Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:15:08.6261124Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:15:08.6261367Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:15:08.6354065Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:15:17.6301787Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (61 URLs, 0 videos, 53 image pages).
Lint and production build	Production build	2026-09-23T10:15:18.7247596Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:15:19.0510314Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:15:19.0664007Z ^[[2K
Lint and production build	Production build	2026-09-23T10:15:21.0346899Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:15:21.0364281Z ^[[31m✗^[[39m Build failed in 1.99s
Lint and production build	Production build	2026-09-23T10:15:21.0370886Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:15:21.0371263Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:15:21.0371466Z 
Lint and production build	Production build	2026-09-23T10:15:21.0371757Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:15:21.0372472Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:15:21.0372989Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:15:21.0378246Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:15:21.0382522Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:15:21.0382855Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:15:21.0383123Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:15:21.0383239Z 
Lint and production build	Production build	2026-09-23T10:15:21.0383417Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:15:21.0383951Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:15:21.0384531Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:15:21.0396303Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:15:21.0405947Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:15:21.0406338Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:15:21.0413136Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:15:21.0419102Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:15:21.0419789Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:15:21.0420222Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:15:21.0420399Z ^[[31m
Lint and production build	Production build	2026-09-23T10:15:21.0420950Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:15:21.0421766Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:15:21.0422540Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:15:21.0423251Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:15:21.0423963Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:15:21.0424774Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:15:21.0425638Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:15:21.0426566Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:15:21.0427277Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:15:21.0427718Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:15:21.0427928Z }^[[39m
Lint and production build	Production build	2026-09-23T10:15:21.1189941Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:15:21.1205455Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:20:47Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"failure","createdAt":"2026-09-23T10:20:17Z","databaseId":35848208732,"displayTitle":"refactor: remove YouTube from catalogue mapping","headSha":"356c192ca9bf3391e56129aad5d6a6d33fb58b6b","jobs":[{"completedAt":"2026-09-23T10:20:38Z","conclusion":"failure","databaseId":107139376285,"name":"Lint and production build","startedAt":"2026-09-23T10:20:20Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:20:22Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:20:21Z","status":"completed"},{"completedAt":"2026-09-23T10:20:23Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:20:22Z","status":"completed"},{"completedAt":"2026-09-23T10:20:25Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:20:23Z","status":"completed"},{"completedAt":"2026-09-23T10:20:26Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:20:25Z","status":"completed"},{"completedAt":"2026-09-23T10:20:36Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:20:26Z","status":"completed"},{"completedAt":"2026-09-23T10:20:36Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:20:36Z","status":"completed"},{"completedAt":"2026-09-23T10:20:36Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:20:36Z","status":"completed"},{"completedAt":"2026-09-23T10:20:36Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:20:36Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848208732/job/107139376285"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:20:39Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848208732"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:20:36.1361206Z ^[[31m✗^[[39m Build failed in 2.34s
Lint and production build	Production build	2026-09-23T10:20:36.1367955Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:20:36.1485152Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:20:36.1487427Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:20:36.2411746Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:20:36.2428690Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:20:26.7564801Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:20:26.7565317Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:20:26.7613449Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:20:26.7613883Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:20:26.7708360Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:20:32.1473442Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (61 URLs, 0 videos, 53 image pages).
Lint and production build	Production build	2026-09-23T10:20:33.3741181Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:20:33.7958087Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:20:33.8098000Z ^[[2K
Lint and production build	Production build	2026-09-23T10:20:36.1345300Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:20:36.1361206Z ^[[31m✗^[[39m Build failed in 2.34s
Lint and production build	Production build	2026-09-23T10:20:36.1367285Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:20:36.1367955Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:20:36.1368288Z 
Lint and production build	Production build	2026-09-23T10:20:36.1368727Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:20:36.1369686Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:20:36.1370426Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:20:36.1381519Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:20:36.1391117Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:20:36.1391897Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:20:36.1392517Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:20:36.1392760Z 
Lint and production build	Production build	2026-09-23T10:20:36.1393166Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:20:36.1394406Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:20:36.1395603Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:20:36.1425454Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:20:36.1449318Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:20:36.1450244Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:20:36.1466966Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:20:36.1480904Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:20:36.1482564Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:20:36.1483584Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:20:36.1483980Z ^[[31m
Lint and production build	Production build	2026-09-23T10:20:36.1485152Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:20:36.1487427Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:20:36.1489318Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:20:36.1491103Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:20:36.1492898Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:20:36.1494903Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:20:36.1497332Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:20:36.1499420Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:20:36.1501221Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:20:36.1502294Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:20:36.1502753Z }^[[39m
Lint and production build	Production build	2026-09-23T10:20:36.2411746Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:20:36.2428690Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:21:12Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T10:20:17Z","databaseId":35848208732,"displayTitle":"refactor: remove YouTube from catalogue mapping","headSha":"356c192ca9bf3391e56129aad5d6a6d33fb58b6b","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:21:11Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848208732"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848208732 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:21:40Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:20:17Z","databaseId":35848208732,"displayTitle":"refactor: remove YouTube from catalogue mapping","headSha":"356c192ca9bf3391e56129aad5d6a6d33fb58b6b","jobs":[{"completedAt":"2026-09-23T10:21:28Z","conclusion":"failure","databaseId":107139661952,"name":"Lint and production build","startedAt":"2026-09-23T10:21:14Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:21:15Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:21:15Z","status":"completed"},{"completedAt":"2026-09-23T10:21:16Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:21:15Z","status":"completed"},{"completedAt":"2026-09-23T10:21:17Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:21:16Z","status":"completed"},{"completedAt":"2026-09-23T10:21:19Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:21:17Z","status":"completed"},{"completedAt":"2026-09-23T10:21:27Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:21:19Z","status":"completed"},{"completedAt":"2026-09-23T10:21:27Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:21:27Z","status":"completed"},{"completedAt":"2026-09-23T10:21:27Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:21:27Z","status":"completed"},{"completedAt":"2026-09-23T10:21:27Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:21:27Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848208732/job/107139661952"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:21:29Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848208732"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:21:27.2309643Z ^[[31m✗^[[39m Build failed in 2.43s
Lint and production build	Production build	2026-09-23T10:21:27.2316366Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:21:27.2438997Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:21:27.2441131Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:21:27.3364613Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:21:27.3382555Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:21:19.1896185Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:21:19.1896881Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:21:19.1963232Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:21:19.1963523Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:21:19.2065022Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:21:23.1180320Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (61 URLs, 0 videos, 53 image pages).
Lint and production build	Production build	2026-09-23T10:21:24.3753929Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:21:24.8006426Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:21:24.8164817Z ^[[2K
Lint and production build	Production build	2026-09-23T10:21:27.2294308Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:21:27.2309643Z ^[[31m✗^[[39m Build failed in 2.43s
Lint and production build	Production build	2026-09-23T10:21:27.2315698Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:21:27.2316366Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:21:27.2316962Z 
Lint and production build	Production build	2026-09-23T10:21:27.2317436Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:21:27.2318457Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:21:27.2319216Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:21:27.2330619Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:21:27.2340492Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:21:27.2341289Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:21:27.2341939Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:21:27.2342182Z 
Lint and production build	Production build	2026-09-23T10:21:27.2342611Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:21:27.2343900Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:21:27.2345159Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:21:27.2375892Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:21:27.2400870Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:21:27.2401817Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:21:27.2419524Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:21:27.2434308Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:21:27.2436050Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:21:27.2437360Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:21:27.2437767Z ^[[31m
Lint and production build	Production build	2026-09-23T10:21:27.2438997Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:21:27.2441131Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:21:27.2443067Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:21:27.2444914Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:21:27.2447008Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:21:27.2449086Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:21:27.2451326Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:21:27.2453496Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:21:27.2455285Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:21:27.2456410Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:21:27.2457073Z }^[[39m
Lint and production build	Production build	2026-09-23T10:21:27.3364613Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:21:27.3382555Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:22:02Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T10:21:32Z","databaseId":35848328610,"displayTitle":"fix: resolve UUID watch links from published Vimeo records","headSha":"f0701386113ba35d798cef3cc6b3535e2082d4eb","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107139910779,"name":"Lint and production build","startedAt":"2026-09-23T10:22:01Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848328610/job/107139910779"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:22:00Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848328610"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848328610 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:22:26Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:21:32Z","databaseId":35848328610,"displayTitle":"fix: resolve UUID watch links from published Vimeo records","headSha":"f0701386113ba35d798cef3cc6b3535e2082d4eb","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:22:24Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848328610"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848328610 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:22:52Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-23T10:22:19Z","databaseId":35848402754,"displayTitle":"fix: make service worker cache failures non-fatal","headSha":"b5b3c90fefa054777e650c93177b94d508fec34e","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:22:50Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848402754"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848402754 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:23:13Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:21:32Z","databaseId":35848328610,"displayTitle":"fix: resolve UUID watch links from published Vimeo records","headSha":"f0701386113ba35d798cef3cc6b3535e2082d4eb","jobs":[{"completedAt":"2026-09-23T10:23:02Z","conclusion":"failure","databaseId":107140121800,"name":"Lint and production build","startedAt":"2026-09-23T10:22:44Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:22:46Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:22:45Z","status":"completed"},{"completedAt":"2026-09-23T10:22:47Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:22:46Z","status":"completed"},{"completedAt":"2026-09-23T10:22:49Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:22:47Z","status":"completed"},{"completedAt":"2026-09-23T10:22:50Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:22:49Z","status":"completed"},{"completedAt":"2026-09-23T10:22:59Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:22:50Z","status":"completed"},{"completedAt":"2026-09-23T10:22:59Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:22:59Z","status":"completed"},{"completedAt":"2026-09-23T10:22:59Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:22:59Z","status":"completed"},{"completedAt":"2026-09-23T10:22:59Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:22:59Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848328610/job/107140121800"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:23:03Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848328610"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:22:59.3460711Z ^[[31m✗^[[39m Build failed in 2.31s
Lint and production build	Production build	2026-09-23T10:22:59.3468278Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:22:59.3586526Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:22:59.3588550Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:22:59.4507275Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:22:59.4526207Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:22:50.7316663Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:22:50.7316999Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:22:50.7353564Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:22:50.7353832Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:22:50.7430919Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:22:55.3896228Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (61 URLs, 0 videos, 53 image pages).
Lint and production build	Production build	2026-09-23T10:22:56.6254089Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:22:57.0388043Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:22:57.0547024Z ^[[2K
Lint and production build	Production build	2026-09-23T10:22:59.3445493Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:22:59.3460711Z ^[[31m✗^[[39m Build failed in 2.31s
Lint and production build	Production build	2026-09-23T10:22:59.3467419Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:22:59.3468278Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:22:59.3468611Z 
Lint and production build	Production build	2026-09-23T10:22:59.3469082Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:22:59.3470100Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:22:59.3470876Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:22:59.3482501Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:22:59.3491887Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:22:59.3492898Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:22:59.3493527Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:22:59.3493769Z 
Lint and production build	Production build	2026-09-23T10:22:59.3494192Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:22:59.3495420Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:22:59.3496591Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:22:59.3526505Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:22:59.3550291Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:22:59.3551191Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:22:59.3567928Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:22:59.3582047Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:22:59.3583925Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:22:59.3584948Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:22:59.3585343Z ^[[31m
Lint and production build	Production build	2026-09-23T10:22:59.3586526Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:22:59.3588550Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:22:59.3590420Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:22:59.3592514Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:22:59.3594350Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:22:59.3596374Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:22:59.3598525Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:22:59.3600607Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:22:59.3602806Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:22:59.3603870Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:22:59.3604315Z }^[[39m
Lint and production build	Production build	2026-09-23T10:22:59.4507275Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:22:59.4526207Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:23:37Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:22:19Z","databaseId":35848402754,"displayTitle":"fix: make service worker cache failures non-fatal","headSha":"b5b3c90fefa054777e650c93177b94d508fec34e","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107140373106,"name":"Lint and production build","startedAt":"2026-09-23T10:23:33Z","status":"in_progress","steps":[{"completedAt":"2026-09-23T10:23:34Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:23:34Z","status":"completed"},{"completedAt":"2026-09-23T10:23:35Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:23:34Z","status":"completed"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:23:35Z","status":"in_progress"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Install dependencies","number":4,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Production build","number":5,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Post Setup Bun","number":9,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Post Checkout","number":10,"startedAt":"0001-01-01T00:00:00Z","status":"pending"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848402754/job/107140373106"}],"name":"Avant Movies CI","status":"in_progress","updatedAt":"2026-09-23T10:23:34Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848402754"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848402754 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:24:01Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:22:19Z","databaseId":35848402754,"displayTitle":"fix: make service worker cache failures non-fatal","headSha":"b5b3c90fefa054777e650c93177b94d508fec34e","jobs":[{"completedAt":"2026-09-23T10:23:49Z","conclusion":"failure","databaseId":107140373106,"name":"Lint and production build","startedAt":"2026-09-23T10:23:33Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:23:34Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:23:34Z","status":"completed"},{"completedAt":"2026-09-23T10:23:35Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:23:34Z","status":"completed"},{"completedAt":"2026-09-23T10:23:37Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:23:35Z","status":"completed"},{"completedAt":"2026-09-23T10:23:39Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:23:37Z","status":"completed"},{"completedAt":"2026-09-23T10:23:48Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:23:39Z","status":"completed"},{"completedAt":"2026-09-23T10:23:48Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:23:48Z","status":"completed"},{"completedAt":"2026-09-23T10:23:48Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:23:48Z","status":"completed"},{"completedAt":"2026-09-23T10:23:48Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:23:48Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848402754/job/107140373106"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:23:50Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848402754"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:23:48.0403156Z ^[[31m✗^[[39m Build failed in 2.54s
Lint and production build	Production build	2026-09-23T10:23:48.0409912Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:23:48.0475455Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:23:48.0476581Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:23:48.1429610Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:23:48.1446970Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:23:39.4297792Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:23:39.4298143Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:23:39.4363584Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:23:39.4363877Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:23:39.4471733Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:23:43.7978931Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (61 URLs, 0 videos, 53 image pages).
Lint and production build	Production build	2026-09-23T10:23:45.0921475Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:23:45.5020885Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:23:45.5176981Z ^[[2K
Lint and production build	Production build	2026-09-23T10:23:48.0384476Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:23:48.0403156Z ^[[31m✗^[[39m Build failed in 2.54s
Lint and production build	Production build	2026-09-23T10:23:48.0409392Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:23:48.0409912Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:23:48.0410107Z 
Lint and production build	Production build	2026-09-23T10:23:48.0410348Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:23:48.0410998Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:23:48.0411437Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:23:48.0417750Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:23:48.0423426Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:23:48.0423854Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:23:48.0424201Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:23:48.0424338Z 
Lint and production build	Production build	2026-09-23T10:23:48.0424577Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:23:48.0425271Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:23:48.0425999Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:23:48.0442256Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:23:48.0455532Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:23:48.0456044Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:23:48.0465066Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:23:48.0473084Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:23:48.0473986Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:23:48.0474551Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:23:48.0474771Z ^[[31m
Lint and production build	Production build	2026-09-23T10:23:48.0475455Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:23:48.0476581Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:23:48.0477622Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:23:48.0478623Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:23:48.0479624Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:23:48.0480748Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:23:48.0482097Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:23:48.0483359Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:23:48.0484325Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:23:48.0484931Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:23:48.0485195Z }^[[39m
Lint and production build	Production build	2026-09-23T10:23:48.1429610Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:23:48.1446970Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:25:04Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-23T10:24:37Z","databaseId":35848624740,"displayTitle":"refactor: use native Vimeo player without custom playback chrome","headSha":"70c9055bf3ccee50868429eaca7d66d1e2bddaf6","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:25:01Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848624740"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848624740 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:25:36Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:24:37Z","databaseId":35848624740,"displayTitle":"refactor: use native Vimeo player without custom playback chrome","headSha":"70c9055bf3ccee50868429eaca7d66d1e2bddaf6","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T10:25:31Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848624740"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848624740 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:25:57Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-23T10:25:28Z","databaseId":35848707463,"displayTitle":"refactor: use default Vimeo controls in preview modal","headSha":"6830a999165ac8be1cda4d77892c3b33dc07d217","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:25:55Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848707463"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848707463 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:26:15Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:24:37Z","databaseId":35848624740,"displayTitle":"refactor: use native Vimeo player without custom playback chrome","headSha":"70c9055bf3ccee50868429eaca7d66d1e2bddaf6","jobs":[{"completedAt":"2026-09-23T10:26:06Z","conclusion":"failure","databaseId":107141093219,"name":"Lint and production build","startedAt":"2026-09-23T10:25:51Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:25:53Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:25:52Z","status":"completed"},{"completedAt":"2026-09-23T10:25:54Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:25:53Z","status":"completed"},{"completedAt":"2026-09-23T10:25:56Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:25:54Z","status":"completed"},{"completedAt":"2026-09-23T10:25:57Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:25:56Z","status":"completed"},{"completedAt":"2026-09-23T10:26:05Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:25:57Z","status":"completed"},{"completedAt":"2026-09-23T10:26:05Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:26:05Z","status":"completed"},{"completedAt":"2026-09-23T10:26:05Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:26:05Z","status":"completed"},{"completedAt":"2026-09-23T10:26:05Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:26:05Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848624740/job/107141093219"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:26:07Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848624740"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:26:05.2678508Z ^[[31m✗^[[39m Build failed in 2.07s
Lint and production build	Production build	2026-09-23T10:26:05.2684854Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:26:05.2745192Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:26:05.2746286Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:26:05.3210394Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:26:05.3226551Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:25:57.8062191Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:25:57.8062648Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:25:57.8086432Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:25:57.8086853Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:25:57.8163353Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:26:01.7991149Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (61 URLs, 0 videos, 53 image pages).
Lint and production build	Production build	2026-09-23T10:26:02.8412354Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:26:03.1948737Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:26:03.2087144Z ^[[2K
Lint and production build	Production build	2026-09-23T10:26:05.2665020Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:26:05.2678508Z ^[[31m✗^[[39m Build failed in 2.07s
Lint and production build	Production build	2026-09-23T10:26:05.2684276Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:26:05.2684854Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:26:05.2685177Z 
Lint and production build	Production build	2026-09-23T10:26:05.2685578Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:26:05.2686777Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:26:05.2687303Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:26:05.2693146Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:26:05.2698192Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:26:05.2698790Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:26:05.2699238Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:26:05.2699430Z 
Lint and production build	Production build	2026-09-23T10:26:05.2699775Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:26:05.2700561Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:26:05.2701342Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:26:05.2716148Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:26:05.2727018Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:26:05.2727610Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:26:05.2735874Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:26:05.2742639Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:26:05.2743563Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:26:05.2744186Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:26:05.2744482Z ^[[31m
Lint and production build	Production build	2026-09-23T10:26:05.2745192Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:26:05.2746286Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:26:05.2747275Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:26:05.2748219Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:26:05.2749138Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:26:05.2750192Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:26:05.2751320Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:26:05.2752481Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:26:05.2753394Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:26:05.2753995Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:26:05.2754367Z }^[[39m
Lint and production build	Production build	2026-09-23T10:26:05.3210394Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:26:05.3226551Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:26:41Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:25:28Z","databaseId":35848707463,"displayTitle":"refactor: use default Vimeo controls in preview modal","headSha":"6830a999165ac8be1cda4d77892c3b33dc07d217","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107141334266,"name":"Lint and production build","startedAt":"2026-09-23T10:26:39Z","status":"in_progress","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848707463/job/107141334266"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:26:36Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848707463"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848707463 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:27:37Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:25:28Z","databaseId":35848707463,"displayTitle":"refactor: use default Vimeo controls in preview modal","headSha":"6830a999165ac8be1cda4d77892c3b33dc07d217","jobs":[{"completedAt":"2026-09-23T10:26:53Z","conclusion":"failure","databaseId":107141334266,"name":"Lint and production build","startedAt":"2026-09-23T10:26:39Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:26:40Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:26:39Z","status":"completed"},{"completedAt":"2026-09-23T10:26:42Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:26:40Z","status":"completed"},{"completedAt":"2026-09-23T10:26:43Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:26:42Z","status":"completed"},{"completedAt":"2026-09-23T10:26:44Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:26:43Z","status":"completed"},{"completedAt":"2026-09-23T10:26:50Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:26:44Z","status":"completed"},{"completedAt":"2026-09-23T10:26:50Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:26:50Z","status":"completed"},{"completedAt":"2026-09-23T10:26:51Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:26:50Z","status":"completed"},{"completedAt":"2026-09-23T10:26:51Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:26:51Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848707463/job/107141334266"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:26:53Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848707463"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:26:50.8290916Z ^[[31m✗^[[39m Build failed in 1.57s
Lint and production build	Production build	2026-09-23T10:26:50.8296942Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:26:50.8334907Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:26:50.8335496Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:26:50.9165078Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:26:50.9180387Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:26:44.7864987Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:26:44.7865197Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:26:44.7900986Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:26:44.7901139Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:26:44.7971159Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:26:48.2806711Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (61 URLs, 0 videos, 53 image pages).
Lint and production build	Production build	2026-09-23T10:26:49.0064099Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:26:49.2564795Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:26:49.2655603Z ^[[2K
Lint and production build	Production build	2026-09-23T10:26:50.8279816Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:26:50.8290916Z ^[[31m✗^[[39m Build failed in 1.57s
Lint and production build	Production build	2026-09-23T10:26:50.8296703Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:26:50.8296942Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:26:50.8297035Z 
Lint and production build	Production build	2026-09-23T10:26:50.8297173Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:26:50.8297551Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:26:50.8297795Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:26:50.8301451Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:26:50.8304571Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:26:50.8304980Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:26:50.8305343Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:26:50.8305487Z 
Lint and production build	Production build	2026-09-23T10:26:50.8305836Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:26:50.8306420Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:26:50.8306902Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:26:50.8316908Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:26:50.8323813Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:26:50.8324097Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:26:50.8329486Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:26:50.8333593Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:26:50.8334094Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:26:50.8334405Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:26:50.8334530Z ^[[31m
Lint and production build	Production build	2026-09-23T10:26:50.8334907Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:26:50.8335496Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:26:50.8336044Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:26:50.8336681Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:26:50.8337202Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:26:50.8337788Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:26:50.8338415Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:26:50.8339058Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:26:50.8339561Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:26:50.8339880Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:26:50.8340021Z }^[[39m
Lint and production build	Production build	2026-09-23T10:26:50.9165078Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:26:50.9180387Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:28:33Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T10:28:07Z","databaseId":35848958461,"displayTitle":"feat: open related titles in preview modal instead of new page","headSha":"248fb75565d4c3991d5ff0dbbb361b878fe4d0f9","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:28:31Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848958461"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848958461 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:28:55Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T10:28:07Z","databaseId":35848958461,"displayTitle":"feat: open related titles in preview modal instead of new page","headSha":"248fb75565d4c3991d5ff0dbbb361b878fe4d0f9","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:28:53Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848958461"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35848958461 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:29:21Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"failure","createdAt":"2026-09-23T10:28:43Z","databaseId":35849016340,"displayTitle":"fix: contain catalogue resolver failures on public discovery pages","headSha":"b93ed1150b57d42743918aea6bc8286c948abea5","jobs":[{"completedAt":"2026-09-23T10:29:10Z","conclusion":"failure","databaseId":107142006484,"name":"Lint and production build","startedAt":"2026-09-23T10:28:49Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:28:51Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:28:50Z","status":"completed"},{"completedAt":"2026-09-23T10:28:52Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:28:51Z","status":"completed"},{"completedAt":"2026-09-23T10:28:53Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:28:52Z","status":"completed"},{"completedAt":"2026-09-23T10:28:57Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:28:53Z","status":"completed"},{"completedAt":"2026-09-23T10:29:09Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:28:57Z","status":"completed"},{"completedAt":"2026-09-23T10:29:09Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:29:09Z","status":"completed"},{"completedAt":"2026-09-23T10:29:09Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:29:09Z","status":"completed"},{"completedAt":"2026-09-23T10:29:09Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:29:09Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849016340/job/107142006484"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:29:11Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849016340"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:29:09.6001505Z ^[[31m✗^[[39m Build failed in 1.61s
Lint and production build	Production build	2026-09-23T10:29:09.6006911Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:29:09.6054512Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:29:09.6055459Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:29:09.6425769Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:29:09.6439265Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:28:57.2695038Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:28:57.2695416Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:28:57.2735114Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:28:57.2735442Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:28:57.2814564Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:29:06.5480025Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (13 URLs, 0 videos, 5 image pages).
Lint and production build	Production build	2026-09-23T10:29:07.7260271Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:29:07.9878958Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:29:07.9995179Z ^[[2K
Lint and production build	Production build	2026-09-23T10:29:09.5992178Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:29:09.6001505Z ^[[31m✗^[[39m Build failed in 1.61s
Lint and production build	Production build	2026-09-23T10:29:09.6006541Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:29:09.6006911Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:29:09.6007628Z 
Lint and production build	Production build	2026-09-23T10:29:09.6007887Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:29:09.6008497Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:29:09.6008911Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:29:09.6013261Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:29:09.6017031Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:29:09.6017405Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:29:09.6017809Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:29:09.6017931Z 
Lint and production build	Production build	2026-09-23T10:29:09.6018155Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:29:09.6018739Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:29:09.6019328Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:29:09.6030217Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:29:09.6039471Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:29:09.6040068Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:29:09.6046633Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:29:09.6052369Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:29:09.6053129Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:29:09.6053641Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:29:09.6053909Z ^[[31m
Lint and production build	Production build	2026-09-23T10:29:09.6054512Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:29:09.6055459Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:29:09.6056331Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:29:09.6057140Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:29:09.6058044Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:29:09.6058950Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:29:09.6059914Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:29:09.6061203Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:29:09.6062150Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:29:09.6062739Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:29:09.6063017Z }^[[39m
Lint and production build	Production build	2026-09-23T10:29:09.6425769Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:29:09.6439265Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:29:44Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:28:07Z","databaseId":35848958461,"displayTitle":"feat: open related titles in preview modal instead of new page","headSha":"248fb75565d4c3991d5ff0dbbb361b878fe4d0f9","jobs":[{"completedAt":"2026-09-23T10:29:33Z","conclusion":"failure","databaseId":107142128963,"name":"Lint and production build","startedAt":"2026-09-23T10:29:14Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:29:16Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:29:15Z","status":"completed"},{"completedAt":"2026-09-23T10:29:18Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:29:16Z","status":"completed"},{"completedAt":"2026-09-23T10:29:20Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:29:18Z","status":"completed"},{"completedAt":"2026-09-23T10:29:23Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:29:20Z","status":"completed"},{"completedAt":"2026-09-23T10:29:31Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:29:23Z","status":"completed"},{"completedAt":"2026-09-23T10:29:31Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:29:31Z","status":"completed"},{"completedAt":"2026-09-23T10:29:31Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:29:31Z","status":"completed"},{"completedAt":"2026-09-23T10:29:31Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:29:31Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848958461/job/107142128963"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:29:34Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848958461"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:29:31.6560411Z ^[[31m✗^[[39m Build failed in 1.87s
Lint and production build	Production build	2026-09-23T10:29:31.6565638Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:29:31.6613187Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:29:31.6614007Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:29:31.7418974Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:29:31.7433994Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:29:23.5490064Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:29:23.5490501Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:29:23.5527024Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:29:23.5527259Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:29:23.6678560Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:29:28.4229100Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (13 URLs, 0 videos, 5 image pages).
Lint and production build	Production build	2026-09-23T10:29:29.4779153Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:29:29.7818142Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:29:29.7931451Z ^[[2K
Lint and production build	Production build	2026-09-23T10:29:31.6549250Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:29:31.6560411Z ^[[31m✗^[[39m Build failed in 1.87s
Lint and production build	Production build	2026-09-23T10:29:31.6565266Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:29:31.6565638Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:29:31.6565778Z 
Lint and production build	Production build	2026-09-23T10:29:31.6565962Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:29:31.6566458Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:29:31.6566803Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:29:31.6571248Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:29:31.6575297Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:29:31.6575636Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:29:31.6575908Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:29:31.6576024Z 
Lint and production build	Production build	2026-09-23T10:29:31.6576212Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:29:31.6576755Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:29:31.6577325Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:29:31.6589100Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:29:31.6598640Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:29:31.6599037Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:29:31.6605661Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:29:31.6611340Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:29:31.6612028Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:29:31.6612463Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:29:31.6612674Z ^[[31m
Lint and production build	Production build	2026-09-23T10:29:31.6613187Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:29:31.6614007Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:29:31.6614768Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:29:31.6615573Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:29:31.6616312Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:29:31.6617121Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:29:31.6617992Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:29:31.6618876Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:29:31.6619583Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:29:31.6620032Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:29:31.6620245Z }^[[39m
Lint and production build	Production build	2026-09-23T10:29:31.7418974Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:29:31.7433994Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:30:07Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:28:43Z","databaseId":35849016340,"displayTitle":"fix: contain catalogue resolver failures on public discovery pages","headSha":"b93ed1150b57d42743918aea6bc8286c948abea5","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T10:30:05Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849016340"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35849016340 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:30:19Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"failure","createdAt":"2026-09-23T10:29:48Z","databaseId":35849119078,"displayTitle":"fix: rebuild header branding spacing and responsive navigation","headSha":"3364c2f6f02d5ae5adad54b8769c8506d87cd737","jobs":[],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:30:11Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849119078"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35849119078 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:30:45Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:28:43Z","databaseId":35849016340,"displayTitle":"fix: contain catalogue resolver failures on public discovery pages","headSha":"b93ed1150b57d42743918aea6bc8286c948abea5","jobs":[{"completedAt":"2026-09-23T10:30:35Z","conclusion":"failure","databaseId":107142430877,"name":"Lint and production build","startedAt":"2026-09-23T10:30:15Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:30:18Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:30:17Z","status":"completed"},{"completedAt":"2026-09-23T10:30:18Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:30:18Z","status":"completed"},{"completedAt":"2026-09-23T10:30:20Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:30:18Z","status":"completed"},{"completedAt":"2026-09-23T10:30:22Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:30:20Z","status":"completed"},{"completedAt":"2026-09-23T10:30:33Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:30:22Z","status":"completed"},{"completedAt":"2026-09-23T10:30:33Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:30:33Z","status":"completed"},{"completedAt":"2026-09-23T10:30:33Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:30:33Z","status":"completed"},{"completedAt":"2026-09-23T10:30:33Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:30:33Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849016340/job/107142430877"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:30:36Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849016340"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:30:33.1065513Z ^[[31m✗^[[39m Build failed in 2.58s
Lint and production build	Production build	2026-09-23T10:30:33.1073996Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:30:33.1142745Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:30:33.1143853Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:30:33.2117312Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:30:33.2135703Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:30:22.3689600Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:30:22.3690100Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:30:22.3742170Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:30:22.3742665Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:30:22.3856112Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:30:28.6595652Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (13 URLs, 0 videos, 5 image pages).
Lint and production build	Production build	2026-09-23T10:30:30.0461709Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:30:30.5301421Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:30:30.5456922Z ^[[2K
Lint and production build	Production build	2026-09-23T10:30:33.1049155Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:30:33.1065513Z ^[[31m✗^[[39m Build failed in 2.58s
Lint and production build	Production build	2026-09-23T10:30:33.1073368Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:30:33.1073996Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:30:33.1074307Z 
Lint and production build	Production build	2026-09-23T10:30:33.1074955Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:30:33.1076041Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:30:33.1076634Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:30:33.1083751Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:30:33.1090224Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:30:33.1090666Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:30:33.1091014Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:30:33.1091155Z 
Lint and production build	Production build	2026-09-23T10:30:33.1091385Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:30:33.1092077Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:30:33.1092852Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:30:33.1109175Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:30:33.1122739Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:30:33.1123240Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:30:33.1132389Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:30:33.1140385Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:30:33.1141287Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:30:33.1141854Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:30:33.1142071Z ^[[31m
Lint and production build	Production build	2026-09-23T10:30:33.1142745Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:30:33.1143853Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:30:33.1145103Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:30:33.1146090Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:30:33.1147064Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:30:33.1148148Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:30:33.1149318Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:30:33.1150523Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:30:33.1151462Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:30:33.1152047Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:30:33.1152299Z }^[[39m
Lint and production build	Production build	2026-09-23T10:30:33.2117312Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:30:33.2135703Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:31:08Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"failure","createdAt":"2026-09-23T10:29:48Z","databaseId":35849119078,"displayTitle":"fix: rebuild header branding spacing and responsive navigation","headSha":"3364c2f6f02d5ae5adad54b8769c8506d87cd737","jobs":[{"completedAt":"2026-09-23T10:30:59Z","conclusion":"failure","databaseId":107142571217,"name":"Lint and production build","startedAt":"2026-09-23T10:30:38Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:30:41Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:30:39Z","status":"completed"},{"completedAt":"2026-09-23T10:30:43Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:30:41Z","status":"completed"},{"completedAt":"2026-09-23T10:30:44Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:30:43Z","status":"completed"},{"completedAt":"2026-09-23T10:30:47Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:30:44Z","status":"completed"},{"completedAt":"2026-09-23T10:30:57Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:30:47Z","status":"completed"},{"completedAt":"2026-09-23T10:30:57Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:30:57Z","status":"completed"},{"completedAt":"2026-09-23T10:30:57Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:30:57Z","status":"completed"},{"completedAt":"2026-09-23T10:30:57Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:30:57Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849119078/job/107142571217"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:31:00Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849119078"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:30:57.4692299Z ^[[31m✗^[[39m Build failed in 1.91s
Lint and production build	Production build	2026-09-23T10:30:57.4698536Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:30:57.4779329Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:30:57.4780729Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:30:57.5547876Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:30:57.5563464Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:30:47.9031141Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:30:47.9031523Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:30:47.9108969Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:30:47.9109316Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:30:47.9224584Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:30:53.6523305Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (13 URLs, 0 videos, 5 image pages).
Lint and production build	Production build	2026-09-23T10:30:55.2282651Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:30:55.5602399Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:30:55.5792309Z ^[[2K
Lint and production build	Production build	2026-09-23T10:30:57.4680820Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:30:57.4692299Z ^[[31m✗^[[39m Build failed in 1.91s
Lint and production build	Production build	2026-09-23T10:30:57.4698105Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:30:57.4698536Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:30:57.4698744Z 
Lint and production build	Production build	2026-09-23T10:30:57.4699049Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:30:57.4699749Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:30:57.4700210Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:30:57.4707724Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:30:57.4714283Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:30:57.4714791Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:30:57.4715203Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:30:57.4715368Z 
Lint and production build	Production build	2026-09-23T10:30:57.4715645Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:30:57.4716614Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:30:57.4717445Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:30:57.4737664Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:30:57.4754211Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:30:57.4754831Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:30:57.4766465Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:30:57.4776347Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:30:57.4777505Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:30:57.4778211Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:30:57.4778483Z ^[[31m
Lint and production build	Production build	2026-09-23T10:30:57.4779329Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:30:57.4780729Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:30:57.4782010Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:30:57.4783241Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:30:57.4784458Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:30:57.4785954Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:30:57.4787455Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:30:57.4788897Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:30:57.4790093Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:30:57.4790887Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:30:57.4791217Z }^[[39m
Lint and production build	Production build	2026-09-23T10:30:57.5547876Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:30:57.5563464Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:31:37Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-23T10:31:06Z","databaseId":35849251361,"displayTitle":"refactor: use Vimeo default player configuration globally","headSha":"aefa73621ab4a0a119b7ed5cc408a182a4e1806d","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:31:35Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849251361"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35849251361 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:32:11Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:31:06Z","databaseId":35849251361,"displayTitle":"refactor: use Vimeo default player configuration globally","headSha":"aefa73621ab4a0a119b7ed5cc408a182a4e1806d","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T10:32:04Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849251361"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35849251361 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:32:39Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:31:06Z","databaseId":35849251361,"displayTitle":"refactor: use Vimeo default player configuration globally","headSha":"aefa73621ab4a0a119b7ed5cc408a182a4e1806d","jobs":[{"completedAt":"2026-09-23T10:32:31Z","conclusion":"failure","databaseId":107143064801,"name":"Lint and production build","startedAt":"2026-09-23T10:32:12Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:32:15Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:32:14Z","status":"completed"},{"completedAt":"2026-09-23T10:32:16Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:32:15Z","status":"completed"},{"completedAt":"2026-09-23T10:32:18Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:32:16Z","status":"completed"},{"completedAt":"2026-09-23T10:32:20Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:32:18Z","status":"completed"},{"completedAt":"2026-09-23T10:32:28Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:32:20Z","status":"completed"},{"completedAt":"2026-09-23T10:32:28Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:32:28Z","status":"completed"},{"completedAt":"2026-09-23T10:32:29Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:32:28Z","status":"completed"},{"completedAt":"2026-09-23T10:32:29Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:32:29Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849251361/job/107143064801"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:32:32Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849251361"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:32:28.7023666Z ^[[31m✗^[[39m Build failed in 2.27s
Lint and production build	Production build	2026-09-23T10:32:28.7030832Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:32:28.7096563Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:32:28.7097778Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:32:28.8047482Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:32:28.8064700Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:32:20.1625654Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:32:20.1626010Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:32:20.1663430Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:32:20.1663730Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:32:20.1740819Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:32:24.5737271Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (13 URLs, 0 videos, 5 image pages).
Lint and production build	Production build	2026-09-23T10:32:26.0303338Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:32:26.4338327Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:32:26.4489744Z ^[[2K
Lint and production build	Production build	2026-09-23T10:32:28.7008874Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:32:28.7023666Z ^[[31m✗^[[39m Build failed in 2.27s
Lint and production build	Production build	2026-09-23T10:32:28.7030299Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:32:28.7030832Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:32:28.7031120Z 
Lint and production build	Production build	2026-09-23T10:32:28.7031513Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:32:28.7032208Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:32:28.7032661Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:32:28.7039194Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:32:28.7044566Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:32:28.7044989Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:32:28.7045349Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:32:28.7045491Z 
Lint and production build	Production build	2026-09-23T10:32:28.7045726Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:32:28.7046430Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:32:28.7047172Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:32:28.7063396Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:32:28.7076723Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:32:28.7077228Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:32:28.7086314Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:32:28.7094220Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:32:28.7095119Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:32:28.7095680Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:32:28.7095898Z ^[[31m
Lint and production build	Production build	2026-09-23T10:32:28.7096563Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:32:28.7097778Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:32:28.7098799Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:32:28.7099771Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:32:28.7100743Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:32:28.7101833Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:32:28.7103006Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:32:28.7104051Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:32:28.7105576Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:32:28.7106604Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:32:28.7106890Z }^[[39m
Lint and production build	Production build	2026-09-23T10:32:28.8047482Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:32:28.8064700Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:35:36Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T10:35:06Z","databaseId":35849637662,"displayTitle":"fix: keep preview title controls visible for 8 seconds after playback…","headSha":"428b814950fd7d9a1692081f419d1d1c534aaa1f","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107144128854,"name":"Lint and production build","startedAt":"2026-09-23T10:35:34Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849637662/job/107144128854"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:35:34Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849637662"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35849637662 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:36:06Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:35:06Z","databaseId":35849637662,"displayTitle":"fix: keep preview title controls visible for 8 seconds after playback…","headSha":"428b814950fd7d9a1692081f419d1d1c534aaa1f","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107144283494,"name":"Lint and production build","startedAt":"2026-09-23T10:36:04Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849637662/job/107144283494"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:36:04Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849637662"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35849637662 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:36:34Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:35:06Z","databaseId":35849637662,"displayTitle":"fix: keep preview title controls visible for 8 seconds after playback…","headSha":"428b814950fd7d9a1692081f419d1d1c534aaa1f","jobs":[{"completedAt":"2026-09-23T10:36:24Z","conclusion":"failure","databaseId":107144283494,"name":"Lint and production build","startedAt":"2026-09-23T10:36:06Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:36:08Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:36:07Z","status":"completed"},{"completedAt":"2026-09-23T10:36:08Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:36:08Z","status":"completed"},{"completedAt":"2026-09-23T10:36:10Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:36:08Z","status":"completed"},{"completedAt":"2026-09-23T10:36:11Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:36:10Z","status":"completed"},{"completedAt":"2026-09-23T10:36:23Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:36:11Z","status":"completed"},{"completedAt":"2026-09-23T10:36:23Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:36:23Z","status":"completed"},{"completedAt":"2026-09-23T10:36:23Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:36:23Z","status":"completed"},{"completedAt":"2026-09-23T10:36:23Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:36:23Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849637662/job/107144283494"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:36:25Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849637662"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:36:22.9854311Z ^[[31m✗^[[39m Build failed in 2.36s
Lint and production build	Production build	2026-09-23T10:36:22.9861247Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:36:22.9921913Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:36:22.9923005Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:36:23.0909587Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:36:23.0926647Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:36:11.9363736Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:36:11.9364058Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:36:11.9405872Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:36:11.9406168Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:36:11.9496432Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:36:18.8815038Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (13 URLs, 0 videos, 5 image pages).
Lint and production build	Production build	2026-09-23T10:36:20.2285993Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:36:20.6251374Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:36:20.6401156Z ^[[2K
Lint and production build	Production build	2026-09-23T10:36:22.9840003Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T10:36:22.9854311Z ^[[31m✗^[[39m Build failed in 2.36s
Lint and production build	Production build	2026-09-23T10:36:22.9860751Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:36:22.9861247Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T10:36:22.9861502Z 
Lint and production build	Production build	2026-09-23T10:36:22.9861860Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T10:36:22.9862512Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:36:22.9862964Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:36:22.9868884Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T10:36:22.9873878Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T10:36:22.9874306Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T10:36:22.9874643Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:36:22.9874786Z 
Lint and production build	Production build	2026-09-23T10:36:22.9875012Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:36:22.9875689Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:36:22.9876422Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:36:22.9891374Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:36:22.9903356Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:36:22.9903856Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:36:22.9912309Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:36:22.9919571Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:36:22.9920463Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:36:22.9921014Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:36:22.9921243Z ^[[31m
Lint and production build	Production build	2026-09-23T10:36:22.9921913Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:36:22.9923005Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:36:22.9924014Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:36:22.9924940Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:36:22.9925893Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:36:22.9926916Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:36:22.9928015Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:36:22.9929273Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:36:22.9930170Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:36:22.9930756Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:36:22.9931026Z }^[[39m
Lint and production build	Production build	2026-09-23T10:36:23.0909587Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:36:23.0926647Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:42:00Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T10:41:25Z","databaseId":35850234513,"displayTitle":"fix: repair catalogue syntax after Vimeo-only cleanup","headSha":"4a2310d1ffc8213ea541fdb14cfc6b9fde7ac9bc","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T10:41:55Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850234513"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35850234513 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:42:17Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T10:41:31Z","databaseId":35850242645,"displayTitle":"fix: repair Vimeo preview template syntax","headSha":"348f395a336a2e5081dd6ab326950b9f4bd1fc9d","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T10:42:14Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850242645"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35850242645 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:42:33Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T10:41:25Z","databaseId":35850234513,"displayTitle":"fix: repair catalogue syntax after Vimeo-only cleanup","headSha":"4a2310d1ffc8213ea541fdb14cfc6b9fde7ac9bc","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T10:42:31Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850234513"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35850234513 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:42:51Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T10:41:31Z","databaseId":35850242645,"displayTitle":"fix: repair Vimeo preview template syntax","headSha":"348f395a336a2e5081dd6ab326950b9f4bd1fc9d","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T10:42:49Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850242645"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35850242645 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T10:43:12Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:41:25Z","databaseId":35850234513,"displayTitle":"fix: repair catalogue syntax after Vimeo-only cleanup","headSha":"4a2310d1ffc8213ea541fdb14cfc6b9fde7ac9bc","jobs":[{"completedAt":"2026-09-23T10:43:01Z","conclusion":"failure","databaseId":107146301114,"name":"Lint and production build","startedAt":"2026-09-23T10:42:45Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:42:46Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:42:45Z","status":"completed"},{"completedAt":"2026-09-23T10:42:47Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:42:46Z","status":"completed"},{"completedAt":"2026-09-23T10:42:48Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:42:47Z","status":"completed"},{"completedAt":"2026-09-23T10:42:49Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:42:48Z","status":"completed"},{"completedAt":"2026-09-23T10:42:59Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:42:49Z","status":"completed"},{"completedAt":"2026-09-23T10:42:59Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:42:59Z","status":"completed"},{"completedAt":"2026-09-23T10:42:59Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:42:59Z","status":"completed"},{"completedAt":"2026-09-23T10:42:59Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:42:59Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850234513/job/107146301114"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:43:01Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850234513"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:42:59.4780654Z ^[[31m✗^[[39m Build failed in 2.50s
Lint and production build	Production build	2026-09-23T10:42:59.4788212Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T10:42:59.4847295Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:42:59.4848435Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:42:59.5805131Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:42:59.5823322Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:42:49.8187287Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:42:49.8187627Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:42:49.8225349Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:42:49.8225642Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:42:49.8302123Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:42:55.1651017Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (13 URLs, 0 videos, 5 image pages).
Lint and production build	Production build	2026-09-23T10:42:56.5019185Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:42:56.9800825Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:42:56.9956844Z ^[[2K
Lint and production build	Production build	2026-09-23T10:42:59.4766822Z transforming...✓ 1987 modules transformed.
Lint and production build	Production build	2026-09-23T10:42:59.4780654Z ^[[31m✗^[[39m Build failed in 2.50s
Lint and production build	Production build	2026-09-23T10:42:59.4787471Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:42:59.4788212Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T10:42:59.4788631Z 
Lint and production build	Production build	2026-09-23T10:42:59.4789228Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T10:42:59.4790478Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:42:59.4791565Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:42:59.4812614Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:42:59.4827071Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T10:42:59.4827588Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T10:42:59.4836829Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T10:42:59.4844751Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T10:42:59.4845667Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T10:42:59.4846239Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T10:42:59.4846619Z ^[[31m
Lint and production build	Production build	2026-09-23T10:42:59.4847295Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:42:59.4848435Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:42:59.4849456Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:42:59.4850439Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:42:59.4851437Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:42:59.4852553Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:42:59.4854032Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:42:59.4855099Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:42:59.4856063Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:42:59.4856693Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:42:59.4856941Z }^[[39m
Lint and production build	Production build	2026-09-23T10:42:59.5805131Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:42:59.5823322Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T10:43:37Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T10:41:31Z","databaseId":35850242645,"displayTitle":"fix: repair Vimeo preview template syntax","headSha":"348f395a336a2e5081dd6ab326950b9f4bd1fc9d","jobs":[{"completedAt":"2026-09-23T10:43:22Z","conclusion":"failure","databaseId":107146392270,"name":"Lint and production build","startedAt":"2026-09-23T10:43:05Z","status":"completed","steps":[{"completedAt":"2026-09-23T10:43:07Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T10:43:06Z","status":"completed"},{"completedAt":"2026-09-23T10:43:08Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T10:43:07Z","status":"completed"},{"completedAt":"2026-09-23T10:43:10Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T10:43:08Z","status":"completed"},{"completedAt":"2026-09-23T10:43:11Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T10:43:10Z","status":"completed"},{"completedAt":"2026-09-23T10:43:20Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T10:43:11Z","status":"completed"},{"completedAt":"2026-09-23T10:43:20Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T10:43:20Z","status":"completed"},{"completedAt":"2026-09-23T10:43:20Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T10:43:20Z","status":"completed"},{"completedAt":"2026-09-23T10:43:20Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T10:43:20Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850242645/job/107146392270"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T10:43:23Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850242645"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T10:43:20.3625702Z ^[[31m✗^[[39m Build failed in 2.80s
Lint and production build	Production build	2026-09-23T10:43:20.3633550Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T10:43:20.3651058Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:43:20.3653190Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:43:20.4703214Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:43:20.4721038Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T10:43:11.6884932Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T10:43:11.6885303Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T10:43:11.6922124Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T10:43:11.6922418Z ##[endgroup]
Lint and production build	Production build	2026-09-23T10:43:11.7002942Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T10:43:15.5225215Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (13 URLs, 0 videos, 5 image pages).
Lint and production build	Production build	2026-09-23T10:43:16.8750442Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T10:43:17.5595527Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T10:43:17.5748923Z ^[[2K
Lint and production build	Production build	2026-09-23T10:43:20.2181064Z transforming...✓ 1988 modules transformed.
Lint and production build	Production build	2026-09-23T10:43:20.2954467Z rendering chunks...
Lint and production build	Production build	2026-09-23T10:43:20.3625702Z ^[[31m✗^[[39m Build failed in 2.80s
Lint and production build	Production build	2026-09-23T10:43:20.3632944Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T10:43:20.3633550Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T10:43:20.3634173Z 
Lint and production build	Production build	2026-09-23T10:43:20.3634926Z ^[[31m[MISSING_EXPORT] ^[[0m"youtubeEmbedUrl" is not exported by "src/lib/video-embeds.ts".
Lint and production build	Production build	2026-09-23T10:43:20.3636076Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitleDetail.tsx:9:26 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T10:43:20.3636819Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T10:43:20.3642795Z  ^[[38;5;246m9 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mh^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mT^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mU^[[0m^[[38;5;249mr^[[0m^[[38;5;249ml^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0myoutubeEmbedUrl^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mp^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mm^[[0m^[[38;5;249mb^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m-^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249mb^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249ms^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T10:43:20.3648285Z  ^[[38;5;240m  │^[[0m                          ───────┬───────  
Lint and production build	Production build	2026-09-23T10:43:20.3649044Z  ^[[38;5;240m  │^[[0m                                 ╰───────── Missing export
Lint and production build	Production build	2026-09-23T10:43:20.3649653Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-23T10:43:20.3649984Z ^[[31m
Lint and production build	Production build	2026-09-23T10:43:20.3651058Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T10:43:20.3653190Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T10:43:20.3655055Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T10:43:20.3656661Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T10:43:20.3658231Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T10:43:20.3659977Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T10:43:20.3662016Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T10:43:20.3663097Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T10:43:20.3664407Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T10:43:20.3665027Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T10:43:20.3665307Z }^[[39m
Lint and production build	Production build	2026-09-23T10:43:20.4703214Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T10:43:20.4721038Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T13:36:46Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-23T13:36:15Z","databaseId":35868222861,"displayTitle":"fix: remove stale previewId crash from title pages","headSha":"c465ab10c1f87f4e6354748f90ff4627d0641164","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T13:36:43Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35868222861"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35868222861 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T13:37:07Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-23T13:36:33Z","databaseId":35868255917,"displayTitle":"refactor: remove stale YouTube fields from title loader","headSha":"de3b1fe2f88c1eb75b14775096c373fb5ae36ea3","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T13:37:06Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35868255917"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35868255917 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T13:37:27Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T13:36:15Z","databaseId":35868222861,"displayTitle":"fix: remove stale previewId crash from title pages","headSha":"c465ab10c1f87f4e6354748f90ff4627d0641164","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T13:37:26Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35868222861"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35868222861 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T13:37:54Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T13:36:33Z","databaseId":35868255917,"displayTitle":"refactor: remove stale YouTube fields from title loader","headSha":"de3b1fe2f88c1eb75b14775096c373fb5ae36ea3","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T13:37:51Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35868255917"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35868255917 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T13:38:13Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T13:36:15Z","databaseId":35868222861,"displayTitle":"fix: remove stale previewId crash from title pages","headSha":"c465ab10c1f87f4e6354748f90ff4627d0641164","jobs":[{"completedAt":"2026-09-23T13:37:57Z","conclusion":"failure","databaseId":107205729374,"name":"Lint and production build","startedAt":"2026-09-23T13:37:42Z","status":"completed","steps":[{"completedAt":"2026-09-23T13:37:43Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T13:37:43Z","status":"completed"},{"completedAt":"2026-09-23T13:37:44Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T13:37:43Z","status":"completed"},{"completedAt":"2026-09-23T13:37:45Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T13:37:44Z","status":"completed"},{"completedAt":"2026-09-23T13:37:47Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T13:37:45Z","status":"completed"},{"completedAt":"2026-09-23T13:37:56Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T13:37:47Z","status":"completed"},{"completedAt":"2026-09-23T13:37:56Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T13:37:56Z","status":"completed"},{"completedAt":"2026-09-23T13:37:56Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T13:37:56Z","status":"completed"},{"completedAt":"2026-09-23T13:37:56Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T13:37:56Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35868222861/job/107205729374"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T13:37:58Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35868222861"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T13:37:56.2274106Z ^[[31m✗^[[39m Build failed in 2.38s
Lint and production build	Production build	2026-09-23T13:37:56.2279620Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T13:37:56.2301972Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T13:37:56.2303276Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T13:37:56.3298468Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T13:37:56.3316188Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T13:37:47.1868907Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T13:37:47.1869309Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T13:37:47.1908142Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T13:37:47.1908484Z ##[endgroup]
Lint and production build	Production build	2026-09-23T13:37:47.1989511Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T13:37:52.2348708Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T13:37:53.4601049Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T13:37:53.8480052Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T13:37:53.8633841Z ^[[2K
Lint and production build	Production build	2026-09-23T13:37:56.2261179Z transforming...✓ 1967 modules transformed.
Lint and production build	Production build	2026-09-23T13:37:56.2274106Z ^[[31m✗^[[39m Build failed in 2.38s
Lint and production build	Production build	2026-09-23T13:37:56.2279053Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T13:37:56.2279620Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T13:37:56.2279924Z 
Lint and production build	Production build	2026-09-23T13:37:56.2280251Z ^[[31m[builtin:vite-transform] ^[[0mExpected `}` but found `Identifier`
Lint and production build	Production build	2026-09-23T13:37:56.2281103Z      ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitleDetail.tsx:115:23 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T13:37:56.2281713Z      ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T13:37:56.2292317Z  ^[[38;5;246m115 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m<^[[0m^[[38;5;249mB^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m ^[[0msize^[[38;5;249m=^[[0m^[[38;5;249m"^[[0m^[[38;5;249ml^[[0m^[[38;5;249mg^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mi^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m"^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249my^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mN^[[0m^[[38;5;249ma^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m"^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249m-^[[0m^[[38;5;249ms^[[0m^[[38;5;249mp^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m-^[[0m^[[38;5;249m2^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249mm^[[0m^[[38;5;249m:^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249m-^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mC^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249m=^[[0m^[[38;5;249m{^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mg^[[0m^[[38;5;249mg^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mS^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m}^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249ms^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m<^[[0m^[[38;5;249mC^[[0m^[[38;5;249mh^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249m ^[[0m^[[38;5;249m/^[[0m^[[38;5;249m>^[[0m^[[38;5;249m ^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m<^[[0m^[[38;5;249mP^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249m ^[[0m^[[38;5;249m/^[[0m^[[38;5;249m>^[[0m^[[38;5;249m}^[[0m^[[38;5;249m{^[[0m^[[38;5;249ms^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249m ^[[0m^[[38;5;249mM^[[0m^[[38;5;249my^[[0m^[[38;5;249m ^[[0m^[[38;5;249mL^[[0m^[[38;5;249mi^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mM^[[0m^[[38;5;249my^[[0m^[[38;5;249m ^[[0m^[[38;5;249mL^[[0m^[[38;5;249mi^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m"^[[0m^[[38;5;249m}^[[0m^[[38;5;249m<^[[0m^[[38;5;249m/^[[0m^[[38;5;249mB^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m>^[[0m
Lint and production build	Production build	2026-09-23T13:37:56.2300198Z  ^[[38;5;240m    │^[[0m                       ──┬─  
Lint and production build	Production build	2026-09-23T13:37:56.2300607Z  ^[[38;5;240m    │^[[0m                         ╰─── `}` expected
Lint and production build	Production build	2026-09-23T13:37:56.2301044Z ^[[38;5;246m─────╯^[[0m
Lint and production build	Production build	2026-09-23T13:37:56.2301276Z ^[[31m
Lint and production build	Production build	2026-09-23T13:37:56.2301972Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T13:37:56.2303276Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T13:37:56.2304334Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T13:37:56.2305384Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T13:37:56.2306382Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T13:37:56.2307509Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T13:37:56.2308725Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T13:37:56.2309806Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T13:37:56.2310773Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T13:37:56.2311387Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T13:37:56.2311633Z }^[[39m
Lint and production build	Production build	2026-09-23T13:37:56.3298468Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T13:37:56.3316188Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T13:38:35Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T13:36:33Z","databaseId":35868255917,"displayTitle":"refactor: remove stale YouTube fields from title loader","headSha":"de3b1fe2f88c1eb75b14775096c373fb5ae36ea3","jobs":[{"completedAt":"2026-09-23T13:38:17Z","conclusion":"failure","databaseId":107205848094,"name":"Lint and production build","startedAt":"2026-09-23T13:38:01Z","status":"completed","steps":[{"completedAt":"2026-09-23T13:38:03Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T13:38:01Z","status":"completed"},{"completedAt":"2026-09-23T13:38:04Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T13:38:03Z","status":"completed"},{"completedAt":"2026-09-23T13:38:06Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T13:38:04Z","status":"completed"},{"completedAt":"2026-09-23T13:38:07Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T13:38:06Z","status":"completed"},{"completedAt":"2026-09-23T13:38:15Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T13:38:07Z","status":"completed"},{"completedAt":"2026-09-23T13:38:15Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T13:38:15Z","status":"completed"},{"completedAt":"2026-09-23T13:38:15Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T13:38:15Z","status":"completed"},{"completedAt":"2026-09-23T13:38:15Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T13:38:15Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35868255917/job/107205848094"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T13:38:17Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35868255917"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T13:38:15.4335487Z ^[[31m✗^[[39m Build failed in 2.31s
Lint and production build	Production build	2026-09-23T13:38:15.4340940Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T13:38:15.4362836Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T13:38:15.4363969Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T13:38:15.5339732Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T13:38:15.5357648Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T13:38:07.8405061Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T13:38:07.8405396Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T13:38:07.8441379Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T13:38:07.8441657Z ##[endgroup]
Lint and production build	Production build	2026-09-23T13:38:07.8525315Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T13:38:11.3902800Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T13:38:12.7381277Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T13:38:13.1225989Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T13:38:13.1418191Z ^[[2K
Lint and production build	Production build	2026-09-23T13:38:15.4323722Z transforming...✓ 1967 modules transformed.
Lint and production build	Production build	2026-09-23T13:38:15.4335487Z ^[[31m✗^[[39m Build failed in 2.31s
Lint and production build	Production build	2026-09-23T13:38:15.4340349Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T13:38:15.4340940Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T13:38:15.4341264Z 
Lint and production build	Production build	2026-09-23T13:38:15.4341614Z ^[[31m[builtin:vite-transform] ^[[0mExpected `}` but found `Identifier`
Lint and production build	Production build	2026-09-23T13:38:15.4342536Z      ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitleDetail.tsx:115:23 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T13:38:15.4343199Z      ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T13:38:15.4353263Z  ^[[38;5;246m115 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m<^[[0m^[[38;5;249mB^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m ^[[0msize^[[38;5;249m=^[[0m^[[38;5;249m"^[[0m^[[38;5;249ml^[[0m^[[38;5;249mg^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mi^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m"^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249my^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mN^[[0m^[[38;5;249ma^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m"^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249m-^[[0m^[[38;5;249ms^[[0m^[[38;5;249mp^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m-^[[0m^[[38;5;249m2^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249mm^[[0m^[[38;5;249m:^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249m-^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mC^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249m=^[[0m^[[38;5;249m{^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mg^[[0m^[[38;5;249mg^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mS^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m}^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249ms^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m<^[[0m^[[38;5;249mC^[[0m^[[38;5;249mh^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249m ^[[0m^[[38;5;249m/^[[0m^[[38;5;249m>^[[0m^[[38;5;249m ^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m<^[[0m^[[38;5;249mP^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249m ^[[0m^[[38;5;249m/^[[0m^[[38;5;249m>^[[0m^[[38;5;249m}^[[0m^[[38;5;249m{^[[0m^[[38;5;249ms^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249m ^[[0m^[[38;5;249mM^[[0m^[[38;5;249my^[[0m^[[38;5;249m ^[[0m^[[38;5;249mL^[[0m^[[38;5;249mi^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mM^[[0m^[[38;5;249my^[[0m^[[38;5;249m ^[[0m^[[38;5;249mL^[[0m^[[38;5;249mi^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m"^[[0m^[[38;5;249m}^[[0m^[[38;5;249m<^[[0m^[[38;5;249m/^[[0m^[[38;5;249mB^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m>^[[0m
Lint and production build	Production build	2026-09-23T13:38:15.4361192Z  ^[[38;5;240m    │^[[0m                       ──┬─  
Lint and production build	Production build	2026-09-23T13:38:15.4361605Z  ^[[38;5;240m    │^[[0m                         ╰─── `}` expected
Lint and production build	Production build	2026-09-23T13:38:15.4361945Z ^[[38;5;246m─────╯^[[0m
Lint and production build	Production build	2026-09-23T13:38:15.4362167Z ^[[31m
Lint and production build	Production build	2026-09-23T13:38:15.4362836Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T13:38:15.4363969Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T13:38:15.4365024Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T13:38:15.4366035Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T13:38:15.4367022Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T13:38:15.4368140Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T13:38:15.4369582Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T13:38:15.4370649Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T13:38:15.4371595Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T13:38:15.4372201Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T13:38:15.4372453Z }^[[39m
Lint and production build	Production build	2026-09-23T13:38:15.5339732Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T13:38:15.5357648Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T17:24:00Z

### Run metadata
~~~json
{"attempt":4,"conclusion":"failure","createdAt":"2026-09-23T10:41:25Z","databaseId":35850234513,"displayTitle":"fix: repair catalogue syntax after Vimeo-only cleanup","headSha":"4a2310d1ffc8213ea541fdb14cfc6b9fde7ac9bc","jobs":[{"completedAt":"2026-09-23T17:23:13Z","conclusion":"failure","databaseId":107297274291,"name":"Lint and production build","startedAt":"2026-09-23T17:22:55Z","status":"completed","steps":[{"completedAt":"2026-09-23T17:22:56Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:22:55Z","status":"completed"},{"completedAt":"2026-09-23T17:22:57Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:22:56Z","status":"completed"},{"completedAt":"2026-09-23T17:22:59Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:22:57Z","status":"completed"},{"completedAt":"2026-09-23T17:23:01Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:22:59Z","status":"completed"},{"completedAt":"2026-09-23T17:23:10Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T17:23:01Z","status":"completed"},{"completedAt":"2026-09-23T17:23:10Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T17:23:10Z","status":"completed"},{"completedAt":"2026-09-23T17:23:10Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T17:23:10Z","status":"completed"},{"completedAt":"2026-09-23T17:23:10Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T17:23:10Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850234513/job/107297274291"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T17:23:13Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850234513"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T17:23:09.9725981Z ^[[31m✗^[[39m Build failed in 2.53s
Lint and production build	Production build	2026-09-23T17:23:09.9732026Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:23:09.9807508Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:23:09.9808830Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:23:10.0787342Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:23:10.0807900Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T17:23:01.1118815Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T17:23:01.1119204Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T17:23:01.1159423Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T17:23:01.1159805Z ##[endgroup]
Lint and production build	Production build	2026-09-23T17:23:01.1241034Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T17:23:05.4722027Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 48 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T17:23:06.9739167Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T17:23:07.4378145Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T17:23:07.4532446Z ^[[2K
Lint and production build	Production build	2026-09-23T17:23:09.9709832Z transforming...✓ 1987 modules transformed.
Lint and production build	Production build	2026-09-23T17:23:09.9725981Z ^[[31m✗^[[39m Build failed in 2.53s
Lint and production build	Production build	2026-09-23T17:23:09.9731194Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T17:23:09.9732026Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:23:09.9732527Z 
Lint and production build	Production build	2026-09-23T17:23:09.9733227Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T17:23:09.9735375Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T17:23:09.9736946Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T17:23:09.9763306Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T17:23:09.9782148Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T17:23:09.9782832Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T17:23:09.9794576Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T17:23:09.9804533Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T17:23:09.9805776Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T17:23:09.9806489Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T17:23:09.9806746Z ^[[31m
Lint and production build	Production build	2026-09-23T17:23:09.9807508Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:23:09.9808830Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:23:09.9810161Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T17:23:09.9811332Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T17:23:09.9812495Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T17:23:09.9813806Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T17:23:09.9815321Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T17:23:09.9816858Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T17:23:09.9818011Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T17:23:09.9818705Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T17:23:09.9818996Z }^[[39m
Lint and production build	Production build	2026-09-23T17:23:10.0787342Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:23:10.0807900Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T17:24:30Z

### Run metadata
~~~json
{"attempt":4,"conclusion":"failure","createdAt":"2026-09-23T06:08:50Z","databaseId":35825424383,"displayTitle":"Fix admin navigation when customer session expires","headSha":"5c3fa928b55c996bcf43b7bed15b6c9c8526a022","jobs":[{"completedAt":"2026-09-23T17:24:17Z","conclusion":"failure","databaseId":107297684608,"name":"Lint and production build","startedAt":"2026-09-23T17:24:00Z","status":"completed","steps":[{"completedAt":"2026-09-23T17:24:02Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:24:01Z","status":"completed"},{"completedAt":"2026-09-23T17:24:03Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:24:02Z","status":"completed"},{"completedAt":"2026-09-23T17:24:05Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:24:03Z","status":"completed"},{"completedAt":"2026-09-23T17:24:06Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:24:05Z","status":"completed"},{"completedAt":"2026-09-23T17:24:15Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T17:24:06Z","status":"completed"},{"completedAt":"2026-09-23T17:24:15Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T17:24:15Z","status":"completed"},{"completedAt":"2026-09-23T17:24:16Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T17:24:15Z","status":"completed"},{"completedAt":"2026-09-23T17:24:16Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T17:24:16Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825424383/job/107297684608"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T17:24:18Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35825424383"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T17:24:15.7156023Z ^[[31m✗^[[39m Build failed in 2.69s
Lint and production build	Production build	2026-09-23T17:24:15.7164344Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:24:15.7178722Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:24:15.7181073Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:24:15.8178670Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:24:15.8195260Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T17:24:06.5607793Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T17:24:06.5608113Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T17:24:06.5644786Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T17:24:06.5645066Z ##[endgroup]
Lint and production build	Production build	2026-09-23T17:24:06.5727647Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T17:24:11.3741779Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 48 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T17:24:12.5868959Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T17:24:13.0208763Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T17:24:13.0378095Z ^[[2K
Lint and production build	Production build	2026-09-23T17:24:15.5514826Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-23T17:24:15.6401766Z rendering chunks...
Lint and production build	Production build	2026-09-23T17:24:15.7156023Z ^[[31m✗^[[39m Build failed in 2.69s
Lint and production build	Production build	2026-09-23T17:24:15.7163449Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T17:24:15.7164344Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:24:15.7164855Z 
Lint and production build	Production build	2026-09-23T17:24:15.7165635Z ^[[31m[MISSING_EXPORT] ^[[0m"publicCommerceSettings" is not exported by "src/lib/avant-backend.ts".
Lint and production build	Production build	2026-09-23T17:24:15.7166957Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/site/Pricing.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T17:24:15.7167847Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T17:24:15.7172089Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mpublicCommerceSettings^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m-^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T17:24:15.7175434Z  ^[[38;5;240m  │^[[0m          ───────────┬──────────  
Lint and production build	Production build	2026-09-23T17:24:15.7176414Z  ^[[38;5;240m  │^[[0m                     ╰──────────── Missing export
Lint and production build	Production build	2026-09-23T17:24:15.7177098Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-23T17:24:15.7177517Z ^[[31m
Lint and production build	Production build	2026-09-23T17:24:15.7178722Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:24:15.7181073Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:24:15.7182975Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T17:24:15.7184817Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T17:24:15.7186656Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T17:24:15.7188706Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T17:24:15.7191449Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T17:24:15.7193430Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T17:24:15.7195244Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T17:24:15.7196569Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T17:24:15.7197042Z }^[[39m
Lint and production build	Production build	2026-09-23T17:24:15.8178670Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:24:15.8195260Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T17:24:45Z

### Run metadata
~~~json
{"attempt":4,"conclusion":"failure","createdAt":"2026-09-22T20:50:31Z","databaseId":35782881076,"displayTitle":"Sync Lovable payment recovery and admin access","headSha":"4f5ab3ebe3ffec83c2c73276d47eb75af91f3099","jobs":[{"completedAt":"2026-09-23T17:24:35Z","conclusion":"failure","databaseId":107297816181,"name":"Lint and production build","startedAt":"2026-09-23T17:24:20Z","status":"completed","steps":[{"completedAt":"2026-09-23T17:24:22Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:24:20Z","status":"completed"},{"completedAt":"2026-09-23T17:24:23Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:24:22Z","status":"completed"},{"completedAt":"2026-09-23T17:24:24Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:24:23Z","status":"completed"},{"completedAt":"2026-09-23T17:24:26Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:24:24Z","status":"completed"},{"completedAt":"2026-09-23T17:24:33Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T17:24:26Z","status":"completed"},{"completedAt":"2026-09-23T17:24:33Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T17:24:33Z","status":"completed"},{"completedAt":"2026-09-23T17:24:33Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T17:24:33Z","status":"completed"},{"completedAt":"2026-09-23T17:24:33Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T17:24:33Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35782881076/job/107297816181"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T17:24:36Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35782881076"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T17:24:33.3390351Z ^[[31m✗^[[39m Build failed in 1.43s
Lint and production build	Production build	2026-09-23T17:24:33.3398059Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:24:33.3404306Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:24:33.3405289Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:24:33.4199707Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:24:33.4214174Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T17:24:26.0850192Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T17:24:26.0850365Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T17:24:26.0901063Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T17:24:26.0901266Z ##[endgroup]
Lint and production build	Production build	2026-09-23T17:24:26.0987232Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T17:24:31.0361415Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 48 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T17:24:31.6846230Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T17:24:31.9091240Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T17:24:31.9173731Z ^[[2K
Lint and production build	Production build	2026-09-23T17:24:33.2490765Z transforming...✓ 1989 modules transformed.
Lint and production build	Production build	2026-09-23T17:24:33.2995296Z rendering chunks...
Lint and production build	Production build	2026-09-23T17:24:33.3390351Z ^[[31m✗^[[39m Build failed in 1.43s
Lint and production build	Production build	2026-09-23T17:24:33.3397241Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T17:24:33.3398059Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:24:33.3398236Z 
Lint and production build	Production build	2026-09-23T17:24:33.3398551Z ^[[31m[MISSING_EXPORT] ^[[0m"publicCommerceSettings" is not exported by "src/lib/avant-backend.ts".
Lint and production build	Production build	2026-09-23T17:24:33.3399200Z    ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/site/Pricing.tsx:5:10 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T17:24:33.3399595Z    ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T17:24:33.3401360Z  ^[[38;5;246m5 │^[[0m ^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0mpublicCommerceSettings^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m ^[[0m^[[38;5;249mf^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m@^[[0m^[[38;5;249m/^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mb^[[0m^[[38;5;249m/^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m-^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249m"^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T17:24:33.3402889Z  ^[[38;5;240m  │^[[0m          ───────────┬──────────  
Lint and production build	Production build	2026-09-23T17:24:33.3403229Z  ^[[38;5;240m  │^[[0m                     ╰──────────── Missing export
Lint and production build	Production build	2026-09-23T17:24:33.3403515Z ^[[38;5;246m───╯^[[0m
Lint and production build	Production build	2026-09-23T17:24:33.3403700Z ^[[31m
Lint and production build	Production build	2026-09-23T17:24:33.3404306Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:24:33.3405289Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:24:33.3406174Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T17:24:33.3407161Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T17:24:33.3408043Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T17:24:33.3408997Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T17:24:33.3410300Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T17:24:33.3411214Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T17:24:33.3412124Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T17:24:33.3412853Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T17:24:33.3413085Z }^[[39m
Lint and production build	Production build	2026-09-23T17:24:33.4199707Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:24:33.4214174Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T17:25:06Z

### Run metadata
~~~json
{"attempt":5,"conclusion":"failure","createdAt":"2026-09-23T10:41:25Z","databaseId":35850234513,"displayTitle":"fix: repair catalogue syntax after Vimeo-only cleanup","headSha":"4a2310d1ffc8213ea541fdb14cfc6b9fde7ac9bc","jobs":[{"completedAt":"2026-09-23T17:24:55Z","conclusion":"failure","databaseId":107297947895,"name":"Lint and production build","startedAt":"2026-09-23T17:24:40Z","status":"completed","steps":[{"completedAt":"2026-09-23T17:24:42Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:24:41Z","status":"completed"},{"completedAt":"2026-09-23T17:24:42Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:24:42Z","status":"completed"},{"completedAt":"2026-09-23T17:24:44Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:24:42Z","status":"completed"},{"completedAt":"2026-09-23T17:24:45Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:24:44Z","status":"completed"},{"completedAt":"2026-09-23T17:24:54Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T17:24:45Z","status":"completed"},{"completedAt":"2026-09-23T17:24:54Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T17:24:54Z","status":"completed"},{"completedAt":"2026-09-23T17:24:54Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T17:24:54Z","status":"completed"},{"completedAt":"2026-09-23T17:24:54Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T17:24:54Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850234513/job/107297947895"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T17:24:57Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35850234513"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T17:24:54.1318001Z ^[[31m✗^[[39m Build failed in 1.75s
Lint and production build	Production build	2026-09-23T17:24:54.1323165Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:24:54.1364202Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:24:54.1365029Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:24:54.2143872Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:24:54.2158800Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T17:24:45.6843514Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T17:24:45.6843797Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T17:24:45.6877104Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T17:24:45.6877339Z ##[endgroup]
Lint and production build	Production build	2026-09-23T17:24:45.6942520Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T17:24:50.9391509Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 48 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T17:24:52.0848666Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T17:24:52.3823699Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T17:24:52.3939015Z ^[[2K
Lint and production build	Production build	2026-09-23T17:24:54.1305049Z transforming...✓ 1987 modules transformed.
Lint and production build	Production build	2026-09-23T17:24:54.1318001Z ^[[31m✗^[[39m Build failed in 1.75s
Lint and production build	Production build	2026-09-23T17:24:54.1322648Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T17:24:54.1323165Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:24:54.1323355Z 
Lint and production build	Production build	2026-09-23T17:24:54.1323633Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T17:24:54.1324448Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T17:24:54.1325107Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T17:24:54.1339610Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T17:24:54.1349411Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T17:24:54.1349819Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T17:24:54.1356490Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T17:24:54.1362222Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T17:24:54.1363024Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T17:24:54.1363468Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T17:24:54.1363662Z ^[[31m
Lint and production build	Production build	2026-09-23T17:24:54.1364202Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:24:54.1365029Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:24:54.1365900Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T17:24:54.1366619Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T17:24:54.1367337Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T17:24:54.1368139Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T17:24:54.1369122Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T17:24:54.1369892Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T17:24:54.1370624Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T17:24:54.1371086Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T17:24:54.1371299Z }^[[39m
Lint and production build	Production build	2026-09-23T17:24:54.2143872Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:24:54.2158800Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T17:25:27Z

### Run metadata
~~~json
{"attempt":5,"conclusion":"failure","createdAt":"2026-09-23T10:31:06Z","databaseId":35849251361,"displayTitle":"refactor: use Vimeo default player configuration globally","headSha":"aefa73621ab4a0a119b7ed5cc408a182a4e1806d","jobs":[{"completedAt":"2026-09-23T17:25:16Z","conclusion":"failure","databaseId":107298066789,"name":"Lint and production build","startedAt":"2026-09-23T17:24:59Z","status":"completed","steps":[{"completedAt":"2026-09-23T17:25:01Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:24:59Z","status":"completed"},{"completedAt":"2026-09-23T17:25:02Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:25:01Z","status":"completed"},{"completedAt":"2026-09-23T17:25:04Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:25:02Z","status":"completed"},{"completedAt":"2026-09-23T17:25:06Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:25:04Z","status":"completed"},{"completedAt":"2026-09-23T17:25:14Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T17:25:06Z","status":"completed"},{"completedAt":"2026-09-23T17:25:14Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T17:25:14Z","status":"completed"},{"completedAt":"2026-09-23T17:25:14Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T17:25:14Z","status":"completed"},{"completedAt":"2026-09-23T17:25:14Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T17:25:14Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849251361/job/107298066789"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T17:25:17Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35849251361"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T17:25:14.4945332Z ^[[31m✗^[[39m Build failed in 1.75s
Lint and production build	Production build	2026-09-23T17:25:14.4950783Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T17:25:14.5003776Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:25:14.5005114Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:25:14.5793037Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:25:14.5807377Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T17:25:06.4914669Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T17:25:06.4915062Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T17:25:06.4958294Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T17:25:06.4958629Z ##[endgroup]
Lint and production build	Production build	2026-09-23T17:25:06.6780752Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T17:25:11.1876578Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 48 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T17:25:12.4413572Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T17:25:12.7381521Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T17:25:12.7494858Z ^[[2K
Lint and production build	Production build	2026-09-23T17:25:14.4934214Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T17:25:14.4945332Z ^[[31m✗^[[39m Build failed in 1.75s
Lint and production build	Production build	2026-09-23T17:25:14.4950426Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T17:25:14.4950783Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T17:25:14.4950918Z 
Lint and production build	Production build	2026-09-23T17:25:14.4951111Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T17:25:14.4951597Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T17:25:14.4951954Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T17:25:14.4956453Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T17:25:14.4961804Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T17:25:14.4962318Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T17:25:14.4962725Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T17:25:14.4962891Z 
Lint and production build	Production build	2026-09-23T17:25:14.4963167Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T17:25:14.4963987Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T17:25:14.4964822Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T17:25:14.4977753Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T17:25:14.4987590Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T17:25:14.4987981Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T17:25:14.4994692Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T17:25:14.5000847Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T17:25:14.5001972Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T17:25:14.5002665Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T17:25:14.5002934Z ^[[31m
Lint and production build	Production build	2026-09-23T17:25:14.5003776Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:25:14.5005114Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:25:14.5006228Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T17:25:14.5007390Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T17:25:14.5008659Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T17:25:14.5010189Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T17:25:14.5011683Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T17:25:14.5012980Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T17:25:14.5014154Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T17:25:14.5015015Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T17:25:14.5015329Z }^[[39m
Lint and production build	Production build	2026-09-23T17:25:14.5793037Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:25:14.5807377Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T17:25:45Z

### Run metadata
~~~json
{"attempt":5,"conclusion":"failure","createdAt":"2026-09-23T10:20:17Z","databaseId":35848208732,"displayTitle":"refactor: remove YouTube from catalogue mapping","headSha":"356c192ca9bf3391e56129aad5d6a6d33fb58b6b","jobs":[{"completedAt":"2026-09-23T17:25:35Z","conclusion":"failure","databaseId":107298195286,"name":"Lint and production build","startedAt":"2026-09-23T17:25:19Z","status":"completed","steps":[{"completedAt":"2026-09-23T17:25:21Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:25:20Z","status":"completed"},{"completedAt":"2026-09-23T17:25:23Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:25:21Z","status":"completed"},{"completedAt":"2026-09-23T17:25:24Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:25:23Z","status":"completed"},{"completedAt":"2026-09-23T17:25:25Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:25:24Z","status":"completed"},{"completedAt":"2026-09-23T17:25:33Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T17:25:25Z","status":"completed"},{"completedAt":"2026-09-23T17:25:33Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T17:25:33Z","status":"completed"},{"completedAt":"2026-09-23T17:25:33Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T17:25:33Z","status":"completed"},{"completedAt":"2026-09-23T17:25:33Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T17:25:33Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848208732/job/107298195286"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T17:25:35Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35848208732"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T17:25:33.5605171Z ^[[31m✗^[[39m Build failed in 2.33s
Lint and production build	Production build	2026-09-23T17:25:33.5678581Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T17:25:33.5781517Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:25:33.5783330Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:25:33.6745466Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:25:33.6763191Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T17:25:25.7966786Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T17:25:25.7967378Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T17:25:25.8009563Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T17:25:25.8009856Z ##[endgroup]
Lint and production build	Production build	2026-09-23T17:25:25.8095338Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T17:25:29.6028194Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 48 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T17:25:30.8279684Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T17:25:31.2287854Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T17:25:31.2428673Z ^[[2K
Lint and production build	Production build	2026-09-23T17:25:33.5589431Z transforming...✓ 1986 modules transformed.
Lint and production build	Production build	2026-09-23T17:25:33.5605171Z ^[[31m✗^[[39m Build failed in 2.33s
Lint and production build	Production build	2026-09-23T17:25:33.5677935Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T17:25:33.5678581Z ^[[31mBuild failed with 2 errors:
Lint and production build	Production build	2026-09-23T17:25:33.5678858Z 
Lint and production build	Production build	2026-09-23T17:25:33.5679180Z ^[[31m[builtin:vite-transform] ^[[0mInvalid Unicode escape sequence
Lint and production build	Production build	2026-09-23T17:25:33.5680054Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/lib/catalogue.ts:78:45 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T17:25:33.5680738Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T17:25:33.5690341Z  ^[[38;5;246m78 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mT^[[0m^[[38;5;249my^[[0m^[[38;5;249mp^[[0m^[[38;5;249me^[[0m^[[38;5;249m ^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m=^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249mm^[[0m^[[38;5;249mo^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249m"^[[0m^[[38;5;249m ^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m\^[[0mn^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m ^[[0m^[[38;5;249m?^[[0m^[[38;5;249m ^[[0m^[[38;5;249m[^[[0m^[[38;5;249m{^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249md^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249m"^[[0m^[[38;5;249m"^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249mI^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mc^[[0m^[[38;5;249me^[[0m^[[38;5;249ms^[[0m^[[38;5;249ms^[[0m^[[38;5;249mR^[[0m^[[38;5;249me^[[0m^[[38;5;249mq^[[0m^[[38;5;249mu^[[0m^[[38;5;249mi^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m,^[[0m^[[38;5;249m ^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249mg^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249my^[[0m^[[38;5;249mK^[[0m^[[38;5;249me^[[0m^[[38;5;249my^[[0m^[[38;5;249m:^[[0m^[[38;5;249m ^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m ^[[0m^[[38;5;249m}^[[0m^[[38;5;249m]^[[0m
Lint and production build	Production build	2026-09-23T17:25:33.5698825Z  ^[[38;5;240m   │^[[0m                                             ┬  
Lint and production build	Production build	2026-09-23T17:25:33.5699494Z  ^[[38;5;240m   │^[[0m                                             ╰── 
Lint and production build	Production build	2026-09-23T17:25:33.5700032Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T17:25:33.5700253Z 
Lint and production build	Production build	2026-09-23T17:25:33.5700614Z ^[[31m[builtin:vite-transform] ^[[0mExpected `,` or `)` but found `;`
Lint and production build	Production build	2026-09-23T17:25:33.5701701Z     ^[[38;5;246m╭^[[0m^[[38;5;246m─^[[0m^[[38;5;246m[^[[0m src/components/streaming/TitlePreviewModal.tsx:38:199 ^[[38;5;246m]^[[0m
Lint and production build	Production build	2026-09-23T17:25:33.5702773Z     ^[[38;5;246m│^[[0m
Lint and production build	Production build	2026-09-23T17:25:33.5728669Z  ^[[38;5;246m37 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m=^[[0m^[[38;5;249m!^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mv^[[0m^[[38;5;249me^[[0m^[[38;5;249ml^[[0m^[[38;5;249mM^[[0m^[[38;5;249mo^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249m&^[[0m^[[38;5;249m&^[[0m^[[38;5;249m!^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249mo^[[0m^[[38;5;249ms^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249mg^[[0m^[[38;5;249m?^[[0m^[[38;5;249m(^[[0m^[[38;5;249mn^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mm^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mz^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mD^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mi^[[0m^[[38;5;249mc^[[0m^[[38;5;249ma^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m|^[[0m^[[38;5;249m|^[[0m(^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mp^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m?^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249mh^[[0m^[[38;5;249mt^[[0m^[[38;5;249mt^[[0m^[[38;5;249mp^[[0m^[[38;5;249ms^[[0m^[[38;5;249m:^[[0m^[[38;5;249m/^[[0m^[[38;5;249m/^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249m.^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mm^[[0m^[[38;5;249m/^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249md^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m/^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mV^[[0m^[[38;5;249mi^[[0m^[[38;5;249mm^[[0m^[[38;5;249me^[[0m^[[38;5;249mo^[[0m^[[38;5;249m}^[[0m^[[38;5;249m?^[[0m^[[38;5;249ma^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249mo^[[0m^[[38;5;249mp^[[0m^[[38;5;249ml^[[0m^[[38;5;249ma^[[0m^[[38;5;249my^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m=^[[0m^[[38;5;249m\^[[0m^[[38;5;249m$^[[0m^[[38;5;249m{^[[0m^[[38;5;249mm^[[0m^[[38;5;249mu^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249md^[[0m^[[38;5;249m?^[[0m^[[38;5;249m1^[[0m^[[38;5;249m:^[[0m^[[38;5;249m0^[[0m^[[38;5;249m}^[[0m^[[38;5;249m&^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249ms^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249md^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m1^[[0m^[[38;5;249m&^[[0m^[[38;5;249mt^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mb^[[0m^[[38;5;249my^[[0m^[[38;5;249ml^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249me^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m&^[[0m^[[38;5;249mp^[[0m^[[38;5;249mo^[[0m^[[38;5;249mr^[[0m^[[38;5;249mt^[[0m^[[38;5;249mr^[[0m^[[38;5;249ma^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249m0^[[0m^[[38;5;249m\^[[0m^[[38;5;249m`^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m)^[[0m^[[38;5;249m)^[[0m^[[38;5;249m:^[[0m^[[38;5;249mn^[[0m^[[38;5;249mu^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249m;^[[0m
Lint and production build	Production build	2026-09-23T17:25:33.5749596Z  ^[[38;5;240m   │^[[0m                                                                 ┬  
Lint and production build	Production build	2026-09-23T17:25:33.5750401Z  ^[[38;5;240m   │^[[0m                                                                 ╰── Opened here
Lint and production build	Production build	2026-09-23T17:25:33.5765025Z  ^[[38;5;246m38 │^[[0m ^[[38;5;249m ^[[0m^[[38;5;249mu^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mE^[[0m^[[38;5;249mf^[[0m^[[38;5;249mf^[[0m^[[38;5;249me^[[0m^[[38;5;249mc^[[0m^[[38;5;249mt^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249m{^[[0m^[[38;5;249mi^[[0m^[[38;5;249mf^[[0m^[[38;5;249m(^[[0m^[[38;5;249m!^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m;^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mc^[[0m^[[38;5;249mo^[[0m^[[38;5;249mn^[[0m^[[38;5;249ms^[[0m^[[38;5;249mt^[[0m^[[38;5;249m ^[[0m^[[38;5;249mt^[[0m^[[38;5;249m=^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249ms^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mF^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mC^[[0m^[[38;5;249my^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249m(^[[0m^[[38;5;249mv^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mv^[[0m^[[38;5;249m+^[[0m^[[38;5;249m1^[[0m^[[38;5;249m)^[[0m^[[38;5;249m,^[[0m^[[38;5;249m6^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m0^[[0m^[[38;5;249m)^[[0m^[[38;5;249m;^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mt^[[0m^[[38;5;249mu^[[0m^[[38;5;249mr^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249m)^[[0m^[[38;5;249m=^[[0m^[[38;5;249m>^[[0m^[[38;5;249mw^[[0m^[[38;5;249mi^[[0m^[[38;5;249mn^[[0m^[[38;5;249md^[[0m^[[38;5;249mo^[[0m^[[38;5;249mw^[[0m^[[38;5;249m.^[[0m^[[38;5;249mc^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mr^[[0m^[[38;5;249mI^[[0m^[[38;5;249mn^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mr^[[0m^[[38;5;249mv^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249m(^[[0m^[[38;5;249mt^[[0m^[[38;5;249m)^[[0m^[[38;5;249m}^[[0m^[[38;5;249m,^[[0m^[[38;5;249m[^[[0m^[[38;5;249mi^[[0m^[[38;5;249mt^[[0m^[[38;5;249me^[[0m^[[38;5;249mm^[[0m^[[38;5;249m.^[[0m^[[38;5;249ms^[[0m^[[38;5;249ml^[[0m^[[38;5;249mu^[[0m^[[38;5;249mg^[[0m^[[38;5;249m,^[[0m^[[38;5;249mB^[[0m^[[38;5;249mo^[[0m^[[38;5;249mo^[[0m^[[38;5;249ml^[[0m^[[38;5;249me^[[0m^[[38;5;249ma^[[0m^[[38;5;249mn^[[0m^[[38;5;249m(^[[0m^[[38;5;249mf^[[0m^[[38;5;249ma^[[0m^[[38;5;249ml^[[0m^[[38;5;249ml^[[0m^[[38;5;249mb^[[0m^[[38;5;249ma^[[0m^[[38;5;249mc^[[0m^[[38;5;249mk^[[0m^[[38;5;249mP^[[0m^[[38;5;249mr^[[0m^[[38;5;249me^[[0m^[[38;5;249mv^[[0m^[[38;5;249mi^[[0m^[[38;5;249me^[[0m^[[38;5;249mw^[[0m^[[38;5;249m)^[[0m^[[38;5;249m]^[[0m^[[38;5;249m)^[[0m;
Lint and production build	Production build	2026-09-23T17:25:33.5777691Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ┬  
Lint and production build	Production build	2026-09-23T17:25:33.5779194Z  ^[[38;5;240m   │^[[0m                                                                                                                                                                                                       ╰── `,` or `)` expected
Lint and production build	Production build	2026-09-23T17:25:33.5780114Z ^[[38;5;246m────╯^[[0m
Lint and production build	Production build	2026-09-23T17:25:33.5780454Z ^[[31m
Lint and production build	Production build	2026-09-23T17:25:33.5781517Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:25:33.5783330Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:25:33.5784985Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T17:25:33.5786555Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T17:25:33.5788270Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T17:25:33.5790041Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T17:25:33.5791935Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T17:25:33.5793589Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T17:25:33.5795086Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T17:25:33.5796201Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T17:25:33.5796611Z }^[[39m
Lint and production build	Production build	2026-09-23T17:25:33.6745466Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:25:33.6763191Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T17:56:55Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T17:56:20Z","databaseId":35899031924,"displayTitle":"Widen mobile streaming rail cards","headSha":"37e5f50d278fa433b9f627cb394f37e732959c8f","jobs":[],"name":"Avant Movies CI","status":"pending","updatedAt":"2026-09-23T17:56:48Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899031924"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35899031924 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T17:57:52Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T17:56:38Z","databaseId":35899063707,"displayTitle":"Tighten mobile streaming rail spacing","headSha":"a565a796ffbae1ec61d1052386071d323eaefa15","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107310640070,"name":"Lint and production build","startedAt":"2026-09-23T17:57:41Z","status":"in_progress","steps":[{"completedAt":"2026-09-23T17:57:43Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:57:42Z","status":"completed"},{"completedAt":"2026-09-23T17:57:44Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:57:43Z","status":"completed"},{"completedAt":"2026-09-23T17:57:46Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:57:44Z","status":"completed"},{"completedAt":"2026-09-23T17:57:48Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:57:46Z","status":"completed"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Production build","number":5,"startedAt":"2026-09-23T17:57:48Z","status":"in_progress"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Post Setup Bun","number":9,"startedAt":"0001-01-01T00:00:00Z","status":"pending"},{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","name":"Post Checkout","number":10,"startedAt":"0001-01-01T00:00:00Z","status":"pending"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899063707/job/107310640070"}],"name":"Avant Movies CI","status":"in_progress","updatedAt":"2026-09-23T17:57:42Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899063707"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35899063707 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T17:58:12Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"failure","createdAt":"2026-09-23T17:56:38Z","databaseId":35899063707,"displayTitle":"Tighten mobile streaming rail spacing","headSha":"a565a796ffbae1ec61d1052386071d323eaefa15","jobs":[{"completedAt":"2026-09-23T17:58:01Z","conclusion":"failure","databaseId":107310640070,"name":"Lint and production build","startedAt":"2026-09-23T17:57:41Z","status":"completed","steps":[{"completedAt":"2026-09-23T17:57:43Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:57:42Z","status":"completed"},{"completedAt":"2026-09-23T17:57:44Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:57:43Z","status":"completed"},{"completedAt":"2026-09-23T17:57:46Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:57:44Z","status":"completed"},{"completedAt":"2026-09-23T17:57:48Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:57:46Z","status":"completed"},{"completedAt":"2026-09-23T17:57:59Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T17:57:48Z","status":"completed"},{"completedAt":"2026-09-23T17:57:59Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T17:57:59Z","status":"completed"},{"completedAt":"2026-09-23T17:57:59Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T17:57:59Z","status":"completed"},{"completedAt":"2026-09-23T17:58:00Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T17:57:59Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899063707/job/107310640070"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T17:58:01Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899063707"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T17:57:59.6258706Z ^[[31m✗^[[39m Build failed in 2.34s
Lint and production build	Production build	2026-09-23T17:57:59.6270997Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:57:59.6272754Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T17:57:59.6279000Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:57:59.6280185Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:57:59.6287872Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:57:59.6289022Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:57:59.6837227Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:57:59.6853639Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T17:57:48.2552644Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T17:57:48.2553071Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T17:57:48.2597085Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T17:57:48.2597628Z ##[endgroup]
Lint and production build	Production build	2026-09-23T17:57:48.4538752Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T17:57:55.3144672Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T17:57:56.8154017Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T17:57:57.2791496Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T17:57:57.2956818Z ^[[2K
Lint and production build	Production build	2026-09-23T17:57:59.5144570Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T17:57:59.6258706Z ^[[31m✗^[[39m Build failed in 2.34s
Lint and production build	Production build	2026-09-23T17:57:59.6270348Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T17:57:59.6270997Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:57:59.6271437Z 
Lint and production build	Production build	2026-09-23T17:57:59.6271641Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T17:57:59.6272754Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T17:57:59.6273979Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T17:57:59.6275027Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T17:57:59.6276370Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T17:57:59.6277564Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T17:57:59.6278381Z Caused by:
Lint and production build	Production build	2026-09-23T17:57:59.6279000Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:57:59.6280185Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:57:59.6281061Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T17:57:59.6281653Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T17:57:59.6282163Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T17:57:59.6282617Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T17:57:59.6283142Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T17:57:59.6283719Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T17:57:59.6284328Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T17:57:59.6285034Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T17:57:59.6286296Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T17:57:59.6286973Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T17:57:59.6287872Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:57:59.6289022Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:57:59.6290243Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T17:57:59.6291185Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T17:57:59.6292180Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T17:57:59.6293246Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T17:57:59.6294412Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T17:57:59.6295778Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T17:57:59.6296791Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T17:57:59.6297539Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T17:57:59.6297928Z }^[[39m
Lint and production build	Production build	2026-09-23T17:57:59.6837227Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:57:59.6853639Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T17:58:31Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T17:56:20Z","databaseId":35899031924,"displayTitle":"Widen mobile streaming rail cards","headSha":"37e5f50d278fa433b9f627cb394f37e732959c8f","jobs":[{"completedAt":"2026-09-23T17:58:22Z","conclusion":"failure","databaseId":107310784499,"name":"Lint and production build","startedAt":"2026-09-23T17:58:04Z","status":"completed","steps":[{"completedAt":"2026-09-23T17:58:06Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:58:05Z","status":"completed"},{"completedAt":"2026-09-23T17:58:08Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:58:06Z","status":"completed"},{"completedAt":"2026-09-23T17:58:09Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:58:08Z","status":"completed"},{"completedAt":"2026-09-23T17:58:11Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:58:09Z","status":"completed"},{"completedAt":"2026-09-23T17:58:19Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T17:58:11Z","status":"completed"},{"completedAt":"2026-09-23T17:58:19Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T17:58:19Z","status":"completed"},{"completedAt":"2026-09-23T17:58:19Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T17:58:19Z","status":"completed"},{"completedAt":"2026-09-23T17:58:19Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T17:58:19Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899031924/job/107310784499"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T17:58:22Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899031924"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T17:58:19.6421784Z ^[[31m✗^[[39m Build failed in 1.73s
Lint and production build	Production build	2026-09-23T17:58:19.6426801Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:58:19.6428125Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T17:58:19.6435381Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:58:19.6436901Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:58:19.6445099Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:58:19.6446604Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:58:19.7263380Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:58:19.7278818Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T17:58:11.0616214Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T17:58:11.0616486Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T17:58:11.0674602Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T17:58:11.0674948Z ##[endgroup]
Lint and production build	Production build	2026-09-23T17:58:11.0761427Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T17:58:16.5611514Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T17:58:17.6321970Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T17:58:17.9120316Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T17:58:17.9228074Z ^[[2K
Lint and production build	Production build	2026-09-23T17:58:19.5679434Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T17:58:19.6421784Z ^[[31m✗^[[39m Build failed in 1.73s
Lint and production build	Production build	2026-09-23T17:58:19.6426376Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T17:58:19.6426801Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:58:19.6427026Z 
Lint and production build	Production build	2026-09-23T17:58:19.6427159Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T17:58:19.6428125Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T17:58:19.6429541Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T17:58:19.6430855Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T17:58:19.6432252Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T17:58:19.6433732Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T17:58:19.6434665Z Caused by:
Lint and production build	Production build	2026-09-23T17:58:19.6435381Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:58:19.6436901Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:58:19.6437990Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T17:58:19.6438599Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T17:58:19.6439112Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T17:58:19.6439610Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T17:58:19.6440145Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T17:58:19.6440791Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T17:58:19.6441484Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T17:58:19.6442278Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T17:58:19.6443300Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T17:58:19.6444010Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T17:58:19.6445099Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:58:19.6446604Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:58:19.6448061Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T17:58:19.6449284Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T17:58:19.6450513Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T17:58:19.6451882Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T17:58:19.6453363Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T17:58:19.6454679Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T17:58:19.6456072Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T17:58:19.6456590Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T17:58:19.6456831Z }^[[39m
Lint and production build	Production build	2026-09-23T17:58:19.7263380Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:58:19.7278818Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T17:59:07Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T17:56:38Z","databaseId":35899063707,"displayTitle":"Tighten mobile streaming rail spacing","headSha":"a565a796ffbae1ec61d1052386071d323eaefa15","jobs":[{"completedAt":"2026-09-23T17:58:57Z","conclusion":"failure","databaseId":107310913456,"name":"Lint and production build","startedAt":"2026-09-23T17:58:33Z","status":"completed","steps":[{"completedAt":"2026-09-23T17:58:35Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T17:58:34Z","status":"completed"},{"completedAt":"2026-09-23T17:58:36Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T17:58:35Z","status":"completed"},{"completedAt":"2026-09-23T17:58:37Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T17:58:36Z","status":"completed"},{"completedAt":"2026-09-23T17:58:41Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T17:58:37Z","status":"completed"},{"completedAt":"2026-09-23T17:58:54Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T17:58:41Z","status":"completed"},{"completedAt":"2026-09-23T17:58:54Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T17:58:54Z","status":"completed"},{"completedAt":"2026-09-23T17:58:55Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T17:58:54Z","status":"completed"},{"completedAt":"2026-09-23T17:58:55Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T17:58:55Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899063707/job/107310913456"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T17:58:57Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899063707"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T17:58:54.7045713Z ^[[31m✗^[[39m Build failed in 2.34s
Lint and production build	Production build	2026-09-23T17:58:54.7055782Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:58:54.7057737Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T17:58:54.7068804Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:58:54.7070813Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:58:54.7082911Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:58:54.7085186Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:58:54.8079260Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:58:54.8096285Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T17:58:41.7183530Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T17:58:41.7184037Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T17:58:41.7248908Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T17:58:41.7249218Z ##[endgroup]
Lint and production build	Production build	2026-09-23T17:58:41.7354780Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T17:58:50.5975601Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T17:58:51.9601795Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T17:58:52.3653784Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T17:58:52.3800812Z ^[[2K
Lint and production build	Production build	2026-09-23T17:58:54.6140811Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T17:58:54.7045713Z ^[[31m✗^[[39m Build failed in 2.34s
Lint and production build	Production build	2026-09-23T17:58:54.7054919Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T17:58:54.7055782Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T17:58:54.7056120Z 
Lint and production build	Production build	2026-09-23T17:58:54.7056313Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T17:58:54.7057737Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T17:58:54.7059835Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T17:58:54.7061760Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T17:58:54.7063821Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T17:58:54.7066338Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T17:58:54.7067747Z Caused by:
Lint and production build	Production build	2026-09-23T17:58:54.7068804Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:58:54.7070813Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T17:58:54.7072382Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T17:58:54.7073327Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T17:58:54.7074092Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T17:58:54.7075078Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T17:58:54.7075868Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T17:58:54.7076815Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T17:58:54.7077736Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T17:58:54.7078894Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T17:58:54.7080310Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T17:58:54.7081325Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T17:58:54.7082911Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T17:58:54.7085186Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T17:58:54.7087240Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T17:58:54.7089046Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T17:58:54.7090817Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T17:58:54.7092830Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T17:58:54.7095185Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T17:58:54.7097097Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T17:58:54.7098803Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T17:58:54.7099882Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T17:58:54.7100342Z }^[[39m
Lint and production build	Production build	2026-09-23T17:58:54.8079260Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T17:58:54.8096285Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T18:01:00Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T18:00:27Z","databaseId":35899490712,"displayTitle":"Pause playback offscreen and resume on return","headSha":"1e799203f27609d750e4d4a8fb9f9ecdfa671491","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107311919771,"name":"Lint and production build","startedAt":"2026-09-23T18:00:58Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899490712/job/107311919771"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:00:58Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899490712"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35899490712 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:01:36Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T18:00:27Z","databaseId":35899490712,"displayTitle":"Pause playback offscreen and resume on return","headSha":"1e799203f27609d750e4d4a8fb9f9ecdfa671491","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107312135767,"name":"Lint and production build","startedAt":"2026-09-23T18:01:34Z","status":"in_progress","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899490712/job/107312135767"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:01:31Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899490712"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35899490712 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:01:59Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T18:00:27Z","databaseId":35899490712,"displayTitle":"Pause playback offscreen and resume on return","headSha":"1e799203f27609d750e4d4a8fb9f9ecdfa671491","jobs":[{"completedAt":"2026-09-23T18:01:49Z","conclusion":"failure","databaseId":107312135767,"name":"Lint and production build","startedAt":"2026-09-23T18:01:34Z","status":"completed","steps":[{"completedAt":"2026-09-23T18:01:35Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T18:01:34Z","status":"completed"},{"completedAt":"2026-09-23T18:01:36Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T18:01:35Z","status":"completed"},{"completedAt":"2026-09-23T18:01:37Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T18:01:36Z","status":"completed"},{"completedAt":"2026-09-23T18:01:39Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T18:01:37Z","status":"completed"},{"completedAt":"2026-09-23T18:01:47Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T18:01:39Z","status":"completed"},{"completedAt":"2026-09-23T18:01:47Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T18:01:47Z","status":"completed"},{"completedAt":"2026-09-23T18:01:48Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T18:01:47Z","status":"completed"},{"completedAt":"2026-09-23T18:01:48Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T18:01:48Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899490712/job/107312135767"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T18:01:50Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35899490712"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T18:01:47.7485392Z ^[[31m✗^[[39m Build failed in 2.28s
Lint and production build	Production build	2026-09-23T18:01:47.7491752Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:01:47.7493336Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:01:47.7502209Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:01:47.7503300Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:01:47.7509831Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:01:47.7511088Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:01:47.8557735Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:01:47.8577879Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T18:01:39.3297998Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T18:01:39.3298423Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T18:01:39.3341506Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T18:01:39.3341803Z ##[endgroup]
Lint and production build	Production build	2026-09-23T18:01:39.3424867Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T18:01:43.7673248Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T18:01:45.1138275Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T18:01:45.4693700Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T18:01:45.4836542Z ^[[2K
Lint and production build	Production build	2026-09-23T18:01:47.6537382Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T18:01:47.7485392Z ^[[31m✗^[[39m Build failed in 2.28s
Lint and production build	Production build	2026-09-23T18:01:47.7491303Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T18:01:47.7491752Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:01:47.7491984Z 
Lint and production build	Production build	2026-09-23T18:01:47.7492137Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T18:01:47.7493336Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:01:47.7495054Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T18:01:47.7496581Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T18:01:47.7498206Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T18:01:47.7500090Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T18:01:47.7501509Z Caused by:
Lint and production build	Production build	2026-09-23T18:01:47.7502209Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:01:47.7503300Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:01:47.7504124Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T18:01:47.7504624Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T18:01:47.7505036Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T18:01:47.7505434Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T18:01:47.7505857Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T18:01:47.7506371Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T18:01:47.7506869Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:01:47.7507500Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T18:01:47.7508421Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:01:47.7508998Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T18:01:47.7509831Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:01:47.7511088Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:01:47.7512253Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T18:01:47.7513193Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T18:01:47.7514151Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T18:01:47.7515192Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T18:01:47.7516308Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T18:01:47.7517274Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T18:01:47.7518157Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T18:01:47.7518719Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T18:01:47.7518985Z }^[[39m
Lint and production build	Production build	2026-09-23T18:01:47.8557735Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:01:47.8577879Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T18:05:24Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T18:04:54Z","databaseId":35900007887,"displayTitle":"Enforce server-side playback authorization","headSha":"914046a909b59aee350b5b7c556b02e5e7be4762","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107313630348,"name":"Lint and production build","startedAt":"2026-09-23T18:05:22Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900007887/job/107313630348"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:05:22Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900007887"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35900007887 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:06:29Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T18:04:54Z","databaseId":35900007887,"displayTitle":"Enforce server-side playback authorization","headSha":"914046a909b59aee350b5b7c556b02e5e7be4762","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:06:27Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900007887"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35900007887 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:06:59Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T18:04:54Z","databaseId":35900007887,"displayTitle":"Enforce server-side playback authorization","headSha":"914046a909b59aee350b5b7c556b02e5e7be4762","jobs":[{"completedAt":"2026-09-23T18:06:48Z","conclusion":"failure","databaseId":107314056618,"name":"Lint and production build","startedAt":"2026-09-23T18:06:31Z","status":"completed","steps":[{"completedAt":"2026-09-23T18:06:33Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T18:06:32Z","status":"completed"},{"completedAt":"2026-09-23T18:06:34Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T18:06:33Z","status":"completed"},{"completedAt":"2026-09-23T18:06:36Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T18:06:34Z","status":"completed"},{"completedAt":"2026-09-23T18:06:37Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T18:06:36Z","status":"completed"},{"completedAt":"2026-09-23T18:06:46Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T18:06:37Z","status":"completed"},{"completedAt":"2026-09-23T18:06:46Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T18:06:46Z","status":"completed"},{"completedAt":"2026-09-23T18:06:46Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T18:06:46Z","status":"completed"},{"completedAt":"2026-09-23T18:06:46Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T18:06:46Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900007887/job/107314056618"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T18:06:49Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900007887"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T18:06:46.3170083Z ^[[31m✗^[[39m Build failed in 1.80s
Lint and production build	Production build	2026-09-23T18:06:46.3200380Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:06:46.3201306Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:06:46.3205790Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:06:46.3206613Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:06:46.3211952Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:06:46.3212769Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:06:46.4006311Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:06:46.4021088Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T18:06:37.5991501Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T18:06:37.5991763Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T18:06:37.6052148Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T18:06:37.6052404Z ##[endgroup]
Lint and production build	Production build	2026-09-23T18:06:37.6147059Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T18:06:43.1642689Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T18:06:44.2334803Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T18:06:44.5105408Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T18:06:44.5216278Z ^[[2K
Lint and production build	Production build	2026-09-23T18:06:46.2376774Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T18:06:46.3170083Z ^[[31m✗^[[39m Build failed in 1.80s
Lint and production build	Production build	2026-09-23T18:06:46.3199986Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T18:06:46.3200380Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:06:46.3200568Z 
Lint and production build	Production build	2026-09-23T18:06:46.3200654Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T18:06:46.3201306Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:06:46.3202226Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T18:06:46.3203045Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T18:06:46.3203900Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T18:06:46.3204775Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T18:06:46.3205345Z Caused by:
Lint and production build	Production build	2026-09-23T18:06:46.3205790Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:06:46.3206613Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:06:46.3207255Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T18:06:46.3207854Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T18:06:46.3208185Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T18:06:46.3208497Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T18:06:46.3208825Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T18:06:46.3209230Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T18:06:46.3209620Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:06:46.3210117Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T18:06:46.3210835Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:06:46.3211276Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T18:06:46.3211952Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:06:46.3212769Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:06:46.3213682Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T18:06:46.3214411Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T18:06:46.3215130Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T18:06:46.3215929Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T18:06:46.3216808Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T18:06:46.3217664Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T18:06:46.3218371Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T18:06:46.3218825Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T18:06:46.3219032Z }^[[39m
Lint and production build	Production build	2026-09-23T18:06:46.4006311Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:06:46.4021088Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T18:09:29Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T18:08:56Z","databaseId":35900458416,"displayTitle":"Prevent broken direct Vimeo player from appearing","headSha":"171b8126142f32c8ac6b806d84069cff6e0192da","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107315199102,"name":"Lint and production build","startedAt":"2026-09-23T18:09:27Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900458416/job/107315199102"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:09:26Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900458416"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35900458416 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:10:07Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T18:08:56Z","databaseId":35900458416,"displayTitle":"Prevent broken direct Vimeo player from appearing","headSha":"171b8126142f32c8ac6b806d84069cff6e0192da","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107315428083,"name":"Lint and production build","startedAt":"2026-09-23T18:10:02Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900458416/job/107315428083"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:10:02Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900458416"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35900458416 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:11:20Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T18:08:56Z","databaseId":35900458416,"displayTitle":"Prevent broken direct Vimeo player from appearing","headSha":"171b8126142f32c8ac6b806d84069cff6e0192da","jobs":[{"completedAt":"2026-09-23T18:10:32Z","conclusion":"failure","databaseId":107315428083,"name":"Lint and production build","startedAt":"2026-09-23T18:10:12Z","status":"completed","steps":[{"completedAt":"2026-09-23T18:10:13Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T18:10:12Z","status":"completed"},{"completedAt":"2026-09-23T18:10:14Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T18:10:13Z","status":"completed"},{"completedAt":"2026-09-23T18:10:16Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T18:10:14Z","status":"completed"},{"completedAt":"2026-09-23T18:10:17Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T18:10:16Z","status":"completed"},{"completedAt":"2026-09-23T18:10:30Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T18:10:17Z","status":"completed"},{"completedAt":"2026-09-23T18:10:30Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T18:10:30Z","status":"completed"},{"completedAt":"2026-09-23T18:10:30Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T18:10:30Z","status":"completed"},{"completedAt":"2026-09-23T18:10:30Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T18:10:30Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900458416/job/107315428083"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T18:10:33Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35900458416"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T18:10:30.0956619Z ^[[31m✗^[[39m Build failed in 2.36s
Lint and production build	Production build	2026-09-23T18:10:30.0967270Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:10:30.0969339Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:10:30.0976046Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:10:30.0977148Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:10:30.0983974Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:10:30.0985079Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:10:30.1980162Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:10:30.1997268Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T18:10:17.8782574Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T18:10:17.8782891Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T18:10:17.8846721Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T18:10:17.8847004Z ##[endgroup]
Lint and production build	Production build	2026-09-23T18:10:17.8947362Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T18:10:26.0480368Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T18:10:27.3357356Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T18:10:27.7304066Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T18:10:27.7482685Z ^[[2K
Lint and production build	Production build	2026-09-23T18:10:30.0033593Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T18:10:30.0956619Z ^[[31m✗^[[39m Build failed in 2.36s
Lint and production build	Production build	2026-09-23T18:10:30.0966706Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T18:10:30.0967270Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:10:30.0967556Z 
Lint and production build	Production build	2026-09-23T18:10:30.0967739Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T18:10:30.0969339Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:10:30.0971252Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T18:10:30.0972329Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T18:10:30.0973477Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T18:10:30.0974684Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T18:10:30.0975457Z Caused by:
Lint and production build	Production build	2026-09-23T18:10:30.0976046Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:10:30.0977148Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:10:30.0978004Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T18:10:30.0978748Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T18:10:30.0979162Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T18:10:30.0979558Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T18:10:30.0979982Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T18:10:30.0980511Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T18:10:30.0981011Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:10:30.0981649Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T18:10:30.0982542Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:10:30.0983111Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T18:10:30.0983974Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:10:30.0985079Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:10:30.0986289Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T18:10:30.0987280Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T18:10:30.0988538Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T18:10:30.0989659Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T18:10:30.0990836Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T18:10:30.0991876Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T18:10:30.0992812Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T18:10:30.0993399Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T18:10:30.0993656Z }^[[39m
Lint and production build	Production build	2026-09-23T18:10:30.1980162Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:10:30.1997268Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T18:14:50Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"","createdAt":"2026-09-23T18:14:19Z","databaseId":35901067572,"displayTitle":"Fix authorized Vimeo playback embed loading","headSha":"040897bd024ae10493242b01303d1e603f95c876","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:14:48Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901067572"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35901067572 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:15:25Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T18:14:19Z","databaseId":35901067572,"displayTitle":"Fix authorized Vimeo playback embed loading","headSha":"040897bd024ae10493242b01303d1e603f95c876","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107317525544,"name":"Lint and production build","startedAt":"2026-09-23T18:15:23Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901067572/job/107317525544"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:15:23Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901067572"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35901067572 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:15:56Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T18:14:19Z","databaseId":35901067572,"displayTitle":"Fix authorized Vimeo playback embed loading","headSha":"040897bd024ae10493242b01303d1e603f95c876","jobs":[{"completedAt":"2026-09-23T18:15:45Z","conclusion":"failure","databaseId":107317525544,"name":"Lint and production build","startedAt":"2026-09-23T18:15:26Z","status":"completed","steps":[{"completedAt":"2026-09-23T18:15:28Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T18:15:27Z","status":"completed"},{"completedAt":"2026-09-23T18:15:29Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T18:15:28Z","status":"completed"},{"completedAt":"2026-09-23T18:15:31Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T18:15:29Z","status":"completed"},{"completedAt":"2026-09-23T18:15:32Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T18:15:31Z","status":"completed"},{"completedAt":"2026-09-23T18:15:43Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T18:15:32Z","status":"completed"},{"completedAt":"2026-09-23T18:15:43Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T18:15:43Z","status":"completed"},{"completedAt":"2026-09-23T18:15:43Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T18:15:43Z","status":"completed"},{"completedAt":"2026-09-23T18:15:43Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T18:15:43Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901067572/job/107317525544"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T18:15:46Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901067572"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T18:15:43.1271663Z ^[[31m✗^[[39m Build failed in 2.61s
Lint and production build	Production build	2026-09-23T18:15:43.1279356Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:15:43.1281515Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:15:43.1292499Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:15:43.1294521Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:15:43.1306679Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:15:43.1308736Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:15:43.2345607Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:15:43.2365179Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T18:15:32.6834011Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T18:15:32.6834415Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T18:15:32.6899937Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T18:15:32.6900227Z ##[endgroup]
Lint and production build	Production build	2026-09-23T18:15:32.7010662Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T18:15:38.8279121Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T18:15:40.0911669Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T18:15:40.5152570Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T18:15:40.5312991Z ^[[2K
Lint and production build	Production build	2026-09-23T18:15:43.0212921Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T18:15:43.1271663Z ^[[31m✗^[[39m Build failed in 2.61s
Lint and production build	Production build	2026-09-23T18:15:43.1278592Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T18:15:43.1279356Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:15:43.1279739Z 
Lint and production build	Production build	2026-09-23T18:15:43.1279923Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T18:15:43.1281515Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:15:43.1283635Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T18:15:43.1285546Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T18:15:43.1287593Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T18:15:43.1289803Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T18:15:43.1291422Z Caused by:
Lint and production build	Production build	2026-09-23T18:15:43.1292499Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:15:43.1294521Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:15:43.1296098Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T18:15:43.1296996Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T18:15:43.1297749Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T18:15:43.1298484Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T18:15:43.1299269Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T18:15:43.1300215Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T18:15:43.1301463Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:15:43.1302629Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T18:15:43.1304088Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:15:43.1305120Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T18:15:43.1306679Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:15:43.1308736Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:15:43.1311043Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T18:15:43.1312875Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T18:15:43.1314686Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T18:15:43.1316673Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T18:15:43.1318812Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T18:15:43.1320922Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T18:15:43.1322646Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T18:15:43.1323713Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T18:15:43.1324175Z }^[[39m
Lint and production build	Production build	2026-09-23T18:15:43.2345607Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:15:43.2365179Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T18:16:45Z

### Run metadata
~~~json
{"attempt":2,"conclusion":"","createdAt":"2026-09-23T18:16:01Z","databaseId":35901266413,"displayTitle":"Start authorized playback after loader and prevent endless buffering","headSha":"12f4489662d9332d18bc2805dec1ff063c0138b3","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107318050004,"name":"Lint and production build","startedAt":"2026-09-23T18:16:43Z","status":"queued","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901266413/job/107318050004"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:16:42Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901266413"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35901266413 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:17:12Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T18:16:01Z","databaseId":35901266413,"displayTitle":"Start authorized playback after loader and prevent endless buffering","headSha":"12f4489662d9332d18bc2805dec1ff063c0138b3","jobs":[{"completedAt":"0001-01-01T00:00:00Z","conclusion":"","databaseId":107318214235,"name":"Lint and production build","startedAt":"2026-09-23T18:17:10Z","status":"in_progress","steps":[],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901266413/job/107318214235"}],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:17:08Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901266413"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35901266413 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:17:39Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T18:16:01Z","databaseId":35901266413,"displayTitle":"Start authorized playback after loader and prevent endless buffering","headSha":"12f4489662d9332d18bc2805dec1ff063c0138b3","jobs":[{"completedAt":"2026-09-23T18:17:29Z","conclusion":"failure","databaseId":107318214235,"name":"Lint and production build","startedAt":"2026-09-23T18:17:10Z","status":"completed","steps":[{"completedAt":"2026-09-23T18:17:13Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T18:17:11Z","status":"completed"},{"completedAt":"2026-09-23T18:17:14Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T18:17:13Z","status":"completed"},{"completedAt":"2026-09-23T18:17:16Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T18:17:14Z","status":"completed"},{"completedAt":"2026-09-23T18:17:17Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T18:17:16Z","status":"completed"},{"completedAt":"2026-09-23T18:17:28Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T18:17:17Z","status":"completed"},{"completedAt":"2026-09-23T18:17:28Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T18:17:28Z","status":"completed"},{"completedAt":"2026-09-23T18:17:28Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T18:17:28Z","status":"completed"},{"completedAt":"2026-09-23T18:17:28Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T18:17:28Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901266413/job/107318214235"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T18:17:30Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901266413"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T18:17:28.1104510Z ^[[31m✗^[[39m Build failed in 2.61s
Lint and production build	Production build	2026-09-23T18:17:28.1131674Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:17:28.1132991Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:17:28.1138983Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:17:28.1140408Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:17:28.1147058Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:17:28.1148164Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:17:28.2174498Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:17:28.2193131Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T18:17:17.8016064Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T18:17:17.8016394Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T18:17:17.8052806Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T18:17:17.8053090Z ##[endgroup]
Lint and production build	Production build	2026-09-23T18:17:17.8129103Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T18:17:23.7914340Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T18:17:25.0992112Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T18:17:25.5007600Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T18:17:25.5159641Z ^[[2K
Lint and production build	Production build	2026-09-23T18:17:28.0140216Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T18:17:28.1104510Z ^[[31m✗^[[39m Build failed in 2.61s
Lint and production build	Production build	2026-09-23T18:17:28.1131088Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T18:17:28.1131674Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:17:28.1131978Z 
Lint and production build	Production build	2026-09-23T18:17:28.1132132Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T18:17:28.1132991Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:17:28.1134214Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T18:17:28.1135273Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T18:17:28.1136416Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T18:17:28.1137649Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T18:17:28.1138398Z Caused by:
Lint and production build	Production build	2026-09-23T18:17:28.1138983Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:17:28.1140408Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:17:28.1141332Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T18:17:28.1141820Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T18:17:28.1142225Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T18:17:28.1142623Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T18:17:28.1143051Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T18:17:28.1143570Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T18:17:28.1144079Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:17:28.1144726Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T18:17:28.1145596Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:17:28.1146165Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T18:17:28.1147058Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:17:28.1148164Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:17:28.1149344Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T18:17:28.1150512Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T18:17:28.1151498Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T18:17:28.1152585Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T18:17:28.1153761Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T18:17:28.1154802Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T18:17:28.1155748Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T18:17:28.1156338Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T18:17:28.1156589Z }^[[39m
Lint and production build	Production build	2026-09-23T18:17:28.2174498Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:17:28.2193131Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T18:18:27Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"failure","createdAt":"2026-09-23T18:17:58Z","databaseId":35901489948,"displayTitle":"Allow vertical page scrolling over mobile video","headSha":"d5d38deb4730ce2cd7311459caabf7dfdd84ec99","jobs":[{"completedAt":"2026-09-23T18:18:16Z","conclusion":"failure","databaseId":107318536514,"name":"Lint and production build","startedAt":"2026-09-23T18:18:01Z","status":"completed","steps":[{"completedAt":"2026-09-23T18:18:02Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T18:18:01Z","status":"completed"},{"completedAt":"2026-09-23T18:18:03Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T18:18:02Z","status":"completed"},{"completedAt":"2026-09-23T18:18:04Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T18:18:03Z","status":"completed"},{"completedAt":"2026-09-23T18:18:06Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T18:18:04Z","status":"completed"},{"completedAt":"2026-09-23T18:18:14Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T18:18:06Z","status":"completed"},{"completedAt":"2026-09-23T18:18:14Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T18:18:14Z","status":"completed"},{"completedAt":"2026-09-23T18:18:15Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T18:18:14Z","status":"completed"},{"completedAt":"2026-09-23T18:18:15Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T18:18:15Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901489948/job/107318536514"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T18:18:17Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901489948"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T18:18:14.7194739Z ^[[31m✗^[[39m Build failed in 2.38s
Lint and production build	Production build	2026-09-23T18:18:14.7206422Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:18:14.7208048Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:18:14.7217615Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:18:14.7219366Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:18:14.7229801Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:18:14.7231903Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:18:14.8265835Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:18:14.8284220Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T18:18:06.3281274Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T18:18:06.3281617Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T18:18:06.3327943Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T18:18:06.3328376Z ##[endgroup]
Lint and production build	Production build	2026-09-23T18:18:06.3801768Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T18:18:10.5383169Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T18:18:11.8802424Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T18:18:12.3350868Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T18:18:12.3519367Z ^[[2K
Lint and production build	Production build	2026-09-23T18:18:14.6296291Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T18:18:14.7194739Z ^[[31m✗^[[39m Build failed in 2.38s
Lint and production build	Production build	2026-09-23T18:18:14.7205925Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T18:18:14.7206422Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:18:14.7206704Z 
Lint and production build	Production build	2026-09-23T18:18:14.7206886Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T18:18:14.7208048Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:18:14.7209827Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T18:18:14.7211752Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T18:18:14.7213553Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T18:18:14.7215480Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T18:18:14.7216696Z Caused by:
Lint and production build	Production build	2026-09-23T18:18:14.7217615Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:18:14.7219366Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:18:14.7220881Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T18:18:14.7221662Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T18:18:14.7222314Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T18:18:14.7222951Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T18:18:14.7223654Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T18:18:14.7224488Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T18:18:14.7225300Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:18:14.7226309Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T18:18:14.7227548Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:18:14.7228450Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T18:18:14.7229801Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:18:14.7231903Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:18:14.7233719Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T18:18:14.7235290Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T18:18:14.7236835Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T18:18:14.7238577Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T18:18:14.7240615Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T18:18:14.7242286Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T18:18:14.7243765Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T18:18:14.7244691Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T18:18:14.7245094Z }^[[39m
Lint and production build	Production build	2026-09-23T18:18:14.8265835Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:18:14.8284220Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T18:19:31Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"","createdAt":"2026-09-23T18:17:58Z","databaseId":35901489948,"displayTitle":"Allow vertical page scrolling over mobile video","headSha":"d5d38deb4730ce2cd7311459caabf7dfdd84ec99","jobs":[],"name":"Avant Movies CI","status":"queued","updatedAt":"2026-09-23T18:19:29Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901489948"}

~~~

### Primary errors
~~~text
~~~

### Full failed-step log
~~~text
run 35901489948 is still in progress; logs will be available when it is complete
~~~

---

## Failure recorded 2026-09-23T18:19:49Z

### Run metadata
~~~json
{"attempt":1,"conclusion":"failure","createdAt":"2026-09-23T18:19:10Z","databaseId":35901625781,"displayTitle":"Restore paid title purchase flow","headSha":"3fb6c09e828796c9ccb5e0f8b121e66d55612db9","jobs":[{"completedAt":"2026-09-23T18:19:39Z","conclusion":"failure","databaseId":107319065679,"name":"Lint and production build","startedAt":"2026-09-23T18:19:23Z","status":"completed","steps":[{"completedAt":"2026-09-23T18:19:24Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T18:19:23Z","status":"completed"},{"completedAt":"2026-09-23T18:19:25Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T18:19:24Z","status":"completed"},{"completedAt":"2026-09-23T18:19:26Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T18:19:25Z","status":"completed"},{"completedAt":"2026-09-23T18:19:27Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T18:19:26Z","status":"completed"},{"completedAt":"2026-09-23T18:19:37Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T18:19:27Z","status":"completed"},{"completedAt":"2026-09-23T18:19:37Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T18:19:37Z","status":"completed"},{"completedAt":"2026-09-23T18:19:38Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T18:19:37Z","status":"completed"},{"completedAt":"2026-09-23T18:19:38Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T18:19:38Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901625781/job/107319065679"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T18:19:40Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901625781"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T18:19:37.8698123Z ^[[31m✗^[[39m Build failed in 2.36s
Lint and production build	Production build	2026-09-23T18:19:37.8757210Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:19:37.8758694Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:19:37.8765113Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:19:37.8766212Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:19:37.8772854Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:19:37.8773992Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:19:37.9771098Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:19:37.9790383Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T18:19:27.9912640Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T18:19:27.9912962Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T18:19:27.9983305Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T18:19:27.9983607Z ##[endgroup]
Lint and production build	Production build	2026-09-23T18:19:28.0097325Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T18:19:33.8373315Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T18:19:35.1127604Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T18:19:35.5104090Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T18:19:35.5255495Z ^[[2K
Lint and production build	Production build	2026-09-23T18:19:37.7776084Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T18:19:37.8698123Z ^[[31m✗^[[39m Build failed in 2.36s
Lint and production build	Production build	2026-09-23T18:19:37.8756537Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T18:19:37.8757210Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:19:37.8757531Z 
Lint and production build	Production build	2026-09-23T18:19:37.8757675Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T18:19:37.8758694Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:19:37.8760356Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T18:19:37.8761413Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T18:19:37.8762535Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T18:19:37.8763757Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T18:19:37.8764529Z Caused by:
Lint and production build	Production build	2026-09-23T18:19:37.8765113Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:19:37.8766212Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:19:37.8767069Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T18:19:37.8767558Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T18:19:37.8767961Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T18:19:37.8768355Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T18:19:37.8768782Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T18:19:37.8769417Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T18:19:37.8769921Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:19:37.8770566Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T18:19:37.8771457Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:19:37.8772010Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T18:19:37.8772854Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:19:37.8773992Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:19:37.8775189Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T18:19:37.8776191Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T18:19:37.8777285Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T18:19:37.8778369Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T18:19:37.8779655Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T18:19:37.8780731Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T18:19:37.8781695Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T18:19:37.8782281Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T18:19:37.8782526Z }^[[39m
Lint and production build	Production build	2026-09-23T18:19:37.9771098Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:19:37.9790383Z ##[error]Process completed with exit code 1.
~~~

---

## Failure recorded 2026-09-23T18:20:11Z

### Run metadata
~~~json
{"attempt":3,"conclusion":"failure","createdAt":"2026-09-23T18:17:58Z","databaseId":35901489948,"displayTitle":"Allow vertical page scrolling over mobile video","headSha":"d5d38deb4730ce2cd7311459caabf7dfdd84ec99","jobs":[{"completedAt":"2026-09-23T18:20:02Z","conclusion":"failure","databaseId":107319185293,"name":"Lint and production build","startedAt":"2026-09-23T18:19:42Z","status":"completed","steps":[{"completedAt":"2026-09-23T18:19:44Z","conclusion":"success","name":"Set up job","number":1,"startedAt":"2026-09-23T18:19:43Z","status":"completed"},{"completedAt":"2026-09-23T18:19:45Z","conclusion":"success","name":"Checkout","number":2,"startedAt":"2026-09-23T18:19:44Z","status":"completed"},{"completedAt":"2026-09-23T18:19:47Z","conclusion":"success","name":"Setup Bun","number":3,"startedAt":"2026-09-23T18:19:45Z","status":"completed"},{"completedAt":"2026-09-23T18:19:48Z","conclusion":"success","name":"Install dependencies","number":4,"startedAt":"2026-09-23T18:19:47Z","status":"completed"},{"completedAt":"2026-09-23T18:19:59Z","conclusion":"failure","name":"Production build","number":5,"startedAt":"2026-09-23T18:19:48Z","status":"completed"},{"completedAt":"2026-09-23T18:19:59Z","conclusion":"skipped","name":"Post Setup Bun","number":9,"startedAt":"2026-09-23T18:19:59Z","status":"completed"},{"completedAt":"2026-09-23T18:19:59Z","conclusion":"success","name":"Post Checkout","number":10,"startedAt":"2026-09-23T18:19:59Z","status":"completed"},{"completedAt":"2026-09-23T18:19:59Z","conclusion":"success","name":"Complete job","number":11,"startedAt":"2026-09-23T18:19:59Z","status":"completed"}],"url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901489948/job/107319185293"}],"name":"Avant Movies CI","status":"completed","updatedAt":"2026-09-23T18:20:02Z","url":"https://github.com/daviehydos-stack/film-fetcher-friend/actions/runs/35901489948"}

~~~

### Primary errors
~~~text
Lint and production build	Production build	2026-09-23T18:19:58.9448724Z ^[[31m✗^[[39m Build failed in 2.24s
Lint and production build	Production build	2026-09-23T18:19:58.9471943Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:19:58.9473680Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:19:58.9480319Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:19:58.9481392Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:19:58.9488139Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:19:58.9489194Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:19:59.0518818Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:19:59.0536328Z ##[error]Process completed with exit code 1.
~~~

### Full failed-step log
~~~text
Lint and production build	Production build	﻿2026-09-23T18:19:48.7455748Z ##[group]Run bun run build
Lint and production build	Production build	2026-09-23T18:19:48.7456080Z ^[[36;1mbun run build^[[0m
Lint and production build	Production build	2026-09-23T18:19:48.7496449Z shell: /usr/bin/bash -e {0}
Lint and production build	Production build	2026-09-23T18:19:48.7497071Z ##[endgroup]
Lint and production build	Production build	2026-09-23T18:19:48.7594361Z $ node scripts/generate-seo.mjs && vite build
Lint and production build	Production build	2026-09-23T18:19:55.0385319Z SEO: generated robots.txt, sitemap.xml, video-sitemap.xml and image-sitemap.xml for https://avantmovies.vercel.app (65 URLs, 54 videos, 57 image pages).
Lint and production build	Production build	2026-09-23T18:19:56.3380437Z ^[[33mThe plugin "vite-tsconfig-paths" is detected. Vite now supports tsconfig paths resolution natively via the ^[[1mresolve.tsconfigPaths^[[22m option. You can remove the plugin and set ^[[1mresolve.tsconfigPaths: true^[[22m in your Vite config instead.^[[39m
Lint and production build	Production build	2026-09-23T18:19:56.7010915Z ^[[36mvite v8.1.5 ^[[32mbuilding client environment for production...^[[36m^[[39m
Lint and production build	Production build	2026-09-23T18:19:56.7156049Z ^[[2K
Lint and production build	Production build	2026-09-23T18:19:58.8570292Z transforming...✓ 1963 modules transformed.
Lint and production build	Production build	2026-09-23T18:19:58.9448724Z ^[[31m✗^[[39m Build failed in 2.24s
Lint and production build	Production build	2026-09-23T18:19:58.9471444Z ^[[31merror during build:
Lint and production build	Production build	2026-09-23T18:19:58.9471943Z ^[[31mBuild failed with 1 error:
Lint and production build	Production build	2026-09-23T18:19:58.9472205Z 
Lint and production build	Production build	2026-09-23T18:19:58.9472376Z [plugin vite:esbuild-transpile]
Lint and production build	Production build	2026-09-23T18:19:58.9473680Z Error: Failed to load `transformWithEsbuild`. It is deprecated and it now requires esbuild to be installed separately. If you are a package author, please migrate to `transformWithOxc` instead.
Lint and production build	Production build	2026-09-23T18:19:58.9475463Z     at transformWithEsbuild (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3348:9)
Lint and production build	Production build	2026-09-23T18:19:58.9476689Z     at async PluginContextImpl.renderChunk (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:3400:16)
Lint and production build	Production build	2026-09-23T18:19:58.9477803Z     at async plugin (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1624:16)
Lint and production build	Production build	2026-09-23T18:19:58.9478961Z     at async plugin.<computed> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/bindingify-input-options-EnUlEF0T.mjs:1906:12)
Lint and production build	Production build	2026-09-23T18:19:58.9479711Z Caused by:
Lint and production build	Production build	2026-09-23T18:19:58.9480319Z   Error: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:19:58.9481392Z   Error [ERR_MODULE_NOT_FOUND]: Cannot find package 'esbuild' imported from /home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js
Lint and production build	Production build	2026-09-23T18:19:58.9482225Z       at Object.getPackageJSONURL (node:internal/modules/package_json_reader:314:9)
Lint and production build	Production build	2026-09-23T18:19:58.9482728Z       at packageResolve (node:internal/modules/esm/resolve:768:81)
Lint and production build	Production build	2026-09-23T18:19:58.9483139Z       at moduleResolve (node:internal/modules/esm/resolve:855:18)
Lint and production build	Production build	2026-09-23T18:19:58.9483541Z       at defaultResolve (node:internal/modules/esm/resolve:985:11)
Lint and production build	Production build	2026-09-23T18:19:58.9483973Z       at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
Lint and production build	Production build	2026-09-23T18:19:58.9484493Z       at #resolveAndMaybeBlockOnLoaderThread (node:internal/modules/esm/loader:783:38)
Lint and production build	Production build	2026-09-23T18:19:58.9484998Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:19:58.9485635Z       at Ie (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tailwindcss/node/dist/index.mjs:1:539)
Lint and production build	Production build	2026-09-23T18:19:58.9486651Z       at nextStep (node:internal/modules/customization_hooks:189:26)
Lint and production build	Production build	2026-09-23T18:19:58.9487271Z       at resolveWithHooks (node:internal/modules/customization_hooks:417:10)^[[31m
Lint and production build	Production build	2026-09-23T18:19:58.9488139Z     at aggregateBindingErrorsIntoJsError (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:48:18)
Lint and production build	Production build	2026-09-23T18:19:58.9489194Z     at unwrapBindingResult (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/error-BgfXq0Tb.mjs:18:128)
Lint and production build	Production build	2026-09-23T18:19:58.9490381Z     at #build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/rolldown/dist/shared/rolldown-DP_p9pd3.mjs:132:34)
Lint and production build	Production build	2026-09-23T18:19:58.9491321Z     at async buildEnvironment (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33061:66)
Lint and production build	Production build	2026-09-23T18:19:58.9492256Z     at async Object.build (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33483:19)
Lint and production build	Production build	2026-09-23T18:19:58.9493299Z     at async buildStartViteEnvironments (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/planning.js:95:23)
Lint and production build	Production build	2026-09-23T18:19:58.9494417Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/@tanstack/start-plugin-core/dist/esm/vite/plugin.js:113:8)
Lint and production build	Production build	2026-09-23T18:19:58.9495400Z     at async Object.buildApp (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/chunks/node.js:33475:6)
Lint and production build	Production build	2026-09-23T18:19:58.9496295Z     at async CAC.<anonymous> (file:///home/runner/work/film-fetcher-friend/film-fetcher-friend/node_modules/vite/dist/node/cli.js:776:3) {
Lint and production build	Production build	2026-09-23T18:19:58.9496978Z   errors: [Getter/Setter]
Lint and production build	Production build	2026-09-23T18:19:58.9497238Z }^[[39m
Lint and production build	Production build	2026-09-23T18:19:59.0518818Z error: script "build" exited with code 1
Lint and production build	Production build	2026-09-23T18:19:59.0536328Z ##[error]Process completed with exit code 1.
~~~
