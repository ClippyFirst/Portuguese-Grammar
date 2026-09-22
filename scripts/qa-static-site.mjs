import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";
import process from "node:process";
import { chromium } from "playwright";

const BASE_PATH = "/Portuguese-Grammar";
const ORIGIN = "http://127.0.0.1:4173";
const candidates = [".output/public", "dist/client", "dist"];
const siteRoot = candidates
  .map((relative) => ({ relative, absolute: path.resolve(relative) }))
  .find(({ absolute }) => fs.existsSync(path.join(absolute, "index.html")));

if (!siteRoot) {
  throw new Error("Static output not found. Run npm run build:github-pages first.");
}

function catalogRows() {
  const source = fs.readFileSync(path.resolve("src/content/catalog.ts"), "utf8");
  const rows = [];
  const pattern =
    /^\s*\["([^"]+)",\s*"([^"]+)",\s*"([^"]+)",.*?,\s*"(high|medium|short)"\],?\s*$/u;
  for (const line of source.split("\n")) {
    const match = line.match(pattern);
    if (match) rows.push({ id: match[1], category: match[2], slug: match[3] });
  }
  return rows;
}

function routeFor(row) {
  if (row.category === "comparisons") return `/comparisons/${row.slug}`;
  if (row.category === "regional") return `/regional/${row.slug}`;
  return `/pt/${row.category}/${row.slug}`;
}

function htmlFile(route) {
  const clean = route.replace(/^\/+|\/+$/gu, "");
  return path.join(siteRoot.absolute, clean, "index.html");
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function waitForServer(url, timeoutMs = 20_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(url);
      if (response.ok || response.status === 404) return;
    } catch {
      // Server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Preview server did not become ready: ${url}`);
}

const rows = catalogRows();
assert(rows.length > 0, "Catalog parser found no pages.");

const representativeRows = [
  rows[0],
  rows[Math.floor(rows.length / 2)],
  rows[rows.length - 1],
].filter(Boolean);

const representativeRoutes = new Set([
  BASE_PATH + "/",
  BASE_PATH + "/pt",
  BASE_PATH + "/search",
  BASE_PATH + "/comparisons",
  BASE_PATH + "/regional",
  BASE_PATH + "/tables",
  ...representativeRows.map((row) => BASE_PATH + routeFor(row)),
]);

for (const route of representativeRoutes) {
  const sourceRoute = route.slice(BASE_PATH.length) || "/";
  const file = sourceRoute === "/" ? path.join(siteRoot.absolute, "index.html") : htmlFile(sourceRoute);
  assert(fs.existsSync(file), `Missing static HTML for ${route}: ${file}`);
  const html = fs.readFileSync(file, "utf8");
  assert(html.includes("<html"), `No <html> shell in ${route}`);
  assert(html.includes("<body"), `No <body> in ${route}`);
  assert(html.length > 1000, `Suspiciously small HTML document at ${route}`);
}

const public404 = path.join("public", "404.html");
assert(fs.existsSync(public404), "public/404.html is missing.");

const sitemap = path.join(siteRoot.absolute, "sitemap.xml");
assert(fs.existsSync(sitemap), "Generated sitemap.xml is missing from the static artifact.");
const sitemapText = fs.readFileSync(sitemap, "utf8");
assert(sitemapText.includes("https://clippyfirst.github.io/Portuguese-Grammar/"), "Sitemap base URL is wrong.");

const child = spawn(
  process.execPath,
  ["scripts/with-app-env.mjs", "vite", "preview", "--mode", "github-pages", "--host", "127.0.0.1", "--port", "4173"],
  { stdio: ["ignore", "pipe", "pipe"] },
);

let logs = "";
child.stdout.on("data", (chunk) => {
  logs += chunk.toString();
});
child.stderr.on("data", (chunk) => {
  logs += chunk.toString();
});

const stopServer = () => {
  if (!child.killed) child.kill();
};

try {
  await waitForServer(`${ORIGIN}${BASE_PATH}/`);

  const routeChecks = [
    `${BASE_PATH}/`,
    `${BASE_PATH}/pt`,
    `${BASE_PATH}/search`,
    `${BASE_PATH}/tables`,
    `${BASE_PATH}${routeFor(representativeRows[0])}`,
  ];

  for (const url of routeChecks) {
    const response = await fetch(`${ORIGIN}${url}`);
    assert(response.ok, `HTTP ${response.status} for ${url}`);
    const html = await response.text();
    assert(html.includes("<h1") || html.includes("<title"), `No obvious page content in ${url}`);
  }

  const missingResponse = await fetch(`${ORIGIN}${BASE_PATH}/definitely-not-a-real-route`);
  assert(missingResponse.status === 404, `Expected 404 for unknown route, got ${missingResponse.status}`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto(`${ORIGIN}${BASE_PATH}/`, { waitUntil: "networkidle" });
  assert((await page.locator("body").innerText()).trim().length > 100, "Home page has insufficient rendered text.");

  await page.goto(`${ORIGIN}${BASE_PATH}/search/`, { waitUntil: "networkidle" });
  const searchInput = page.locator("#q");
  assert(await searchInput.count() === 1, "Search input #q is missing.");
  await searchInput.fill("subjuntivo");
  await searchInput.press("Enter");
  await page.waitForTimeout(500);
  assert(new URL(page.url()).searchParams.get("q") === "subjuntivo", `Search form did not update q; URL was ${page.url()}`);
  assert(await page.locator("text=результат").count() > 0 || await page.locator("text=Нічого").count() > 0, "Search result state did not render.");

  await page.goto(`${ORIGIN}${BASE_PATH}${routeFor(representativeRows[0])}`, { waitUntil: "networkidle" });
  assert((await page.locator("h1").first().innerText()).trim().length > 0, "Representative article has no visible H1.");

  assert(consoleErrors.length === 0, `Browser console errors: ${consoleErrors.join(" | ")}`);
  assert(pageErrors.length === 0, `Browser page errors: ${pageErrors.join(" | ")}`);

  await browser.close();
} finally {
  stopServer();
}

console.log(
  [
    "Static site smoke QA passed.",
    `Artifact: ${siteRoot.relative}`,
    `Catalog pages: ${rows.length}`,
    `Representative browser routes: ${representativeRows.length}`,
    "Checked: static HTML, base path, HTTP routes, 404, search interaction, article rendering, console/page errors.",
  ].join("\n"),
);

if (logs.includes("error") && !logs.includes("error:")) {
  // Preview warnings are not automatically failures; keep them available for diagnosis.
  console.log("Preview server emitted diagnostic output.");
}
