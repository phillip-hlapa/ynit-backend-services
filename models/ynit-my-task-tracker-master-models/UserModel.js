const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
var APP_CONSTANTS = require('../../utils/constants')

const  userSchema = mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, require: true },
    email: { type: String, require: true },
    dateCreated: {type: Date, default: Date.now},
    // expireAt: {type: Date, default: Date.now, index: {expires: APP_CONSTANTS.USER_EXPIRE_AT}},
    role: { type: String, required: false, default: 'NORMAL' }
})



module.exports = mongoose.model('User', userSchema);