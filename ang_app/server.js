const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.json());
app.set("views", __dirname+"/views");
app.set("view engine","json");

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
})