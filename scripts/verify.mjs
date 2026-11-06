// Post-build checks for the staging site. Run after `npm run build`.
// - every HTML page carries a robots noindex meta tag
// - _headers sends X-Robots-Tag: noindex for every path
// - robots.txt allows crawling (so the noindex can be seen) and advertises no sitemap
// - each page has exactly one <h1>, a <title> and a meta description
// - every built route is either a live sound-machine.com URL or an agreed new section
// - internal links point at pages that exist
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const DIST = "dist";
const NEW_SECTIONS = new Set(["/research", "/404"]);
const errors = [];
const fail = (msg) => errors.push(msg);

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const pages = walk(DIST).filter((f) => f.endsWith(".html"));
const routeOf = (file) => {
  const r = "/" + relative(DIST, file).replace(/\\/g, "/").replace(/\.html$/, "");
  return r === "/index" ? "/" : r;
};
const routes = new Set(pages.map(routeOf));

// Live URL inventory (docs/url-inventory.csv).
const live = new Set(
  readFileSync("docs/url-inventory.csv", "utf8")
    .split("\n")
    .slice(1)
    .filter(Boolean)
    .map((l) => l.split(",")[0]),
);

for (const file of pages) {
  const html = readFileSync(file, "utf8");
  const route = routeOf(file);
  if (!/<meta name="robots" content="noindex, nofollow, noarchive">/.test(html)) fail(`${route}: missing robots noindex meta`);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) fail(`${route}: expected one <h1>, found ${h1s}`);
  if (!/<title>[^<]{10,}<\/title>/.test(html)) fail(`${route}: missing <title>`);
  if (!/<meta name="description" content="[^"]{50,}"/.test(html)) fail(`${route}: missing or short meta description`);
  if (!live.has(route) && !NEW_SECTIONS.has(route)) fail(`${route}: not a live sound-machine.com URL and not an agreed new section`);
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)/g)) {
    if (href.startsWith("/_astro/") || href.startsWith("/images/") || /\.(png|svg|webp|ico|css|js|txt)$/.test(href)) continue;
    const clean = href.length > 1 ? href.replace(/\/$/, "") : href;
    if (!routes.has(clean)) fail(`${route}: broken internal link ${href}`);
  }
}

const headers = readFileSync(join(DIST, "_headers"), "utf8");
if (!/^\/\*\n(?:.*\n)*?\s+X-Robots-Tag: noindex/m.test(headers)) fail("_headers: X-Robots-Tag noindex missing for /*");
const robots = readFileSync(join(DIST, "robots.txt"), "utf8");
if (!/Allow: \//.test(robots) || /Disallow: \/\s*$/m.test(robots)) fail("robots.txt: must allow crawling so noindex is visible");
if (/Sitemap:/i.test(robots)) fail("robots.txt: staging must not advertise a sitemap");
if (!existsSync(join(DIST, "404.html"))) fail("404.html missing");

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s):\n  ` + errors.join("\n  "));
  process.exit(1);
}
console.log(`✓ ${pages.length} pages verified: noindex meta + header, one h1, metadata, live URL structure, internal links.`);
