// Static var
import Manager from "../manager.js";

/**
 * Model User
 */
export default class User extends Manager {

    constructor(last_name, first_name, email, password) {
        super();
        this.table = "User"

        // Object Id
        this.id = undefined;

        // Set fields
        this.last_name = last_name;
        this.first_name = first_name;
        this.email = email;
        this.password = password;
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
    filter(filters) {
        return super.filter(this.table, filters);
    }

    // Override
    save() {
        let user = {};
        user['last_name'] = this.last_name;
        user['first_name'] = this.first_name;
        user['email'] = this.email;
        user['password'] = this.password;
        super.save(this.table, user);
    }
}