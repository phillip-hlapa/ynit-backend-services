let express = require('express')
let route = express.Router()
let UsersController = require('../../controllers/ynit-my-task-tracker-master-controller/UsersController');
let TaskController = require('../../controllers/ynit-my-task-tracker-master-controller/TaskController');


route.post('/my-task-tracker/register', function(req, res) {
    console.log('registration endpoint')
    UsersController.ResgisterUser(req,res)
})

route.post('/my-task-tracker/login', function(req, res) {
    UsersController.Login(req,res)
})

route.post('/my-task-tracker/tasks/create', function(req, res) {
    console.log('inside create task endpoint')
    TaskController.createTask(req, res)
})

route.get('/my-task-tracker/tasks/all/:userId', function(req, res) {
    console.log('inside create task endpoint')
    TaskController.getAllUserTasks(req, res)
})

module.exports = route;