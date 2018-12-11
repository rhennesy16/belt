const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restful");
mongoose.Promise = global.Promise;

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String
})

module.exports = mongoose.model("Task", TaskSchema);