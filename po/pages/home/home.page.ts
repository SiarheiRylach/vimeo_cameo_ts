import {MasterPage} from "../master/master.page";
import {by, element, ElementFinder} from "protractor";
import {Sign} from "./sign.form";

export class HomePage extends MasterPage{
    url: string = 'https://vimeo.com/cameo';
    ['Join']: ElementFinder = element(by.css('li[data-menu-id="join"] a'));
    ['Login']: ElementFinder = element(by.css('li[data-menu-id="login"] a'));
    ['Sign']: Sign = new Sign();
    ['Download']: ElementFinder = element(by.css('.download'));
    ['Phone Animation']: ElementFinder = element(by.css('.phone_animation_wrapper'));
    ['Themes button']: ElementFinder = element(by.css('#themes .navigation'));
    ['Soundtracks']: ElementFinder = element(by.css('#soundtracks > div'));
    ['Videos']: ElementFinder = element(by.css('#videos > div'));
    ['Creators']: ElementFinder = element(by.css('#creators .content_wrapper'));

}