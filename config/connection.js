const mysql = require("mysql");
let connection;

if (process.env.JAWSBD_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: "pizza_db",
  });
}

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: "sandbox_db",
// });

connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

module.exports = connection;