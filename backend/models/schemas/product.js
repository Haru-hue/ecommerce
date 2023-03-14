const mongoose = require('mongoose');

var Product = new mongoose.Schema({
    name: String,
    price: String,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    image: {
        url: String,
        filename: String,
    },
    meta: {
        weight: Number,
        status: Boolean,
        location: String,
        shelfLife: String,
    },
    description: String,
    reviews: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Product', Product)