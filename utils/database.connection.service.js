var constant = require('./constants');
var mongoose = require('mongoose')

module.exports.connect = () => {
    const db_url = 'mongodb+srv://' + constant.MONGO_DB_USER + ':' + constant.MONGO_DB_PASS + '@cluster0.xbnnw.mongodb.net/' + constant.MONGO_DB_DATABASE_YNIT_TASK_TRACKER + '?retryWrites=true&w=majority';
    //const db_url_local = process.env.MONGO_DB_LOCAL_INSTANCE + '/YNIT_TASK_TRACKER_DB'
    try {
        console.log(db_url)
        mongoose.connect(db_url, {useNewUrlParser: true,  useUnifiedTopology: true}, (error, result) => {
            console.log("connected to DB")
            console.log('result ====> ', result)
            console.log('error ====> ', error)
        });
    } catch (error) {
        console.log(error)
    }
}