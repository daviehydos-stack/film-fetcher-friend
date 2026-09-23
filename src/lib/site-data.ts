export const WHATSAPP = "+254720814693";
export const WHATSAPP_TEL = "tel:+254720814693";

export const socials = {
  facebook: "https://www.facebook.com/AvantFilms/",

  instagram: "https://www.instagram.com/jgatero/?hl=en",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "TV Shows", to: "/tv-shows" },
  { label: "Movies", to: "/movies" },
  { label: "Watch Free", to: "/watch-free" },
  { label: "My Avant", to: "/account" },
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
  accessRequired?: boolean;
  trailerEmbedUrl?: string;

  previewVimeoId?: string;
  previewStart?: number;
  previewDuration?: number;
  heroAutoplay?: boolean;

  vimeoVideoId?: string;
  videoSource?: "vimeo" | "none";
  cast?: string[];
  creators?: string[];
  directors?: string[];
  maturityRating?: string;
  maturityReasons?: string[];
  quality?: string;
  languages?: string[];
  countries?: string[];
  releaseAt?: string;
  episodes?: Episode[];
  storyWorld?: {
    gallery: { url: string; caption: string }[];
    characters: { name: string; actor: string; image: string }[];
    extras?: { title: string; url: string; kind?: string; thumbnail?: string; description?: string }[];
    behindTheScenes?: { title: string; url: string; kind?: string; thumbnail?: string; description?: string }[];
  };
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
    poster: "https://static.wixstatic.com/media/57086b_a90ca602545d4841be33a5759cffc808~mv2.png/v1/fill/w_930,h_523,enc_auto/file.png",
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

  vimeoVideoId?: string;
  poster?: string;
  locked?: boolean;
  description?: string;
  legacyKey?: string;
  previewStart?: number;
  previewDuration?: number;

  previewVimeoVideoId?: string;
  previewEmbedUrl?: string;
  introStart?: number;
  introEnd?: number;
  recapStart?: number;
  recapEnd?: number;
  creditsStart?: number;
};

export const thisIsLifeFree: Episode[] = [
  {
    title: "This is Life Episode 1 — Why would the bride look so sad?",
    duration: "26:01",
  },
  {
    title: "This is Life Episode 2 — Life is tough, is it?",
    duration: "27:14",
  },
  {
    title: "This is Life Episode 3 — The truth hurts",
    duration: "24:02",
  },
  {
    title: "This is Life Episode 4 — When your rich boss wants your girlfriend",
    duration: "23:51",
  },
];

export const thisIsLifePaid: Episode[] = [];

export const betterLifeFree: Episode[] = [
  {
    title: "A Better Life Episode 1 — The Governor and a girl from the slum",
    duration: "27:45",
  },
  {
    title: "A Better Life Episode 2 — Poor Boychild (Ken Ambani, Nyakundi Isaboke)",
    duration: "27:11",
  },
  {
    title: "A Better Life Episode 3 — Breaking out of the friendzone",
    duration: "26:30",
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
    legacyPath: "/a-better-life", previewDuration: 26, episodes: [...betterLifeFree, ...betterLifePaid],
  },
  {
    id: "this-is-life", slug: "this-is-life", title: "This is Life", type: "series",
    genres: ["Drama", "Romance"], available: true,
    shortDescription: "Love, work and everything that happens in between.",
    synopsis: "An intimate series about love, work, difficult choices and the lives built in between.",
    artwork: "https://static.wixstatic.com/media/57086b_899d3183eb3c450e96b8ae328886165b~mv2.png/v1/fill/w_900,h_506,enc_auto/file.png",
    backdrop: "https://static.wixstatic.com/media/57086b_46bd84f76e9e40a0bfad5e2852bf6b09~mv2.png/v1/fill/w_1834,h_1032,enc_auto/file.png",
    legacyPath: "/this-is-life", previewDuration: 65, episodes: [...thisIsLifeFree, ...thisIsLifePaid],
  },

];

export function getTitles(): CatalogueTitle[] { return catalogue; }


export const avantVideoLibrary = [] as const;

export const getTitle = (slug: string) => catalogue.find((item) => item.slug === slug);
