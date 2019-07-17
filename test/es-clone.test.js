//get our headless browser and config
import puppeteer from "puppeteer";
import {config, test_file, viewport} from './_config';

let page, browser;

//describe the component we are testing
describe('clone', function() {

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

    test("getValueOrClone", async () => {
        await page.evaluate(function () {
            //string
            var string = 'hi';
            var stringClone = jpack.clone.getValueOrClone(string);

            //test return
            if( string !== stringClone ) throw `Hi was not returned`;

            //test modifying
            string = 'bye';
            if( string === stringClone ) throw `Hi was modified to ${stringClone}`;

            //number
            var num = 1;
            var numClone = jpack.clone.getValueOrClone(num);

            //test return
            if( num !== numClone ) throw `1 was not returned`;

            //test modifying
            num = 2;
            if( num === numClone ) throw `1 was modified to ${numClone}`;

            //function
            var func = function(){
                console.log('hi');
            }
            var funcClone = jpack.clone.getValueOrClone(func);

            //test return
            if( func !== funcClone ) throw `function was not returned`;

            //test modifying
            func = function(){ console.log('bye'); }
            if( func === funcClone ) throw `function was modified`;

            //object
            var obj = {
                name: 'bob'
            };
            var objClone = jpack.clone.getValueOrClone(obj);

            //test return
            if( obj.name !== objClone.name ) throw `Obj was not returned`;

            //test modifying
            obj.name = 'tom';
            if( obj.name === objClone.name ) throw 'Obj was modified: '+JSON.stringify(obj);
            obj = 'string now';
            if( objClone === obj ) throw 'Obj was modified: '+JSON.stringify(obj);

            //array
            var arr = [1,2];
            var arrClone = jpack.clone.getValueOrClone(arr);

            //test return
            if( arr[0] !== arrClone[0] || arr[1] !== arrClone[1] ) throw 'Array was not returned: '+JSON.stringify(arrClone);

            //test modifying
            arr.push(3);
            if( arrClone[2] === 3 ) throw 'Array was modified: '+JSON.stringify(arrClone);
            arr = 'string now';
            if( arrClone === arr ) throw `Array was modified: ${arrClone}`;
        });
    });
});