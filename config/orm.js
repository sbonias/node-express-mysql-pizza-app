// Here is the O.R.M. where you write functions
// that takes inputs and conditions and turn
// them into database commands like SQL.

// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  // selectAll() Method
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // insertOne() Method
  insertOne: function (table, col, val, cb) {
    var queryString =
      "INSERT INTO " + table + "(" + col + ") values ('" + val + "');";
    console.log(queryString);
    connection.query(queryString, function (err, response) {
      if (err) throw err;
      cb(response);
      console.log(response);
    });
  },
};

// Export the orm object for the model (pizza.js).
module.exports = orm;
