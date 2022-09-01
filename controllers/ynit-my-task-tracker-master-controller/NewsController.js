const { request } = require('express');
let NewsModel = require('../../models/ynit-my-task-tracker-master-models/news')
let CommnetModel = require('../../models/ynit-my-task-tracker-master-models/comments')


module.exports.createNews = (req, res) => {
    let data = req.body;

    news = new NewsModel( {
        news_header_subtitle: data.news_header_subtitle,
        news_header_title: data.news_header_title,
        news_header_content: data.news_header_content,
        userId: data.userId
    })

    NewsModel.create(news).then(success => {
        console.log("created news")
        res.json(success)
    }, error => {
        console.log(error)
        res.json({message: "error creating news", "error": error})
    })
}

module.exports.getNews = (req, res) => {
    NewsModel.find().populate(['comments']).then(success => {
        console.log("found news")
        res.json(success)
    }, error => {
        console.log(error)
        res.json({message: "error getting news", "error": error})
    })
}

module.exports.addCommentToNews = (req, res) => {
    let newsId = req.params.newsId
    let data = req.body;

    console.log('news id: ' + newsId)
        console.log("saving news")
        NewsModel.findById(newsId).then(news => {
                console.log("news exist")
                let comment = new CommnetModel({
                    text: data.comment,
                    byUser: data.username,
                })
                comment.save().then(savedComment => {
                    console.log(savedComment)
                    NewsModel.findOneAndUpdate( {_id: newsId}, {$push: {comments: savedComment._id }}).then(updateResult => {
                        console.log(updateResult)
                        console.log("added new comment")
                        res.json(updateResult)
                    }, err => {
                        console.log(err)
                        res.json({ message: "could not add comment to news", error: err})
                    })
                })
        }, error => {
            console.log({ message:  "error getting news with the provided id", error: error})
        })
    
}

module.exports.deleteNews = (req, res) => {
    NewsModel.findByIdAndDelete(req.params.newsId).then(deleted => {
        console.log(deleted)
        res.json(deleted)
    }, err => {


        console.log(err)
        res.json({ message: "deleted news", error: err})
    })
}