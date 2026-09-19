export const WHATSAPP = "+254720814693";
export const WHATSAPP_TEL = "tel:+254720814693";

export const socials = {
  facebook: "https://www.facebook.com/AvantFilms/",
  youtube: "https://www.youtube.com/@avantcinemas",
  instagram: "https://www.instagram.com/jgatero/?hl=en",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "TV Shows", to: "/tv-shows" },
  { label: "Movies", to: "/movies" },
  { label: "Watch Free", to: "/watch-free" },
  { label: "My List", to: "/my-list" },
] as const;

export type ContentType = "movie" | "series";
export type CatalogueTitle = {
  id: string;
  slug: string;
  title: string;
  type: ContentType;
  year?: string;
  genres: string[];
  synopsis: string;
  shortDescription: string;
  artwork: string;
  backdrop: string;
  legacyPath: string;
  featured?: boolean;
  available?: boolean;
  trailerEmbedUrl?: string;
  previewYoutubeId?: string;
  previewStart?: number;
  previewDuration?: number;
  heroAutoplay?: boolean;
  youtubeVideoId?: string;
  vimeoVideoId?: string;
  videoSource?: "youtube" | "vimeo" | "none";
  cast?: string[];
  creators?: string[];
  directors?: string[];
  maturityRating?: string;
  maturityReasons?: string[];
  quality?: string;
  languages?: string[];
  episodes?: Episode[];
};

export type Trailer = {
  title: string;
  poster: string;
  duration: string;
  href: string;
};

export const trailers: Trailer[] = [
  {
    title: "Nairobby Trailer",
    duration: "01:54",
    poster:
      "https://static.wixstatic.com/media/57086b_66db2eaf1d4c44dd9a63ca85a2d0f058~mv2.jpg/v1/fill/w_1344,h_756,enc_auto/file.jpeg",
    href: "/nairobby",
  },
  {
    title: "Back to Us Trailer",
    duration: "01:32",
    poster:
      "https://static.wixstatic.com/media/57086b_ae65802b1063434eb55a9f179eaeccd3~mv2.jpg/v1/fill/w_1344,h_756,enc_auto/file.jpeg",
    href: "/back-to-us",
  },
  {
    title: "A Better Life Trailer",
    duration: "01:12",
    poster: "https://i.ytimg.com/vi/LzKnWnEIr1U/hqdefault.jpg",
    href: "/a-better-life",
  },
  {
    title: "This is Life Trailer",
    duration: "01:04",
    poster:
      "https://static.wixstatic.com/media/57086b_6639f81ceb1043049816e2040bcc3da4~mv2.jpg/v1/fill/w_1344,h_756,enc_auto/file.jpeg",
    href: "/this-is-life",
  },
];

export type Film = {
  slug: string;
  title: string;
  to: string;
  thumb: string;
  tagline: string;
};

export const films: Film[] = [
  {
    slug: "back-to-us",
    title: "Back to Us",
    to: "/back-to-us",
    tagline: "A Kenyan romance shot in Watamu",
    thumb:
      "https://static.wixstatic.com/media/57086b_c12a5a80a97149a4a067d9857681e3e3~mv2.jpg/v1/fill/w_980,h_531,enc_auto/file.jpeg",
  },
  {
    slug: "this-is-life",
    title: "This is Life",
    to: "/this-is-life",
    tagline: "11 episodes of love, work and everything between",
    thumb:
      "https://static.wixstatic.com/media/57086b_899d3183eb3c450e96b8ae328886165b~mv2.png/v1/fill/w_600,h_337,al_c,q_85,enc_auto/file.png",
  },
  {
    slug: "a-better-life",
    title: "A Better Life",
    to: "/a-better-life",
    tagline: "A governor's son, a girl from the slum",
    thumb:
      "https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_930,h_523,enc_auto/file.png",
  },
  {
    slug: "nairobby",
    title: "Nairobby",
    to: "/nairobby",
    tagline: "The city that takes, and the ones who take back",
    thumb:
      "https://static.wixstatic.com/media/57086b_66db2eaf1d4c44dd9a63ca85a2d0f058~mv2.jpg/v1/fill/w_1344,h_756,enc_auto/file.jpeg",
  },
  {
    slug: "better-days",
    title: "Better Days",
    to: "/better-days",
    tagline: "Where it all started, on KTN",
    thumb:
      "https://static.wixstatic.com/media/57086b_3c2c8674850045c78312f3397ae32e13~mv2.jpg/v1/fill/w_588,h_416,al_c,q_85,enc_auto/file.jpeg",
  },
  {
    slug: "watch-them-all",
    title: "Watch Them All",
    to: "/watch-them-all",
    tagline: "Every film, one price",
    thumb:
      "https://static.wixstatic.com/media/57086b_fffe32756fcb4e498533ef18d9c34727~mv2.jpg/v1/fill/w_588,h_488,al_c,q_85,enc_auto/file.jpeg",
  },
];

