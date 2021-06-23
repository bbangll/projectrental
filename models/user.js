const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

const userSchema = new Schema({
    name: String,
    googleId: String
})

module.exports = mongoose.model('User', userSchema)