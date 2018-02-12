import {binding, then} from "cucumber-tsflow";
import {browser} from "protractor";
import {State} from "../framework/helper/state";
import {Query} from "../framework/helper/query";
import {Visibility} from "../framework/helper/visibility";
import * as chai from "chai"
import * as chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();

@binding()
class ValidationSteps {

    @then(/^I should be on "(.*)" page$/)
    private checkPage(page){
        State.getInstance().setState(page);
        return expect(browser.getCurrentUrl()).to.eventually.contain(State.getInstance().getUrl());
    };

    @then(/^Page title should be "(.*)"$/)
    private checkTitle(title){
        return expect(browser.getTitle()).to.eventually.equal(title);
    };

    @then(/^Text of element "(.*)" should (not )?be "(.*)"$/)
    private checkTextElement(element, isNot, value){
        if (isNot) {
            return expect(Query.getInstance().getProtractorElement(element).getText()).to.not.equal(value);
        } else {
            return expect(Query.getInstance().getProtractorElement(element).getText()).to.eventually.eql(value);
        }
    };

    @then(/^Element "(.*)" should (not )?be visible on screen$/)
    private checkVisibilityOnScreen(element, isNot){
        if (isNot) {
            return expect(Visibility.getInstance().isVisibleOnScreen(Query.getInstance().getProtractorElement(element))).to.eventually.eql(false);
        } else {
            return expect(Visibility.getInstance().isVisibleOnScreen(Query.getInstance().getProtractorElement(element))).to.eventually.eql(true);
        }
    };
}
