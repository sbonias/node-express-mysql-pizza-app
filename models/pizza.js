// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const pizza = {
  all: function (cb) {
    orm.all("pizzas", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("pizzas", cols, vals, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = pizza;
