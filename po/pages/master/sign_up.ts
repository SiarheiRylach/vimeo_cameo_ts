import {MasterPage} from "./master.page";
import {by, element, ElementFinder} from "protractor";

export class SignUpPage extends MasterPage{
    url = '/sign_up';
    ['No Thanks']: ElementFinder = element(by.css('a[href="/home"]'));
}