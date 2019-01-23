/**
 * This class use for templating page
 */
export default class Templating {

    constructor() {

    }

    static render(content, vars) {
        // Replace variable
        if (vars != null && typeof vars == 'object') {
            for (let k in vars) {
                if (vars.hasOwnProperty(k)) {
                    let searchElement = '${' + k + '}';
                    content = content.replace(searchElement, vars[k]);
                }
            }
        }

        // Create DOM Element
        let template = document.createElement('template');
        template.innerHTML = content;

        // Add to root in DOM
        document.getElementById("root").appendChild(template.content);
    }
}
