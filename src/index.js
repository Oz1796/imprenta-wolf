const { set } = require("mongoose");
const express = requiere("express");
const path = requiere("path");
const exphbs = reuiere("express-handlebars")

//inicializations
const app = express();

//setings
app.set("port", process.env.port || 3000);
app.set("views", path.join(__dirname, "views"))
app.engine(".hbs", exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views", "partials")),
    extname: ".hbs"
}))
app.set("view engine", ".hbs");

//middleware

//global variales

//routes

//static files

//server is listening
app.listen(app.get("port"),() => {
console.log("server on port", app.get("port"))});