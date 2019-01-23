import {HomeController} from "./controllers/home.js"
import {login} from "./controllers/login.js"
import {error404} from "../view/views/error404.js"
import Templating from "../templating/templating.js";

/**
 * This class use for templating page
 */
export default class Controller {

    constructor() {

    }

    static doController(controller) {
        let view = null;
        if (controller == "home") {
            view = HomeController.callView();
        } else if (controller == "login") {
            return "login";
        } else {
            return "<div>The asked resources does't exist.</div>";
        }

        // Render
        Templating.render("<nav><ul><li><button>Accueil</button></li><li><button>Login</button></li></ul></ul></nav>", {});
        Templating.render(view, {});
    }
}
