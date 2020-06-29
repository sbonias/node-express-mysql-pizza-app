const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

// Set Handlebars.
var exphbs = require("express-handlebars");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// by requiring the whole routes folder, we are able to de-couple the server.js file from the routing, allowing us to make modifications to our routing structure without having to modify our server.js file.  When requiring an entire directory, you must put an index.js file in the root of that directory to instruct express how to direct requests further up the routing tree.
// Import routes and give the server access to them.
// const routes = require("./routes");
const routes = require("./controllers/pizzascontrollers.js");

// once the route directory has been required, app.use takes two arguments, the path fragment and the directory that will be used after hitting that portion of the route.  In this case, if the user hits the base url, express will then look to the index file in the routes directory to direct traffic beyond that base url.
// app.use("/", routes);
app.use(routes);

// Start our server so that it can begin listening to client requests.
// Log (server-side) when our server has started
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
