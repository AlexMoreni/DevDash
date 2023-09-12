const bcrypt = require("bcryptjs");
const Users = require("../models/Users");

module.exports = class UsersController {
  static async registerUsers(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (password !== confirmPassword) {
      res.json({ message: "As senhas não conferem!" });
      return;
    }

    const userEmail = await Users.findOne({
      raw: true,
      where: { email: email },
    });

    if (userEmail !== null) {
      res.json({ message: "Email já Cadastrado!" });
      return;
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = {
      email,
      name,
      password: hash,
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

    const passwordCript = bcrypt.compareSync(password, user.password);

    if (passwordCript === false) {
      res.json({ message: "Senha incorreta!" });
      return;
    }

    res.json({ message: "Logado" });
  }
};
