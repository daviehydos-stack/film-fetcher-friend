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

export const catalogue: CatalogueTitle[] = [];

export function getTitles(): CatalogueTitle[] { return catalogue; }

export const getTitle = (slug: string) => catalogue.find((item) => item.slug === slug);
