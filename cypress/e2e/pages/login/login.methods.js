import { Logger } from "../../util/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods {
    static insertUserName(userName) {
        LoginElements.tesxtBoxes.userName.invoke('val', userName);
    }

    static insertPassword(password) {
        LoginElements.tesxtBoxes.password.invoke('val', password);
    }

    static clickLogin() {
        LoginElements.buttons.login.click();
    }

    static clickCancel() {
        LoginElements.buttons.cancel.click();
    }

    static loginWithCredentials(userName, password) {
        Logger.subStep(`Insert username ${userName}`);
        LoginMethods.insertUserName(userName);
        Logger.subStep(`Insert password ${password}`);
        LoginMethods.insertPassword(password);
        Logger.subStep(`Click login`);
        LoginMethods.clickLogin();
    }
}