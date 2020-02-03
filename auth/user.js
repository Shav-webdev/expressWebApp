module.exports = class User {
  constructor(id, username, pass, gender, agree) {
    this.id = id;
    this.username = username;
    this.pass = pass;
    this.gender = gender;
    this.agree = agree;
  }
};
