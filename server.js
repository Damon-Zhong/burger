require("dotenv").config()

const express = require("express")
const exphbs = require("express-handlebars");
// const burger = require("./models/burger")
// const orm = require("./models/orm")
// const routes = require("./controllers/burgers_controller.js")
// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//for parsing
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//for serving media
app.use( express.static('public'))

//for Rutes
// app.use( routes )

//Listen to PORT
app.listen( PORT, function(){
    console.log( `Server listening on port:${PORT}...` )
})