const express = require('express');
const router = express.Router();
const { getPets, createPet, getPetById } = require('../controllers/petController');

// Existing routes
router.get('/pets', getPets);
router.post('/pets', createPet);

// New route for getting pet by ID
router.get('/pets/:id', getPetById);

module.exports = router;
