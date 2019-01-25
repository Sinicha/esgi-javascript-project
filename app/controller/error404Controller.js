import {error404} from "../view/error404.js"
import Templating from "../templating/templating.js";

export class Error404Controller {

    static get() {
        // Render View
        return Templating.render(error404(), {'username': 'John Doe'}, {});
    }

}
