import dotenv from 'dotenv';
import { Pool } from 'pg';
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../../.env')
});


const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mi_api',
    password: process.env.DB_PASSWORD,
    port: 5432
});

export { pool };