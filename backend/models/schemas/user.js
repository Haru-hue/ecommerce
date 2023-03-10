const mongoose = require('mongoose');

var User = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    meta: {
        availability: String,
        phoneNumber: String
    }
})

module.exports = mongoose.model("User", User)