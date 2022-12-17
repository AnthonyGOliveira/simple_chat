const usersDb = require("../infra/db");
module.exports = function () {
  const users = [];
  for (let u of usersDb.getAllUsers()) {
    users.push(u);
  }

  return users;
};
