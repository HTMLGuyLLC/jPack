//get our headless browser and config
import puppeteer from "puppeteer";
import {config, test_file, viewport} from './_config';

let page, browser;

//describe the component we are testing
describe('type_checks', function() {

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

    test("isDataObject", async () => {
        await page.evaluate(function () {
            var isD = jpack.type_checks.isDataObject;

            //non object

            //true is not an object
            if( isD(true, ['id'], false, false, false) ){
                throw `true came back as valid`;
            }
            //1 is not an object
            if( isD(1, ['id'], false, false, false) ){
                throw `1 came back as valid`;
            }
            //null is not a data object
            if( isD(null, ['id'], false, false, false) ){
                throw `null came back as valid`;
            }
            //bob is not a data object
            if( isD('bob', ['id'], false, false, false) ){
                throw `bob came back as valid`;
            }
            //array is not a data object
            if( isD([1,2], ['id'], false, false, false) ){
                throw `[1,2] came back as valid`;
            }

            //empty object

            //should be valid (no exception thrown)
            if( !isD({}, ['id'], false, false, true) ){
                throw 'Empty failed the test (1)';
            }

            //should be valid
            if( !isD({}, ['id'], false, false, false) ){
                throw 'Empty failed the test (2)';
            }

            //should be valid
            if( !isD({}, ['id'], false, true, false) ){
                throw 'Empty failed the test (2)';
            }

            //should throw error
            try{
                isD({}, ['id'], true, false, true);
                throw 'Empty succeeded when require all keys was true';
            }
            catch(e){
                if( e.indexOf('at least one') < 0 ) throw `Unexpected error msg for {} (require all keys: true) ${e}`;
            }

            //should fail (require keys)
            if( isD({}, ['id'], true, false, false) ){
                throw `Empty succeeeded when required key is missing`;
            }

            //valid object

            //should be valid
            if( !isD({id:1}, ['id'], false, false, false) ){
                throw `{id:1} Failed (1)`;
            }

            //should be valid
            isD({id:1}, ['id'], false, false, true);


            //should be valid
            if( !isD({id:1}, ['id'], true, false, false) ){
                throw `{id:1} Failed (2)`;
            }

            //should be valid
            isD({id:1}, ['id'], true, false, true);

            //should be valid
            if( !isD({id:1}, ['id'], true, true, false) ){
                throw `{id:1} Failed (3)`;
            }

            //should be valid
            isD({id:1}, ['id'], true, true, true);

            //object with extra values

            //should return false
            if( isD({id:1, yo:'what?'}, ['id'], true, true, false) ){
                throw `{id:1, yo:'what?'} succeeded when block other keys should have stopped it (1)`;
            }

            //should throw error
            try{
                isD({id:1, yo:'what?'}, ['id'], true, true, true);
                throw `{id:1, yo:'what?'} succeeded when block other keys should have stopped it (2)`;
            }
            catch(e){

            }

            //object without required values

            //should return false
            if( isD({1:2}, ['id'], true, true, false) ){
                throw `{1:2} succeeded when block other keys should have stopped it (1)`;
            }

            //should throw error
            try{
                isD({1:2}, ['id'], true, true, true);
                throw `{1:2} succeeded when block other keys should have stopped it (2)`;
            }
            catch(e){

            }

        });
    });
});