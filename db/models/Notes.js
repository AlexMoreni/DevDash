const { DataTypes } = require("sequelize");
const db = require("../conn");
const Users = require("./Users");

const Notes = db.define("Notes", {
  title: {
    type: DataTypes.STRING,
    required: true,
  },
  description: {
    type: DataTypes.STRING,
    required: true,
  },
});

Users.hasMany(Notes);
Notes.belongsTo(Users);

module.exports = Notes;
