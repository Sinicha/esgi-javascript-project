import {reservation} from "../view/reservation.js"
import Templating from "../templating/templating.js";
import {createMenu} from "../view/block/menu.js";

export class ReservationController {

    static get() {
        // Create menu bar
        createMenu();

        // Render View
        return Templating.render(reservation(), {}, {});
    }

}
