import AuthenticationHelper from "../helper/AuthenticationHelper.js";

export function home() {
    if(AuthenticationHelper.getAuthenticate()) {
        return `<section>
            Bienvenue {{username}}
        </section>`;
    } else {
        return `<section>
            "Les jeux d'évasion sont un type de jeu grandeur nature constituant la déclinaison physique des jeux vidéo de type « escape the room ».", Wikipédia
        </section>`;
    }
}
