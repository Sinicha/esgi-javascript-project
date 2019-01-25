import {reservation} from "../view/reservation.js"
import Templating from "../templating/templating.js";

export class ReservationController {

    static get() {
        // Render View
        return Templating.render(reservation(), {}, {});
    }

}
