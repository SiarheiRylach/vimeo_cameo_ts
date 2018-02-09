import {ElementFinder} from "protractor";
import {State} from "./state";
import {MasterPage} from "../../po/pages/master/master.page";

export class Query {
    /** @type {string} */
    private delimiter = " in ";


    /**
     *
     * @param elementName {String} Name of the component in page object
     * @returns {ElementFinder || ElementArrayFinder}
     */
    public getProtractorElement(elementName: string): ElementFinder {
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