import {home} from "../view/home.js"
import Templating from "../templating/templating.js";

export class HomeController {

    static get() {
        // Render View
        return Templating.render(home(), {'username': 'John Doe'}, {});
    }

}
