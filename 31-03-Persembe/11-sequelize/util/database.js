const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "cihat", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
