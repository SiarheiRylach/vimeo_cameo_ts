import {MasterPage} from "./master/master.page";
import {by, element, ElementFinder} from "protractor";

export class DeletingPage extends MasterPage{
        url: string = '/goodbye/forever';
        ['Delete Account']: ElementFinder = element(by.css('.btn_red'));
        ['Password']: ElementFinder = element(by.css('#password'));
}