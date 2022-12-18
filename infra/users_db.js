class UsersDb {
  constructor() {
    this.users = new Map();
  }

  addUser(user) {
    this.users.set(user.id, user);
  }

  getUser(id) {
    let user = this.users.get(id);
    return user;
  }

  getAllUsers() {
    return Object.freeze(this.users);
  }

  deleteUser(id) {
    this.users.delete(id);
  }

  update(id, atribute, value) {
    let newUser = this.users.get(id);
    if(atribute == 'name') {
        newUser.setName(value)
    }
    this.users.set(id, newUser);
  }
}

module.exports = UsersDb;
