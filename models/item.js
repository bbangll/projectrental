const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    feedback: String,
    userId: String,
    name: String
});

const itemSchema = new Schema({
    itemName: String,
    itemPrice: Number,
    itemLocation: String,
    reviews: [reviewSchema],
})

module.exports = mongoose.model('Item', itemSchema)