import Controller from "../controller/controller.js";
import View from "../view/view.js";
import {config} from "../configuration/config.js";

/**
 * This class use for routing
 */
export default class Routing {

    constructor() {

    }

    static route() {
        // Get URL
        let route = window.location.pathname.replace(config.rootUrl + "/", '');

        // Find the asked view
        let view = null;
        if (route == "" || route == "index" || route == "index.html") {
            Controller.doController('home')
        } else {
            view = View.getView("404");
        }
    }
}
