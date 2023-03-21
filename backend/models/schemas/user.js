const mongoose = require('mongoose');

const User = new mongoose.Schema({
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

const UserModel = mongoose.model("User", User)

module.exports = UserModel
