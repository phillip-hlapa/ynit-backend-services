let express = require('express')
let route = express.Router()
let UsersController = require('../../controllers/ynit-my-task-tracker-master-controller/UsersController');
let TaskController = require('../../controllers/ynit-my-task-tracker-master-controller/TaskController');
let NewsContoller = require('../../controllers/ynit-my-task-tracker-master-controller/NewsController');
let DataCollector = require('../../utils/data.collector')



route.post('/my-task-tracker/register', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'resistering user'})
    UsersController.ResgisterUser(req,res)
})

route.post('/my-task-tracker/login', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'user login'})
    UsersController.Login(req,res)
})




route.get('/my-task-tracker/users', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'getting all users'})
    UsersController.getAllUsers(req,res)
})

route.delete('/my-task-tracker/users/:userId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'delete single user'})
    UsersController.deleteUser(req,res)
})
route.get('/my-task-tracker/users/:userId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'get single users'})
    UsersController.getUser(req,res)
})
route.post('/my-task-tracker/users/update/:userId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'update single users'})
    UsersController.updateUser(req,res)
})




//TASKS
route.post('/my-task-tracker/tasks/create', function(req, res) {
    console.log('inside create task endpoint')
    DataCollector.persistRequestData({path: req.originalUrl, description: 'create task'})
    TaskController.createTask(req, res)
})

route.get('/my-task-tracker/tasks/all/:userId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'get tasks for single user'})
    console.log('inside create task endpoint')
    TaskController.getAllUserTasks(req, res)
})



//NEWS
route.post('/my-task-tracker/news/create', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'create post'})
    console.log('inside create news endpoint')
    NewsContoller.createNews(req, res)
    
})

route.get('/my-task-tracker/news', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'get all news'})
    console.log('inside get news endpoint')
    NewsContoller.getNews(req, res)
    
})
route.post('/my-task-tracker/news/:newsId/comments/create', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'create comment to post(news)'})
    console.log('inside create news endpoint')
    NewsContoller.addCommentToNews(req, res)
    
})

route.delete('/my-task-tracker/news/:newsId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'delete post(news)'})
    console.log('inside delete news endpoint')
    NewsContoller.deleteNews(req, res)
    
})


module.exports = route;