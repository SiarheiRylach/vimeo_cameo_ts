import * as globals from 'protractor';
import * as path from "path";
import * as commonUtils from "utils_for_tests";
import {ProtractorExpectedConditions} from "protractor";
import {ExpectedConditions} from "protractor";


export let config = {

    directConnect: true,
    baseUrl: 'https://vimeo.com/cameo',

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1680,1050', '--disable-notifications', '--disable-infobars']
        },
        platform: "Windows 10",
        maxDuration: 10800
    },

    specs: [
        './features/*.feature'
    ],

    onPrepare: () => {
        commonUtils.createDir('./output');
        globals.browser.waitForAngularEnabled(false);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        require: [path.resolve('./step_definitions/**.js')],
        format: ['json:output/log.json'],
        tags: []
    },

    allScriptsTimeout: 200000,
    getPageTimeout: 100000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework')
};