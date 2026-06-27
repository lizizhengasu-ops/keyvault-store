const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: "C:\\Users\\31961\\AppData\\Local\\ms-playwright\\chromium-1223\\chrome-win64\\chrome.exe" });
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  const logs = [];
  page.on("console", msg => logs.push(msg.type() + ": " + msg.text()));
  page.on("pageerror", err => logs.push("PAGE_ERROR: " + err.message));
  
  await page.goto("http://127.0.0.1:10005/b2b-wholesale2/", { waitUntil: "networkidle", timeout: 20000 });
  await page.waitForTimeout(4000);
  
  const tests = await page.evaluate(() => {
    const v2 = document.getElementById("ms-b2b-v2-root");
    const stable = document.getElementById("ms-b2b-stable-root");
    const inter = document.getElementById("ms-b2b-interactive-root");
    return {
      v2: v2 ? { display: v2.style.display, children: v2.children.length, innerHeight: v2.offsetHeight, innerText: (v2.innerText || "").substring(0,200) } : "NOT_FOUND",
      stable: stable ? { display: stable.style.display, children: stable.children.length } : "NOT_FOUND",
      interactive: inter ? { display: inter.style.display } : "NOT_FOUND",
      hasReact: typeof React !== "undefined",
      reactVersion: typeof React !== "undefined" ? React.version : "N/A",
      visibleElements: document.querySelectorAll("h1, h2, h3, h4, button, a, p, input, span").length
    };
  });
  console.log(JSON.stringify(tests, null, 2));
  console.log("=== LOGS ===");
  logs.forEach(l => console.log(l));
  await page.screenshot({ path: "b2b2-visual-check.png", fullPage: true });
  console.log("Screenshot saved");
  await browser.close();
})();
