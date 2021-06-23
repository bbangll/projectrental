const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema ({
    quantity: Number
});

const itemSchema = new Schema({
    itemName: String,
    itemPrice: Number,
    itemLocation: String,
    transactions: [transactionSchema],
})

module.exports = mongoose.model('Item', itemSchema)