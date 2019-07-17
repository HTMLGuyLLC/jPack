//get our headless browser and config
import puppeteer from "puppeteer";
import {config, test_file, viewport} from './_config';

let page, browser;

//describe the component we are testing
describe('navigation', function() {

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

    test("setConfig, getConfig, and resetConfig", async () => {
        await page.evaluate(function () {
            var nav = jpack.navigation;

            //get the original config
            const orig = nav.getConfig();

            //change all
            nav.setConfig({
                trackHistory:true,
                pushState:false,
                loaderEnabled:false,
                loaderDelay:305,
                incomingElement:'#content',
                replaceElement:'#content',
                loaderClasses:'loader',
                loaderInnerDivClasses:'loader-inside',
            });

            //make sure none of them remained
            var updated = nav.getConfig();

            //make sure all changed
            Object.keys(updated).forEach(function(key){
                if( updated[key] === orig[key] ) throw key+' didn\'t change';
            });

            //should reset to defaults because what's pass is extended from the default values
            nav.resetConfig();

            //make sure none of them remained
            var updated = nav.getConfig();

            //make sure all changed
            Object.keys(updated).forEach(function(key){
                if( updated[key] !== orig[key] ) throw key+' didn\'t change';
            });
        });
    });

    test("_parseHTML and getRouteFromMeta", async () => {
        await page.evaluate(function () {
            var nav = jpack.navigation;

            var parsed = nav._parseHTML("<head><title>Hey</title><meta name='current_route' content='hi'><link rel='canonical' content='/this-url'></head><body class='my-body'><div><span>text</span></div></body>", "span");

            if( parsed.title !== 'Hey' ) throw `Parsed title is incorrect ${parsed.title}`;
            if( parsed.route !== 'hi' ) throw `Parsed route is incorrect ${parsed.route}`;
            if( parsed.metas.length !== 1 ) throw `Parsed metas is incorrect ${parsed.metas} (1)`;
            if( parsed.metas[0].content !== 'hi' ) throw `Parsed metas is incorrect ${parsed.metas} (2)`;
            if( parsed.links ) throw `Found links when there were none`;
            if( parsed.body_classes !== 'my-body' ) throw `Parsed body_classes is incorrect ${parsed.body_classes}`;
            if( parsed.html !== '<span>text</span>' ) throw `Parsed HTML is incorrect ${parse.html}`;

        });
    });
});