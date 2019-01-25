import {home} from "../view/home.js"
import Templating from "../templating/templating.js";
import {createMenu} from "../view/block/menu.js";
import AuthenticationHelper from "../helper/AuthenticationHelper.js";

export class HomeController {

    static get() {
        // Create menu bar
        createMenu();

        let params = {};
        if(AuthenticationHelper.getAuthenticate()) {
            params['username'] = 'John Doe';
        }

        // Render View
        return Templating.render(home(), params, {});
    }

}
