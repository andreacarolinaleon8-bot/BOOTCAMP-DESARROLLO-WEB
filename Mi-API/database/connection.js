
const path = require('path');

require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
});

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mi_api',
    password: String(process.env.DB_PASSWORD),
    port: 5432
});

module.exports = pool;