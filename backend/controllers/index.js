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
    const userId = req.params.id
    const existingUser = await UserSchema.findById(mongoose.ObjectId(userId))
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
  const userId = req.params.id

  try {
    const existingUser = await UserSchema.findById(userId)

    if(existingUser) {
      return res.json(existingUser)
    } else {
      return res.status(404).send()
    }
  } catch (error) {
    console.log(error)
    return res.status(500).send()
  }
}

//Product Routes
//Bring out Products
exports.addCategories = async (req, res) => {
    const category = new CategorySchema(req.body);
    await category.save();
    console.log({ success: 'Category saved' });
    res.json(category)
};

exports.getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductSchema.find({});
    const totalProducts = await ProductSchema.countDocuments()
    res.json({ allProducts, totalProducts });
  } catch (error) {
    res.status(500).json({ error: "Failed to get products" });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await ProductSchema.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "category",
          foreignField: "_id",
          as: "category",
        },
      },
      {
        $unwind: "$category",
      },
      {
        $group: {
          _id: "$category._id",
          name: { $first: "$category.name" },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 1,
          name: "$name",
          count: 1,
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);

    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to get categories" });
  }
};




//Add Product
exports.addProduct = async (req, res) => {
    const storage = multer.diskStorage({
      filename: function (req, file, cb) {
        cb(null, file.originalname);
      }
    });
  
    const upload = multer({ storage: storage }).single('image');
  
    try {
      const currentUser = await UserSchema.findOne({ _id: req.session.userId });
  
      upload(req, res, async function (err) {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error uploading image' });
        }
  
        // Create new product with image URL
        const product = new ProductSchema({
          ...req.body,
          owner: currentUser,
        });
  
        if (req.file) {
          const { path } = req.file;
          const result = await cloudinary.uploader.upload(path);
          product.image.url = result.secure_url;
          product.image.filename = req.file.originalname;
        }
  
        // Save product to database
        await product.save();
  
        console.log(req.body);
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
    .populate('category', 'name') // populate category with only the name field
    .populate({
      path: 'owner',
      select: 'firstName lastName',
      populate: {
        path: 'meta',
        select: 'phoneNumber'
      }
    }) // populate category with only the name field
    .exec();

  res.json({ existingProduct });
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
