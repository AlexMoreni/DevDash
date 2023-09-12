const Users = require("../models/Users");

module.exports = class UsersController {
  static async registerUsers(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    const users = await Users.findAll({ raw: true });

    users.forEach((user) => {
      if (users.email === email) {
        res.json({ message: "Email já Cadastrado!" });
      }
      return;
    });

    const user = {
      email,
      name,
      password,
    };

    await Users.create(user);
    res.json({ message: "Cadastrado" });
  }

  static async loginUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await Users.findOne({ raw: true, where: { email: email } });

    if (user === null) {
      res.json({ message: "Email não encontrado!" });
      return;
    }

    if (password !== user.password) {
      res.json({ message: "A senha esta incorreta!" });
      return;
    }

    res.json({ message: "Logado" });
  }
};
