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

export const catalogue: CatalogueTitle[] = [
  {id:"a-better-life",slug:"a-better-life",title:"A Better Life",type:"series",year:"2023",genres:["Drama","Romance"],synopsis:"Malkiya, an activist from one of Nairobi’s largest informal settlements, falls for Nampoza, the governor’s son, unaware that his parents plan a development that threatens her community.",shortDescription:"An activist and a governor’s son fall in love as a development plan threatens her Nairobi community.",artwork:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182480/WhatsApp_Image_2026-09-23_at_12.05.26_PM.jpg",backdrop:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182480/WhatsApp_Image_2026-09-23_at_12.05.26_PM.jpg",legacyPath:"/a-better-life",available:true,accessRequired:true,previewVimeoId:"1188443663",trailerEmbedUrl:"https://player.vimeo.com/video/1188443663",vimeoVideoId:"1188443663",quality:"HD"},
  {id:"back-to-us",slug:"back-to-us",title:"Back to Us",type:"movie",year:"2026",genres:["Drama","Romance"],synopsis:"Shot in Watamu, Back to Us follows former lovers Amana and Kwame as a coastal getaway forces them to confront old wounds, unresolved feelings and hard truths about their relationship.",shortDescription:"Former lovers Amana and Kwame confront their past during a coastal getaway in Watamu.",artwork:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182534/WhatsApp_Image_2026-09-23_at_12.14.15_PM.jpg",backdrop:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182534/WhatsApp_Image_2026-09-23_at_12.14.15_PM.jpg",legacyPath:"/back-to-us",available:true,accessRequired:true,previewVimeoId:"1189285049",vimeoVideoId:"1189309434",quality:"HD"},
  {id:"granted",slug:"granted",title:"Granted",type:"movie",year:"2026",genres:[],synopsis:"",shortDescription:"A Jennifer Gatero film starring Pascal Tokodi and Liz Njaga.",artwork:"https://i.vimeocdn.com/video/2204126480-1540c7a20fba0980f76912f159cf7a34689e2ab18ce241f9d8719c370f703e40-d_1920x1080?&r=pad&region=us",backdrop:"https://i.vimeocdn.com/video/2204126480-1540c7a20fba0980f76912f159cf7a34689e2ab18ce241f9d8719c370f703e40-d_1920x1080?&r=pad&region=us",legacyPath:"/granted",available:true,accessRequired:false,vimeoVideoId:"1229463145",quality:"HD"},
  {id:"jennifer-gatero-writing-masterclass",slug:"jennifer-gatero-writing-masterclass",title:"Jennifer Gatero Writing Masterclass",type:"series",genres:["Education","Writing","Masterclass"],synopsis:"A practical writing masterclass with Jennifer Gatero covering story selection, research, specificity, character development, story development, scriptwriting, twist endings and case studies.",shortDescription:"A practical screenwriting masterclass with Jennifer Gatero.",artwork:"https://i.vimeocdn.com/video/2153810146-7ff3b0a829fd8289594667a2ddfb5bf5591dd7101696e3aa6cc4d1580e3ecf6c-d_1920x1080?&r=pad&region=us",backdrop:"https://i.vimeocdn.com/video/2153810146-7ff3b0a829fd8289594667a2ddfb5bf5591dd7101696e3aa6cc4d1580e3ecf6c-d_1920x1080?&r=pad&region=us",legacyPath:"/jennifer-gatero-writing-masterclass",available:true,accessRequired:true,quality:"HD"},
  {id:"nairobby",slug:"nairobby",title:"Nairobby",type:"movie",year:"2021",genres:["Crime","Drama","Thriller"],synopsis:"After six university students pull off a heist, they go on the run as greed and jealousy put their friendships and loyalty to the test.",shortDescription:"Six university students go on the run after a heist as greed and jealousy test their loyalty.",artwork:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182536/WhatsApp_Image_2026-09-23_at_12.14.44_PM.jpg",backdrop:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182536/WhatsApp_Image_2026-09-23_at_12.14.44_PM.jpg",legacyPath:"/nairobby",available:true,accessRequired:true,vimeoVideoId:"1188436474",quality:"HD"},
  {id:"relationship-goals",slug:"relationship-goals",title:"Relationship Goals",type:"movie",genres:["Short Film","Drama"],synopsis:"A short film from the Avant Cinema archive.",shortDescription:"An Avant Cinema relationship story.",artwork:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182535/WhatsApp_Image_2026-09-23_at_12.17.27_PM.jpg",backdrop:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182535/WhatsApp_Image_2026-09-23_at_12.17.27_PM.jpg",legacyPath:"/relationship-goals",available:true,accessRequired:false,vimeoVideoId:"1229463619",quality:"HD"},
  {id:"this-is-life",slug:"this-is-life",title:"This Is Life",type:"series",year:"2018",genres:["Drama","Romance"],synopsis:"An intimate series about love, work, difficult choices and the lives built in between.",shortDescription:"Kenyan drama about love, work and the choices that shape everyday life.",artwork:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182534/WhatsApp_Image_2026-09-23_at_12.07.07_PM.jpg",backdrop:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182534/WhatsApp_Image_2026-09-23_at_12.07.07_PM.jpg",legacyPath:"/this-is-life",available:true,accessRequired:true,quality:"HD"}
];

