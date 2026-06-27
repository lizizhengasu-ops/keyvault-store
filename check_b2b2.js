const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: "C:\\Users\\31961\\AppData\\Local\\ms-playwright\\chromium-1223\\chrome-win64\\chrome.exe" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const logs = [];
  page.on("console", msg => logs.push(msg.type() + ": " + msg.text()));
  page.on("pageerror", err => logs.push("PAGE_ERROR: " + err.message));
  await page.goto("http://127.0.0.1:10005/b2b-wholesale2/", { waitUntil: "networkidle", timeout: 15000 });
  await page.waitForTimeout(3000);
  const html = await page.content();
  const tests = await page.evaluate(() => {
    const v2 = document.getElementById("ms-b2b-v2-root");
    const inter = document.getElementById("ms-b2b-interactive-root");
    const stable = document.getElementById("ms-b2b-stable-root");
    return {
      v2: v2 ? { display: v2.style.display, children: v2.children.length, html: v2.innerHTML.substring(0,300) } : "NOT_FOUND",
      inter: inter ? { display: inter.style.display, children: inter.children.length, html: inter.innerHTML.substring(0,300) } : "NOT_FOUND",
      stable: stable ? { display: stable.style.display, children: stable.children.length, html: stable.innerHTML.substring(0,300) } : "NOT_FOUND",
      react: typeof React !== "undefined" ? React.version : "UNDEFINED",
      reactDOM: typeof ReactDOM !== "undefined" ? "OK" : "UNDEFINED",
      bodyText: document.body.innerText.substring(0,500),
      scripts: Array.from(document.scripts).splice(-8).map(s => s.src || s.innerHTML.substring(0,80))
    };
  });
  console.log(JSON.stringify(tests, null, 2));
  console.log("=== LOGS ===");
  logs.forEach(l => console.log(l));
  await browser.close();
})();
