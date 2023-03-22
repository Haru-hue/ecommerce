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

<<<<<<< Updated upstream
const UserModel = mongoose.model("User", User)

module.exports = UserModel
=======
module.exports = mongoose.model("User", User)
>>>>>>> Stashed changes
