const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createPool({
    connectionLimit: process.env.LIMIT, // Important
    host: process.env.HOST_NAME,        // Server Name
    user: process.env.USER_NAME,        // User Name
    password: process.env.PASSWORD,     // User Password     
    database: process.env.DATABASE,     // Database Name
    debug: false
});

module.exports = connection;