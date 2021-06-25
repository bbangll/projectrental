const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema ({
    feedback: String,
    userId: String,
    userName: String
});

const itemSchema = new Schema({
    itemName: String,
    itemPrice: Number,
    itemLocation: String,
    itemViews: {
        type: Number, default: 0
    },
    reviews: [reviewSchema],
    userId: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String
})

module.exports = mongoose.model('Item', itemSchema)