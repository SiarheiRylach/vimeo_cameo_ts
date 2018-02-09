import {binding, given, when} from "cucumber-tsflow";
import {browser} from "protractor";
import {State} from "../framework/helper/state";

@binding()
class IndexPageSteps {

    @given(/^I am on "(.*)" page$/)
    private loadPage(page) {
        State.getInstance().setState(page);
        return State.getInstance().getState().openPage();
    };

    @when(/^page is loaded tsflow$/)
    private indexPageIsLoaded(callback: CallbackStepDefinition) {
        expect(browser.getTitle()).to.become(IndexPage.title).and.notify(callback);
    };
}
