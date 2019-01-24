// Static var
import Manager from "../manager.js";

/**
 * Model User
 */
export default class User extends Manager {
    constructor(name) {
        super();
        this.table = "User"

        // Object Id
        this.id = undefined;

        // Set fields
        this.name = name;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        return this.name = name;
    }

    // Override
    getAll() {
        super.getAll(this.table);
    }

    // Override
    save() {
        let user = {'name': this.name};
        super.save(this.table, user);
    }
}