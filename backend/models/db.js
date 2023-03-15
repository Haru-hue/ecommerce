const mongoose = require('mongoose');
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect('mongodb://127.0.0.1:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB', err));
