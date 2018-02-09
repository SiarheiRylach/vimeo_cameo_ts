import {MasterPage} from "./master/master.page";
import {by, element, ElementFinder} from "protractor";

export class SettingsPage extends MasterPage{
    url: string = '/general';
    ['Delete Account']: ElementFinder = element(by.css('.delete-account'));
}