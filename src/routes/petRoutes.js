const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Define the GET route for '/api/pets'
router.get('/', petController.getPets);

module.exports = router;
