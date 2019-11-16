//Setting Up Sequelize
const Sequelize = require("sequelize");
const mysql = require("mysql2");
// Option 1: Passing parameters separately
const db = new Sequelize("ashu", "ashu", "12345", {
  host: "127.0.0.1",
  port: "3308",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;
