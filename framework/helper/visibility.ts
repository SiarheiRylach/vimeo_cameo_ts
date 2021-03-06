import {browser, ElementFinder} from "protractor";

export class Visibility{

    private static _instance = new Visibility();

    private constructor(){

    }

    public static getInstance(){
        return Visibility._instance || (Visibility._instance = new Visibility());
    }

    isVisibleOnScreen(elem: ElementFinder){
        let screenSize: number = 0;

        return browser.executeScript('return window.innerHeight')
            .then((heightScreen)=> {
                screenSize = +heightScreen;
            })
            .then(()=>elem.isDisplayed())
            .then((isDisplayed: boolean)=> isDisplayed ? browser.executeScript('return arguments[0].getBoundingClientRect()', elem) : false)
            .then((elementPosition: ElementFinder)=>{
                return  elementPosition && (0 < elementPosition.top) && (elementPosition.top < screenSize)
                    && (0 < elementPosition.bottom) && (elementPosition.bottom < screenSize);
            });
    }
}