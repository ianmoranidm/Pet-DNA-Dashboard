const express = require('express');
const bodyParser = require('body-parser');
const petRoutes = require('./routes/petRoutes');

const app = express();
app.use(bodyParser.json());

// Mount the pet routes under /api/pets
app.use('/api/pets', petRoutes);

module.exports = app;
