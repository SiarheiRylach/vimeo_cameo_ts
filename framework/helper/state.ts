import {World} from "../../po/world";
import {MasterPage} from "../../po/pages/master/master.page";

export class State {
    private state = null;
    private static _instance = new State();

    private constructor(){

    }

    public static getInstance(){
        return State._instance || (State._instance = new State());
    }


    setState(pageName) {
        this.state = World.getInstance()[pageName];
    }

    getState(): MasterPage {
        return this.state;
    }

    getUrl() {
        return this.state.url;
    }

}