const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/com-man', { useNewUrlParser: true });


const ProductSchema = new Schema ({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be at least 2 characters"]
    },
    qty: {
        type: Number,
        required: [true, "Please enter a quantity"],
        min: [0, "Qty cannot be less than 0"],
    },
    price: {
        type: Number,
        required: [true, "Please enter a price"],
        min: [0, "Price cannot be less than 0"],
    }
}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema);