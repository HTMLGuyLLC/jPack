//get the path to the test HTML file
const path = require('path');
const curDir = path.resolve(__dirname);
export const test_file = 'file://'+curDir+'/_index.html';

//define the default height/width of the page
export const page_height = 1080;
export const page_width = 1920;
export const viewport = {width:page_width, height:page_height};

//configuration options for puppeteer
export const config = {
    headless: true,
    //@see https://stackoverflow.com/questions/54545193/puppeteer-chromium-on-mac-chronically-prompting-accept-incoming-network-connect
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    slowMo: 80,
    args: [`--window-size=${page_width},${page_height}`]
}