const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Use this from .env
});

module.exports = pool;
