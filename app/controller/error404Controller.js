import {error404} from "../view/error404.js"
import Templating from "../templating/templating.js";
import {createMenu} from "../view/block/menu.js";

export class Error404Controller {

    static get() {
        // Create menu bar
        createMenu();

        // Render View
        return Templating.render(error404(), {}, {});
    }

}
