const MyIrancellDb = require('./Db/MyIrancellDb')
MyIrancellDb.connect(err => {
    if (err) {
        console.log('cannected not successfully');
    } else {
        console.log('connected successfully');
    }
})


