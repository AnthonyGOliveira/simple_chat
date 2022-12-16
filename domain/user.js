const guid = require("../utils/guid")

class User {
    constructor() {
        this.name = ''
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