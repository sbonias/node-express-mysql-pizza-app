// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var pizza = {
  all: function (cb) {
    orm.all("pizzas", function (res) {
      cb(res);
      console.log("is it working?");
    });
  },
  // The variables cols and vals are arrays.
  create: function (val, cb) {
    orm.insertOne("pizzas", "pizza_name", val, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = pizza;
