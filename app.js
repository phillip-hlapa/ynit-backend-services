let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
let PORT = 1995 | process.env.PORT
require('dotenv').config()
require(__dirname + '/utils/database.connection.service').connect();
// require('./utils/data.util.batchjobs').organizeRequestDataGraph()

app.use(bodyParser.json({limit: '50mb'}))

//CORS middleware
var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'localhost'); //replace localhost with actual host
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}

app.use(corsMiddleware);


//use body-parser to get json request
app.use('*', cors());
module.exports = app