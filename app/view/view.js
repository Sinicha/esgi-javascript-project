import {home} from "./views/home.js"
import {login} from "./views/login.js"
import {error404} from "./views/error404.js"
import {signup} from "./views/signup.js";

/**
 * This class use for templating page
 */
export default class Templating {

    constructor() {

    }

    static getView(view) {
        if (view == "home") {
            return home();
        } else if (view == "login") {
            return login();
        }
        else if (view == "signup") {
            return signup();
        } else {
            return error404();
        }
    }
}
