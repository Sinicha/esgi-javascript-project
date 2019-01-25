import AuthenticationHelper from "../helper/AuthenticationHelper.js";

export function home() {
    if(AuthenticationHelper.getAuthenticate()) {
        return `<section>
            Bienvenue {{username}}
        </section>`;
    } else {
        return `<section>
            Home Page
        </section>`;
    }
}
