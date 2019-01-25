import {config} from "../configuration/config.js";
import FormHelper from "../helper/FormHelper.js";
import {SignupController} from "../controller/signupController.js";
import Templating from "../templating/templating.js";
import {HomeController} from "../controller/homeController.js";
import {LoginController} from "../controller/loginController.js";
import {ReservationController} from "../controller/reservationController.js";
import {Error404Controller} from "../controller/error404Controller.js";
import AuthenticationHelper from "../helper/AuthenticationHelper.js";
import {LogoutController} from "../controller/logoutController.js";

/**
 * This class use for routing
 */
export default class Routing {

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

    static route(path) {
        // Get URL
        let route = '';
        // Get all form
        let formData = document.querySelector('[id*="form_container"]');

        if(typeof path == "string") {
            route = path;
        } else {
            window.location.pathname.replace(config.rootUrl + "/", '');
        }

        // Clear Root in Dom
        document.getElementById('root').innerHTML = "";

        // Create menu bar
        this.createMenu();

        // Find the asked view
        let view = null;
        if (route === "" || route === "home" || route === "index" || route === "index.html") {
            HomeController.get();
        } else if (route === "reservation") {
            ReservationController.get();
        } else if (route === "login") {
            LoginController.get();
        } else if (route === "login_form") {
            this.getForm(formData).then((result) => {
                if (result != null && result !== "Failed") {
                    console.log("result",result)
                    LoginController.post(FormHelper.getLoginFormValue(result));
                } else {
                    console.log("Une erreur est survenue")
                }
            });
        } else if (route === "signup") {
            SignupController.get();
        } else if (route === "signup_form") {
            this.getForm(formData).then((result) => {
                if (result != null && result !== "Failed") {
                    console.log("result",result)
                    SignupController.post(FormHelper.getSignUpFormValue(result))
                } else {
                    console.log("Une erreur est survenue")
                }
            });
        } else if (route === "logout") {
            LogoutController.get();
        } else {
            Error404Controller.get();
        }
    }

    static createMenu() {
        let view = "";
        if(!AuthenticationHelper.getAuthenticate()) {
            view = "<nav><ul><li><button id='home'>Accueil</button></li><li><button id='reservation'>Reservation</button></li><li><button id='login'>Login</button></li><li><button id='signup'>Inscription</button></li></ul></ul></nav>";
        } else {
            view = "<nav><ul><li><button id='home'>Accueil</button></li><li><button id='reservation'>Reservation</button></li><li><button id='profile'>Profile</button></li><li><button id='logout'>Déconnexion</button></li></ul></ul></nav>";
        }
        let vars = {};
        let events = {};

        // Render Menu
        events['home'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'home'};
        events['login'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'login'};
        events['reservation'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'reservation'};
        events['signup'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'signup'};
        events['logout'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'logout'};
        Templating.render(view, vars, events);
    }

    static setRouteCallback(e) {
        let routePath = e.target.routePath;
        Routing.route(routePath);
    }
}