export type Episode = {
  id?: string;
  title: string;
  season?: number;
  episodeNumber?: number;
  duration: string;
  youtubeId?: string;
  vimeoVideoId?: string;
  poster?: string;
  locked?: boolean;
  description?: string;
  legacyKey?: string;
  previewStart?: number;
  previewDuration?: number;
  previewYoutubeId?: string;
  previewVimeoVideoId?: string;
  previewEmbedUrl?: string;
};

export const thisIsLifeFree: Episode[] = [
  {
    title: "This is Life Episode 1 — Why would the bride look so sad?",
    duration: "26:01",
    youtubeId: "JyqgBodtgbY",
  },
  {
    title: "This is Life Episode 2 — Life is tough, is it?",
    duration: "27:14",
    youtubeId: "6MRmTVPsM9w",
  },
  {
    title: "This is Life Episode 3 — The truth hurts",
    duration: "24:02",
    youtubeId: "yjoGHIaG6-Y",
  },
  {
    title: "This is Life Episode 4 — When your rich boss wants your girlfriend",
    duration: "23:51",
    youtubeId: "PPERGODKEs8",
  },
];

export const thisIsLifePaid: Episode[] = [];

export const betterLifeFree: Episode[] = [
  {
    title: "A Better Life Episode 1 — The Governor and a girl from the slum",
    duration: "27:45",
    youtubeId: "jkSCPUwvPnY",
  },
  {
    title: "A Better Life Episode 2 — Poor Boychild (Ken Ambani, Nyakundi Isaboke)",
    duration: "27:11",
    youtubeId: "A5YHj6IXUOc",
  },
  {
    title: "A Better Life Episode 3 — Breaking out of the friendzone",
    duration: "26:30",
    youtubeId: "nNwHjdy-EAc",
  },
  {
    title: "A Better Life Episode 4 — A taste of the good life",
    duration: "26:12",
    youtubeId: "OQMWsYOOF8o",
  },
];

export const betterLifePaid: Episode[] = [];

export type Plan = {
  name: string;
  price: string;
  blurb: string;
  validity: string;
  perks: string[];
  best?: boolean;
  image?: string;
  productId: string;
};

export const plans: Plan[] = [
  {
    name: "Watch This is Life",
    productId: "29613405-b7da-4bfc-a824-3027a6702657",
    price: "Ksh 280",
    blurb:
      "Watch the whole season. Have access for a duration of three months!",
    validity: "Valid for 3 months",
    perks: ["Episodes 5 to 11", "3 months access", "One-time payment"],
    image:
      "https://static.wixstatic.com/media/57086b_f8d6956d9dc749dd9accd1a5ea37905f~mv2.png/v1/fill/w_396,h_238,al_c,q_85,enc_auto/file.png",
  },
  {
    name: "Watch A Better Life",
    productId: "c85d4c6a-6744-4123-9111-a9982bb5534c",
    price: "Ksh 350",
    blurb:
      "Episodes 5 to 13 of A Better Life, season one, streaming whenever you want.",
    validity: "Valid for 3 months",
    perks: ["Episodes 5 to 13", "3 months access", "One-time payment"],
    image:
      "https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_930,h_523,enc_auto/file.png",
  },
  {
    name: "Watch it all!",
    productId: "0d8fe76f-f014-4b82-b3c8-de0487d97bcd",
    price: "Ksh 890",
    blurb:
      "Ready to binge? Watch Back to Us, This is Life, A Better Life and Nairobby.",
    validity: "Valid for 6 months",
    perks: ["Watch all films anytime", "One-time payment", "6 months access"],
    best: true,
    image:
      "https://static.wixstatic.com/media/57086b_fffe32756fcb4e498533ef18d9c34727~mv2.jpg/v1/fill/w_588,h_488,al_c,q_85,enc_auto/file.jpeg",
  },
];

export const mpesaSteps = [
  "Click on the PLAY button.",
  "Click subscribe and proceed to check out, sign in with Google or Facebook.",
  "Click subscribe and then select your pricing plan.",
  "Select DPO and then Buy Now.",
  "Put in your personal details and press continue.",
  "Choose payment method. Choose Mobile, select MPESA, put in your phone number.",
  "You will receive an MPESA prompt on your phone.",
];

export const MPESA_PDF =
  "https://554e22f9-65a2-443f-b51e-c5330dbc5d5d.filesusr.com/ugd/57086b_f90d0496b9c2496b84cbffa7961ce148.pdf";

export const catalogue: CatalogueTitle[] = [
  {
    id: "a-better-life", slug: "a-better-life", title: "A Better Life", type: "series",
    genres: ["Drama", "Romance"], available: true,
    shortDescription: "A governor's son. A girl from the slum. A city between them.",
    synopsis: "A governor's son and a girl from the slum meet in a city that never lets anyone forget where they come from.",
    artwork: "https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_930,h_523,enc_auto/file.png",
    backdrop: "https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_1834,h_1032,enc_auto/file.png",
    legacyPath: "/a-better-life", previewYoutubeId: "p_PpjXPlaG8", previewDuration: 26, trailerEmbedUrl: "https://www.youtube-nocookie.com/embed/p_PpjXPlaG8?rel=0", episodes: [...betterLifeFree, ...betterLifePaid],
  },
  {
    id: "this-is-life", slug: "this-is-life", title: "This is Life", type: "series",
    genres: ["Drama", "Romance"], available: true,
    shortDescription: "Love, work and everything that happens in between.",
    synopsis: "An intimate series about love, work, difficult choices and the lives built in between.",
    artwork: "https://static.wixstatic.com/media/57086b_899d3183eb3c450e96b8ae328886165b~mv2.png/v1/fill/w_900,h_506,enc_auto/file.png",
    backdrop: "https://static.wixstatic.com/media/57086b_46bd84f76e9e40a0bfad5e2852bf6b09~mv2.png/v1/fill/w_1834,h_1032,enc_auto/file.png",
    legacyPath: "/this-is-life", previewYoutubeId: "xnYieNZ3kHQ", previewDuration: 65, trailerEmbedUrl: "https://www.youtube-nocookie.com/embed/xnYieNZ3kHQ?rel=0", episodes: [...thisIsLifeFree, ...thisIsLifePaid],
  },
  {
    id: "another-way", slug: "another-way", title: "Another Way", type: "movie",
    genres: ["Short Film", "Drama"], available: true,
    shortDescription: "A short Avant story, now streaming.",
    synopsis: "Another Way is an Avant Cinema short film from the studio archive.",
    artwork: "https://i.ytimg.com/vi/7krnA3G5qrI/hqdefault.jpg",
    backdrop: "https://i.ytimg.com/vi/7krnA3G5qrI/hqdefault.jpg",
    legacyPath: "/another-way", previewYoutubeId: "7krnA3G5qrI", previewDuration: 120,
    episodes: [{ title: "Another Way", duration: "05:11", youtubeId: "7krnA3G5qrI" }],
  },
  {
    id: "adui", slug: "adui", title: "ADUI", type: "movie",
    genres: ["Short Film"], available: true,
    shortDescription: "A short film from the Avant Cinema archive.",
    synopsis: "ADUI is an Avant Cinema short film available from the studio video archive.",
    artwork: "https://i.ytimg.com/vi/bUx3YibMvGI/hqdefault.jpg",
    backdrop: "https://i.ytimg.com/vi/bUx3YibMvGI/hqdefault.jpg",
    legacyPath: "/adui", previewYoutubeId: "bUx3YibMvGI", previewDuration: 120,
    episodes: [{ title: "ADUI", duration: "07:27", youtubeId: "bUx3YibMvGI" }],
  },
  {
    id: "relationship-goals", slug: "relationship-goals", title: "Relationship Goals", type: "movie",
    genres: ["Short Film", "Drama"], available: true,
    shortDescription: "An Avant Cinema short story about relationships.",
    synopsis: "Relationship Goals is a short film from the Avant Cinema video archive.",
    artwork: "https://i.ytimg.com/vi/ciUCZ3yIKv0/hqdefault.jpg",
    backdrop: "https://i.ytimg.com/vi/ciUCZ3yIKv0/hqdefault.jpg",
    legacyPath: "/relationship-goals", previewYoutubeId: "ciUCZ3yIKv0", previewDuration: 120,
    episodes: [{ title: "Relationship Goals", duration: "06:22", youtubeId: "ciUCZ3yIKv0" }],
  },
  {
    id: "granted", slug: "granted", title: "Granted", type: "movie",
    genres: ["Short Film", "Drama"], available: true,
    shortDescription: "A short film from Avant Cinema.",
    synopsis: "Granted is an Avant Cinema short film from the studio video archive.",
    artwork: "https://i.ytimg.com/vi/xdR3xLwcWdQ/hqdefault.jpg",
    backdrop: "https://i.ytimg.com/vi/xdR3xLwcWdQ/hqdefault.jpg",
    legacyPath: "/granted", previewYoutubeId: "xdR3xLwcWdQ", previewDuration: 120,
    episodes: [{ title: "Granted", duration: "08:53", youtubeId: "xdR3xLwcWdQ" }],
  },
  {
    id: "best-friends-forever", slug: "best-friends-forever", title: "Best Friends Forever", type: "series",
    genres: ["Drama", "Series"], available: true,
    shortDescription: "Friendship gets complicated.",
    synopsis: "Best Friends Forever is an episodic Avant Cinema story from the studio archive.",
    artwork: "https://i.ytimg.com/vi/dPaiBP_yfOI/hqdefault.jpg",
    backdrop: "https://i.ytimg.com/vi/R8kIX3ITyDs/hqdefault.jpg",
    legacyPath: "/best-friends-forever", previewYoutubeId: "dPaiBP_yfOI", previewDuration: 54,
    trailerEmbedUrl: "https://www.youtube-nocookie.com/embed/dPaiBP_yfOI?rel=0",
    episodes: [{ title: "Best Friends Forever Episode 1", duration: "07:33", youtubeId: "R8kIX3ITyDs" }, { title: "Best Friends Forever Episode 2", duration: "11:59", youtubeId: "x0TkWZMV2qc" }],
  },
  {
    id: "isabella", slug: "isabella", title: "Isabella", type: "series",
    genres: ["Drama", "Classic"], available: true,
    shortDescription: "A K24 classic from the Avant archive.",
    synopsis: "Isabella is a classic episodic title preserved in the Avant Cinema video archive.",
    artwork: "https://i.ytimg.com/vi/3fdhXgENfJk/hqdefault.jpg",
    backdrop: "https://i.ytimg.com/vi/3fdhXgENfJk/hqdefault.jpg",
    legacyPath: "/isabella", previewYoutubeId: "3fdhXgENfJk", previewDuration: 120,
    episodes: [{ title: "Isabella Series K24 classic", duration: "21:43", youtubeId: "3fdhXgENfJk" }],
  },
];

