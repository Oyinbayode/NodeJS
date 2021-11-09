const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-schema", "root", "ba1ya4da2", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
