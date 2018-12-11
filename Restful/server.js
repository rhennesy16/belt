const express = require('express');
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

require("./routes.js")(app)

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
})