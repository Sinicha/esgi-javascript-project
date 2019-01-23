// Static var
let id = 0;

/**
 * Model User
 */
export default class User {
    constructor(name) {
        // New id
        id++;
        this.id = (id + 1);

        // Set fields
        this.name = name;
    }
}