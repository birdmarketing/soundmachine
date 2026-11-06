// Research section data.
//
// status:
//   "cited"       – a published study; the widely reported figure must be checked
//                   against the original paper before launch.
//   "placeholder" – an illustrative figure agreed for the staging build. Replace it
//                   with SoundMachine data or a sourced statistic before launch.
export type StatStatus = "cited" | "placeholder";

export type Stat = {
  value: string;
  label: string;
  status: StatStatus;
  source?: string;
};

export const HERO_STATS: Stat[] = [
  { value: "38%", label: "higher supermarket sales on slow-tempo days than fast-tempo days", status: "cited", source: "Milliman, Journal of Marketing (1982)" },
  { value: "5:1", label: "French wine outsold German when French music played", status: "cited", source: "North, Hargreaves & McKendrick, Nature (1997)" },
  { value: "+11 min", label: "longer at the table when restaurants played slower music", status: "cited", source: "Milliman, Journal of Consumer Research (1986)" },
  { value: "84%", label: "of customers notice when a brand's music doesn't fit", status: "placeholder" },
];

export type Strategy = {
  id: string;
  goal: string;
  lever: string;
  headline: string;
  explain: string;
  how: string[];
  stat: Stat;
  supporting: Stat[];
  feature: { label: string; href: string };
  viz: "tempo" | "congruence" | "turnover" | "wait" | "brand" | "staff";
};

export const STRATEGIES: Strategy[] = [
  {
    id: "dwell",
    goal: "Keep customers longer",
    lever: "Tempo",
    headline: "Slow the tempo, slow the pace",
    explain:
      "People unconsciously match their movement to the beat. Slower music means slower browsing, and more time in front of products.",
    how: ["Schedule 60–90 BPM stations for quieter trading hours", "Use the energy slider to keep mixes on the mellow side", "Avoid sudden tempo jumps between songs"],
    stat: { value: "38%", label: "higher daily sales on slow-tempo days than fast-tempo days", status: "cited", source: "Milliman (1982), supermarket field study" },
    supporting: [
      { value: "+11 min", label: "average dining time with slow vs fast music", status: "cited", source: "Milliman (1986)" },
      { value: "+17%", label: "dwell time in fashion retail with on-brand slow sets", status: "placeholder" },
    ],
    feature: { label: "Schedules", href: "/how-it-works#schedule" },
    viz: "tempo",
  },
  {
    id: "spend",
    goal: "Lift average spend",
    lever: "Congruence",
    headline: "Play music that fits what you sell",
    explain:
      "Music primes associations. When the soundtrack matches the product, the brand or the price point, customers lean toward choices that fit the mood.",
    how: ["Match genre to product origin, style or price point", "Build a brand mix from weighted stations", "Import your brand playlist and play it legally"],
    stat: { value: "5:1", label: "French to German wine sales when French music played", status: "cited", source: "North, Hargreaves & McKendrick (1997)" },
    supporting: [
      { value: "6 of 44", label: "shoppers thought the music had influenced their choice", status: "cited", source: "North, Hargreaves & McKendrick (1999)" },
      { value: "+9%", label: "basket value when music matched brand positioning", status: "placeholder" },
    ],
    feature: { label: "Mixes", href: "/how-it-works#mix" },
    viz: "congruence",
  },
  {
    id: "turnover",
    goal: "Turn tables faster at peak",
    lever: "Energy",
    headline: "Lift the energy when you need the seats",
    explain:
      "Upbeat music at busy times quickens eating and decision-making without anyone feeling rushed. Save the slow sets for when tables are free.",
    how: ["Schedule an upbeat mix for the lunch rush", "Drop back to mellow after peak", "Run different energy per zone, like bar vs dining room"],
    stat: { value: "+12%", label: "covers per hour during scheduled high-energy lunch peaks", status: "placeholder" },
    supporting: [
      { value: "−8 min", label: "average lunch table time with upbeat scheduling", status: "placeholder" },
      { value: "0", label: "extra effort for staff: schedules switch automatically", status: "placeholder" },
    ],
    feature: { label: "Schedules", href: "/how-it-works#schedule" },
    viz: "turnover",
  },
  {
    id: "wait",
    goal: "Make waits feel shorter",
    lever: "Familiarity",
    headline: "Pleasant, familiar music shrinks the wait",
    explain:
      "Silence makes time drag. Music people like and recognise fills the gap, so queues, waiting rooms and hold times feel shorter than they are.",
    how: ["Use familiar, mid-tempo stations in waiting areas", "Keep volume conversational", "Add helpful messages about wait times or services"],
    stat: { value: "−25%", label: "perceived waiting time in clinics with curated music", status: "placeholder" },
    supporting: [
      { value: "2 in 3", label: "patients say music makes waiting rooms calmer", status: "placeholder" },
      { value: "+14%", label: "waiting-room satisfaction scores", status: "placeholder" },
    ],
    feature: { label: "Messages", href: "/how-it-works#messages" },
    viz: "wait",
  },
  {
    id: "brand",
    goal: "Build brand recall",
    lever: "Consistency",
    headline: "Sound the same everywhere",
    explain:
      "A consistent sonic identity across every location becomes part of the brand, just like your logo or store design. Random playlists dilute it.",
    how: ["Push one master schedule to every location", "Lock content so staff can't override it", "Commission custom playlists for flagship sites"],
    stat: { value: "+24%", label: "unprompted brand recall with a consistent music identity", status: "placeholder" },
    supporting: [
      { value: "3×", label: "more likely to describe the brand as 'premium'", status: "placeholder" },
      { value: "1", label: "dashboard controls every location", status: "placeholder" },
    ],
    feature: { label: "Multi-location control", href: "/enterprise-music-solutions" },
    viz: "brand",
  },
  {
    id: "staff",
    goal: "Support staff wellbeing",
    lever: "Variety",
    headline: "Music your team can live with",
    explain:
      "Teams hear your music for eight hours a day. Fresh rotation and the right energy keep morale up without letting staff pick the soundtrack themselves.",
    how: ["Rotate stations through the week", "Use like and dislike to remove fatigue tracks", "Give managers controlled access, not free rein"],
    stat: { value: "71%", label: "of retail staff say good music improves their shift", status: "placeholder" },
    supporting: [
      { value: "−19%", label: "'repetitive music' complaints after weekly rotation", status: "placeholder" },
      { value: "5 levels", label: "of user access to control who changes what", status: "placeholder" },
    ],
    feature: { label: "Users and permissions", href: "/how-it-works#users" },
    viz: "staff",
  },
];

