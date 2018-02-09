import {by, element, ElementFinder} from "protractor";

export class Sign{
    ['Form']: ElementFinder =  element(by.css('.iris_modal-box'));
    ['Title']: ElementFinder = element(by.css('#dialog-title'));
    ['Body']: ElementFinder = element(by.css('#dialog-content'));
    ['Email']: ElementFinder = element(by.css('#signup_email'));
    ['Login Password']: ElementFinder = element(by.css('#login_password'));
    ['Sign By Email']: ElementFinder = element(by.css('.iris_btn--positive'));

    //for registration
    ['Name']: ElementFinder = element(by.css('#signup_name'));
    ['Join Password']: ElementFinder = element(by.css('#signup_password'));


}