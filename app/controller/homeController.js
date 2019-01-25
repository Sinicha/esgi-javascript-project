import {home} from "../view/home.js"
import Templating from "../templating/templating.js";
import {createMenu} from "../view/block/menu.js";

export class HomeController {

    static get() {
        // Create menu bar
        createMenu();

        // Render View
        return Templating.render(home(), {}, {});
    }

}
