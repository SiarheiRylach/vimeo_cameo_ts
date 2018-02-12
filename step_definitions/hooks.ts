import {browser} from "protractor";
const {After} = require("cucumber");

    After({tags: '@scroll-start-page'}, () => {
        return browser.executeScript('window.scroll(0, 0)');
    });


