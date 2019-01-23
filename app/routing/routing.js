import Controller from "../controller/controller.js";
import View from "../view/view.js";

/**
 * This class use for routing
 */
export default class Routing {

    constructor() {

    }

    static route() {
        // Get URL
        const root = "/Escape%20Room%20Manager";
        let route = window.location.pathname.replace(root + "/", '');

        // Find the asked view
        let view = null;
        if(route == "" || route == "index" || route == "index.html") {
            Controller.doController('home')
        } else {
            view = View.getView("404");
        }
    }
}
