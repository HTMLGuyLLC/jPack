//get our headless browser and config
import puppeteer from "puppeteer";
import {config, test_file, viewport} from './_config';

let page, browser;

//describe the component we are testing
describe('string', function() {

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

            if( jpack.strings.ucfirst('mom') !== 'Mom' ) throw 'ucfirst did not uppercase the first letter in mom';
            if( jpack.strings.getter('mom') !== 'getMom' ) throw 'getter did not return getMom';
            if( jpack.strings.setter('mom') !== 'setMom' ) throw 'setter did not return setMom';

        });
    });
});