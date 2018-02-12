import {binding, given, when} from "cucumber-tsflow";
import {browser} from "protractor";
import {State} from "../framework/helper/state";
import {Query} from "../framework/helper/query";
import {defTimeoutExplicit} from "../global.g";
import {ExpectedConditions as EC } from "protractor";

@binding()
class ActionSteps {

    @given(/^I am on "(.*)" page$/)
    private loadPage(page){
        State.getInstance().setState(page);
        return State.getInstance().getState().openPage();
    };

    @when(/^I click on "(.*)"$/)
    private clickElement(button) {
        return Query.getInstance().getProtractorElement(button).click();
    };

    @when(/^I sleep "(.*)" sec$/)
    private sleepBrowser(timeout){
        return browser.sleep(+timeout * 1000);
    };

    @when(/^I refresh page$/)
    private refreshPage(){
        return browser.refresh();
    };

    @when(/^I wait until element "(.*)" is (not )?visible$/)
    private waitForElement(element, isNot){
        if (isNot) {
            return browser.wait(EC.invisibilityOf(Query.getInstance().getProtractorElement(element)), defTimeoutExplicit);
        } else {
            return browser.wait(EC.visibilityOf(Query.getInstance().getProtractorElement(element)), defTimeoutExplicit);
        }
    };

    @when(/^I type "(.*)" in "(.*)"$/)
    private type(text, element){
        return Query.getInstance().getProtractorElement(element).sendKeys(text);
    };

    @when(/^I move mouse to "(.*)"$/)
    private moveMouse(element){
        return browser.actions().mouseMove(Query.getInstance().getProtractorElement(element)).perform();
    };

    @when(/^I wait browser title contains "(.*)"$/)
    private waitTitle(fragment){
        return browser.wait(EC.titleContains(fragment), defTimeoutExplicit);
    };

    @when(/^I scroll down "(.*)" times$/)
    private scrollDown(times){
        return browser.executeScript(`window.scrollBy(0,${200 * times})`);
    };
}
