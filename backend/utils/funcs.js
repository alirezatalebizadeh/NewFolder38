const myIrancellDb = require('../Db/MyIrancellDb')


const getUserIdFromUserToken = userToken => {
    let getMainUserIdQuery = `SELECT id FROM users WHERE token = ${userToken}`

    myIrancellDb.query(getMainUserIdQuery, (err, result) => {
        if (err) {
            console.log('error in get mainUser Id From User Token');
            return false
        }
        return result
    })

}

module.exports = getUserIdFromUserToken