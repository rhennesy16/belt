const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/messageboard");
mongoose.Promise = global.Promise;

const CommentSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Comments must have a name"], minlength: [3, "Titles must have at least 3 characters"]},
    content: {type: String, required: [true, "Comments must have content"], minlength: [3, "Titles must have at least 3 characters"]},
  }, {timestamps: true})
const MessageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Posts must have a name"]},
    content: {type: String, required: [true, "Posts must have content"]},
    comments: [CommentSchema]
  }, {timestamps: true})

  module.exports = mongoose.model("Message", MessageSchema);

