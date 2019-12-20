require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "epic_adventure",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "testdb",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: {

    // eslint-disable-next-line prettier/prettier
    "use_env_variable": "PLACE_DB_ENV_HERE"
  }
};