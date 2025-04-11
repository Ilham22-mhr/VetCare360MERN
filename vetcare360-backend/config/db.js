const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${process.env.DB_NAME}`;

    const conn = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    console.error(error.stack);
    process.exit(1); 
  }
};

module.exports = connectDB;