export function getTitles(): CatalogueTitle[] { return catalogue; }

export const getTitle = (slug: string) => catalogue.find((item) => item.slug === slug);

/* Avant verified Vimeo fallback catalogue */
const AVANT_VIMEO_FALLBACKS: Record<string, Partial<CatalogueTitle> & { episodes?: Episode[] }> = {
  "a-better-life": {
    previewVimeoId: "1229459523", trailerEmbedUrl: "https://player.vimeo.com/video/1229459523",
    episodes: [
      { id:"abl-1", title:"Episode 1", season:1, episodeNumber:1, duration:"42:15", vimeoVideoId:"1188409403", locked:true, legacyKey:"a-better-life-1" },
      { id:"abl-2", title:"Episode 2", season:1, episodeNumber:2, duration:"41:30", vimeoVideoId:"1188388219", locked:true, legacyKey:"a-better-life-2" },
      { id:"abl-3", title:"Episode 3", season:1, episodeNumber:3, duration:"40:50", vimeoVideoId:"1188389406", locked:true, legacyKey:"a-better-life-3" },
      { id:"abl-4", title:"Episode 4", season:1, episodeNumber:4, duration:"43:00", vimeoVideoId:"1188391929", locked:true, legacyKey:"a-better-life-4" },
      { id:"abl-5", title:"Episode 5", season:1, episodeNumber:5, duration:"39:45", vimeoVideoId:"1188394139", locked:true, legacyKey:"a-better-life-5" },
    ],
  },
  "back-to-us": { previewVimeoId:"1189285049", trailerEmbedUrl:"https://player.vimeo.com/video/1189285049", vimeoVideoId:"1189309434" },
  "granted": { vimeoVideoId:"1229463145", accessRequired:false },
  "jennifer-gatero-writing-masterclass": {
    previewVimeoId:"1188443663", trailerEmbedUrl:"https://player.vimeo.com/video/1188443663", vimeoVideoId:"1188443663",
    episodes: [
      ["1188443663","Introduction & Finding Stories"],["1188441673","Character Arc & Voice"],["1188442991","Plot Structure & Conflict"],
      ["1188444549","Lesson 4"],["1188478468","Lesson 5"],["1188479577","Lesson 6"],["1188480934","Lesson 7"],
      ["1188485163","Lesson 8"],["1188486669","Lesson 9"],["1188487093","Lesson 10"],["1188482195","Lesson 11"]
    ].map(([vimeoVideoId,title],i)=>({id:`jg-${i+1}`,title,episodeNumber:i+1,duration:"",vimeoVideoId,locked:true,legacyKey:`jennifer-gatero-writing-masterclass-${i+1}`})),
  },
  "nairobby": { previewVimeoId:"1229459741", trailerEmbedUrl:"https://player.vimeo.com/video/1229459741", vimeoVideoId:"1188436474" },
  "relationship-goals": { vimeoVideoId:"1229463619", accessRequired:false },
  "this-is-life": {
    previewVimeoId:"1191559373", trailerEmbedUrl:"https://player.vimeo.com/video/1191559373",
    episodes: [
      { id:"til-1", title:"Episode 1", season:1, episodeNumber:1, duration:"38:20", vimeoVideoId:"1191559373", locked:true, legacyKey:"this-is-life-1" },
      { id:"til-2", title:"Episode 2", season:1, episodeNumber:2, duration:"39:10", vimeoVideoId:"1191559372", locked:true, legacyKey:"this-is-life-2" },
    ],
  },
};
for (const title of catalogue) {
  const fallback=AVANT_VIMEO_FALLBACKS[title.slug];
  if (!fallback) continue;
  const existingEpisodes=title.episodes||[];
  const fallbackEpisodes=fallback.episodes||[];
  Object.assign(title, fallback, {
    episodes: fallbackEpisodes.length ? fallbackEpisodes.map((ep,i)=>({...(existingEpisodes[i]||{}),...ep})) : title.episodes,
  });
}
