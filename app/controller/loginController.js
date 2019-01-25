import {login} from "../view/login.js"
import Templating from "../templating/templating.js";

export class LoginController {

    static get() {
        // Render View
        let events = {};
        events['login_form'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'login_form'};
        return Templating.render(login(), {}, events);
    }
}
