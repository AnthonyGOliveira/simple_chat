const usersDb = require("../infra/db");
module.exports = function (id, name) {
    const atribute = 'name';
    usersDb.update(id, atribute, name);
}