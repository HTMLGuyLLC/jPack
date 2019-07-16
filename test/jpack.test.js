//get our headless browser and config
import puppeteer from "puppeteer";
import {config, test_file, viewport} from './_config';

let page, browser;

//describe the component we are testing
describe('jpack', function() {

    //init the browser
    beforeAll(async () => {
        browser = await puppeteer.launch(config);
        page = await browser.newPage();
        await page.setViewport(viewport);
    });

    //close when done
    afterAll(() => {
        browser.close();
    });

    //make sure the test page loaded
    test("page loaded, jpack ready", async () => {
        await page.goto(test_file);
        const title = await page.title();
        expect(title).toBe(
            "Test"
        );
        await page.evaluate(function(){
            if( typeof jpack === "undefined" ) throw `jpack is not defined`;
        });
    }, 16000);

    //start testing this component's functionality, each method gets it's own test

    test("setGlobal", async () => {
        await page.evaluate(function () {
            jpack.setGlobal();

            if( typeof dom !== 'object' ) throw `dom not set globally`;

            jpack.setGlobal('$');

            if( typeof $.dom !== 'object' ) throw `$.dom not set globally`;

            jpack.setGlobal('jp');

            if( typeof jp.dom !== 'object' ) throw `jp.dom not set globally`;
        });
    });
});