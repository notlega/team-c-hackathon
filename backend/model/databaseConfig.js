const { Pool, Client } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'HackathonAPTD',
    password: 'Legahh190704!',
    port: 5432,
})

module.exports = pool;