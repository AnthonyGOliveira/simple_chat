class UsersDb {
  constructor() {
    this.users = new Set();
  }

  addUser(user) {
    this.users.add(user);
  }

  getUser(id) {
    let user = null;
    for (let u of this.users) {
      if (u.id == id) {
        user = u;
        break;
      }
    }
    return user;
  }

  getAllUsers() {
    return Object.freeze(this.users);
  }

  deleteUser(id) {
    this.users.forEach((u) => {
      if(u.id == id){
        this.users.delete(u);
      }
    });
  }
}

module.exports = UsersDb;
