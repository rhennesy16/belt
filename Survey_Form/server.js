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
    console.log("What's goin on??");
    response.render("index", {users: request.session.users});
})
app.post('/user', function(request, response){
    console.log("saving the user");
    console.log(request.body)
    request.session.users = request.body;
    response.redirect("/results");
})
app.get('/results', function(request, response){
    console.log("getting the user");
    response.render("results", {users: request.session.users})
})
app.post('/goback', function(request, response){
    console.log("go back")
    response.redirect("/")
})
app.listen(6789, function() {
  console.log("listening on port 6789");
})