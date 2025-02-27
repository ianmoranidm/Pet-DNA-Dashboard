const express = require('express');
const router = express.Router();
const { getPets, createPet, getPetById, updatePet, deletePet } = require('../controllers/petController');

// Existing routes
router.get('/pets', getPets);
router.post('/pets', createPet);
router.get('/pets/:id', getPetById);

// New route for updating a pet
router.put('/pets/:id', updatePet);

// DELETE /api/pets/:id
router.delete('/pets/:id', deletePet);

module.exports = router;