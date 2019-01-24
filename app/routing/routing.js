import Controller from "../controller/controller.js";
import View from "../view/view.js";
import {config} from "../configuration/config.js";

/**
 * This class use for routing
 */
export default class Routing {

    constructor() {

    }

    static route(path) {
        // Get URL
        let route = '';
        if(typeof path == "string") {
            route = path;
        } else {
            window.location.pathname.replace(config.rootUrl + "/", '');
        }

        // Clear Root in Dom
        document.getElementById('root').innerHTML = "";

        // Find the asked view
        let view = null;
        if (route == "" || route == "home" || route == "index" || route == "index.html") {
            Controller.doController('home')
        } else if (route == "login") {
            Controller.doController('login')
        } else if (route == "signup") {
            Controller.doController('signup')
        } else {
            Controller.doController('error404')
        }
    }
}
