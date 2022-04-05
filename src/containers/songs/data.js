import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    // Trending Now
    {
      name: "Pushpa - The Rise",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music126/v4/7e/78/81/7e78812c-0445-ebad-321c-1beebaaa328a/8902894361460_cover.jpg/300x300bb-60.jpg",
      artist: "Shivam",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/fd/78/5e/fd785e61-788e-a229-5009-d57c09255d65/mzaf_1295168225074760476.plus.aac.ep.m4a",
      color: ["#205950", "#2ab3bf"],
    },
    {
      name: "Shershaah",
      cover:
        "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/61/65/ae/6165aee9-8bb9-0bd4-02b0-5d0f1e6257a3/886449510238.jpg/300x300bb-60.jpg",
      artist: "B. Praak",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/3a/a7/4c/3aa74c69-6c05-4dea-3ff1-bea69cfb1b44/mzaf_14453999024481615244.plus.aac.ep.m4a",
      color: ["#EF8EA9", "#ab417f"],
    },
    {
      name: "Atrangi Re",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/ca/f3/4f/caf34f9c-617b-5d0e-6e36-056792df20b8/8903431857224_cover.jpg/540x540bb-60.jpg",
      artist: "A.R. Rahman",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/48/c3/4d/48c34dfa-0777-e868-1d2c-807749b75aed/mzaf_4031052640577589340.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "83",
      cover:
        "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/14/67/71/14677131-7a94-5e3a-41dd-5059aa728937/840214425448.png/540x540bb-60.jpg",
      artist: "Arijit Singh",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2e/c9/07/2ec907b9-ac9e-8eaf-3954-fc6c499f5449/mzaf_4391294322230905575.plus.aac.ep.m4a",
      color: ["#EF8EA9", "#ab417f"],
    },
    {
      name: "BellBottom",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/71/a7/35/71a73537-b7c0-8b06-1242-57c3ba65e5d8/196292346053.jpg/540x540bb-60.jpg",
      artist: "Maninder Buttar",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/d8/30/d6/d830d621-0c02-2841-c2e1-d8e9ca0d3245/mzaf_4122070391361620274.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },

    // Fresh new music
    {
      name: "Jalwanuma",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/08/b2/ac/08b2acd5-999f-ba5a-27d0-e35ba515ac05/8903431873644_cover.jpg/540x540bb-60.jpg",
      artist: "Pooja Tiwari",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/6b/82/70/6b8270b5-ec8d-0b86-142a-b7069d9ae016/mzaf_11895022193429966659.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Dil De De",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music2/v4/26/6d/ac/266dac75-fb87-8642-f173-90dc8d631565/887845799173.jpg/1000x1000bb-60.jpg",
      artist: "Roach Killa",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/57/7f/3d/577f3d05-f0aa-cd6f-575c-95eec5d3ed42/mzaf_6648989768283811570.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Keu Jaane Naa",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/6d/3f/75/6d3f757f-eaf0-e962-b328-65e869fd3576/8905574266147.jpg/540x540bb-60.jpg",
      artist: "Arijit Singh",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/a4/7d/8c/a47d8c11-d7f5-4855-7030-758989987302/mzaf_12016254640846083856.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Mast Nazron Se",
      cover:
        "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/c6/fc/6b/c6fc6b1e-f4f6-1f00-8ca0-b4ffff7ab4a3/8903431873194_cover.jpg/540x540bb-60.jpg",
      artist: "Rochak Kohli",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/89/37/9c/89379cc5-ee92-51b8-0590-fcdcccb06f42/mzaf_17643552797186138431.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Reppe Vese Loga",
      cover:
        "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/b6/10/5d/b6105d28-e6c8-e851-51bf-9097dc434425/8901854071555.png/540x540bb-60.jpg",
      artist: "Harika Narayan",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/db/42/04/db42041a-2f27-853f-9d84-1f5d32f95dc7/mzaf_13435499538368379583.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },

    // Indie Music
    {
      name: "Gully Boy",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/35/e1/03/35e10390-62cb-e83e-f79b-8b7c78b8ba98/8718857674948.png/270x270bb-60.jpg",
      artist: "Dub Sharma",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/ff/d0/ae/ffd0aedf-e46f-897a-5153-220255883a95/mzaf_13541231504938321897.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Rehn De",
      cover:
        "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/f4/ad/a0/f4ada046-e449-8945-5641-89318dbf4c6d/5054197135804.jpg/540x540bb-60.jpg",
      artist: "Merchant Records",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/77/e1/6e/77e16ea4-e732-6fe8-46b6-1b4dff0ec009/mzaf_4809791486477904492.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Gold",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/60/3d/24/603d24cc-6dfc-592a-5ee7-0004516b96c3/8718857670971.png/540x540bb-60.jpg",
      artist: "Tanishk Bagchi",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a2/e0/a9/a2e0a9aa-d89f-c03f-59f7-16c2b9bc18d5/mzaf_9957132501220953484.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Parineeta",
      cover:
        "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/82/f2/88/82f2881b-26d0-00ed-be06-335aff394d2a/parineeta.jpg/540x540bb-60.jpg",
      artist: "Arko",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/50/04/25/500425c4-03aa-ea34-f3d3-7ea12e7b94cb/mzaf_17364231535477277824.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Baar Baar Dekho",
      cover:
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/8c/5b/1c/8c5b1c66-a44c-56a8-43bf-f0e3b6d71ef9/840780180390.png/270x270bb-60.jpg",
      artist: "Arko",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/6c/97/a9/6c97a928-26bb-2154-8b37-08c336215e06/mzaf_9675564141565829040.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },

    // Hindi Top 50
    {
      name: "Meri Jaan",
      cover:
        "https://is4-ssl.mzstatic.com/image/thumb/Music116/v4/6e/a6/75/6ea67582-674c-4237-7b62-064f60f35985/196626505606.jpg/270x270bb-60.jpg",
      artist: "Neeti Mohan",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/13/b7/dc/13b7dc9b-d0f8-cc09-bd4e-493502284bc9/mzaf_2601186263789672601.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Filhaal2 Mohabbat",
      cover:
        "https://is5-ssl.mzstatic.com/image/thumb/Music115/v4/02/70/5e/02705e31-43ab-7329-ee29-e27a374e8723/21UMGIM59601.rgb.jpg/300x300bb-60.jpg",
      artist: "B Praak",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/df/36/dc/df36dc29-ac32-3639-ba28-4a68da3f4db7/mzaf_16928313618053132946.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Baarish Ban Jaana",
      cover:
        "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/8d/1e/65/8d1e65ea-c079-58fd-392d-c6cc9a1abb6e/21UMGIM45893.rgb.jpg/600x600bb-60.jpg",
      artist: "Payal Dev",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/5a/00/ca/5a00cada-af88-3539-3f27-eb926b722f6a/mzaf_5609688177375411277.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Maiyya Mainu",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/40/a6/2d/40a62d11-08ad-472b-0be6-0f3a5f1d21be/840214424120.png/300x300bb-60.jpg",
      artist: "Sachet Tandon",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/b8/55/5d/b8555d44-2545-e8a0-7568-4bad2943fafe/mzaf_7976515600705121993.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Ranjha",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/b3/45/cf/b345cf67-3f39-31e7-5e15-279db1f7e58a/886449487264.jpg/500x500bb-60.jpg",
      artist: "Anvita Dutt",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/9a/53/d6/9a53d6a7-b8a5-bbd6-1c41-1e0fa2be1aaa/mzaf_7568313498059615967.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },

    // Retro Hits
    {
      name: "Abhi Na Jao Chhod Kar",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music124/v4/44/b3/f8/44b3f846-6e2f-100b-653e-93883e188ccc/191773209018.jpg/500x500bb-60.jpg",
      artist: "Saregama",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/94/66/da/9466dad3-d0e8-62b7-c572-f50ba588857c/mzaf_17614723878540923.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Apni To Jaise Taise",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/0d/4a/b4/0d4ab4f6-99f1-c600-ed84-a9f5f47580a6/191773202606.jpg/500x500bb-60.jpg",
      artist: "Saregama",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b7/09/32/b709328b-2069-5d5f-c0b6-a56d5cf95097/mzaf_14572500761982827636.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Dillagi Ne Di Hawa",
      cover:
        "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/31/e7/40/31e74037-89d8-5a2f-ac1e-e475b2b37c15/00044001785320.rgb.jpg/500x500bb-60.jpg",
      artist: "Saregama",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/81/22/37/81223747-a3df-0a3b-d434-40319f717525/mzaf_6558275783938169060.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "Mere Naseeb Mein",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/c3/3c/dc/c33cdc85-3b3f-b8a3-d441-517c17aefce9/00044001785429.rgb.jpg/500x500bf-60.jpg",
      artist: "Saregama",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/d9/b0/0a/d9b00af0-7204-f067-4958-c892467699e2/mzaf_8517210111596420181.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
    {
      name: "O Saathi Re",
      cover:
        "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/94/49/3d/94493d91-5402-46e5-63f2-45750f588680/191773204129.jpg/500x500bb-60.jpg",
      artist: "Saregama",
      audio:
        "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/70/12/1a/70121a37-64f4-1a48-ee91-00e608310c51/mzaf_17310850279573602591.plus.aac.ep.m4a",
      color: ["#CD607D", "#c94043"],
    },
  ];
}

export default chillHop;
