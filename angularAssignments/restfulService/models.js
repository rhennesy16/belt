const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/task");
mongoose.Promise = global.Promise;

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed:{type:Boolean, default:false},
},{timestamps:true})

module.exports = mongoose.model("Task", TaskSchema);