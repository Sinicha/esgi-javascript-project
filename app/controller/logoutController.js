import {logout} from "../view/logout.js"
import Templating from "../templating/templating.js";
import AuthenticationHelper from "../helper/AuthenticationHelper.js";

export class LogoutController {

    static get() {
        AuthenticationHelper.logout();
        return Templating.render(logout(), {}, {});
    }

}
