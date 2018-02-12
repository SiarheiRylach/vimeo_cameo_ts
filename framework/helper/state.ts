import {World} from "../../po/world";

export class State {
    private state;
    private static _instance: State;

    private constructor(){
        this.state = {};
    }

    public static getInstance(){
        return State._instance || (State._instance = new State());
    }


    setState(pageName) {
        this.state = World.getInstance()[pageName];
    }

    getState(){
        return this.state;
    }

    getUrl() {
        return this.state.url;
    }

}