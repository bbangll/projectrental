const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

const userSchema = new Schema({
    username: String,
    password: String,
    googleId: String
})

module.exports = mongoose.model('User', userSchema)