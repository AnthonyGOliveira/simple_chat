const usersDb = require("../infra/db");
module.exports = function (id) {
    usersDb.deleteUser(id);
};
