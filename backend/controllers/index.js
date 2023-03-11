const { response } = require('express');
const mongoose = require('mongoose');
const ProductSchema = require('../models/schemas/product')
const UserSchema = require('../models/schemas/user')
require('../models/db')

//User Routes
// Adding a User
exports.addUser = async (req, res) => {
    const user = new UserSchema ({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    })
    await user.save()
    res.send({ success: 'User added successfully' })
}

// Get a User
exports.getUser = async (req, res) => {
    const existingUser = await UserSchema.findOne({ email: req.body.email })
    if(!existingUser) {
        res.send({ error: 'User not found' })
        return
    } else {
        if(existingUser.password === req.body.password) {
            res.send({ success: 'User verified' })
            return
        } else {
            res.send({ error: 'Invalid password' })
        }
    }
}

// Update User Details
exports.updateUser = async (req, res) => {
    const userID = req.params.id
    const existingUser = await UserSchema.findById(userID)
    if (existingUser) {
        existingUser.email = req.body.email,
        existingUser.firstName = req.body.firstName,
        existingUser.lastName = req.body.lastName,
        existingUser.availability = req.body.availability,
        existingUser.phoneNumber = req.body.phoneNumber

        await existingUser.save()
        res.send({ success: 'User details have been updated' })
    } else {
        res.send({ error: 'User details could not be updated' })
    }
}

exports.viewUser = async (req, res) => {
    const userID = req.params.id
    const existingUser = await UserSchema.findById(userID)
    if(existingUser) {
        res.send({
            name: existingUser.firstName + ' ' + existingUser.lastName,
            phoneNumber: existingUser.phoneNumber,
            availability: existingUser.availability
        })
    } else {
        res.send({ error: 'Not Found' })
    }
}

//Product Routes
//Bring out Products
exports.getAllProducts = async (req, res) => {
    const allProducts = await ProductSchema.find({})
    if(!allProducts) {
        res.json({ error: 'Products not found'})
    } else {
        res.send(allProducts)
    }
}

//Add Product
exports.addProduct = async (req, res) => {
    const product = new ProductSchema ({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        meta: {
            weight: req.body.weight,
            status: req.body.status,
            location: req.body.location,
            shelfLife: req.body.shelfLife,
        },
        description: req.body.description,
    })
    await product.save()
    res.send ({ success: 'Product saved' })
}

//Get Product
exports.getProduct = async (req, res) => {
    const productId = req.params.id 
    const existingProduct = await ProductSchema.findById(productId)
    if(!existingProduct) {
        res.send({ error: 'Product not found' })
    } else {
        res.send ({ product: existingProduct })
    }
}

//Getting Products in a Category
exports.getCategoryProducts = async (req, res) => {
    const products = await ProductSchema.find({category: req.params.id})
    res.send(products);
}
