const express = require("express");
// Import the model (pizza.js) to use its database functions.
const pizza = require("../models/pizza.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  pizza.all((data) => {
    let hbsObject = {
      pizzas: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/pizzas", function (req, res) {
  console.log(req.body);
  pizza.insertOne(
    ["pizza_name", "devoured"],
    [req.body.pizza_name, req.body.devoured],
    function (result) {
      // Send back the ID of the new pizza
      // res.json({ id: result.insertId });
      res.json({ id: result.insertId });
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
