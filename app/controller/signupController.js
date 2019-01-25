import {signup} from "../view/signup.js"
import User from "../model/models/user.js";
import Templating from "../templating/templating.js";

export class SignupController {

    static get() {
        // Render View
        let events = {};
        events['signup_form'] = {'type': 'click', 'callback': this.setRouteCallback, 'path': 'signup_form'};
        return Templating.render(signup(), {}, events);
    }

    static post(formUser) {
        let user = new User();
        user.setName(formUser.username);
        user.save();
    }
}
