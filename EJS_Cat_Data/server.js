// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
// console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
// this is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
// console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
//    console.log("The request object", request);
//    console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express</h1>");
console.log("Im here");
})
var cats_array = [
    {img: "/images/cat3.jpg", food: "fish", age: 2, sleep: ["under the bed", "on computer"]}, 
    {img: "/images/cat2.jpg", food: "fancy feast", age: 86, sleep: ["in a sunbeam", "on fridge"]},
    {img: "/images/cat.jpg", food: "happiness", age: 12, sleep: ["in hell", "on top of you"]},  
];
app.get("/cats", function (request, response){
    console.log("cats n shit")
    response.render("cats");
})
app.get("/cats1", function (request, response){
    response.render("catsinfo", {cats: cats_array[2]});
})
app.get("/cats2", function (request, response){
    response.render("catsinfo", {cats: cats_array[1]});
})
app.get("/cats3", function (request, response){
    response.render("catsinfo", {cats: cats_array[0]});
})
app.get("/cars/new", function (request, response){
    console.log("forms n shit")
    response.render("form");
})
app.get("/cars", function (request, response){
    console.log("cars n shit")
    response.render("cars");
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(6789, function() {
  console.log("listening on port 6789");
})