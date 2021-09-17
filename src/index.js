const { Router } = require("express");
const { set } = require("mongoose");
const express = requiere("express");
const path = requiere("path");
const exphbs = requiere("express-handlebars");
const metod0overide = require("method-override");
const session = require("express-session");

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

//middlewarea
app.use(express.Urlencode({extended:false}));
app.use(metod0overide("_metod"));
app.use(session({
    secret: "mysecretapp",
    reset: true,
    saveUninitialized: true,
}))

//global variales

//routes
app.use(require("./routes/index"));
app.use(require("./routes/users"));

//static files

//server is listening
app.listen(app.get("port"),() => {
console.log("server on port", app.get("port"))});