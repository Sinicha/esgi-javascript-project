import {error404} from "../../view/views/error404.js"

export class Error404Controller {

    static callView() {
        return error404();
    }

}
