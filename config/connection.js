const mysql = require("mysql");
let connection;

// We will be using the npm package "dotenv" to allow us to use our database credentials but prevent them from beeing pushed to github.
// there are steps to configure dotenv:
// 1. npm install "dotenv"
// 2. require the dotenv config as below in the entry point to your app (the server file most likely)
// 3. create a .env file in the root of you repository
// 4. add the environmental variables that you would like to keep private
// 5. replace the credentials that you would like masked with "process.env.<variable name here>"
// see the db/dbConnection.js file for an example of how the variables will be implemented.
// if you have cloned this repo, you will NOT see the .env file, as that is the whole point! You will need to create it per the instructions above
require("dotenv").config();

if (process.env.JAWSBD_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
  });
}

connection.connect(function (err) {
  if (err) throw err;
  console.log("db connected");
});

module.exports = connection;
