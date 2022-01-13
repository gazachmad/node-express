import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

const pool = mysql.createPool({
    multipleStatements: true,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
});

const db = pool.promise();

export default db;