let express = require('express')
let route = express.Router()
let UsersController = require('../../controllers/ynit-my-task-tracker-master-controller/UsersController');
let TaskController = require('../../controllers/ynit-my-task-tracker-master-controller/TaskController');
let NewsContoller = require('../../controllers/ynit-my-task-tracker-master-controller/NewsController');
let DataCollector = require('../../utils/data.collector')
const DateUtil = require('../../utils/data.util')


route.post('/my-task-tracker/register', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'ResgisterUser', id: 1})
    UsersController.ResgisterUser(req,res)
})

route.post('/my-task-tracker/login', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'Login', date: DateUtil.getDate(), id: 2})
    UsersController.Login(req,res)
})




route.get('/my-task-tracker/users', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'getAllUsers', date: DateUtil.getDate(), id: 3})
    UsersController.getAllUsers(req,res)
})

route.delete('/my-task-tracker/users/:userId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'deleteUser', date: DateUtil.getDate(), id: 4})
    UsersController.deleteUser(req,res)
})
route.get('/my-task-tracker/users/:userId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'getUser', date: DateUtil.getDate(), id: 5})
    UsersController.getUser(req,res)
})
route.get('/my-task-tracker/users/pic/:userId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'getUserProfilePic', date: DateUtil.getDate(), id: 5})
    UsersController.getUserProfilePic(req,res)
})
route.post('/my-task-tracker/users/update/:userId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'updateUser', id: 6})
    UsersController.updateUser(req,res)
})
route.post('/my-task-tracker/users/pic', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'saveProfilePic', id: 13})
    UsersController.saveProfilePic(req,res)
})




//TASKS
route.post('/my-task-tracker/tasks/create', function(req, res) {
    console.log('inside create task endpoint')
    DataCollector.persistRequestData({path: req.originalUrl, description: 'createTask', date: DateUtil.getDate(), id: 7})
    TaskController.createTask(req, res)
})

route.get('/my-task-tracker/tasks/all/:userId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'getAllUserTasks', date: DateUtil.getDate(), id: 8})
    console.log('inside create task endpoint')
    TaskController.getAllUserTasks(req, res)
})



//NEWS
route.post('/my-task-tracker/news/create', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'createNews', date: DateUtil.getDate(), id: 9})
    console.log('inside create news endpoint')
    NewsContoller.createNews(req, res)
    
})

route.get('/my-task-tracker/news', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'getNews', date: DateUtil.getDate(), id: 10})
    console.log('inside get news endpoint')
    NewsContoller.getNews(req, res)
    
})
route.post('/my-task-tracker/news/:newsId/comments/create', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'addCommentToNews', date: DateUtil.getDate(), id: 11})
    console.log('inside create news endpoint')
    NewsContoller.addCommentToNews(req, res)
    
})

route.delete('/my-task-tracker/news/:newsId', function(req, res) {
    DataCollector.persistRequestData({path: req.originalUrl, description: 'deleteNews', date: DateUtil.getDate(), id: 12})
    console.log('inside delete news endpoint')
    NewsContoller.deleteNews(req, res)
    
})


module.exports = route;