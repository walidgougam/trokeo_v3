const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

module.exports = {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT,
}
  