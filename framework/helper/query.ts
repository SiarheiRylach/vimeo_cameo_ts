import {ElementFinder} from "protractor";
import {State} from "./state";
import {MasterPage} from "../../po/pages/master/master.page";

export class Query {
    /** @type {string} */
    private delimiter = " in ";
    private static _instance = new Query();

    private constructor(){

    }

    public static getInstance(){
        return Query._instance || (Query._instance = new Query());
    }

    /**
     *
     * @param elementName {String} Name of the component in page object
     * @returns {ElementFinder || ElementArrayFinder}
     */
    public getProtractorElement(elementName: string) {
        if (elementName.includes(this.delimiter)) {
            let elements: string[] = elementName.split(this.delimiter).reverse();
            let elementState = State.getInstance().getState();
            elements.forEach((elm) => {
                elementState = elementState[elm];
            });
            return elementState;
        } else {
            return State.getInstance().getState()[elementName];
        }
    }



}