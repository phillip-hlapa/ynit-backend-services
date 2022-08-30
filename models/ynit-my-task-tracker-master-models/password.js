const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var constants = require('../../utils/constants')

const  UserPassword = mongoose.Schema({
    username: { type: String, require: true },
    value: { type: String, require: true },
    userid: {type: String, require: false, default: "NONE"},
    date: { type: String, require: false, default: Date.now },
    reason: { type: String, require: true, default: "RECOVERY PASSWORD"}
})

module.exports = mongoose.model('PasswordRecovery', UserPassword);