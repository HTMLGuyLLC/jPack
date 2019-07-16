//get our headless browser and config
import puppeteer from "puppeteer";
import {config, test_file, viewport} from './_config';

let page, browser;

//describe the component we are testing
describe('dom', function() {

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

    test("getElements", async () => {
        await page.evaluate(function () {
            var els;

            //none
            try {
                return jpack.dom.getElements('b', true);
                throw `Found a <b> when it shouldn't have`;
            }catch(e){
                if( e.indexOf('Failed to find') < 0 ) throw `Did not throw correct error: ${e}`;
            }

            //none
            els = jpack.dom.getElements('b', false);
            if( !Array.isArray(els) ) throw `Returned something other than an array ${els}`;
            if( els.length ) throw `Returned values for <b> ${els}`;

            //one
            els = jpack.dom.getElements('h1', true);
            if( !Array.isArray(els) ) throw `Returned something other than an array ${els}`;
            if( els.length !== 1 ) throw `Returned array != 1 for <h1> ${els}`;

            //three
            els = jpack.dom.getElements('div', true);
            if( !Array.isArray(els) ) throw `Returned something other than an array ${els}`;
            if( els.length !== 3 ) throw `Did not return 3 divs: ${els.length}`;
        });
    });

    test("getElement", async () => {
        await page.evaluate(function () {
            var el;

            //none
            el = jpack.dom.getElement('b', false);
            if( el !== null ) throw `Returned non-null for <b> ${el}`;

            //none
            try {
                return jpack.dom.getElement('b', true, true);
                throw `Found a <b> when it shouldn't have`;
            }catch(e){
                if( e.indexOf('Failed to find') < 0 ) throw `Did not throw correct error: ${e}`;
            }

            //one
            el = jpack.dom.getElement('h1', true, true);
            if( !el instanceof Element ) throw `Wrong return type ${el.constructor.name}`;

            //more than one
            try{
                jpack.dom.getElement('div', true, true);
                throw "Did not error on multiple <div>s";
            }
            catch(e){
                if( e.indexOf('More than 1') < 0 ) throw `Did not throw correct error: ${e}`;
            }

            //more than one
            el = jpack.dom.getElement('div', true, false);
            if( !el instanceof Element ) throw `Returned something other than the first div`;

        });
    });

    test("remove", async () => {
        await page.evaluate(function () {
            var el = jpack.dom.getElement('h1');
            var html = el.outerHTML;

            jpack.dom.remove(el);
            if( jpack.dom.getElement('h1') ) throw `Element was not removed`;

            //add it back
            document.body.innerHTML += html;

            //make sure it exists
            jpack.dom.getElement('h1', true);

        });
    });

    test("replaceElWithHTML", async () => {
        await page.evaluate(function () {

            jpack.dom.replaceElWithHTML('h4', '<h5></h5>');

            //make sure h4 is gone
            if(jpack.dom.getElement('h4') ) throw `H4 was not replaced, still exists`;

            //make sure h5 exists
            jpack.dom.getElement('h5', true);

            //now that we know the function works, swap it back
            jpack.dom.replaceElWithHTML('h5', '<h4></h4>');

            //must exist
            jpack.dom.getElement('h4', true);
        });
    });

    test("exists", async () => {
        await page.evaluate(function () {

            //none
            if( jpack.dom.exists('b') ) throw `Incorrectly said <b> exists`;

            //one
            if( !jpack.dom.exists('h4') ) throw `Incorrectly said <h4> does not exist`;

            //three
            if( !jpack.dom.exists('div') ) throw `Incorrectly said <div> does not exist`;
        });
    });

    test("multipleExist", async () => {
        await page.evaluate(function () {

            //none
            if( jpack.dom.multipleExist('b') ) throw `Incorrectly said <b> exists`;

            //one
            if( jpack.dom.multipleExist('h4') ) throw `Incorrectly said <h4> exists more than once`;

            //three
            if( !jpack.dom.multipleExist('div') ) throw `Incorrectly said <div> does not exist more than once`;
        });
    });

    test("isVisible", async () => {
        await page.evaluate(function () {

            //none - don't throw error
            if( jpack.dom.isVisible('b', false, false) ) throw `Said <b> Exists`;

            //none, throw error
            try{
                jpack.dom.isVisible('b', true, true);
                throw `Didn't throw error for non-existent el`;
            }
            catch(e){
                if( e.indexOf('Failed to find') < 0 ) throw `Wrong error msg ${e}`;
            }

            //one
            if( !jpack.dom.isVisible('h4', true, false) ) throw `Said <h4> is not visible`;

            //three
            if( !jpack.dom.isVisible('div', true, false) ) throw `Said <div> is not visible</div>`;

            //three, throw error
            try{
                jpack.dom.isVisible('div', true, true);
                throw `Didn't throw error for multiple els`;
            }
            catch(e){
                if( e.indexOf('More than 1') < 0 ) throw `Wrong error msg ${e}`;
            }
        });
    });
});