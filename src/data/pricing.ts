// Prices as published on sound-machine.com/pricing (USD, per location licence, per month).
// Annual billing saves 10%.
export type Plan = {
  id: string;
  name: string;
  monthly: number | null;
  annual: number | null;
  tag?: string;
  tagTone?: "teal" | "lime";
  summary: string;
  bestFor: string;
  features: string[];
  cta: { label: string; kind: "trial" | "contact" };
};

export const PLANS: Plan[] = [
  {
    id: "business",
    name: "Business",
    monthly: 29.95,
    annual: 26.95,
    summary: "Curated stations and the core tools to set the right atmosphere.",
    bestFor: "Single-location businesses",
    features: ["Create mixes", "Schedule content", "Program messages", "Manage multiple users", "100+ stations"],
    cta: { label: "Start free trial", kind: "trial" },
  },
  {
    id: "premium",
    name: "Business Premium",
    monthly: 38.95,
    annual: 33.95,
    tag: "Most popular",
    tagTone: "teal",
    summary: "The full library, 500+ stations and playlist importing.",
    bestFor: "Brands that want full control of their sound",
    features: [
      "Everything in Business",
      "500+ stations",
      "Import playlists from Spotify, Apple Music, Amazon Music and more",
    ],
    cta: { label: "Start free trial", kind: "trial" },
  },
  {
    id: "premium-hd",
    name: "Business Premium HD",
    monthly: 41.95,
    annual: 35.95,
    tag: "New",
    tagTone: "lime",
    summary: "Everything in Premium, streamed in high definition.",
    bestFor: "Venues where sound quality is the experience",
    features: ["Everything in Business Premium", "High definition sound"],
    cta: { label: "Start free trial", kind: "trial" },
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthly: null,
    annual: null,
    summary: "Custom playlists, centralised control and dedicated support.",
    bestFor: "Large and multi-location organisations",
    features: [
      "Everything in Premium HD",
      "Custom stations built for your brand",
      "Enhanced support and account management",
      "Centralised multi-location management",
    ],
    cta: { label: "Contact sales", kind: "contact" },
  },
];

// Feature matrix for the comparison table. true = included, string = detail.
export const MATRIX: { group: string; rows: { label: string; values: (boolean | string)[] }[] }[] = [
  {
    group: "Music",
    rows: [
      { label: "Curated stations", values: ["100+", "500+", "500+", "500+ and custom"] },
      { label: "Mellow to upbeat energy control", values: [true, true, true, true] },
      { label: "Mix stations with weighting", values: [true, true, true, true] },
      { label: "Import playlists (Spotify, Apple Music, Amazon Music…)", values: [false, true, true, true] },
      { label: "High definition sound", values: [false, false, true, true] },
      { label: "Custom playlists handcrafted for your brand", values: [false, false, false, true] },
    ],
  },
  {
    group: "Control",
    rows: [
      { label: "Schedule stations and mixes", values: [true, true, true, true] },
      { label: "Program promotional messages", values: [true, true, true, true] },
      { label: "Unlimited linked users", values: [true, true, true, true] },
      { label: "Multi-location and zone management", values: [true, true, true, true] },
      { label: "Ad-free streaming", values: [true, true, true, true] },
    ],
  },
  {
    group: "Licensing & support",
    rows: [
      { label: "US public performance licences (ASCAP, BMI, SESAC, GMR)", values: [true, true, true, true] },
      { label: "Canadian public performance licences (SOCAN, Re:Sound)", values: [true, true, true, true] },
      { label: "Online and phone support, Help Center, on-demand training", values: [true, true, true, true] },
      { label: "Enhanced support and dedicated account management", values: [false, false, false, true] },
    ],
  },
];

export const PRICING_FAQ = [
  {
    q: "How does the free trial work?",
    a: "You get every feature of the plan you choose. You can switch plans from your Billing page during the trial, then choose a plan and pay by credit card, ACH or wire transfer from your account. No credit card is needed to start.",
  },
  {
    q: "How can I pay?",
    a: "By credit card, ACH or wire transfer from within your account. If you pay annually or have 10 or more licences, you can choose to pay by invoice. Contact us to set that up.",
  },
  {
    q: "How long are contracts? Can I change plans?",
    a: "Plans are month-to-month or annual. You can start, stop or change your plan at any time.",
  },
  {
    q: "How are new locations billed?",
    a: "Each location needs its own licence. New locations are charged a prorated amount for the rest of your current billing period.",
  },
  {
    q: "Can I play different music in different areas?",
    a: "Yes. A location can be split into zones, each with its own stream. Each activated zone adds a cost to the main account. If you use a third-party system that supports multiple zones, you can play separate streams in each zone from the same subscription.",
  },
  {
    q: "Do you offer discounts?",
    a: "Annual plans save 10%. If you buy 10 or more licences, tiered volume pricing is available. Contact us for details.",
  },
  {
    q: "What music licences are included?",
    a: "In the USA and Canada, your subscription includes public performance licences for background music played through SoundMachine: ASCAP, BMI, SESAC and GMR in the US, and SOCAN and Re:Sound in Canada. They do not cover live music, DJs, karaoke, events that charge admission, or music from other sources. Outside the USA and Canada, you need licences from your local collecting societies.",
  },
  {
    q: "What support is included?",
    a: "Every plan includes online and phone support, the SoundMachine Help Center and on-demand training. Subscribers can also use the Music Concierge, custom training and implementation services.",
  },
];