// Energy curves (target BPM by hour, 6:00–24:00) for the industry explorer. Illustrative.
export const INDUSTRY_CURVES = [
  {
    id: "restaurant",
    name: "Restaurant",
    points: [70, 74, 80, 88, 96, 104, 100, 90, 84, 88, 96, 102, 98, 92, 86, 80, 74, 70, 66],
    moments: [
      { hour: 8, label: "Breakfast: acoustic, mellow" },
      { hour: 12, label: "Lunch rush: upbeat to turn tables" },
      { hour: 15, label: "Afternoon lull: soft soul" },
      { hour: 19, label: "Dinner: warm, mid-tempo" },
      { hour: 22, label: "Late: lounge, low volume" },
    ],
    stats: [
      { value: "+11 min", label: "dining time with slower music", status: "cited", source: "Milliman (1986)" },
      { value: "+18%", label: "dessert and drinks attach rate in the evening", status: "placeholder" },
    ] as Stat[],
  },
  {
    id: "retail",
    name: "Retail",
    points: [84, 86, 90, 96, 100, 104, 108, 110, 108, 104, 100, 96, 92, 88, 84, 80, 78, 76, 74],
    moments: [
      { hour: 9, label: "Opening: bright, mid-tempo" },
      { hour: 13, label: "Peak footfall: higher energy" },
      { hour: 17, label: "After work: confident and on-brand" },
      { hour: 20, label: "Close: wind down" },
    ],
    stats: [
      { value: "38%", label: "more sales on slow-tempo days than fast", status: "cited", source: "Milliman (1982)" },
      { value: "+12%", label: "time in store with on-brand music", status: "placeholder" },
    ] as Stat[],
  },
  {
    id: "hotel",
    name: "Hotel",
    points: [66, 70, 76, 80, 82, 84, 84, 82, 80, 82, 86, 92, 98, 102, 100, 94, 86, 78, 70],
    moments: [
      { hour: 7, label: "Breakfast: calm lobby" },
      { hour: 12, label: "Day: light, sophisticated" },
      { hour: 18, label: "Bar: building energy" },
      { hour: 21, label: "Rooftop: peak vibe" },
    ],
    stats: [
      { value: "+21%", label: "bar spend when lobby music builds into the evening", status: "placeholder" },
      { value: "4 zones", label: "typical: lobby, restaurant, bar and spa", status: "placeholder" },
    ] as Stat[],
  },
  {
    id: "gym",
    name: "Gym",
    points: [118, 124, 128, 126, 120, 116, 118, 120, 118, 116, 120, 126, 130, 132, 128, 122, 116, 110, 104],
    moments: [
      { hour: 6, label: "Early birds: motivating" },
      { hour: 12, label: "Lunch classes: high intensity" },
      { hour: 18, label: "Evening peak: maximum energy" },
      { hour: 22, label: "Cool down" },
    ],
    stats: [
      { value: "+15%", label: "longer average workouts with tempo-matched music", status: "placeholder" },
      { value: "120–140", label: "BPM sweet spot for cardio floors", status: "placeholder" },
    ] as Stat[],
  },
  {
    id: "clinic",
    name: "Healthcare",
    points: [62, 64, 66, 68, 68, 70, 70, 68, 68, 68, 70, 70, 68, 66, 64, 62, 60, 60, 60],
    moments: [
      { hour: 8, label: "Opening: gentle, familiar" },
      { hour: 12, label: "Busy clinic: steady and calm" },
      { hour: 17, label: "Evening: soft ambient" },
    ],
    stats: [
      { value: "−25%", label: "perceived waiting time", status: "placeholder" },
      { value: "2 in 3", label: "patients feel calmer with music", status: "placeholder" },
    ] as Stat[],
  },
  {
    id: "office",
    name: "Office",
    points: [72, 76, 82, 86, 84, 80, 84, 88, 86, 82, 78, 74, 70, 68, 66, 64, 62, 60, 60],
    moments: [
      { hour: 8, label: "Arrival: positive, upbeat" },
      { hour: 10, label: "Focus: instrumental, low lyrics" },
      { hour: 13, label: "Lunch: social energy" },
      { hour: 16, label: "Afternoon: steady focus" },
    ],
    stats: [
      { value: "+10%", label: "self-reported focus in open-plan areas", status: "placeholder" },
      { value: "68%", label: "of staff prefer music over silence in reception", status: "placeholder" },
    ] as Stat[],
  },
];

