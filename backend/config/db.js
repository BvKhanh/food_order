require('dotenv').config
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'process.env.12345678', 
  database: 'process.env.food_order_db'
});

module.exports = db;