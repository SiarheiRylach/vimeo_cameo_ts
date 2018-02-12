import {SignUpPage} from "./pages/master/sign_up";
import {HomePage} from "./pages/home/home.page";
import {UserPage} from "./pages/user.page";
import {DeletingPage} from "./pages/deleting_acc.page";
import {DownloadPage} from "./pages/download.page";
import {SettingsPage} from "./pages/settings.page";


export class World {
    private static _instance: World;
    ['SignUp Page'] = new SignUpPage();
    ['Home Page'] = new HomePage();
    ['User Page'] = new UserPage();
    ['DeletingAcc Page'] = new DeletingPage();
    ['Settings Page'] = new SettingsPage();
    ['Download Page'] = new DownloadPage();

    private constructor(){

    }

    public static getInstance(){
        return World._instance || (World._instance = new World());
    }
}
