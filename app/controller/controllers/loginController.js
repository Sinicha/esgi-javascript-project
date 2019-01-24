import {login} from "../../view/views/login.js"
import FormHelper from "../../helper/FormHelper.js";

export class LoginController {

    static callView() {
        return login();
    }

    static loginUser() {
    }
}
