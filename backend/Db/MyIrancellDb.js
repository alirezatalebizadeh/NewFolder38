const mysql = require('mysql')
const MyIrancellDb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myirancell'
})


MyIrancellDb.connect(err => {
    if (err) {
        console.log('cannected not successfully');
    } else {
        console.log('connected successfully');
    }
})


module.exports = MyIrancellDb;




