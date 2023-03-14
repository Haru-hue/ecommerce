const mongoose = require('mongoose');
const ProductSchema = require('../models/schemas/product')
const UserSchema = require('../models/schemas/user')
const CategorySchema = require('../models/schemas/category')
const cloudinary = require('cloudinary').v2;
const multer = require('multer');

// Configuration 
cloudinary.config({
    cloud_name: "",
    api_key: "",
    api_secret: ""
  });
 

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
    console.log({ success: 'User added successfully' })
    console.log(req.body)
    res.redirect('/login')
}

// Get a User
exports.userLogin = (req, res, next) => {
    res.render('login', {
        docTitle: 'Login',
        path: 'login'
    })
}

exports.userRegister = (req, res, next) => {
    res.render('register', {
        docTitle: 'Register',
        path: 'register'
    })
}

exports.getUser = async (req, res) => {
    const existingUser = await UserSchema.findOne({ email: req.body.email })
    if (!existingUser) {
        console.log({ error: 'User not found' });
        return;
    }
    if (existingUser.password === req.body.password) {
        req.session.userId = existingUser._id; // store the user ID in the session
        console.log(req.session);
        console.log({ success: 'User verified' });
        res.render('welcome', { docTitle: 'Your Title', firstName: existingUser.firstName });
        return;
    }
    console.log({ error: 'Invalid password' });
};

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
        console.log({ success: 'User details have been updated' })
    } else {
        console.log({ error: 'User details could not be updated' })
    }
}

exports.viewUser = async (req, res) => {
    const userID = req.params.id
    const existingUser = await UserSchema.findById(userID)
    if(existingUser) {
        res.json(existingUser)
    } else {
        console.log({ error: 'Not Found' })
    }
}

//Product Routes
//Bring out Products
exports.addCategories = async (req, res) => {
    const category = new CategorySchema(req.body);
    await category.save();
    res.json(category)
    console.log({ success: 'Category saved' });
};

exports.getAllProducts = async (req, res) => {
    const allProducts = await ProductSchema.find({})
    if(!allProducts) {
        res.json({ error: 'Products not found'})
    } else {
        res.json(allProducts);
    }
}

exports.getCategories = async (req, res) => {
    const allCategories = await CategorySchema.find({});
    if(!allCategories) {
        res.json({ error: 'Products not found'})
    } else {
        res.render('category', { categories: allCategories });
    }
}

//Add Product
exports.addProduct = async (req, res) => {
    const storage = multer.diskStorage({
        filename: function (req, file, cb) {
          cb(null, file.originalname);
        }
      });
      
    const upload = multer({ storage: storage });

  try {
    const currentUser = await UserSchema.findOne({ _id: req.session.userId });

    // Upload image to server using multer
    upload.single('image')(req, res, async function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error uploading image' });
      }

      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      // Create new product with image URL
      const product = new ProductSchema({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        image: {
          url: result.secure_url,
          filename: result.original_filename
        },
        meta: {
          weight: req.body.weight,
          status: req.body.status,
          location: req.body.location,
          shelfLife: req.body.shelfLife
        },
        description: req.body.description,
        reviews: req.body.reviews,
        owner: currentUser
      });

      // Save product to database
      await product.save();

      console.log({ success: 'Product saved' });
      const allCategories = await CategorySchema.find({});
      res.render('add-product', { categories: allCategories });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error retrieving categories' });
  }
};

//Get Product
exports.getProduct = async (req, res) => {
    const productId = req.params.id 
    const existingProduct = await ProductSchema.findById(productId)
    if(!existingProduct) {
        console.log({ error: 'Product not found' })
    } else {
        console.log ({ product: existingProduct })
    }
}

//Getting Products in a Category
exports.getCategoryProducts = async (req, res) => {
    const categoryId = req.params.id;
    const products = await ProductSchema.find({ category: categoryId }).populate('category');
    res.send(products);
};

exports.userSession = async (req, res) => {
    res.render('welcome');
};

exports.destroySession = (req, res) => {
    req.session.destroy();
    console.log('Session destroyed');
    res.redirect('/login');
}