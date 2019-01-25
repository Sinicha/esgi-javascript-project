import {login} from "../view/login.js"
import Templating from "../templating/templating.js";
import Routing from "../routing/routing.js";
import AuthenticationHelper from "../helper/AuthenticationHelper.js";
import User from "../model/models/user.js";
import {createMenu} from "../view/block/menu.js";

export class LoginController {

    static get() {
        // Create menu bar
        createMenu();

        // Render View
        let events = {};
        events['login_form'] = {'type': 'click', 'callback': Routing.setRouteCallback, 'path': 'login_form'};
        return Templating.render(login(), {}, events);
    }

    static post(formLogin) {
        let user = (new User()).filter({'email': {'op': '==', 'value': formLogin.email}});
        if(user !== null && Array.isArray(user) && user.length === 1 && user[0]['password'] === formLogin.password) {
            AuthenticationHelper.setAuthenticate(user[0]);
            Routing.route('home');
        } else {
            // Create menu bar
            createMenu();

            // Render View
            let events = {};
            events['login_form'] = {'type': 'click', 'callback': Routing.setRouteCallback, 'path': 'login_form'};
            return Templating.render(login("Erreur d'authentification."), {}, events);
        }
    }
}
