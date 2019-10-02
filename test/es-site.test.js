//get our headless browser and config
import puppeteer from "puppeteer";
import {config, test_file, viewport} from './_config';

let page, browser;

//describe the component we are testing
describe('site', function() {

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

    test("init", async () => {
        await page.evaluate(function () {

            var site = new jpack.Site();

            var obj = {'allow-login':true};

            site.setConfig(obj);

            if( site.getConfig()['allow-login'] !== true ) throw `allow-login did not return the correct object`;

            if( site.getConfigItem('allow-login') !== true ) throw `allow-login did not return true`;

            site.setConfigItem('allow-login', false);

            if( site.getConfigItem('allow-login') !== false ) throw `allow-login did not return false`;

            site.setId(1);

            if( site.getId() !== 1 ) throw 'ID did not return 1';

            site.setName('blah');

            if( site.getName() !== 'blah' ) throw 'Name did not return blah';
        });
    });
});