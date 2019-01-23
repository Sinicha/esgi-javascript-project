import Routing from './routing/routing.js';

/**
 * This class init all class and variables to run the website
 */
export default class App {
    static run() {
        return new App();
    }

    constructor() {
        this.init();
    }

    async init() {
        Routing.route();
    }
}