export type Study = {
  kind: "Academic" | "SoundMachine customer study";
  title: string;
  setting: string;
  finding: string;
  stat: Stat;
  status: StatStatus;
  ref?: string;
};

export const STUDIES: Study[] = [
  {
    kind: "Academic",
    title: "Tempo and supermarket shoppers",
    setting: "One US supermarket, nine weeks, slow vs fast vs no music",
    finding: "Shoppers moved more slowly and sales were higher on slow-tempo days than on fast-tempo days.",
    stat: { value: "38%", label: "higher daily sales, slow vs fast tempo", status: "cited" },
    status: "cited",
    ref: "Milliman, R. E. (1982). Using background music to affect the behavior of supermarket shoppers. Journal of Marketing, 46(3), 86–91.",
  },
  {
    kind: "Academic",
    title: "Music tempo in restaurants",
    setting: "A US restaurant, alternating slow and fast music",
    finding: "Diners stayed longer and spent more at the bar when the music was slower.",
    stat: { value: "+11 min", label: "average time at the table", status: "cited" },
    status: "cited",
    ref: "Milliman, R. E. (1986). The influence of background music on the behavior of restaurant patrons. Journal of Consumer Research, 13(2), 286–289.",
  },
  {
    kind: "Academic",
    title: "In-store music and wine choice",
    setting: "A UK supermarket wine aisle, French vs German music on alternate days",
    finding: "Wine sales followed the music's nationality, and few shoppers noticed any influence.",
    stat: { value: "5:1", label: "French to German bottles with French music", status: "cited" },
    status: "cited",
    ref: "North, A. C., Hargreaves, D. J., & McKendrick, J. (1997). In-store music affects product choice. Nature, 390, 132.",
  },
  {
    kind: "Academic",
    title: "Classical music in a wine store",
    setting: "A US wine cellar, classical vs Top 40 music",
    finding: "Customers chose more expensive wines when classical music was playing.",
    stat: { value: "Pricier", label: "wines chosen when classical music played", status: "cited" },
    status: "cited",
    ref: "Areni, C. S., & Kim, D. (1993). The influence of background music on shopping behavior: classical versus top-forty music in a wine store. Advances in Consumer Research, 20, 336–340.",
  },
  {
    kind: "SoundMachine customer study",
    title: "Boutique fashion group",
    setting: "12 stores, 10 weeks, random playlist vs scheduled brand mix",
    finding: "Scheduled, on-brand mixes increased time in store and conversion.",
    stat: { value: "+14%", label: "conversion rate", status: "placeholder" },
    status: "placeholder",
  },
  {
    kind: "SoundMachine customer study",
    title: "Coffee chain",
    setting: "40 cafés, daypart schedules vs a single all-day station",
    finding: "Daypart schedules improved morning throughput and afternoon dwell.",
    stat: { value: "+9%", label: "afternoon average spend", status: "placeholder" },
    status: "placeholder",
  },
];

