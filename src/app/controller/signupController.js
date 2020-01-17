import {signup} from "../view/signup.js"
import User from "../model/models/user.js";
import Templating from "../templating/templating.js";
import Routing from "../routing/routing.js";
import {createMenu} from "../view/block/menu.js";
import FormHelper from "../helper/FormHelper.js";

export class SignupController {

    static get() {
        // Create menu bar
        createMenu();

        // Render View
        let events = {};
        events['signup_form'] = {'type': 'click', 'callback': Routing.setRouteCallback, 'path': 'signup_form'};
        return Templating.render(signup(), {}, events);
    }

    static post(result) {
        let formUser = FormHelper.getSignUpFormValue(result);

        // Create User
        let user = new User(formUser.last_name, formUser.first_name, formUser.email, formUser.password);
        user.save();

        // Redirect
        Routing.doRoute('login');
    }
}
