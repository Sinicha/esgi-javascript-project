import {signup} from "../../view/views/signup.js"
import Manager from "../../model/manager.js";

export class SignupController {

    static callView() {
        return signup();
    }

    static signupUser(user) {
        let manager = new Manager();

        manager.save('user', user)
    }
}
