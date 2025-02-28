const express = require('express');
const app = express();
const petRoutes = require('./routes/petRoutes');
const cors = require('cors');

// Enable CORS for all origins during development
app.use(cors());

// Or enable CORS for specific origin (recommended for production)
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Middleware
app.use(express.json());

// Routes
app.use('/api', petRoutes); // This ensures /api/pets will work

module.exports = app;