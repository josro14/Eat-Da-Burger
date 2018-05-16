var express = require('express');
var bodyParser = require('body-parser');
var orm = require('./config/orm');
var PORT = process.env.PORT || 8080;
var handlebars = require('handlebars');
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



orm.selectAll(function (results) {
    app.get("/", function (req, res) {
        res.render("index", {
            helpers: {
                newBurgers: [1, 2, 3]
            }
        });
        
    });
    console.log(results);
})

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
