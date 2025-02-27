const express = require('express');
const router = express.Router();
const { getPets, createPet } = require('../controllers/petController');

// GET route to fetch all pets
router.get('/pets', getPets);

// POST route to add a new pet
router.post('/pets', createPet);

module.exports = router;
