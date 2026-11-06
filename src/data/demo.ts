// Demo data for the interactive dashboard. The business, artists and tracks are
// fictional, and station artwork is generated, so no third-party artwork is used.

const PALETTES = [
  ["#00909f", "#f4dd83", "#003439"],
  ["#b12b34", "#ef8fa0", "#5f171c"],
  ["#e8501d", "#f4dd83", "#822c18"],
  ["#1f9a6f", "#c6f17a", "#0a262b"],
  ["#3d4347", "#00909f", "#f4dd83"],
  ["#ef8fa0", "#f4dd83", "#b12b34"],
  ["#003439", "#1f9a6f", "#f0d054"],
  ["#822c18", "#e8501d", "#f4dd83"],
];

export function artStyle(i: number): string {
  const [a, b, c] = PALETTES[i % PALETTES.length];
  switch (i % 5) {
    case 0:
      return `background: radial-gradient(circle at 70% 30%, ${b} 0 20%, transparent 21%), radial-gradient(circle at 30% 75%, ${c} 0 28%, transparent 29%), ${a};`;
    case 1:
      return `background: repeating-linear-gradient(135deg, ${a} 0 14px, ${b} 14px 28px), ${a};`;
    case 2:
      return `background: radial-gradient(circle at 50% 120%, ${b} 0 45%, ${c} 46% 60%, transparent 61%), linear-gradient(180deg, ${a}, ${c});`;
    case 3:
      return `background: conic-gradient(from 45deg at 50% 50%, ${a} 0 25%, ${b} 0 50%, ${c} 0 75%, ${a} 0);`;
    default:
      return `background: radial-gradient(circle at 50% 50%, ${c} 0 12%, ${b} 13% 30%, ${a} 31% 48%, ${c} 49% 52%, ${a} 53%);`;
  }
}

export type Station = { id: string; name: string; genre: string; energy: number; desc: string };

export const GENRES = ["All", "Pop", "Acoustic", "Soul & R&B", "Jazz", "Indie", "Lounge", "Electronic", "Latin", "Classical", "Ambient & Spa", "Rock"];

export const STATIONS: Station[] = [
  { id: "acoustic-pop", name: "Acoustic Pop", genre: "Acoustic", energy: 2, desc: "Warm, stripped-back pop" },
  { id: "pop-now", name: "Pop Now", genre: "Pop", energy: 4, desc: "Today's bright, clean pop" },
  { id: "adult-contemporary", name: "90s–10s Adult Contemporary", genre: "Pop", energy: 3, desc: "Radio-friendly favourites" },
  { id: "soul-kitchen", name: "Soul Kitchen", genre: "Soul & R&B", energy: 3, desc: "Classic and modern soul" },
  { id: "nu-jazz", name: "Nu Jazz Brunch", genre: "Jazz", energy: 2, desc: "Light, modern jazz" },
  { id: "jazz-swing", name: "Jazz & Swing", genre: "Jazz", energy: 3, desc: "Timeless swing standards" },
  { id: "indie-mellow", name: "Indie Mellow", genre: "Indie", energy: 2, desc: "Soft-focus indie" },
  { id: "indie-bright", name: "Indie Bright", genre: "Indie", energy: 4, desc: "Upbeat guitar indie" },
  { id: "eclectic-lounge", name: "Eclectic Lounge", genre: "Lounge", energy: 2, desc: "Sophisticated downtempo" },
  { id: "rooftop", name: "Rooftop Sunset", genre: "Electronic", energy: 3, desc: "Balearic, golden-hour house" },
  { id: "deep-house", name: "Deep House Lobby", genre: "Electronic", energy: 4, desc: "Polished, rolling house" },
  { id: "latin-cafe", name: "Latin Café", genre: "Latin", energy: 3, desc: "Bossa nova to modern Latin" },
  { id: "modern-classical", name: "Modern Classical", genre: "Classical", energy: 1, desc: "Piano and strings" },
  { id: "spa", name: "Ambient Spa", genre: "Ambient & Spa", energy: 1, desc: "Slow, spacious, restorative" },
  { id: "pop-rock", name: "Pop Rock", genre: "Rock", energy: 4, desc: "Pop hits with a rock edge" },
  { id: "70s-80s-rock", name: "70s–80s Rock", genre: "Rock", energy: 5, desc: "Classic stadium energy" },
];

