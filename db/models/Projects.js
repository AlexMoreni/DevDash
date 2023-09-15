const { DataTypes } = require("sequelize");
const db = require("../conn");
const Users = require("./Users");

const Projects = db.define("Projects", {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  imgProject: {
    type: DataTypes.STRING,
    required: true,
  },
  done: {
    type: DataTypes.BOOLEAN,
    required: true,
  },
});

Users.hasMany(Projects);
Projects.belongsTo(Users);

module.exports = Projects;
