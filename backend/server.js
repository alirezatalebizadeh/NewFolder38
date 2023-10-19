const MyIrancellDb = require('./Db/MyIrancellDb')
const express = require('express')
const cors = require('cors')
const getUserIdFromUserToken = require('./utils/funcs')

const app = express()
app.use(cors())





app.get('/api/users', (req, res) => {
    let userToken = req.headers.authorization;
    console.log(userToken);

    let getMainUserQuery = `SELECT * FROM users WHERE token = "${userToken}"`

    MyIrancellDb.query(getMainUserQuery, (error, result) => {
        if (error) {
            res.send('null')
        } else {
            res.send(result)
        }
    })
})




app.get('/api/services/:isActive', (req, res) => {
    let isActive = req.params.isActive

    let getServiceQuery = `SELECT * FROM services WHERE isActive = ${isActive}`

    MyIrancellDb.query(getServiceQuery, (error, result) => {
        if (error) {
            res.send('null')
        } else {
            res.send(result)
            // console.log(result);
        }
    })
})




app.get('/api/recommended-packs', (req, res) => {
    let userToken = req.headers.authorization;
    // let userID = null;


    getUserIdFromUserToken(userToken).then(result => {
        // userID = result[0].id;
        // console.log(userID);
        let getUserRecommendPacksQuery = `SELECT * FROM recommended_packet WHERE userID = ${result[0].id}`

        MyIrancellDb.query(getUserRecommendPacksQuery, (error, result) => {
            if (error) {
                res.send('null')
            } else {
                res.send(result)
            }
        })
    })


})




app.get('/api/user-buy', (req, res) => {
    let userToken = req.headers.authorization;

    getUserIdFromUserToken(userToken).then(result => {
        let getUserBuyInfo = `SELECT * FROM sales WHERE userID = ${result[0].id}`

        MyIrancellDb.query(getUserBuyInfo, (error, result) => {
            if (error) {
                res.send('null')
            } else {
                res.send(result)
            }
        })
    })


})







app.listen(3000, () => {
    console.log('server running on port 3000');
})
