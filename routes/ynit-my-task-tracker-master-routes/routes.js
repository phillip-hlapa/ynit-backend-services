let express = require('express')
let route = express.Router()
let UsersController = require('../../controllers/ynit-my-task-tracker-master-controller/UsersController');


route.post('/my-task-tracker/register', function(req, res) {
    console.log('registration endpoint')
    UsersController.ResgisterUser(req,res)
})

route.post('/my-task-tracker/login', function(req, res) {
    UsersController.Login(req,res)
})

module.exports = route;