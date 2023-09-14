const bcrypt = require("bcryptjs");
const Users = require("../models/Users");

module.exports = class UsersController {
  static async registerUsers(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const regex = /\d/;

    if (email.length < 13) {
      res.json({ message: "Email com caracteres insuficiente!" });
      return;
    }

    if (!email.includes("@")) {
      res.json({ message: "Email com padrão invalido, inclua @" });
      return;
    }

    if (regex.test(name)) {
      res.json({ message: "Insira apenas letras no nome!" });
      return;
    }

    if (name.length < 3) {
      res.json({ message: "Nome com tamanho inválido!" });
      return;
    }

    if (password.length < 5) {
      res.json({ message: "Mínimo 5 caracteres!" });
      return;
    }

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
      imgProfile: "https://www.gov.br/cdn/sso-status-bar/src/image/user.png",
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

    res.json({ message: "Logado", user });
  }

  static async editUser(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    const imgProfile = req.body.imgProfile;
    const oldPassword = req.body.oldPassword;
    const regex = /\d/;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    if (regex.test(name)) {
      res.json({ message: "Insira apenas letras no nome!" });
      return;
    }

    if (name.length < 3) {
      res.json({ message: "Nome com tamanho inválido!" });
      return;
    }

    const checkPassword = await Users.findOne({
      raw: true,
      where: { email: email },
    });

    const passwordCript = bcrypt.compareSync(
      oldPassword,
      checkPassword.password
    );

    if (passwordCript === false) {
      res.json({ message: "Senha incorreta!" });
      return;
    }

    if (password === oldPassword) {
      res.json({ message: "Está já é sua senha!" });
      return;
    }

    if (password.length < 5) {
      res.json({ message: "Mínimo 5 caracteres!" });
      return;
    }

    const user = {
      email,
      name,
      password: hash,
      imgProfile,
    };

    await Users.update(user, { where: { email: email } });

    res.json({ message: "Atualizado!" });
  }
};
