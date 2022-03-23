const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootboy',
        database: 'CMS_db'
    },
    console.log('Connected to the CMS_db database. Huzzah.')
);

module.exports = db;