// Licensing facts. Figures come from sound-machine.com's licensing pages
// (/licensing, /licensing/united-states, /united-kingdom, /canada, /ascap, /bmi, /sesac).
// SoundMachine should review them before launch: PRO fees and membership counts change.

export type ProId = "ascap" | "bmi" | "sesac" | "gmr" | "socan" | "resound" | "prs" | "ppl";

export type Pro = {
  id: ProId;
  name: string;
  full: string;
  region: "us" | "ca" | "uk";
  represents: string;
  structure: string;
  founded?: number;
  members: string;
  catalogue?: string;
  directCost: string;
  logo?: { src: string; w: number; h: number };
};

export const PROS: Record<ProId, Pro> = {
  ascap: {
    id: "ascap",
    name: "ASCAP",
    full: "American Society of Composers, Authors and Publishers",
    region: "us",
    represents: "Songwriters, composers and publishers",
    structure: "Member-owned nonprofit",
    founded: 1914,
    members: "1 million+",
    catalogue: "~20 million works",
    directCost: "From ~$390 a year",
    logo: { src: "/images/pros/ascap.svg", w: 338, h: 330 },
  },
  bmi: {
    id: "bmi",
    name: "BMI",
    full: "Broadcast Music, Inc.",
    region: "us",
    represents: "Songwriters, composers and publishers",
    structure: "For-profit",
    founded: 1939,
    members: "1.4 million+",
    catalogue: "~22.4 million works",
    directCost: "$250–$2,000 a year",
    logo: { src: "/images/pros/bmi.svg", w: 69, h: 69 },
  },
  sesac: {
    id: "sesac",
    name: "SESAC",
    full: "Society of European Stage Authors and Composers",
    region: "us",
    represents: "Songwriters, composers and publishers",
    structure: "For-profit, invitation-only",
    founded: 1930,
    members: "15,000+",
    catalogue: "~1.5 million works",
    directCost: "Not published",
    logo: { src: "/images/pros/sesac.webp", w: 854, h: 160 },
  },
  gmr: {
    id: "gmr",
    name: "GMR",
    full: "Global Music Rights",
    region: "us",
    represents: "Songwriters and publishers",
    structure: "For-profit, invitation-only",
    founded: 2013,
    members: "A curated roster",
    catalogue: "~111,000 works",
    directCost: "Not published",
    logo: { src: "/images/pros/global-music-rights.webp", w: 360, h: 145 },
  },
  socan: {
    id: "socan",
    name: "SOCAN",
    full: "Society of Composers, Authors and Music Publishers of Canada",
    region: "ca",
    represents: "Composers, songwriters and publishers (the compositions)",
    structure: "Collective society",
    members: "175,000+ creators and publishers",
    directCost: "From ~CA$150–200 a year per location",
    logo: { src: "/images/pros/socan.webp", w: 725, h: 155 },
  },
  resound: {
    id: "resound",
    name: "Re:Sound",
    full: "Re:Sound Music Licensing Company",
    region: "ca",
    represents: "Performers and record labels (the recordings)",
    structure: "Collective society",
    members: "Thousands of artists and labels",
    directCost: "~CA$140–300 a year for most small businesses",
    logo: { src: "/images/pros/resound.webp", w: 446, h: 160 },
  },
  prs: {
    id: "prs",
    name: "PRS for Music",
    full: "Performing Right Society",
    region: "uk",
    represents: "Songwriters, composers and publishers (the compositions)",
    structure: "Collective society",
    members: "180,000+ members",
    directCost: "Part of TheMusicLicence",
  },
  ppl: {
    id: "ppl",
    name: "PPL",
    full: "Phonographic Performance Limited",
    region: "uk",
    represents: "Performers and record labels (the recordings)",
    structure: "Collective society",
    members: "150,000+ performers and labels",
    directCost: "Part of TheMusicLicence",
  },
};

export type Region = {
  id: "us" | "ca" | "uk" | "other";
  name: string;
  short: string;
  status: "included" | "you-license" | "local";
  verdict: string;
  summary: string;
  pros: ProId[];
  law: string;
  covered: string[];
  youNeed: string[];
  costLine?: string;
  path?: string;
};

