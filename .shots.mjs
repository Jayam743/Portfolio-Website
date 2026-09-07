import { chromium } from "playwright";

const OUT = "/tmp/claude-1000/-home-jayam-dev-Syndicate/04453e6f-a2eb-46dd-b0c2-504bbac213e3/scratchpad";
const URL = "http://localhost:3000";

const browser = await chromium.launch();

// --- Desktop dark ---
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/desktop-dark.png`, fullPage: false });
  await page.locator("h1").screenshot({ path: `${OUT}/wordmark-dark.png` });
  await ctx.close();
}

// --- Desktop light ---
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/desktop-light.png`, fullPage: false });
  await page.locator("h1").screenshot({ path: `${OUT}/wordmark-light.png` });
  await ctx.close();
}

// --- Reduced motion ---
{
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await ctx.newPage();
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.evaluate(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  });
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/reduced-motion-hero.png`, fullPage: false });

  // capture the role-typewriter area twice, a bit apart in time, to show cross-fade
  const roleLine = page.locator("p:has(> span > span.grid)").first();
  await roleLine.screenshot({ path: `${OUT}/reduced-motion-role-1.png` }).catch(() => {});

  // scroll to projects carousel
  const carousel = page.getByRole("region", { name: "Projects" });
  await carousel.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/reduced-motion-carousel.png`, fullPage: false });

  await ctx.close();
}

await browser.close();
console.log("done");
