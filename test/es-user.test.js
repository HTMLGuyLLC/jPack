//get our headless browser and config
import puppeteer from "puppeteer";
import {config, test_file, viewport} from './_config';

let page, browser;

//describe the component we are testing
describe('user', function() {

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

            /**
             * @todo: Complete test. This is just to test the clone.getValueOrClone method from within the User class
             *
             */
            var user = new jpack.User();
            var obj = {name: 'hi'};

            user.setDataItem('hi', obj);
            obj.name = 'bye';

            if( obj.name === user.getDataItem('hi').name ) throw `User's data item was changed externally`;
        });
    });
});