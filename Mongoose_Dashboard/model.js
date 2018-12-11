const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoose_dashboard");
mongoose.Promise = global.Promise;

const AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2 },
    favorite_color: {type: String, required: true, minlength: 2}
    }, {timestamps: true})

module.exports = mongoose.model("Animal",AnimalSchema);
var Animal = mongoose.model('Animal')