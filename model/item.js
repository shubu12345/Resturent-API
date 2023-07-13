const mongoose = require('mongoose');


const resturentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "item(food) name is required."]
    },
    price: {
        type: Number,
        required: [true, "price must be there"]
    },
    size: {
        type: String,
        required: [true, "size is required"]
    },
    rating:{
        type: Number,
        required: [true, "rating is required"]
    },
    image: {
        type: String
    },
    hotel:{
        type: String
    }
},
{
    timestamps: true,
});

const Item = mongoose.model("Item", resturentSchema);

module.exports = Item;