export const avantVideoLibrary = [
  { id: "bLuedvH9yX8", title: "June 10, 2026", duration: "01:09", kind: "promo" },
  { id: "EvskdA-sao0", title: "April 1, 2026", duration: "01:33", kind: "promo" },
  { id: "tsJPBALqvPc", title: "Watch This is Life", duration: "00:21", kind: "promo", catalogueSlug: "this-is-life" },
  { id: "p_PpjXPlaG8", title: "Watch A Better Life", duration: "00:26", kind: "promo", catalogueSlug: "a-better-life" },
  { id: "WKzloxLob-Q", title: "A Better Life weekend promo", duration: "00:38", kind: "promo", catalogueSlug: "a-better-life" },
  { id: "jvJlWj2JgEk", title: "Changing Times KTN 2010", duration: "13:51", kind: "full" },
  { id: "7krnA3G5qrI", title: "Another Way", duration: "05:11", kind: "short-film" },
  { id: "sW1TaaGYwNE", title: "This is Life streaming promo", duration: "00:23", kind: "promo", catalogueSlug: "this-is-life" },
  { id: "6MRmTVPsM9w", title: "This is Life Episode 2", duration: "27:14", kind: "episode", catalogueSlug: "this-is-life" },
  { id: "JyqgBodtgbY", title: "This is Life Episode 1", duration: "26:01", kind: "episode", catalogueSlug: "this-is-life" },
  { id: "A5YHj6IXUOc", title: "A Better Life S1 Episode 2", duration: "27:11", kind: "episode", catalogueSlug: "a-better-life" },
  { id: "xnYieNZ3kHQ", title: "This is Life trailer", duration: "01:05", kind: "trailer", catalogueSlug: "this-is-life" },
  { id: "Xt-Zz-TNi9U", title: "Nairobby trailer", duration: "01:54", kind: "trailer", catalogueSlug: "nairobby" },
  { id: "teA8AmxVGFY", title: "An Instant Dad trailer", duration: "01:30", kind: "trailer" },
  { id: "bUx3YibMvGI", title: "ADUI", duration: "07:27", kind: "short-film" },
  { id: "ciUCZ3yIKv0", title: "Relationship Goals", duration: "06:22", kind: "short-film" },
  { id: "R8kIX3ITyDs", title: "Best Friends Forever Episode 1", duration: "07:33", kind: "episode" },
  { id: "x0TkWZMV2qc", title: "Best Friends Forever Episode 2", duration: "11:59", kind: "episode" },
  { id: "dPaiBP_yfOI", title: "Best Friends Forever trailer", duration: "00:54", kind: "trailer" },
  { id: "l-t4SDvNXuw", title: "This is Life Episode 1 4K", duration: "35:11", kind: "episode", catalogueSlug: "this-is-life" },
  { id: "3fdhXgENfJk", title: "Isabella Series K24 classic", duration: "21:43", kind: "episode" },
  { id: "xdR3xLwcWdQ", title: "Granted", duration: "08:53", kind: "short-film" },
] as const;

export const getTitle = (slug: string) => catalogue.find((item) => item.slug === slug);
