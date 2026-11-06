// Content for /licensing/{slug}. Rewritten from the live pages, keeping the facts.
import type { ProId } from "./licensing";

export type Block =
  | { type: "text"; heading: string; body: string[] }
  | { type: "list"; heading: string; intro?: string; items: { title: string; text: string }[] }
  | { type: "table"; heading: string; intro?: string; head: string[]; rows: string[][] }
  | { type: "callout"; tone: "teal" | "red" | "yellow"; heading: string; body: string };

export type LicensingPage = {
  slug: string;
  kind: "country" | "pro";
  region: "us" | "ca" | "uk";
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  lede: string;
  verdict: { tone: "included" | "you-license"; label: string; text: string };
  pros: ProId[];
  focusPro?: ProId;
  widgets: ("cost" | "risk" | "rights" | "steps-uk" | "coverage" | "limits")[];
  blocks: Block[];
  faq: { q: string; a: string }[];
};

const spotifyLine =
  "Consumer streaming services such as Spotify, Apple Music and Amazon Music are licensed for personal, private use only. Playing them in a business counts as a public performance, which needs separate licensing and breaches the services' terms.";

export const LICENSING_PAGES: LicensingPage[] = [
  {
    slug: "united-states",
    kind: "country",
    region: "us",
    title: "Music licensing for businesses in the United States",
    metaTitle: "United States music licensing for business | SoundMachine",
    description:
      "How US music licensing works for businesses: ASCAP, BMI, SESAC and GMR, what direct licences cost, and how SoundMachine includes them in one subscription.",
    eyebrow: "Licensing · United States",
    lede: "In the US, playing music in a commercial space needs public performance licences, and no single organisation covers every song. SoundMachine includes all four PROs in every US plan.",
    verdict: {
      tone: "included",
      label: "Included with SoundMachine",
      text: "ASCAP, BMI, SESAC and GMR public performance licences for background music played through SoundMachine at your registered US locations.",
    },
    pros: ["ascap", "bmi", "sesac", "gmr"],
    widgets: ["rights", "coverage", "cost", "risk", "limits"],
    blocks: [
      {
        type: "text",
        heading: "Why you can't use personal streaming services",
        body: [
          spotifyLine,
          "Businesses have been fined thousands of dollars for playing music without the right licences, through lawsuits brought by US performing rights organisations (PROs).",
        ],
      },
      {
        type: "list",
        heading: "What US copyright law says",
        intro: "Title 17 of the U.S. Code governs how music can be used. In practice:",
        items: [
          { title: "Unlicensed public play is infringement", text: "Playing music in a public space without the correct licence is copyright infringement." },
          { title: "Buying a song isn't a business licence", text: "Music bought or streamed legally for personal use is still not licensed for business use." },
          { title: "Licences are mandatory", text: "Public performance licences are required unless you use a commercial music service that includes them." },
        ],
      },
      {
        type: "table",
        heading: "US PROs at a glance",
        intro: "Each PRO represents different songwriters and catalogues, so businesses licensing directly often need several licences.",
        head: ["", "ASCAP", "BMI", "SESAC", "GMR"],
        rows: [
          ["Structure", "Member-owned nonprofit", "For-profit", "For-profit, invitation-only", "For-profit, invitation-only"],
          ["Founded", "1914", "1939", "1930", "2013"],
          ["Members", "1 million+", "1.4 million+", "15,000+", "Curated roster"],
          ["Catalogue", "~20 million works", "~22.4 million works", "~1.5 million works", "~111,000 works"],
          ["Typical direct cost", "From ~$390/yr", "$250–$2,000/yr", "Not published", "Not published"],
        ],
      },
      {
        type: "callout",
        tone: "teal",
        heading: "One subscription instead of four agreements",
        body: "For $323.40 a year (Business, billed annually) you get public performance licensing from ASCAP, BMI, SESAC and GMR for background music, plus curated stations, playlist tools, scheduling and compatibility with systems like Sonos and Crestron.",
      },
    ],
    faq: [
      {
        q: "Which PROs does SoundMachine include in the US?",
        a: "All four: ASCAP, BMI, SESAC and GMR. Coverage applies to background music played through SoundMachine at your registered US locations, as set out in our Terms of Service.",
      },
      {
        q: "Why would I need more than one licence if I licensed directly?",
        a: "No single PRO covers the whole music industry. A playlist mixing songs represented by different PROs needs a licence from each of them, and missing one can lead to legal claims.",
      },
      {
        q: "Does it cover live music, DJs or karaoke?",
        a: "No. Those uses, and events that charge admission, need separate licences arranged directly with the relevant PROs.",
      },
    ],
  },
  {
    slug: "canada",
    kind: "country",
    region: "ca",
    title: "Music licensing for businesses in Canada",
    metaTitle: "Canada music licensing for business | SoundMachine",
    description:
      "How Canadian music licensing works for businesses: SOCAN and Re:Sound, typical direct costs, and how SoundMachine includes both for background music.",
    eyebrow: "Licensing · Canada",
    lede: "Canadian businesses need two kinds of public performance licence: one for compositions and one for recordings. SoundMachine includes both for background music.",
    verdict: {
      tone: "included",
      label: "Included with SoundMachine",
      text: "SOCAN and Re:Sound public performance licensing for background music played through SoundMachine.",
    },
    pros: ["socan", "resound"],
    widgets: ["rights", "cost", "limits"],
    blocks: [
      {
        type: "text",
        heading: "Why you can't use personal streaming services",
        body: [
          spotifyLine,
          "Canadian performing rights organisations actively monitor compliance so that music creators are paid.",
        ],
      },
      {
        type: "list",
        heading: "Canada's two licensing bodies",
        intro: "Businesses licensing directly typically need licences from both.",
        items: [
          { title: "SOCAN", text: "Covers composers, songwriters and music publishers for the public performance of musical works, live or recorded." },
          { title: "Re:Sound", text: "Represents performers and record labels for recorded music played in public." },
        ],
      },
      {
        type: "text",
        heading: "What the Copyright Act says",
        body: [
          "Under Canada's Copyright Act, playing music in public without the correct licence is copyright infringement. Music bought or streamed for personal use doesn't cover business use. Public performance licences are mandatory unless you only play royalty-free or out-of-copyright works.",
        ],
      },
      {
        type: "callout",
        tone: "teal",
        heading: "Both licences, one subscription",
        body: "SoundMachine's annual licence, which includes SOCAN and Re:Sound public performance licensing for background music, is around CA$400 a year, with the full platform included.",
      },
    ],
    faq: [
      {
        q: "What does SOCAN cost if I license directly?",
        a: "For background music in small shops or restaurants, SOCAN licences generally start around CA$150–200 a year per location. Larger venues and businesses with live music or dance floors pay more.",
      },
      {
        q: "And Re:Sound?",
        a: "Re:Sound is usually paid alongside SOCAN. Most small businesses pay CA$140–300 a year, scaling with business type, floor space and how music is used.",
      },
      {
        q: "Is anything not covered?",
        a: "Yes. Live events, karaoke, DJs, venues charging admission and music from other sources need additional licences.",
      },
    ],
  },
  {
    slug: "united-kingdom",
    kind: "country",
    region: "uk",
    title: "Music licensing for businesses in the United Kingdom",
    metaTitle: "United Kingdom music licensing for business | SoundMachine",
    description:
      "What UK businesses need to play music legally: TheMusicLicence from PPL PRS Ltd, why Spotify isn't allowed even with it, and where SoundMachine fits.",
    eyebrow: "Licensing · United Kingdom",
    lede: "UK businesses need TheMusicLicence, which comes directly from PPL PRS Ltd, plus a music service that is licensed for commercial use. SoundMachine handles the second part.",
    verdict: {
      tone: "you-license",
      label: "Two parts to UK compliance",
      text: "Get TheMusicLicence directly from PPL PRS Ltd. No music provider can bundle it. Then use a commercial service like SoundMachine, not a consumer app.",
    },
    pros: ["prs", "ppl"],
    widgets: ["steps-uk", "rights"],
    blocks: [
      {
        type: "list",
        heading: "The UK's two licensing bodies, one licence",
        intro: "PPL and PRS for Music formed a joint venture, PPL PRS Ltd, so most businesses need just one licence: TheMusicLicence.",
        items: [
          { title: "PRS for Music", text: "Represents songwriters, composers and publishers for the use of compositions and lyrics." },
          { title: "PPL", text: "Represents performers and record labels for the use of recorded music." },
        ],
      },
      {
        type: "text",
        heading: "What the law says",
        body: [
          "Under the Copyright, Designs and Patents Act 1988, playing music in public without the correct licence is copyright infringement. Buying or streaming music legally for personal use doesn't make it legal for business use.",
          "TheMusicLicence is mandatory for most UK businesses playing music, whatever the source: radio, CD, TV or streaming. It must be obtained directly from PPL PRS Ltd, not through a third-party music provider.",
        ],
      },
      {
        type: "list",
        heading: "What affects the cost of TheMusicLicence",
        intro: "Typical fees for small premises range from £300 to £450 a year. The exact price depends on:",
        items: [
          { title: "Business type", text: "Your industry and how your premises are classified." },
          { title: "Space and speakers", text: "Floor area and speaker setup." },
          { title: "How music is used", text: "Background music versus featured use." },
          { title: "Scale", text: "Number of employees or locations." },
        ],
      },
      {
        type: "callout",
        tone: "red",
        heading: "TheMusicLicence doesn't make Spotify legal for business",
        body: "Spotify and similar services are licensed for personal, non-commercial use only. Their terms prohibit public or commercial playback, even if you hold TheMusicLicence. Using them breaches copyright law and the platform's terms.",
      },
      {
        type: "table",
        heading: "Staying compliant in the UK",
        head: ["Requirement", "How to meet it"],
        rows: [
          ["Public performance rights (PRS + PPL)", "Apply directly for TheMusicLicence from PPL PRS Ltd"],
          ["A commercial-grade music service", "Use a platform licensed for business, like SoundMachine"],
        ],
      },
    ],
    faq: [
      {
        q: "Does SoundMachine replace TheMusicLicence?",
        a: "No. SoundMachine works alongside it, providing music licensed for commercial use and the tools to manage it. In the UK, public performance licensing still requires TheMusicLicence from PPL PRS Ltd.",
      },
      {
        q: "If I have TheMusicLicence, can I use Spotify?",
        a: "No. Consumer streaming services prohibit business use in their terms, whatever licence you hold.",
      },
      {
        q: "Do I need anything else for live events or karaoke?",
        a: "Possibly. TheMusicLicence covers most commercially available music, but special uses such as live events or karaoke may need additional licensing.",
      },
    ],
  },
  {
    slug: "ascap",
    kind: "pro",
    region: "us",
    title: "ASCAP music licensing for businesses",
    metaTitle: "ASCAP Music License for Business | SoundMachine",
    description:
      "What an ASCAP licence covers, what it costs, why it isn't enough on its own, and how SoundMachine includes ASCAP, BMI, SESAC and GMR from $26.95 a month.",
    eyebrow: "Licensing · ASCAP",
    lede: "An ASCAP licence lets your business publicly perform songs from ASCAP's catalogue. But ASCAP is one of four US PROs, so on its own it leaves gaps.",
    verdict: {
      tone: "included",
      label: "Included with SoundMachine",
      text: "ASCAP public performance licensing for background music, together with BMI, SESAC and GMR, from $26.95 a month.",
    },
    pros: ["ascap", "bmi", "sesac", "gmr"],
    focusPro: "ascap",
    widgets: ["coverage", "cost", "risk", "limits"],
    blocks: [
      {
        type: "text",
        heading: "What is ASCAP?",
        body: [
          "The American Society of Composers, Authors and Publishers (ASCAP) is a member-owned nonprofit founded in 1914 in New York City. It represents more than a million songwriters, composers and publishers, licensing their music for public performance in businesses, on radio and TV, and on digital platforms, then distributing royalties to the rights holders.",
        ],
      },
      {
        type: "text",
        heading: "What counts as a public performance",
        body: [
          "Under US copyright law, a public performance happens when music is played in a place open to the public, or where a substantial number of people beyond family and friends are present. That includes most business environments and, in some cases, staff-only areas or private events on commercial premises. It applies whether the source is an MP3, a CD or a radio stream.",
        ],
      },
    ],
    faq: [
      {
        q: "Is an ASCAP licence enough on its own?",
        a: "Usually not. ASCAP covers a large catalogue, but businesses typically need coverage from BMI, SESAC and GMR too, because each represents different songwriters.",
      },
      {
        q: "How much does an ASCAP licence cost?",
        a: "Direct annual fees start around $390, depending on business type, size and how music is used.",
      },
      {
        q: "Can I import my Spotify playlists?",
        a: "Yes. With Business Premium and above, imported tracks are matched to SoundMachine's licensed catalogue, so you can play them in your business right away.",
      },
    ],
  },
  {
    slug: "bmi",
    kind: "pro",
    region: "us",
    title: "BMI music licensing for businesses",
    metaTitle: "BMI Music Licensing for Business | SoundMachine",
    description:
      "What a BMI licence covers and costs, why most businesses need more than one PRO, and how SoundMachine includes BMI, ASCAP, SESAC and GMR in one subscription.",
    eyebrow: "Licensing · BMI",
    lede: "BMI is the largest US PRO by membership. Its licence covers BMI's catalogue, but your playlists almost certainly include songs from the other three PROs too.",
    verdict: {
      tone: "included",
      label: "Included with SoundMachine",
      text: "BMI public performance licensing for background music, together with ASCAP, SESAC and GMR, for $323.40 a year.",
    },
    pros: ["ascap", "bmi", "sesac", "gmr"],
    focusPro: "bmi",
    widgets: ["coverage", "cost", "risk", "limits"],
    blocks: [
      {
        type: "text",
        heading: "What is BMI?",
        body: [
          "Broadcast Music, Inc. (BMI) was founded in 1939 and is the largest US PRO by membership, with a catalogue of around 22.4 million works spanning genres from country and Latin to hip-hop. It operates as a for-profit company.",
        ],
      },
      {
        type: "text",
        heading: "What you're really paying for",
        body: [
          "Each PRO represents its own artists and songwriters, so licensing directly usually means a separate agreement with each. BMI fees range from $250 to $2,000 a year depending on venue size, industry and how music is used. Add ASCAP from around $390, plus SESAC and GMR at unpublished rates, and the total can pass $1,000 a year before you've paid for a music platform.",
        ],
      },
    ],
    faq: [
      {
        q: "How much does a BMI licence cost?",
        a: "Typically $250 to $2,000 a year, depending on the nature and size of your business.",
      },
      {
        q: "If I have BMI, do I need ASCAP too?",
        a: "Very likely. BMI and ASCAP represent different songwriters, and SESAC and GMR represent others again.",
      },
      {
        q: "Does SoundMachine's licence cover events with a cover charge?",
        a: "No. Venues charging a cover or entry fee, live music, DJs and karaoke need separate licensing.",
      },
    ],
  },
  {
    slug: "sesac",
    kind: "pro",
    region: "us",
    title: "SESAC music licensing for businesses",
    metaTitle: "SESAC Music Licensing for Business | SoundMachine",
    description:
      "What SESAC licensing covers, why ASCAP and BMI licences don't include SESAC music, and how SoundMachine bundles all four US PROs.",
    eyebrow: "Licensing · SESAC",
    lede: "If you already hold ASCAP or BMI licences, they don't cover SESAC music. SESAC is invitation-only, doesn't publish its rates, and needs its own agreement.",
    verdict: {
      tone: "included",
      label: "Included with SoundMachine",
      text: "SESAC public performance licensing for background music, together with ASCAP, BMI and GMR, for $323.40 a year.",
    },
    pros: ["ascap", "bmi", "sesac", "gmr"],
    focusPro: "sesac",
    widgets: ["coverage", "cost", "risk", "limits"],
    blocks: [
      {
        type: "text",
        heading: "What is SESAC?",
        body: [
          "The Society of European Stage Authors and Composers (SESAC) was established in 1930. It's a for-profit, invitation-only PRO with a selective roster and a catalogue of over 1.5 million songs.",
        ],
      },
      {
        type: "text",
        heading: "The cost of getting it wrong",
        body: [
          "Statutory damages start at $750 per song and can rise to $150,000 per song if infringement is found to be willful. A business may also have to cover SESAC's legal fees and court costs.",
        ],
      },
    ],
    faq: [
      {
        q: "Do ASCAP or BMI licences cover SESAC songs?",
        a: "No. Each PRO represents different songwriters and publishers, so SESAC music needs a SESAC licence or a service that includes it.",
      },
      {
        q: "How much does SESAC cost?",
        a: "SESAC doesn't publish its rates. Fees are negotiated and are often at a premium because of its selective catalogue.",
      },
      {
        q: "Does SoundMachine include SESAC?",
        a: "Yes. SESAC, ASCAP, BMI and GMR public performance licences for background music are included in every US plan.",
      },
    ],
  },
];
