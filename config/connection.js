// Set up MySQL connection.
var mysql = require("mysql");
require('dotenv').config();

var connection = mysql.createConnection({
  host: process.env.HOST,
  // host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: process.env.password,
  // password: "mianmianguo",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
