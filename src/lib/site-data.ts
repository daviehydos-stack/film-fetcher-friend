export const WHATSAPP = "+254720814693";
export const WHATSAPP_TEL = "tel:+254720814693";

export const socials = {
  facebook: "https://www.facebook.com/AvantFilms/",
  youtube: "https://www.youtube.com/@avantcinemas",
  instagram: "https://www.instagram.com/jgatero/?hl=en",
  twitter: "http://www.twitter.com/wix",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "TV Shows", to: "/tv-shows" },
  { label: "Movies", to: "/movies" },
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
    poster: "https://i.ytimg.com/vi/LzKnWnEIr1U/maxresdefault.jpg",
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
  title: string;
  season?: number;
  duration: string;
  youtubeId?: string;
  poster?: string;
  locked?: boolean;
};

export const thisIsLifeFree: Episode[] = [
  {
    title: "This is Life Episode 1 — Why would the bride look so sad?",
    duration: "24:10",
    youtubeId: "JyqgBodtgbY",
  },
  {
    title: "This is Life Episode 2 — Life is tough, is it?",
    duration: "23:44",
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

export const thisIsLifePaid: Episode[] = [
  {
    title: "This is Life Episode 5",
    duration: "24:42",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_46bd84f76e9e40a0bfad5e2852bf6b09~mv2.png/v1/fill/w_444,h_249,enc_auto/file.png",
  },
  {
    title: "This is Life Episode 6",
    duration: "23:58",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_7eecc21fe74e4ebba3e25c393fed7a25~mv2.png/v1/fill/w_444,h_249,enc_auto/file.png",
  },
  {
    title: "This is Life Episode 7",
    duration: "24:15",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_6c7f4a0b06e24467b458081ea5d89657~mv2.png/v1/fill/w_444,h_249,enc_auto/file.png",
  },
  {
    title: "This is Life Episode 8",
    duration: "23:20",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_88b4458facd5428f87ce2683ac3615c7~mv2.png/v1/fill/w_444,h_249,enc_auto/file.png",
  },
  { title: "This is Life Episode 9", duration: "24:05", locked: true },
  { title: "This is Life Episode 10", duration: "23:38", locked: true },
  { title: "This is Life Episode 11", duration: "25:01", locked: true },
];

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

export const betterLifePaid: Episode[] = [
  {
    title: "A Better Life Season 1 Episode 5",
    duration: "26:25",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_450,h_253,enc_auto/file.png",
  },
  {
    title: "A Better Life Season 1 Episode 6",
    duration: "19:56",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_1399287984db40f99818e1618d7b4db1~mv2.png/v1/fill/w_450,h_253,enc_auto/file.png",
  },
  {
    title: "A Better Life Season 1 Episode 7",
    duration: "22:17",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_4a243c3981e84c979f6696b7dd96e23c~mv2.png/v1/fill/w_450,h_253,enc_auto/file.png",
  },
  {
    title: "A Better Life Season 1 Episode 8",
    duration: "23:30",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_407eaad6f5ce4e9390348d231971181b~mv2.png/v1/fill/w_450,h_253,enc_auto/file.png",
  },
  {
    title: "A Better Life Season 1 Episode 9",
    duration: "24:13",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_b87933daebed40afab3dce666b5e496e~mv2.png/v1/fill/w_450,h_253,enc_auto/file.png",
  },
  {
    title: "A Better Life Season 1 Episode 10",
    duration: "23:03",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_b68afa162449499e847cc2b7c917c9e5f002.jpg/v1/fill/w_450,h_253,enc_auto/file.jpeg",
  },
  {
    title: "A Better Life Season 1 Episode 11",
    duration: "23:50",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_61c0b455f790420cbefbf81170b6a72ef002.jpg/v1/fill/w_450,h_253,enc_auto/file.jpeg",
  },
  {
    title: "A Better Life Season 1 Episode 12",
    duration: "23:42",
    locked: true,
    poster:
      "https://static.wixstatic.com/media/57086b_665090827dd443c4a4c279fc7d5dc852f002.jpg/v1/fill/w_450,h_253,enc_auto/file.jpeg",
  },
  { title: "A Better Life Season 1 Episode 13", duration: "24:30", locked: true },
];

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
    id: "back-to-us", slug: "back-to-us", title: "Back to Us", type: "movie",
    genres: ["Romance", "Drama"], featured: true, available: true,
    shortDescription: "Two people. One coast. Everything they never said.",
    synopsis: "Shot in Watamu, Back to Us is a Kenyan love story about the distance between who we were and who we became.",
    artwork: "https://static.wixstatic.com/media/57086b_c12a5a80a97149a4a067d9857681e3e3~mv2.jpg/v1/fill/w_980,h_531,enc_auto/file.jpeg",
    backdrop: "https://static.wixstatic.com/media/57086b_f94334c3e6d24692a3c297230928ed11~mv2.jpg/v1/fill/w_1920,h_1080,q_90,enc_auto/file.jpeg",
    legacyPath: "/back-to-us", previewYoutubeId: "9E3t88BExvQ", trailerEmbedUrl: "https://www.youtube-nocookie.com/embed/9E3t88BExvQ?rel=0",
  },
  {
    id: "nairobby", slug: "nairobby", title: "Nairobby", type: "movie",
    genres: ["Crime", "Drama"], available: false,
    shortDescription: "The city that takes, and the ones who take back.",
    synopsis: "Nairobi gives, and Nairobi takes. Nairobby follows the people who decide to take something back — and the night it all goes wrong.",
    artwork: "https://static.wixstatic.com/media/57086b_66db2eaf1d4c44dd9a63ca85a2d0f058~mv2.jpg/v1/fill/w_1344,h_756,enc_auto/file.jpeg",
    backdrop: "https://static.wixstatic.com/media/57086b_66db2eaf1d4c44dd9a63ca85a2d0f058~mv2.jpg/v1/fill/w_1920,h_1080,enc_auto/file.jpeg",
    legacyPath: "/nairobby", previewYoutubeId: "Xt-Zz-TNi9U", trailerEmbedUrl: "https://www.youtube-nocookie.com/embed/Xt-Zz-TNi9U?rel=0",
  },
  {
    id: "a-better-life", slug: "a-better-life", title: "A Better Life", type: "series",
    genres: ["Drama", "Romance"], available: true,
    shortDescription: "A governor's son. A girl from the slum. A city between them.",
    synopsis: "A governor's son and a girl from the slum meet in a city that never lets anyone forget where they come from.",
    artwork: "https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_930,h_523,enc_auto/file.png",
    backdrop: "https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_1834,h_1032,enc_auto/file.png",
    legacyPath: "/a-better-life", previewYoutubeId: "p_PpjXPlaG8", trailerEmbedUrl: "https://www.youtube-nocookie.com/embed/p_PpjXPlaG8?rel=0", episodes: [...betterLifeFree, ...betterLifePaid],
  },
  {
    id: "this-is-life", slug: "this-is-life", title: "This is Life", type: "series",
    genres: ["Drama", "Romance"], available: true,
    shortDescription: "Love, work and everything that happens in between.",
    synopsis: "An intimate series about love, work, difficult choices and the lives built in between.",
    artwork: "https://static.wixstatic.com/media/57086b_899d3183eb3c450e96b8ae328886165b~mv2.png/v1/fill/w_900,h_506,enc_auto/file.png",
    backdrop: "https://static.wixstatic.com/media/57086b_46bd84f76e9e40a0bfad5e2852bf6b09~mv2.png/v1/fill/w_1834,h_1032,enc_auto/file.png",
    legacyPath: "/this-is-life", previewYoutubeId: "xnYieNZ3kHQ", trailerEmbedUrl: "https://www.youtube-nocookie.com/embed/xnYieNZ3kHQ?rel=0", episodes: [...thisIsLifeFree, ...thisIsLifePaid],
  },
  {
    id: "better-days", slug: "better-days", title: "Better Days", type: "series",
    genres: ["Drama"], available: true,
    shortDescription: "Where the Avant story began, on KTN.",
    synopsis: "Better Days aired on KTN and set everything that followed in motion — honest Kenyan stories, small rooms and big feelings.",
    artwork: "https://static.wixstatic.com/media/57086b_3c2c8674850045c78312f3397ae32e13~mv2.jpg/v1/fill/w_900,h_506,enc_auto/file.jpeg",
    backdrop: "https://static.wixstatic.com/media/57086b_3c2c8674850045c78312f3397ae32e13~mv2.jpg/v1/fill/w_1400,h_788,enc_auto/file.jpeg",
    legacyPath: "/better-days",
  },
];

export const getTitle = (slug: string) => catalogue.find((item) => item.slug === slug);
