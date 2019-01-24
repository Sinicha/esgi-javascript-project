import {home} from "../../view/views/home.js"
import User from "../../model/models/user.js";

export class HomeController {

    static callView() {
        let user = new User('John Doe');
        user.save();
        return home();
    }

}
