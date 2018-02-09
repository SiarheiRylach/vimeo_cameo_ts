import {by, element, ElementFinder} from "protractor";

export class ProfileMenu{
    ['Logout']: ElementFinder = element(by.css('.topnav_desktop_menu_items_dropdown_item_log_out button'));
    ['Settings']: ElementFinder = element(by.css('a[data-gtm-click="top_nav_user_menu_settings_click"]'));
}