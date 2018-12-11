const express = require("express");
const app = express();

app.set("views", __dirname+"/views");
app.set("view engine","ejs");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

const flash = require('express-flash');
app.use(flash());

var session = require('express-session');
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
    }))

require("./routes.js")(app)

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
})