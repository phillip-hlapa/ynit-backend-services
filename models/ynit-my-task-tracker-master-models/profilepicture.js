const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  ProfilePic = mongoose.Schema({
    userId: { type: String, require: false },
    data: { type: String, require: true },
    name: { type: String, require: false, default: "WHO WROTE THIS COMMENT" },
    date: { type: Date, require: false, default: Date.now },
})

module.exports = mongoose.model('ProfilePic', ProfilePic);