export const TRACKS: Record<string, [string, string][]> = {
  default: [
    ["Golden Hour Drive", "The Pale Coast"],
    ["Paper Lanterns", "Mila Rhodes"],
    ["Somewhere Brighter", "Juniper Lane"],
    ["Velvet Morning", "Otis Calloway"],
    ["Slow Tide", "Harbour Lights"],
    ["Northern Static", "Ada & the Wires"],
    ["Linen", "Soleil Park"],
    ["Late Bloom", "Theo Marsh"],
    ["Copper Sky", "The Fairweathers"],
    ["Common Ground", "Nina Okafor"],
  ],
};

export type Zone = { name: string; device: string; playing: string; status: "online" | "offline" | "idle" };
export type Location = { name: string; city: string; zones: Zone[] };

export const ACCOUNT = "Harbour & Pine Hotels";

export const LOCATIONS: Location[] = [
  {
    name: "Harbour & Pine Chicago",
    city: "Chicago, IL",
    zones: [
      { name: "Lobby", device: "Q-SYS", playing: "Lobby Schedule", status: "online" },
      { name: "Restaurant", device: "SoundMachine Player", playing: "Nu Jazz Brunch", status: "online" },
      { name: "Spa", device: "Sonos", playing: "Ambient Spa", status: "online" },
    ],
  },
  {
    name: "Harbour & Pine Austin",
    city: "Austin, TX",
    zones: [
      { name: "Lobby", device: "Crestron", playing: "Lobby Schedule", status: "online" },
      { name: "Rooftop Bar", device: "Bluesound Pro", playing: "Rooftop Sunset", status: "online" },
      { name: "Gym", device: "Web Player", playing: "Pop Now", status: "idle" },
    ],
  },
  {
    name: "Harbour & Pine Toronto",
    city: "Toronto, ON",
    zones: [
      { name: "Lobby", device: "Control4", playing: "Lobby Schedule", status: "online" },
      { name: "Café", device: "SM Mobile App", playing: "Latin Café", status: "offline" },
    ],
  },
];

// Weekly schedule: [startHour, endHour, stationId]
export const SCHEDULE: { day: string; blocks: [number, number, string][] }[] = [
  { day: "Mon", blocks: [[6, 10, "acoustic-pop"], [10, 14, "adult-contemporary"], [14, 17, "indie-mellow"], [17, 22, "eclectic-lounge"], [22, 24, "spa"]] },
  { day: "Tue", blocks: [[6, 10, "acoustic-pop"], [10, 14, "adult-contemporary"], [14, 17, "indie-mellow"], [17, 22, "eclectic-lounge"], [22, 24, "spa"]] },
  { day: "Wed", blocks: [[6, 10, "acoustic-pop"], [10, 14, "adult-contemporary"], [14, 17, "indie-mellow"], [17, 22, "eclectic-lounge"], [22, 24, "spa"]] },
  { day: "Thu", blocks: [[6, 10, "acoustic-pop"], [10, 14, "adult-contemporary"], [14, 17, "soul-kitchen"], [17, 23, "rooftop"], [23, 24, "spa"]] },
  { day: "Fri", blocks: [[6, 10, "acoustic-pop"], [10, 14, "pop-now"], [14, 17, "soul-kitchen"], [17, 24, "deep-house"]] },
  { day: "Sat", blocks: [[6, 11, "nu-jazz"], [11, 16, "latin-cafe"], [16, 19, "rooftop"], [19, 24, "deep-house"]] },
  { day: "Sun", blocks: [[6, 12, "nu-jazz"], [12, 17, "acoustic-pop"], [17, 22, "eclectic-lounge"], [22, 24, "modern-classical"]] },
];

export type Message = { id: string; title: string; type: "interval" | "exact"; every?: number; at?: string; group: string; on: boolean };

export const MESSAGES: Message[] = [
  { id: "happy", title: "Happy hour on the rooftop, 5–7pm", type: "interval", every: 30, group: "Bars", on: true },
  { id: "loyalty", title: "Join Harbour & Pine Rewards", type: "interval", every: 45, group: "All locations", on: true },
  { id: "spa", title: "Book a spa treatment at reception", type: "interval", every: 60, group: "Lobbies", on: false },
  { id: "closing", title: "The pool closes in 15 minutes", type: "exact", at: ":45", group: "Chicago", on: true },
];
