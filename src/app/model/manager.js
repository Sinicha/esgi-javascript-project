/**
 * This class is the manager for database interaction
 */
export default class Manager {
    constructor() {

    }

    /**
     * Get the last ID of the table
     *
     * @param table
     * @returns {number}
     */
    lastId(table) {
        let lastId = localStorage.getItem("db." + table.toLowerCase() + ".lastid");
        if (lastId === null) {
            localStorage.setItem("db." + table.toLowerCase() + ".lastid", '0');
            return 0;
        }
        return parseInt(lastId);
    }

    /**
     * Increment ID on a table
     *
     * @param table
     * @returns {number}
     */
    incrementId(table) {
        let lastId = localStorage.getItem("db." + table.toLowerCase() + ".lastid");
        if (lastId === null || parseInt(lastId) < 1) {
            localStorage.setItem("db." + table.toLowerCase() + ".lastid", '1');
            return 1;
        } else {
            let pLastId = parseInt(lastId);
            localStorage.setItem("db." + table.toLowerCase() + ".lastid", (pLastId + 1));
            return pLastId + 1;
        }

    }

    /**
     * Find one object with Id
     *
     * @param table
     * @param id
     * @returns a object of the model or null
     */
    findById(table, id) {
        let entries = localStorage.getItem("db." + table.toLowerCase() + ".entries");
        if (entries != null) {
            let pEntries = JSON.parse(entries);
            if (Array.isArray(pEntries)) {
                for (let i = 0; i < pEntries.length; i++) {
                    if (pEntries[i]['id'] === id) {
                        return pEntries[i];
                    }
                }
            }
        } else {
            localStorage.setItem("db." + table.toLowerCase() + ".entries", JSON.stringify([]));
        }
        return null;
    }

    /**
     * Filter with OR on a Model Entry "Table"
     *
     * @param table
     * @param filters, an object with 'Key_to_search' and 'op'eration and 'value'
     * @returns array of results or null
     */
    filter(table, filters) {
        if (typeof filters != "object") {
            return null;
        }
        let entries = localStorage.getItem("db." + table.toLowerCase() + ".entries");
        if (entries != null) {
            let pEntries = JSON.parse(entries);
            let results = [];
            if (Array.isArray(pEntries)) {
                // Search and add resultat find to array
                for (let k in filters) {
                    for (let i = 0; i < pEntries.length; i++) {
                        switch (filters[k]['op']) {
                            case '<': {
                                if (pEntries[i][k] < filters[k]['value']) {
                                    results.push(pEntries[i]);
                                }
                                break;
                            }
                            case '<=': {
                                if (pEntries[i][k] <= filters[k]['value']) {
                                    results.push(pEntries[i]);
                                }
                                break;
                            }
                            case '==': {
                                if (pEntries[i][k] == filters[k]['value']) {
                                    results.push(pEntries[i]);
                                }
                                break;
                            }
                            case '>=': {
                                if (pEntries[i][k] >= filters[k]['value']) {
                                    results.push(pEntries[i]);
                                }
                                break;
                            }
                            case '>': {
                                if (pEntries[i][k] > filters[k]['value']) {
                                    results.push(pEntries[i]);
                                }
                                break;
                            }
                            case '!=': {
                                if (pEntries[i][k] != filters[k]['value']) {
                                    results.push(pEntries[i]);
                                }
                                break;
                            }
                            case 'in': {
                                if (pEntries[i][k] in filters[k]['value']) {
                                    results.push(pEntries[i]);
                                }
                                break;
                            }
                            default: {
                                break;
                            }
                        }
                    }
                }
            }

            // Delete duplicate object found
            results = results.filter((elem, pos, arr) => {
                return arr.indexOf(elem) === pos;
            });

            return results;
        } else {
            localStorage.setItem("db." + table.toLowerCase() + ".entries", JSON.stringify([]));
        }
        return null;
    }

    /**
     * Get All the Entries of a table
     *
     * @param table
     * @returns {*}
     */
    getAll(table) {
        let entries = localStorage.getItem("db." + table.toLowerCase() + ".entries");
        if (entries != null) {
            let pEntries = JSON.parse(entries);
            if (Array.isArray(pEntries)) {
                return pEntries;
            }
        }
        localStorage.setItem("db." + table.toLowerCase() + ".entries", JSON.stringify([]));
        return [];
    }

    /**
     * Save one object to a table
     *
     * @param table
     * @param object
     * @returns success of save
     */
    save(table, object) {
        if (typeof object != 'object') {
            return false;
        }

        // Save
        object['id'] = this.lastId(table) + 1;

        let entries = localStorage.getItem("db." + table.toLowerCase() + ".entries");
        let arrayData = null;
        if (entries === null) {
            arrayData = [];
            arrayData.push(object);
        } else {
            arrayData = JSON.parse(entries);
            arrayData.push(object);
        }
        localStorage.setItem("db." + table.toLowerCase() + ".entries", JSON.stringify(arrayData));

        // Increment Id
        this.incrementId(table);

        return true;
    }
}