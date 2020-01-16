/**
 * This class use for templating page
 */
export default class Templating {

    constructor() {

    }

    static render(content, vars, events) {
        // Replace variable
        let itpContent = this.interpolate(content, vars);

        // Create DOM Element
        let template = document.createElement('template');
        template.innerHTML = itpContent;

        // Add to root in DOM
        document.getElementById("root").appendChild(template.content);

        // Set events
        if (events !== null && typeof events === 'object') {
            for (let k in events) {
                if (events.hasOwnProperty(k)) {
                    let obj = events[k];
                    if (obj !== null && typeof obj === 'object') {
                        if (obj.hasOwnProperty('type')
                            && obj.hasOwnProperty('callback')
                            && obj.hasOwnProperty('path')) {
                            let element = document.getElementById(k);
                            if (element != null) {
                                element.addEventListener(obj['type'], obj['callback']);
                                element.routePath = obj['path'];
                            }
                        }
                    }
                }
            }
        }
    }

    static interpolate(content, vars) {
        if (vars !== null && typeof vars === 'object') {
            for (let k in vars) {
                if (vars.hasOwnProperty(k)) {
                    let searchElement = '{{' + k + '}}';
                    content = content.replace(searchElement, vars[k]);
                }
            }
        }
        return content;
    }
}
