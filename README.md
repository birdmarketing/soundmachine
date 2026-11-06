# SoundMachine: new website (staging)

A rebuild of [sound-machine.com](https://sound-machine.com) by Bird Marketing in Astro, deployed as a static site on Cloudflare Workers.

**Staging:** https://soundmachine.bird.co.uk (noindex)

This first phase covers the core pages. It keeps the live site's exact URL structure, uses SoundMachine's brand colours in a modernised, interactive design, and adds a new Research section.

## What's in phase 1

| URL | Highlights |
| --- | --- |
| `/` | Working dashboard demo, "a day in the life" timeline, capability map filterable by plan, licensing checker, pricing |
| `/how-it-works` | Scroll-linked steps that drive the live dashboard demo |
| `/devices` | Integration explorer: pick your current setup to see how SoundMachine connects, who controls it and how many zones you get |
| `/pricing` | Monthly/annual toggle, per-location cost calculator, full feature matrix |
| `/licensing` | Country checker (US/CA/UK/rest of world), rights explainer, statutory damages calculator, "why one PRO isn't enough" simulator |
| `/licensing/{united-states,canada,united-kingdom,ascap,bmi,sesac}` | Data-driven guides with cost comparisons, the UK two-step checklist and PRO-focused simulators |
| `/enterprise-music-solutions` | Multi-location network visual, roles and permissions explorer, SLA and onboarding |
| `/research` | **New.** Sound strategies by business goal, music lever lab, energy curves by industry, studies and insight library |
| `/contact` | Demo booking, support and partner routes; the form prepares an email draft |

See [docs/url-map.md](docs/url-map.md) for the full live URL structure and what's planned for phase 2: industry pages, `/es/` Spanish pages and the blog. The complete inventory of 1,064 live URLs is in [docs/url-inventory.csv](docs/url-inventory.csv).

## Understanding the offering (source of truth)

All product, pricing and licensing facts come from the live site, crawled on 6 November 2026:

- **Product:** 500+ curated stations (100+ on Business), playlist import (Spotify, Apple Music, Amazon Music via native Apple Music, Soundiiz and TuneMyMusic), weighted mixes, an energy slider, schedules, messages, multi-location/zones, unlimited users with access levels, like/dislike, ad-free, HD on Premium HD, custom playlists on Enterprise.
- **Playback:** web player, iOS and Android apps, the SoundMachine hardware player, and 15 integrations: Bluesound Professional, Crestron, Q-SYS (up to 12 zones), Sonos, Control4, Savant, RTI, Autonomic, CasaTunes, Bogen, NAD, Play-Fi, trivum, WiiM and OpenAudio (8 streams).
- **Pricing (USD per location per month):** Business $29.95 monthly / $26.95 annual; Premium $38.95 / $33.95; Premium HD $41.95 / $35.95; Enterprise on request. Annual billing saves 10%, and 10+ licences get tiered pricing.
- **Licensing:**
  - **US:** ASCAP, BMI, SESAC and GMR public performance licences are included for background music played through SoundMachine.
  - **Canada:** SOCAN and Re:Sound are included.
  - **UK:** businesses also need TheMusicLicence directly from PPL PRS Ltd, which a provider cannot bundle.
  - **Elsewhere:** a local collecting-society licence is needed.
  - **Not covered anywhere:** live music, DJs, karaoke, cover-charge venues, and other sources such as radio, TV, CDs and MP3s.
- **Company:** founded 2008, 24,000+ locations, 100+ countries, offices in Los Angeles and Madrid.

Licensing figures (PRO fees, membership and catalogue sizes) are in `src/data/licensing.ts` and `src/data/licensing-pages.ts`. **SoundMachine should review them before launch**, because these numbers change.

## Placeholder statistics

As agreed, the Research section uses placeholder figures where SoundMachine data doesn't exist yet. Every statistic in `src/data/research.ts` has a `status`:

- `placeholder`: shown on the page with an orange **†** marker and a footnote. Replace it with SoundMachine customer data or a sourced statistic before launch.
- `cited`: a published study (Milliman 1982 and 1986; North, Hargreaves & McKendrick 1997 and 1999; Areni & Kim 1993). The figures are as widely reported; check them against the original papers before launch.

The music lever lab is labelled as an illustrative model, not a forecast.

## Design system

- **Brand colours** from the live CSS and logo: teal `#00909F` (`#007C89` for AA text and buttons), red `#B12B34`, yellow `#F4DD83`, charcoal `#3D4347`, plus the logo and icon accents (orange `#E8501D`, green `#1F9A6F`, pink `#EF8FA0`, brown `#822C18`). Tokens are in `src/styles/global.css`.
- **Type:** Jost (geometric, close to the live Futura-style headings) and Figtree (close to Proxima Nova), self-hosted through Fontsource.
- **Interactions:** vanilla JS in Astro component scripts, with no framework or animation library. All of it respects `prefers-reduced-motion`, and content renders without JS.
- **Station artwork** in demos is generated from the brand palette, so no third-party album art is used. The demo business, artists and tracks are fictional.

## Development

```bash
npm ci
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run check      # post-build verification (noindex, metadata, URL structure, links)
```

Data lives in `src/data/`, pages in `src/pages/`, and components in `src/components/`.

## Deployment

The site is a static assets Cloudflare Worker (`wrangler.jsonc`) on the custom domain `soundmachine.bird.co.uk`:

```bash
npm run deploy     # build → verify → wrangler deploy
```

- `html_handling: drop-trailing-slash` serves `/how-it-works` from `how-it-works.html` and redirects `/how-it-works/` → `/how-it-works`, matching the live site.
- `workers_dev` and preview URLs are off.

### Noindex (staging)

- The `X-Robots-Tag: noindex, nofollow, noarchive` header is sent on every path (`public/_headers`).
- A `<meta name="robots" content="noindex, nofollow, noarchive">` tag is on every page.
- `robots.txt` **allows** crawling on purpose, so search engines can read the noindex. Blocking crawling would hide it. No sitemap is advertised.

A production release needs its own configuration: remove noindex, add canonicals, a sitemap and the blog/app routing.
