const { Pool } = require('pg');
const dotenv = require("dotenv").config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'HackathonAPTD',
    password: process.env.DB_PASSWORD,
    port: 5432,
})

module.exports = pool;