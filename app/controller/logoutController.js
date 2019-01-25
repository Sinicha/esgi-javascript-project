import {logout} from "../view/logout.js"
import Templating from "../templating/templating.js";
import AuthenticationHelper from "../helper/AuthenticationHelper.js";
import {createMenu} from "../view/block/menu.js";

export class LogoutController {

    static get() {
        AuthenticationHelper.logout();

        // Create menu bar
        createMenu();

        // Render view
        return Templating.render(logout(), {}, {});
    }

}
