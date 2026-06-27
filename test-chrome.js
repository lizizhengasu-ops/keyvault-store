const { chromium } = require("playwright");

(async () => {
  try {
    const browser = await chromium.connectOverCDP("http://127.0.0.1:9222");
    console.log("Connected! Contexts:", browser.contexts().length);
    const context = browser.contexts()[0];
    const page = context.pages()[0];
    console.log("Current URL:", page.url());
    console.log("Current Title:", await page.title());
    await page.goto("https://www.baidu.com");
    console.log("Navigated to Baidu");
    const title = await page.title();
    console.log("New Title:", title);
    await browser.close();
  } catch (e) {
    if (e.message.includes("connect ECONNREFUSED")) {
      console.log("CDP not available, launching new Chrome...");
      const browser = await chromium.launchPersistentContext(
        "C:\\Users\\31961\\AppData\\Local\\Google\\Chrome\\User Data\\Default",
        {
          headless: false,
          args: ["--start-maximized"],
        }
      );
      const page = browser.pages()[0];
      await page.goto("https://www.baidu.com");
      console.log("Launched Chrome and navigated to Baidu");
      console.log("Title:", await page.title());
    } else {
      console.error("Error:", e.message);
    }
  }
})();
