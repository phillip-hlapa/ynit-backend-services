let express = require('express')
let route = express.Router()
let UsersController = require('../../controllers/ynit-my-task-tracker-master-controller/UsersController');
let TaskController = require('../../controllers/ynit-my-task-tracker-master-controller/TaskController');
let NewsContoller = require('../../controllers/ynit-my-task-tracker-master-controller/NewsController');



route.post('/my-task-tracker/register', function(req, res) {
    console.log('registration endpoint')
    UsersController.ResgisterUser(req,res)
})

route.post('/my-task-tracker/login', function(req, res) {
    UsersController.Login(req,res)
})




route.get('/my-task-tracker/users', function(req, res) {
    UsersController.getAllUsers(req,res)
})

route.delete('/my-task-tracker/users/:userId', function(req, res) {
    UsersController.deleteUser(req,res)
})
route.get('/my-task-tracker/users/:userId', function(req, res) {
    UsersController.getUser(req,res)
})
route.post('/my-task-tracker/users/update/:userId', function(req, res) {
    UsersController.updateUser(req,res)
})




//TASKS
route.post('/my-task-tracker/tasks/create', function(req, res) {
    console.log('inside create task endpoint')
    TaskController.createTask(req, res)
})

route.get('/my-task-tracker/tasks/all/:userId', function(req, res) {
    console.log('inside create task endpoint')
    TaskController.getAllUserTasks(req, res)
})



//NEWS
route.post('/my-task-tracker/news/create', function(req, res) {
    console.log('inside create news endpoint')
    NewsContoller.createNews(req, res)
    
})

route.get('/my-task-tracker/news', function(req, res) {
    console.log('inside get news endpoint')
    NewsContoller.getNews(req, res)
    
})
route.post('/my-task-tracker/news/:newsId/comments/create', function(req, res) {
    console.log('inside create news endpoint')
    NewsContoller.addCommentToNews(req, res)
    
})

route.delete('/my-task-tracker/news/:newsId', function(req, res) {
    console.log('inside delete news endpoint')
    NewsContoller.deleteNews(req, res)
    
})


module.exports = route;