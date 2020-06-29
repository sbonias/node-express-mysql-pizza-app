// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const pizza = {
  all: function (cb) {
    orm.all("pizzas", (res) => {
      cb(res);
      console.log("is it working?");
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (val, cb) {
    orm.insertOne("pizzas", val, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = pizza;
