// Sitewide settings. App links point at the live SoundMachine app, which is not
// part of this marketing rebuild.
export const APP = {
  login: "https://sound-machine.com/login",
  freeTrial: "https://sound-machine.com/free-trial",
  demo: "https://calendly.com/soundmachineteam/",
  blog: "https://sound-machine.com/blog/",
  helpEmail: "support@sound-machine.com",
  salesEmail: "info@sound-machine.com",
  partnerEmail: "smpartner@sound-machine.com",
};

export const OFFICES = [
  { city: "Los Angeles", lines: ["1110 N Virgil Avenue 377", "Los Angeles, CA 90029", "USA"] },
  { city: "Madrid", lines: ["Calle Marie Curie 5–7", "28529 Madrid", "Spain"] },
];

export const SOCIAL = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/soundmachine" },
  { label: "Instagram", href: "https://www.instagram.com/soundmachinemusicservice/" },
  { label: "Facebook", href: "https://www.facebook.com/SoundForBusiness" },
  { label: "X", href: "https://twitter.com/SoundMachine_US" },
];

// Headline facts published on sound-machine.com (About, Enterprise, licensing pages).
export const FACTS = {
  founded: 2008,
  locations: 24000,
  countries: 100,
  stations: 500,
};

export type NavItem = { label: string; href: string; badge?: string; desc?: string };

export const NAV: NavItem[] = [
  { label: "How it works", href: "/how-it-works", desc: "Stations, mixes, schedules and messages" },
  { label: "Devices", href: "/devices", desc: "Plug into the sound system you already have" },
  { label: "Licensing", href: "/licensing", desc: "What is covered, where, and by whom" },
  { label: "Enterprise", href: "/enterprise-music-solutions", desc: "Multi-location control, SLA and curation" },
  { label: "Research", href: "/research", badge: "New", desc: "The science of sound in business" },
  { label: "Pricing", href: "/pricing", desc: "Simple per-location plans" },
];

export const CLIENT_LOGOS = [
  { name: "Loewe", src: "/images/logos/loewe.webp", w: 707, h: 160 },
  { name: "Auberge Resorts Collection", src: "/images/logos/auberge-resorts-collection.webp", w: 836, h: 98 },
  { name: "MALIN+GOETZ", src: "/images/logos/malin-goetz.svg", w: 200, h: 40 },
  { name: "Porsche", src: "/images/logos/porsche.webp", w: 318, h: 159 },
  { name: "Blu Dot", src: "/images/logos/blu-dot.svg", w: 120, h: 40 },
  { name: "NH Hotels", src: "/images/logos/nh_hotels.webp", w: 154, h: 160 },
  { name: "Volcom", src: "/images/logos/volcom.svg", w: 140, h: 40 },
  { name: "La Perla", src: "/images/logos/la-perla.svg", w: 160, h: 40 },
  { name: "Boston Consulting Group", src: "/images/logos/bostonconsultinggroup.webp", w: 760, h: 160 },
  { name: "JLL", src: "/images/logos/jll.webp", w: 359, h: 160 },
  { name: "Paris Baguette", src: "/images/logos/paris-baguette.webp", w: 160, h: 160 },
  { name: "Ford", src: "/images/logos/ford.svg", w: 120, h: 46 },
];

export const INDUSTRIES = [
  { name: "Retail stores", group: "Retail", path: "/music-for-retail-stores", blurb: "Keep shoppers browsing longer with music that fits the brand." },
  { name: "Restaurants", group: "Hospitality", path: "/music-for-restaurants", blurb: "Pace every service, from breakfast calm to dinner buzz." },
  { name: "Cafés", group: "Hospitality", path: "/music-for-cafes", blurb: "Relaxed, welcoming sound that makes people stay for one more." },
  { name: "Hotels", group: "Hospitality", path: "/music-for-hotels", blurb: "Lobby, bar, spa and rooftop, each zoned with its own mood." },
  { name: "Bars", group: "Hospitality", path: "/music-for-bars", blurb: "Build the energy through the night, on schedule." },
  { name: "Gyms", group: "Health & beauty", path: "/music-for-gyms", blurb: "High-tempo stations that keep classes and floors moving." },
  { name: "Salons & spas", group: "Health & beauty", path: "/music-for-spas", blurb: "Calming, ad-free atmospheres for treatment rooms." },
  { name: "Healthcare", group: "Health & beauty", path: "/music-for-hospitals", blurb: "Soothing sound for waiting areas, clinics and dental." },
  { name: "Offices", group: "Services", path: "/music-for-offices", blurb: "Focus-friendly background music for receptions and floors." },
  { name: "Property managers", group: "Services", path: "/music-for-property-managers", blurb: "Licensed music for lobbies, amenities and common areas." },
  { name: "Banks", group: "Services", path: "/music-for-banks", blurb: "Calm, consistent branches with messaging built in." },
  { name: "Car dealerships", group: "Retail", path: "/music-for-car-dealerships", blurb: "Showroom energy and relaxed service lounges." },
];
