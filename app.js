let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let app = express();
let PORT = 1995 | process.env.PORT
require('dotenv').config()
require(__dirname + '/utils/database.connection.service').connect();

app.use(bodyParser.json())
app.use('*', cors())


module.exports = app