// Insight library: links to existing SoundMachine guides. Blog posts stay on the
// live WordPress blog at /blog/ for now.
export const LIBRARY = [
  {
    topic: "Music psychology",
    items: [
      { title: "How volume and tempo influence dining behaviour", href: "https://sound-machine.com/blog/2025/08/20/how-volume-and-tempo-influence-dining-behavior/" },
      { title: "How music shapes customer spending in retail", href: "https://sound-machine.com/blog/2025/10/16/how-music-shapes-customer-spending-in-retail/" },
      { title: "How music shapes flow, dwell time and queues in cafés", href: "https://sound-machine.com/blog/2025/11/27/how-music-shapes-flow-dwell-time-and-queues-in-cafes/" },
      { title: "The hidden role of music during restaurant wait times", href: "https://sound-machine.com/blog/2026/02/18/the-hidden-role-of-music-during-restaurant-wait-times/" },
    ],
  },
  {
    topic: "Brand & experience",
    items: [
      { title: "How consistent music builds trust in restaurant brands", href: "https://sound-machine.com/blog/2026/02/18/how-consistent-music-builds-trust-in-restaurant-brands/" },
      { title: "How music shapes your café's brand identity", href: "https://sound-machine.com/blog/2025/11/27/how-music-shapes-your-cafes-brand-identity/" },
      { title: "What happens when retail staff control the music", href: "https://sound-machine.com/blog/2026/04/16/what-happens-when-retail-staff-control-the-music/" },
      { title: "What music to play in a waiting room, and why it matters", href: "https://sound-machine.com/blog/2026/05/21/what-music-to-play-in-a-waiting-room-and-why-it-matters/" },
    ],
  },
  {
    topic: "Licensing guides",
    items: [
      { title: "Music licensing in the United States", href: "/licensing/united-states" },
      { title: "Music licensing in the United Kingdom", href: "/licensing/united-kingdom" },
      { title: "What happens during an ASCAP or BMI audit", href: "https://sound-machine.com/blog/2026/08/26/what-happens-during-an-ascap-or-bmi-audit-and-how-to-prepare/" },
      { title: "Live music, open mic and karaoke: what licensing you need", href: "https://sound-machine.com/blog/2026/08/26/live-music-open-mic-and-karaoke-what-licensing-do-you-actually-need/" },
    ],
  },
  {
    topic: "Sound systems",
    items: [
      { title: "Integrations: Sonos, Crestron, Q-SYS and more", href: "/devices" },
      { title: "SoundMachine releases a verified plugin for Q-SYS", href: "https://sound-machine.com/blog/2026/02/16/soundmachine-releases-a-new-verified-plugin-for-q-sys/" },
      { title: "SoundMachine launches native Apple Music integration", href: "https://sound-machine.com/blog/2026/05/20/soundmachine-launches-native-apple-music-integration/" },
      { title: "Bluesound Professional and SoundMachine", href: "https://sound-machine.com/blog/2021/04/27/lenbrook-bluesound-professional/" },
    ],
  },
];
