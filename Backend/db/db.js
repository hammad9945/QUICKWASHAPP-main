const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI; // Ensure this is loaded from .env
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit the process if connection fails
    }
};

module.exports = connectDB;
