const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var constants = require('../../utils/constants')

const  AuthToken = mongoose.Schema({
    value: { type: String, require: true },
    userid: {type: String, require: false, default: "NONE"},
    date: {type: String, require: false, default: Date.now()},
    expireAt: {type: Date, default: Date.now, index: {expires: constants.TOKEN_EXPIRE_AT}},
})

module.exports = mongoose.model('AuthToken', AuthToken);