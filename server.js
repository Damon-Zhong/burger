require("dotenv").config()

const express = require("express")
const exphbs = require("express-handlebars");
const router = require("./controllers/burgers_controller.js")

const app = express();

const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//for parsing
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//for Routes
router(app)
// app.use( routes )

//Listen to PORT
app.listen( PORT, function(){
    console.log( `Server listening on port:${PORT}...` )
})