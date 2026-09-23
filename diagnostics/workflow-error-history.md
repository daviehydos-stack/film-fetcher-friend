
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
