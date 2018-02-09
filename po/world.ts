import {SignUpPage} from "./pages/master/sign_up";
import {HomePage} from "./pages/home/home.page";
import {UserPage} from "./pages/user.page";
import {SettingsPage} from "./pages/settings.page";
import {DeletingPage} from "./pages/deleting_acc.page";
import {DownloadPage} from "./pages/download.page";


export class World {
    private static _instance: World = new World();

    private constructor(){

    }

    public static getInstance(){
        return World._instance || (World._instance = new World());
    }

    ['SignUp Page'] = new SignUpPage();
    ['Home Page'] = new HomePage();
    ['User Page'] = new UserPage();
    ['Settings Page'] = new SettingsPage();
    ['DeletingAcc Page'] = new DeletingPage()
    ['Download Page'] = new DownloadPage();

}
