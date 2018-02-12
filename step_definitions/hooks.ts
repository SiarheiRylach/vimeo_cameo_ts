import {browser} from "protractor";
import {timeoutEveryStep} from "../global.g";
const {After, BeforeAll, defineSupportCode} = require("cucumber");

After({tags: '@scroll-start-page'}, () => {
    return browser.executeScript('window.scroll(0, 0)');
});

BeforeAll( () => {
    defineSupportCode( ({ setDefaultTimeout }) => {
        setDefaultTimeout(timeoutEveryStep);
    });
});


