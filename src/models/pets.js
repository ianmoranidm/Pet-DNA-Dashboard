const pool = require('../../db/db');

const getAllPets = async () => {
    const { rows } = await pool.query('SELECT * FROM pets');
    return rows;
};

module.exports = { getAllPets };
