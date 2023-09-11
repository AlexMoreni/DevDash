const Users = require("../models/Users");

module.exports = class UsersController {
  static async registerUsers(req, res) {
    const user = {
      email: req.body.email,
      name: req.body.name,
      name: req.body.password,
    };

    console.log(user);

    // await Users.create(user);

    res.redirect("/");
  }
};
