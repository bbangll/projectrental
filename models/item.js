const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    itemName: String,
    itemPrice: Number,
    itemLocation: String
})

module.exports = mongoose.model('Item', itemSchema)