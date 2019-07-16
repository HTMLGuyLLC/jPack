//get our headless browser and config
import puppeteer from "puppeteer";
import {config, test_file, viewport} from './_config';

let page, browser;

//describe the component we are testing
describe('events', function() {

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
            jpack.events.setGlobal();

            if( typeof onClick !== 'function' ) throw `onClick was not defined globally`;

            jpack.events.setGlobal('$');

            if( typeof $.onClick !== 'function' ) throw `$.onClick was not defined`;
        });
    });

    test("onClick", async () => {
        await page.evaluate(function () {

            var handled = false;
            //tie handler
            jpack.events.onClick('h4', function () {
                handled = true;
            });
            //click
            jpack.dom.getElement('h4').click();
            var i = 0;
            //wait
            while(!handled){
                i++;
                if( i > 1000 ){
                    throw `onClick failed - took too long`;
                }
            }
        });
    });

    test("onSubmit", async () => {
        await page.evaluate(function () {

            var handled = false;
            //tie handler
            jpack.events.onSubmit('form', function (e) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                handled = true;
                return false;
            });

            //create event
            var submit = new Event('submit');

            //fire event
            jpack.dom.getElement('form').dispatchEvent(submit);

            var i = 0;
            //wait
            while(!handled){
                i++;
                if( i > 1000 ){
                    throw `onSubmit failed - took too long`;
                }
            }
        });
    });

    //onEventPreventDefault already tested by onSubmit and onClick above

    test("on", async () => {
        await page.evaluate(function () {

        });
    });

    test("off", async () => {
        await page.evaluate(function () {

        });
    });

    test("trigger", async () => {
        await page.evaluate(function () {

        });
    });
});