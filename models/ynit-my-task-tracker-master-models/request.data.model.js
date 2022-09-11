const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DateUtil = require('../../utils/data.util')

const  RequestData = mongoose.Schema({
    path: { type: String, require: true },
    description: { type: String, require: true },
    date: { type: Date, require: false, default: Date.parse(DateUtil.getDate().toString()) },
})

module.exports = mongoose.model('RequestData', RequestData);