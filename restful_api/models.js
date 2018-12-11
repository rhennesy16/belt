const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/restful_api");

const TaskSchema = new mongoose.Schema({
    title: String,
    description:{type:String,default:null},
    completed:{type:Boolean,default:0}},
    {timestamps:true})

module.exports = mongoose.model("Task",TaskSchema);
var Task = mongoose.model("Task")