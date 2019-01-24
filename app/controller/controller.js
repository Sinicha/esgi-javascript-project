import {HomeController} from "./controllers/home.js"
import {LoginController} from "./controllers/login.js";
import Templating from "../templating/templating.js";
import Routing from "../routing/routing.js";
import {Error404Controller} from "./controllers/error404.js";
import {SignupController} from "./controllers/signupController.js";

/**
 * This class use for templating page
 */
export default class Controller {

    constructor() {

    }

    static doController(controller) {
        let view = "";
        let vars = {};
        let events = {};
        if (controller == "home") {
            view = HomeController.callView();
            vars = {'username': 'toto'};
        } else if (controller == "login") {
            view = LoginController.callView();
        }
        else if (controller == "signup") {
            view = SignupController.callView();
        }else {
            view = Error404Controller.callView();
        }

        // Render Menu
        events['home'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'home'};
        events['login'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'login'};
        events['signup'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'signup'};


        Templating.render("<nav><ul><li><button id='home'>Accueil</button></li><li><button id='login'>Login</button></li><li><button id='signup'>Inscription</button></li></ul></ul></nav>", vars);

        // Render View
        Templating.render(view, vars, events);
    }

    static setRouteCallback(e) {
        let routePath = e.target.routePath

        Routing.route(routePath);
    }
}
