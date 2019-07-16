//get the path to the test HTML file
const path = require('path');
const curDir = path.resolve(__dirname);
const testHTMLFile = 'file://'+curDir+'/index.html';

//get our headless browser and assert library
import faker from "faker";
import puppeteer from "puppeteer";

let page;
let browser;
const width = 1920;
const height = 1080;

//describe the component we are testing
describe('dom', function() {

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            //@see https://stackoverflow.com/questions/54545193/puppeteer-chromium-on-mac-chronically-prompting-accept-incoming-network-connect
            executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            slowMo: 80,
            args: [`--window-size=${width},${height}`]
        });
        page = await browser.newPage();
        await page.setViewport({ width, height });
    });
    afterAll(() => {
        browser.close();
    });


    describe("page loaded, jpack ready", () => {
        test("page loaded, jpack ready", async () => {
            await page.goto(testHTMLFile);
            const title = await page.title();
            expect(title).toBe(
                "Test"
            );
        }, 16000);
    });

    //start testing this component's functionality

});