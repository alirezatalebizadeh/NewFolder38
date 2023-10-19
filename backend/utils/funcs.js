const myIrancellDb = require('../Db/MyIrancellDb')

const getUserIdFromUserToken = userToken => {

    let getMainUserIdQuery = `SELECT id FROM users WHERE token = ${JSON.stringify(userToken)} `

    return new Promise((resolve, reject) => {

        myIrancellDb.query(getMainUserIdQuery, (err, result) => {
            if (err) {
                console.log('error in get mainUser Id From User Token');
                return false
            }

            resolve(result)

        });
    });
}

module.exports = getUserIdFromUserToken