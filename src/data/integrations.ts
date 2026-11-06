// Playback options and third-party integrations, from sound-machine.com/devices.
export type Integration = {
  id: string;
  name: string;
  kind: "SoundMachine" | "Streamer & amp" | "Control system" | "Wireless multi-room" | "Pro audio platform";
  zones: string;
  control: string;
  goodFor: string;
  points: string[];
};

export const PLAYBACK = [
  {
    id: "web",
    name: "Web player",
    tagline: "Stream from any computer connected to your sound system.",
    detail:
      "Ideal for smaller businesses that don't want to buy hardware, or anyone trying SoundMachine before getting a player.",
  },
  {
    id: "mobile",
    name: "iOS and Android apps",
    tagline: "Use a phone or tablet as the music source, or as a remote.",
    detail:
      "Switch stations, mixes or schedules on the fly, like or dislike songs to fine-tune content, and control dedicated players across every location.",
  },
  {
    id: "player",
    name: "SoundMachine hardware player",
    tagline: "The plug-and-play option for full control at every site.",
    detail:
      "Configured remotely and controlled from the app. Needs only an internet connection, a speaker system and power. Works with DHCP or a static IP.",
  },
];

export const INTEGRATIONS: Integration[] = [
  {
    id: "bluesound",
    name: "Bluesound Professional",
    kind: "Streamer & amp",
    zones: "Multi-zone",
    control: "Wall controllers and third-party control systems",
    goodFor: "New commercial installs",
    points: [
      "A streaming hardware range designed for commercial use, and the easiest way to build SoundMachine into a new project.",
      "BluOS streamers, streamer-amplifiers and networked speakers, including PoE IP65-rated indoor/outdoor speakers.",
      "Commercial-grade security and network features.",
    ],
  },
  {
    id: "crestron",
    name: "Crestron",
    kind: "Control system",
    zones: "Multiple zones",
    control: "Crestron app, touch panels, mobile and tablet",
    goodFor: "Corporate and hospitality AV",
    points: [
      "SoundMachine playback controls directly in the Crestron app on Crestron devices, mobile and tablets.",
      "Add zones to a listening stream for seamless transitions between areas.",
      "Run multiple streaming sessions from one SoundMachine subscription.",
    ],
  },
  {
    id: "qsys",
    name: "Q-SYS",
    kind: "Pro audio platform",
    zones: "Up to 12 zones",
    control: "Q-SYS Verified Plugin",
    goodFor: "Large venues and enterprise AV",
    points: [
      "The Q-SYS Verified Plugin gives full control of up to 12 zones of SoundMachine audio.",
      "Select libraries, genres, playlists, schedules and stations, with transport controls and 'now playing' metadata per zone.",
      "Available to check out from the Q-SYS library.",
    ],
  },
  {
    id: "sonos",
    name: "Sonos",
    kind: "Wireless multi-room",
    zones: "Per speaker group",
    control: "Sonos app (SoundMachine built in)",
    goodFor: "Shops, cafés and clean installs",
    points: [
      "A reliable wireless system on its own private network, avoiding Wi-Fi interference.",
      "SoundMachine is built into the Sonos apps.",
      "Place speakers anywhere without cable runs, for a clean, professional look.",
    ],
  },
  {
    id: "control4",
    name: "Control4",
    kind: "Control system",
    zones: "Multiple zones",
    control: "Control4 app, touchscreens and TV on-screen display",
    goodFor: "Venues automating AV, lights and climate",
    points: [
      "Browse stations from the Control4 app, touchscreens or TV on-screen display.",
      "Play different stations in different zones, or one station at different volumes.",
      "Controls music, TVs, lighting, thermostats, shades and security together.",
    ],
  },
  {
    id: "savant",
    name: "Savant",
    kind: "Control system",
    zones: "Multiple zones",
    control: "Savant app, Touch Panel and Pro Remote",
    goodFor: "Premium hospitality and retail",
    points: [
      "A personalised dashboard with playlist search on the Savant app, Touch Panel or Pro Remote.",
      "Schedule a Savant Scene that sets station, volume and lighting together.",
      "Brings music, lighting, climate, shades, power and security into one system.",
    ],
  },
  {
    id: "rti",
    name: "RTI",
    kind: "Control system",
    zones: "Concurrent multi-zone",
    control: "Mobile devices and touch panels",
    goodFor: "Sports bars and restaurants",
    points: [
      "Ideal for sports bars, restaurants and other hospitality venues.",
      "Concurrent streams to multiple zones, managed by staff from a phone or touch panel.",
      "Combines music control with TV, lighting, shades, climate and security.",
    ],
  },
  {
    id: "autonomic",
    name: "Autonomic",
    kind: "Streamer & amp",
    zones: "Multi-zone",
    control: "Crestron, Savant, Control4, RTI and more",
    goodFor: "Multi-site operators",
    points: [
      "Flexible, powerful hardware for SoundMachine in commercial spaces.",
      "Remotely manage schedules at multiple locations from one interface.",
      "Compatible with Crestron, Savant, Control4, RTI and other control systems.",
    ],
  },
  {
    id: "casatunes",
    name: "CasaTunes",
    kind: "Pro audio platform",
    zones: "60+ distribution systems",
    control: "Control4, ELAN, HDL, KNX, RTI",
    goodFor: "Integrators managing many sites",
    points: [
      "Supports more than 60 audio distribution systems for new or existing installations.",
      "Built-in monitoring, notifications and remote access reduce site visits.",
      "Out-of-the-box integration with popular automation and control systems.",
    ],
  },
  {
    id: "bogen",
    name: "Bogen",
    kind: "Pro audio platform",
    zones: "Virtually unlimited streams",
    control: "Web-based GUI on any device",
    goodFor: "Large commercial venues",
    points: [
      "The C4000 web interface manages distributed playlists and settings from any device.",
      "Distribute a virtually unlimited number of streams to zones across a venue.",
      "Full range of indoor and outdoor speakers, mixers and amplifiers.",
    ],
  },
  {
    id: "nad",
    name: "NAD",
    kind: "Streamer & amp",
    zones: "Multi-zone (BluOS)",
    control: "Crestron, Control4, ELAN, RTI, URC, Lutron, iPort",
    goodFor: "Hi-res audio installs",
    points: [
      "BluOS technology for hi-res audio distribution with SoundMachine built in.",
      "Performance, value and simplicity for effortless installations.",
      "BluOS custom-install drivers for the major control systems.",
    ],
  },
  {
    id: "playfi",
    name: "Play-Fi",
    kind: "Wireless multi-room",
    zones: "Multi-room",
    control: "Play-Fi apps",
    goodFor: "Mixed-brand speaker setups",
    points: [
      "One of the largest wireless audio ecosystems.",
      "From powered speakers to amplifiers and floor speakers, all connected.",
      "Brands include Arcam, Klipsch, MartinLogan and Philips.",
    ],
  },
  {
    id: "trivum",
    name: "trivum",
    kind: "Pro audio platform",
    zones: "Flexible zone matrix",
    control: "App, touch panel, tablet, IP and KNX",
    goodFor: "Smart buildings",
    points: [
      "Central music control with flexible zone grouping for a consistent atmosphere.",
      "A powerful audio matrix assigns outputs to zones dynamically.",
      "Full KNX integration and regular software updates.",
    ],
  },
  {
    id: "wiim",
    name: "WiiM",
    kind: "Streamer & amp",
    zones: "Multi-room",
    control: "WiiM Home app",
    goodFor: "Cost-effective hi-fi streaming",
    points: [
      "Connects directly with SoundMachine for retail, hospitality and office use.",
      "Manage rooms and volume centrally in the WiiM Home app.",
      "Hi-fi components with enterprise-friendly network support.",
    ],
  },
  {
    id: "openaudio",
    name: "OpenAudio",
    kind: "Streamer & amp",
    zones: "8 concurrent streams",
    control: "Matter, KNX, Control4 and more",
    goodFor: "Multi-zone retail and hospitality",
    points: [
      "8-zone streaming amplifiers built for commercial audio.",
      "One account runs 8 concurrent streams with flexible zone routing.",
      "Integrates with building automation: Matter, KNX, Control4 and more.",
    ],
  },
];

// "What do you have today?" quick paths for the integration explorer.
export const STARTING_POINTS = [
  { id: "amp", label: "An amp and speakers", recommend: ["player", "web"], note: "Plug a SoundMachine player into your amplifier's input. Nothing else changes." },
  { id: "sonos", label: "Sonos", recommend: ["sonos"], note: "SoundMachine is already in the Sonos app. Sign in and choose your zones." },
  { id: "control", label: "Crestron, Control4, Savant or RTI", recommend: ["crestron", "control4", "savant", "rti"], note: "Control SoundMachine from the touch panels and apps your staff already use." },
  { id: "pro", label: "Q-SYS or a pro DSP system", recommend: ["qsys", "bogen", "casatunes", "trivum"], note: "Native plugins put stations, schedules and now-playing data into your AV platform." },
  { id: "none", label: "Nothing yet", recommend: ["bluesound", "openaudio", "wiim", "nad"], note: "Pick commercial streaming hardware with SoundMachine built in, or start free with the web player." },
];
