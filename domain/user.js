const guid = require("../utils/guid")

class User {
    constructor(name = '') {
        this.name = name
        this.id = guid()
    }

    getId() {
        return this.id
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

module.exports = User