const mongoose = require('mongoose');
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017"

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI must be defined')
}

const connectToMongoose = () => {
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB', err));
}

module.exports = connectToMongoose
