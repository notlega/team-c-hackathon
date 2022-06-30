const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'HackathonAPTD',
    password: 'Legahh190704!',
    port: 8081,
})

module.exports = pool;