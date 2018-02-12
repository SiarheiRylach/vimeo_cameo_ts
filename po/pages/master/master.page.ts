import {browser, by, element, ElementFinder} from "protractor";
import {ProfileMenu} from "../common/profile.menu";

export abstract class MasterPage {
    public abstract url: string;
    ['Profile']: ElementFinder = element(by.css('#topnav_menu_avatar>a'));
    ['Profile Menu']: ProfileMenu = new ProfileMenu();

    openPage(){
        return browser.get(this.url);
    }

}