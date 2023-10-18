const mysql = require('mysql')
const MyIrancellDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myirancell'
})


module.exports = MyIrancellDb;




