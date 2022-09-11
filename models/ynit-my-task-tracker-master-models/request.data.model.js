const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  RequestData = mongoose.Schema({
    path: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: String, require: false, default: Date.now },
})

module.exports = mongoose.model('RequestData', RequestData);