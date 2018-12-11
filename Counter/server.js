var express = require("express");
var session = require('express-session');
var app = express();
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/static"));
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
app.get('/', function(request, response) {
    if(request.session.count > 0){
        request.session.count += 1;
    }else{
        request.session.count = 1;}
    console.log("What's the count??");
    response.render("count", {count: request.session.count});
})
app.post("/counter", function (request, response){
    console.log("counting stuff")
    request.session.count = request.body.count;
    response.redirect("/");
})
app.post("/add", function (request, response){
    console.log("adding 2!")
    request.session.count += 1;
    response.redirect("/")
})
app.post("/reset", function(request, response){
    console.log("resetting count");
    request.session.destroy()
    response.redirect("/")
})
app.listen(6789, function() {
  console.log("listening on port 6789");
})