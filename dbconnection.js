var mysql = require('mysql')
var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root@123',
    database: 'integration_server'
})

module.exports = connection;