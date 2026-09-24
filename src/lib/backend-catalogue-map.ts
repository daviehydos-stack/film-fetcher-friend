export const BACKEND_PRODUCT_IDS={thisIsLife:"64b27e3a-d60a-4589-ac24-6fd3a7ed3146",aBetterLifeSeason1:"d2516c9d-56fc-4418-a325-75e3bba25e53",aBetterLifeSeason2:"97b2bfd0-63b7-4030-8d43-0f551e416abd",backToUs:"5701a50b-8804-4e22-a48a-3f224790165c",nairobby:"e242c4bc-df9c-4ec9-a27a-a727c918bdf7",masterclass:"77be2e5d-7274-41ec-b360-a4ab5cc3964c"} as const;
const TITLE_PRODUCTS:Record<string,string>={"this-is-life":BACKEND_PRODUCT_IDS.thisIsLife,"back-to-us":BACKEND_PRODUCT_IDS.backToUs,"nairobby":BACKEND_PRODUCT_IDS.nairobby,"jennifer-gatero-writing-masterclass":BACKEND_PRODUCT_IDS.masterclass};
export function productForLegacyContent(contentId:string){const key=String(contentId||"").toLowerCase().replace(/^title\//,"").replace(/^\/+|\/+$/g,"");if(key.startsWith("a-better-life-season-2")||key.includes("season-2"))return BACKEND_PRODUCT_IDS.aBetterLifeSeason2;if(key.startsWith("a-better-life"))return BACKEND_PRODUCT_IDS.aBetterLifeSeason1;for(const [slug,id] of Object.entries(TITLE_PRODUCTS))if(key===slug||key.startsWith(slug+"-"))return id;return ""}
export function productForTitleSlug(slug:string){const key=String(slug||"").toLowerCase();if(key==="a-better-life")return BACKEND_PRODUCT_IDS.aBetterLifeSeason1;return TITLE_PRODUCTS[key]||""}


export type KnownProduct = {
  id:string; slug:string; name:string; titleName:string; priceMinor:number; currency:string; artwork:string;
};

export const KNOWN_PRODUCTS:Record<string,KnownProduct>={
  [BACKEND_PRODUCT_IDS.aBetterLifeSeason1]:{id:BACKEND_PRODUCT_IDS.aBetterLifeSeason1,slug:"a-better-life",name:"A Better Life — Season 1",titleName:"A Better Life",priceMinor:500,currency:"KES",artwork:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182480/WhatsApp_Image_2026-09-23_at_12.05.26_PM.jpg"},
  [BACKEND_PRODUCT_IDS.aBetterLifeSeason2]:{id:BACKEND_PRODUCT_IDS.aBetterLifeSeason2,slug:"a-better-life",name:"A Better Life — Season 2",titleName:"A Better Life",priceMinor:500,currency:"KES",artwork:"https://res.cloudinary.com/l4wbzpfr/image/upload/v1790182480/WhatsApp_Image_2026-09-23_at_12.05.26_PM.jpg"},
  [BACKEND_PRODUCT_IDS.thisIsLife]:{id:BACKEND_PRODUCT_IDS.thisIsLife,slug:"this-is-life",name:"Watch This Is Life",titleName:"This Is Life",priceMinor:500,currency:"KES",artwork:"https://static.wixstatic.com/media/57086b_899d3183eb3c450e96b8ae328886165b~mv2.png/v1/fill/w_900,h_506,enc_auto/file.png"},
  [BACKEND_PRODUCT_IDS.backToUs]:{id:BACKEND_PRODUCT_IDS.backToUs,slug:"back-to-us",name:"Watch Back to Us",titleName:"Back to Us",priceMinor:500,currency:"KES",artwork:"https://static.wixstatic.com/media/57086b_c12a5a80a97149a4a067d9857681e3e3~mv2.jpg/v1/fill/w_980,h_531,enc_auto/file.jpeg"},
  [BACKEND_PRODUCT_IDS.nairobby]:{id:BACKEND_PRODUCT_IDS.nairobby,slug:"nairobby",name:"Watch Nairobby",titleName:"Nairobby",priceMinor:500,currency:"KES",artwork:"https://static.wixstatic.com/media/57086b_66db2eaf1d4c44dd9a63ca85a2d0f058~mv2.jpg/v1/fill/w_1344,h_756,enc_auto/file.jpeg"},
  [BACKEND_PRODUCT_IDS.masterclass]:{id:BACKEND_PRODUCT_IDS.masterclass,slug:"jennifer-gatero-writing-masterclass",name:"Jens Gatero Masterclass",titleName:"Jennifer Gatero Writing Masterclass",priceMinor:500,currency:"KES",artwork:"https://static.wixstatic.com/media/57086b_3c2c8674850045c78312f3397ae32e13~mv2.jpg/v1/fill/w_588,h_416,al_c,q_85,enc_auto/file.jpeg"},
};
export function knownProduct(key:string){const raw=String(key||"").replace(/^title\//,"").replace(/^\/+|\/+$/g,"");const id=KNOWN_PRODUCTS[raw]?raw:productForLegacyContent(raw);return KNOWN_PRODUCTS[id]||null}
