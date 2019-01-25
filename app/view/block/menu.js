import AuthenticationHelper from "../../helper/AuthenticationHelper.js";
import Templating from "../../templating/templating.js";
import Routing from "../../routing/routing.js";

export function createMenu() {
    let view = "";
    if(!AuthenticationHelper.getAuthenticate()) {
        view = "<nav><ul><li><button id='home'>Accueil</button></li><li><button id='reservation'>Reservation</button></li><li><button id='login'>Login</button></li><li><button id='signup'>Inscription</button></li></ul></ul></nav>";
    } else {
        view = "<nav><ul><li><button id='home'>Accueil</button></li><li><button id='reservation'>Reservation</button></li><li><button id='profile'>Profile</button></li><li><button id='logout'>Déconnexion</button></li></ul></ul></nav>";
    }
    let vars = {};
    let events = {};

    // Render Menu
    events['home'] = {'type': 'click', 'callback': Routing.setRouteCallback, 'path': 'home'};
    events['login'] = {'type': 'click', 'callback': Routing.setRouteCallback, 'path': 'login'};
    events['reservation'] = {'type': 'click', 'callback': Routing.setRouteCallback, 'path': 'reservation'};
    events['signup'] = {'type': 'click', 'callback': Routing.setRouteCallback, 'path': 'signup'};
    events['logout'] = {'type': 'click', 'callback': Routing.setRouteCallback, 'path': 'logout'};
    Templating.render(view, vars, events);
}