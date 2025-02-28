const express = require('express');
const app = express();
const petRoutes = require('./routes/petRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/api', petRoutes); // This ensures /api/pets will work

module.exports = app;