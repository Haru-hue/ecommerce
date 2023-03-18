const express = require('express');
const router = express.Router()
const control = require('../controllers/index')
const connectToMongoose = require('../models/db')

connectToMongoose()

router.get('/', control.userSession)

//Product routes
router.get('/shop', control.getAllProducts)
router.post('/add-category', control.addCategories)
router.get('/categories', control.getCategories)
router.post('/add-product', control.addProduct)
router.get('/add-product', control.addProduct)
router.get('/products/:id', control.getProduct)
router.get('/category/:id', control.getCategoryProducts)

// User routes
router.get('/register', control.userRegister)
router.post('/register', control.addUser)
router.post('/', control.getUser)
router.get('/login', control.userLogin)
router.get('/user/:id', control.viewUser)
router.put('/update/:id', control.updateUser)
router.get('/logout', control.destroySession)


module.exports = router