export const REGIONS: Region[] = [
  {
    id: "us",
    name: "United States",
    short: "US",
    status: "included",
    verdict: "Public performance licences are included",
    summary:
      "Your subscription includes public performance licences from all four US PROs for background music played through SoundMachine at your registered US locations.",
    pros: ["ascap", "bmi", "sesac", "gmr"],
    law: "Title 17, U.S. Code",
    covered: ["Background music played through SoundMachine", "Every registered US location on your account"],
    youNeed: [],
    costLine: "Licensing all four PROs directly can cost well over $1,000 a year. SoundMachine Business starts at $323.40 a year, music platform included.",
    path: "/licensing/united-states",
  },
  {
    id: "ca",
    name: "Canada",
    short: "CA",
    status: "included",
    verdict: "Public performance licences are included",
    summary:
      "Your subscription includes SOCAN and Re:Sound public performance licensing for background music played through SoundMachine.",
    pros: ["socan", "resound"],
    law: "Copyright Act (Canada)",
    covered: ["Background music played through SoundMachine", "Compositions (SOCAN) and recordings (Re:Sound)"],
    youNeed: [],
    costLine: "SoundMachine's annual licence, including SOCAN and Re:Sound for background music, is around CA$400 a year.",
    path: "/licensing/canada",
  },
  {
    id: "uk",
    name: "United Kingdom",
    short: "UK",
    status: "you-license",
    verdict: "You also need TheMusicLicence",
    summary:
      "In the UK, public performance rights can't be bundled by a music provider. You get TheMusicLicence directly from PPL PRS Ltd. SoundMachine supplies music licensed for commercial use and the tools to run it.",
    pros: ["prs", "ppl"],
    law: "Copyright, Designs and Patents Act 1988",
    covered: ["Music licensed for commercial use, cleared for professional playback", "Scheduling, messaging and multi-location tools"],
    youNeed: ["TheMusicLicence from PPL PRS Ltd. For small premises it typically costs £300–£450 a year."],
    path: "/licensing/united-kingdom",
  },
  {
    id: "other",
    name: "Rest of the world",
    short: "Global",
    status: "local",
    verdict: "Licensed content plus a local licence",
    summary:
      "SoundMachine is available in more than 100 countries. Outside the US and Canada, we provide licensed music content, and you get public performance licences from the collecting society in your country.",
    pros: [],
    law: "Local copyright law",
    covered: ["Licensed music content", "The full SoundMachine platform"],
    youNeed: ["A public performance licence from your local collecting society. Our support team can point you to the right one."],
  },
];

// What SoundMachine's US and Canadian licences do not cover.
export const LIMITS = [
  { label: "Live bands and performers", icon: "mic" },
  { label: "DJs", icon: "deck" },
  { label: "Karaoke", icon: "karaoke" },
  { label: "Venues charging a cover or entry fee", icon: "ticket" },
  { label: "Other sources: radio, TV, CDs, MP3 players", icon: "radio" },
];

export const RIGHTS = [
  {
    id: "recording",
    name: "Recording (master) rights",
    covers: "A specific recording of a song, as performed by a particular artist.",
    who: "Record labels and performers",
  },
  {
    id: "publishing",
    name: "Publishing rights",
    covers: "The underlying composition, meaning the melody and lyrics, whoever performs it.",
    who: "Songwriters, composers and publishers",
  },
  {
    id: "performance",
    name: "Public performance rights",
    covers: "Permission to play music in a public or commercial space. This is the right that matters most to business owners.",
    who: "Performing rights organisations (PROs)",
  },
];

// US statutory damages per infringed work (17 U.S.C. § 504(c)).
export const DAMAGES = { min: 750, max: 150000 };
export const SM_ANNUAL_FROM = 323.4; // Business plan, billed annually: $26.95 × 12

export const LICENSING_FAQ = [
  {
    q: "Do I need a licence to play music in my business?",
    a: "Yes. Playing music in a public or commercial setting needs public performance licences, even from a personal playlist. That includes shops, restaurants, salons, gyms and offices.",
  },
  {
    q: "Can I use Spotify, YouTube or Apple Music in my store?",
    a: "No. Consumer streaming services are licensed for personal use only, and their terms prohibit commercial playback. Using them in a business can lead to fines or legal action. SoundMachine is licensed for commercial environments.",
  },
  {
    q: "Is SoundMachine's licence enough on its own?",
    a: "In the US, SoundMachine includes public performance licensing from ASCAP, BMI, SESAC and GMR. In Canada, it includes SOCAN and Re:Sound. Both cover background music played through SoundMachine. In the UK you also need TheMusicLicence from PPL PRS Ltd. Elsewhere, you need a licence from your local collecting society.",
  },
  {
    q: "What happens if I'm caught using unlicensed music?",
    a: "You may get a cease-and-desist letter or be taken to court for copyright infringement. In the US, statutory damages range from $750 to $150,000 per song, depending on whether the infringement is found to be willful.",
  },
  {
    q: "Does the licence cover live music or events?",
    a: "No. SoundMachine's licences don't cover live bands, DJs, karaoke, venues that charge a cover or entry fee, or music from other sources such as radio, TV, CDs or MP3 players. Those uses need separate licences from the relevant organisations.",
  },
  {
    q: "How can I make sure I'm compliant?",
    a: "In the US and Canada, using a licensed provider like SoundMachine is the simplest route for background music. If you're unsure about local rules, our support team can point you to the right licensing body or a music rights consultant.",
  },
];
