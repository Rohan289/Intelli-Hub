import puppeteer from "puppeteer";
describe("../components/Dashboard.js",() => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
      });

      it("contains the ticket header", async () => {
        await page.goto("http://localhost:3000");
        await page.waitForSelector("h2");
        const text = await page.$eval("h2", (e) => e.textContent);
        expect(text).toContain("All Tickets");
      });
    
      afterAll(() => browser.close());

})