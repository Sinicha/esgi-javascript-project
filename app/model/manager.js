export default class Manager {
    constructor() {

    }

    lastId(table) {
        let lastId = localStorage.getItem("db." + table.toLowerCase() + ".lastid");
        if (lastId == null) {
            localStorage.setItem("db." + table.toLowerCase() + ".lastid", '0');
            return 0;
        }
        return parseInt(lastId);
    }

    incrementId(table) {
        let lastId = localStorage.getItem("db." + table.toLowerCase() + ".lastid");
        if (lastId == null || parseInt(lastId) < 1) {
            localStorage.setItem("db." + table.toLowerCase() + ".lastid", '1');
            return 1;
        } else {
            let pLastId = parseInt(lastId);
            localStorage.setItem("db." + table.toLowerCase() + ".lastid", (pLastId + 1));
            return pLastId + 1;
        }

    }

    findById(table, id) {
        let entries = localStorage.getItem("db." + table.toLowerCase() + ".entries");
        if (entries != null) {
            let pEntries = JSON.parse(entries);
            if (Array.isArray(pEntries)) {
                for (let i = 0; i < pEntries.length; i++) {
                    if (pEntries[i]['id'] == id) {
                        return pEntries[i];
                    }
                }
            }
        } else {
            localStorage.setItem("db." + table.toLowerCase() + ".entries", JSON.stringify([]));
        }
        return null;
    }

    getAll(table) {
        let entries = localStorage.getItem("db." + table.toLowerCase() + ".entries");
        if (entries != null && Array.isArray(entries)) {
            return JSON.parse(entries);
        } else {
            localStorage.setItem("db." + table.toLowerCase() + ".entries", JSON.stringify([]));
            return [];
        }
    }

    save(table, object) {
        // Save
        object['id'] = this.lastId(table) + 1;

        let entries = localStorage.getItem("db." + table.toLowerCase() + ".entries");
        let arrayData = null;
        if (entries == null) {
            arrayData = [];
            arrayData.push(object);
        } else {
            arrayData = JSON.parse(entries);
            arrayData.push(object);
        }
        localStorage.setItem("db." + table.toLowerCase() + ".entries", JSON.stringify(arrayData));

        // Increment Id
        this.incrementId(table);
    }

}