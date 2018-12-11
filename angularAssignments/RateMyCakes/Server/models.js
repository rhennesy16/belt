const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/RateMyCakes', { useNewUrlParser: true });

const ReviewSchema = new mongoose.Schema({
    rating:Number,
    content:{type:String, required: [true, 'Review field cannot be empty'], minlength:[3, 'Review must be longer than 3 characters']}
}, {timestamps: true})

const CakeSchema = new mongoose.Schema({
    baker:{type:String, required:[true, 'Must enter a Baker name'], minlength:[5, 'Baker Name must be longer than 5 characters']},
    url:String,
    reviews:[ReviewSchema]
}, {timestamps:true})

module.exports = mongoose.model('Cakes', CakeSchema);