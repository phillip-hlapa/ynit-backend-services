const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  Comments = mongoose.Schema({
    text: { type: String, require: true },
    byUser: { type: String, require: false, default: "WHO WROTE THIS COMMENT" },
    date: { type: String, require: false, default: Date.now },
})

module.exports = mongoose.model('Comment', Comments);