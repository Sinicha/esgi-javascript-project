import {HomeController} from "./controllers/home.js"
import {LoginController} from "./controllers/login.js";
import Templating from "../templating/templating.js";

/**
 * This class use for templating page
 */
export default class Controller {

    constructor() {

    }

    static doController(controller) {
        let view = null;
        let vars = {};
        let events = {};
        if (controller == "home") {
            view = HomeController.callView();
            vars = {'username': 'toto'};
            let route = function() {
                console.log("Test");
            }
            events = {'login': {'type': 'click', 'callback': route}};
        } else if (controller == "login") {
            return LoginController.callView();
        } else {
            return "<div>The asked resources does't exist.</div>";
        }

        // Render
        Templating.render("<nav><ul><li><button>Accueil</button></li><li><button id='login'>Login</button></li></ul></ul></nav>", {});
        Templating.render(view, vars, events);
    }
}
