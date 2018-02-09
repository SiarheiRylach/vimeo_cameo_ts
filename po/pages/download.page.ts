import {by, element, ElementFinder} from "protractor";
import {MasterPage} from "./master/master.page";

export class DownloadPage extends MasterPage{
    url: string = 'https://itunes.apple.com/us/app/cameo-video-editor-movie-maker/id988821661';
    ['Seller']: ElementFinder = element(by.css('.l-row:nth-of-type(1) > dd'));
    ['Size']: ElementFinder = element(by.css('.l-row:nth-of-type(2) dd'));
    ['Category']: ElementFinder = element(by.css('.l-row:nth-of-type(3) dd'));
    ['Compatibility']: ElementFinder = element(by.css('.l-row:nth-of-type(4) dd'));
    ['Languages']: ElementFinder = element(by.css('.l-row:nth-of-type(5) dd'));
    ['Age Rating']: ElementFinder = element(by.css('.l-row:nth-of-type(6) dd'));
    ['Copyright']: ElementFinder = element(by.css('.l-row:nth-of-type(7) dd'));
    ['Price']: ElementFinder = element(by.css('.l-row:nth-of-type(8) dd'));
    ['Version']: ElementFinder = element(by.css('.whats-new__latest__version'));
}