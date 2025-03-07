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

const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await db.query('SELECT * FROM pets WHERE id = $1', [id]);

    if (pet.rows.length === 0) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.json(pet.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const updatePet = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, breed, health_risks } = req.body;

    const result = await db.query(
      `UPDATE pets
       SET name = $1, age = $2, breed = $3, health_risks = $4, updated_at = NOW()
       WHERE id = $5
       RETURNING *`,
      [name, age, breed, health_risks, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Pet not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

const deletePet = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('DELETE FROM pets WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Pet not found' });
    }

    res.json({ message: 'Pet deleted successfully', pet: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { getPets, getPetById, createPet, updatePet, deletePet };