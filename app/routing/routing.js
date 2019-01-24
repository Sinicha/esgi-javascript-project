import Controller from "../controller/controller.js";
import View from "../view/view.js";
import {config} from "../configuration/config.js";
import FormHelper from "../helper/FormHelper.js";

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
        let formData = document.getElementById('login_form_container');
        if(typeof path == "string") {
            route = path;

            if (route === 'login_form') {
                let form = this.getForm(formData).then((result) => {
                    if (result != null && result !== "Failed") {
                        FormHelper.getLoginFormValue(result)
                    } else {
                        console.log("Une erreur est survenue")
                    }
                });
            }
        } else {
            window.location.pathname.replace(config.rootUrl + "/", '');
        }

        // Clear Root in Dom
        document.getElementById('root').innerHTML = "";

        // Find the asked view
        let view = null;
        if (route === "" || route === "home" || route === "index" || route === "index.html") {
            Controller.doController('home')
        } else if (route === "login") {
            Controller.doController('login')
        } else if (route === "reservation") {
            Controller.doController('reservation')
        } else if (route === "signup") {
            Controller.doController('signup')
        } else if (route === "login_form") {
            Controller.doController('login_form')
        } else {
            Controller.doController('error404')
        }
    }
}
