import { config } from "../configuration/config.js";
import { SignupController } from "../controller/signupController.js";
import { HomeController } from "../controller/homeController.js";
import { LoginController } from "../controller/loginController.js";
import { ReservationController } from "../controller/reservationController.js";
import { Error404Controller } from "../controller/error404Controller.js";
import { LogoutController } from "../controller/logoutController.js";

/**
 * This class use for routing
 */
export default class Routing {

    static routes = [
        [["", "home", "index", "index.html"], 'get', HomeController],
        ["reservation", 'get', ReservationController],
        ["login", 'get', LoginController],
        ["signup", 'get', SignupController],
        ["logout", 'get', LogoutController],

        ["login_form", 'post', LoginController, ],
        ["signup_form", 'post', SignupController]
    ];


    constructor() {

    }

    static async getForm(formData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (formData != null) {
                    resolve(formData)
                } else {
                    reject("Failed ! formData is empty");
                }
            }, 100);
        })
    }

    static doRoute(path) {
        // Get URL and all form
        let formData = document.querySelector('[id*="form_container"]');
        if (typeof path !== "string") {
            window.location.pathname.replace(config.rootUrl + "/", '');
            path = '';
        }

        // Clear Root in Dom
        document.getElementById('root').innerHTML = "";

        for (let i = 0; i < this.routes.length; i++) {
            let route = this.routes[i];
            if (!Array.isArray(route)
                || route.length < 3
                || (!Array.isArray(route[0]) && (typeof route[0] !== "string"))) {
                // todo: Error 500
                console.error("Error with routes. Index:", i, "; route:", route)
                return Error404Controller.get();
            }

            let page = (typeof route[0] === "string") ? Array(route[0]) : route[0];
            if (page.includes(path)) {
                let type = route[1];
                if (typeof type !== 'string') {
                    console.error("Error with routes: Type not string. Index:", i, "; route:", route)
                    return Error404Controller.get();
                } else if (type === 'get') {
                    return route[2].get();
                } else if (type === 'post') {
                    return this.getForm(formData).then((result) => {
                        if (result != null && result !== "Failed") {
                            return route[2].post(result);
                        } else {
                            console.log("Une erreur est survenue")
                        }
                    });
                } else {
                    console.error("Error with routes: Type not found. Index:", i, "; route:", route)
                    return Error404Controller.get();
                }
            }
        }
        return Error404Controller.get();
    }

    static setRouteCallback(e) {
        let routePath = e.target.routePath;
        Routing.doRoute(routePath);
    }
}
