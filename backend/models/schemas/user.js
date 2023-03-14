const mongoose = require('mongoose');

var User = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    meta: {
        availability: String,
        phoneNumber: String
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

module.exports = mongoose.model("User", User)