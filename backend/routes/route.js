const express = require('express');
const router = express.Router()
const control = require('../controllers/index')

router.get('/message', (req, res) => {
    res.json({ message: 'Hello, world' })
})

//Product routes
router.get('/shop', control.getAllProducts)
router.post('/add-product', control.addProduct)
router.get('/product/:id', control.getProduct)

// User routes
router.post('/register', control.addUser)
router.post('/login', control.getUser)
router.get('/user/:id', control.viewUser)
router.put('/update/:id', control.updateUser)


module.exports = router