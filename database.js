const mysql = require('mysql2');

const db = mysql.createPool({
    connectionLimit : 100,
    host: 'eu-cdbr-west-03.cleardb.net',
    user: 'b2cbb52c550a1f',
    password: 'e36106ce',
    database: 'heroku_7dd7a9131a794c9'
})

exports.db = db;