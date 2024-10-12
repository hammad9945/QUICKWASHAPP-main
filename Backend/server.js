const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db/db');
const routes = require('./routes'); // Adjust this path if necessary

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the routes
app.use('/api', routes);

// Test route
app.get('/', (req, res) => {
    res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
