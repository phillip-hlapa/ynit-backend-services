const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  News = mongoose.Schema({
    news_img: { type: String, require: true, default: "no image" },
    news_header_subtitle: { type: String, require: false, default: "WHO WROTE THIS COMMENT" },
    news_header_title: { type: String, require: false, default: Date.now },
    news_header_content: { type: String, require: false, default: "WHO WROTE THIS COMMENT" },
    comments: [{ type:  Schema.Types.ObjectId, ref: 'Comment'}],
    userId: { type: String, require: true },
    dateCreated: { type: Date, require: false, default: Date.now },
})

module.exports = mongoose.model('News', News);