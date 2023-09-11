const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("devdash", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Servidor conectado e funcionando");
} catch (err) {
  console.log(`Erro ao iniciar o servidor ${err}`);
}

module.exports = sequelize;
