const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto("http://127.0.0.1:8118/", { waitUntil: "networkidle", timeout: 15000 });
  const homeTitle = await page.title();
  const sectionCount = (await page.$$("section")).length;
  const navCount = (await page.$$("nav a")).length;
  const heroImg = await page.$("section img");
  const colors = await page.evaluate(() => {
    const body = getComputedStyle(document.body);
    return { bg: body.backgroundColor, font: body.fontFamily, color: body.color, fs: body.fontSize };
  });
  console.log(JSON.stringify({
    title: homeTitle, sections: sectionCount, navLinks: navCount,
    hasHeroImg: !!heroImg, colors
  }));
  await browser.close();
})().catch(e => { console.error(e.message); process.exit(1); });