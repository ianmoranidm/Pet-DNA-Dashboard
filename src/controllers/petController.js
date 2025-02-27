const db = require('../../db/db');

const getPets = async (req, res) => {
  try {
    const pets = await db.query('SELECT * FROM pets');
    res.json(pets.rows);
  } catch (err) {
    console.error('Error fetching pets:', err.message); // Log the error message
    res.status(500).send('Server error');
  }
};

const createPet = async (req, res) => {
  const { name, age, breed, health_risks } = req.body; // Include breed and health_risks

  try {
    // Insert a new pet into the database
    const newPet = await db.query(
      'INSERT INTO pets (name, age, breed, health_risks) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, age, breed, health_risks]
    );
    res.status(201).json(newPet.rows[0]); // Respond with the newly created pet
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getPets, createPet };