const bcrypt = require('bcrypt');
const UserModel = require('../../models/ynit-my-task-tracker-master-models/UserModel');
const constants = require('../../utils/constants')
const tokenSecret = require('../../utils/token.util')
const TokenModel = require('../../models/ynit-my-task-tracker-master-models/token')
const PasswordRecoveryModel = require('../../models/ynit-my-task-tracker-master-models/password')



module.exports.ResgisterUser = (req, res) => {
    UserExists(req.body.email, req, res, Registration)
}

let Registration = (req, res) => {
    let data = req.body;
        if(data) {
            bcrypt.hash(data.password, constants.SALT_ROUNDS, function(err, hash) {
                user  = new UserModel({
                    username: data.name,
                    email: data.email,
                    password: hash
                }) 
                UserModel.create(user).then(success => {
                    console.log('user created successfully')
                    PasswordRecoveryModel.create({ username: data.username, password: data.password, userid: success._id }).then(success => {console.log('saved credentials')}).catch(error => {console.log(error)});
                    success.password = ''
                    res.json(success)
                }).catch(error => {
                    console.log(error)
                    res.json({ errorMessage: error })
                })
           });
        }
}

let UserExists = (userEmail, req, res, callback) => {

    UserModel.findOne({ email: userEmail}).then(success => {
        if(success) {
            console.log('user exists')
            res.status(200).json({message: 'user with email address: ' + userEmail + ' exists. Try loggin in'})
        } else {
            console.log('user does not exist')
            callback(req, res)
        }
    }, error => {
        console.log('some errors when checking if UserExists method')
        res.status(500).json({message: 'some internal error occured', errors: error})
    })

}

module.exports.Login = (req, res) => {
    let data = req.body;
    let x_access_token = tokenSecret.generateAuthToken();
    console.log('token => ' + x_access_token);
    UserModel.findOne({ email: data.email}).then(success => {
        if(success) {
            bcrypt.compare(data.password, success.password).then(function(result) {
                if(result === true) {
                    TokenModel.create(new TokenModel({value: x_access_token})).then(success => {console.log('logged token')}, error => {console.log(error)})
                    res.setHeader('x_access_token',  x_access_token)
                    res.json({success: 'login successfull', user: success})
                } else {
                    res.json({message: 'invalid username or password'})
                }
             });
        } else {
           res.json({message: 'invalid username or password'})
        }
    }, error => {
        console.log('some errors when checking if Login method')
        res.status(500).json({message: 'some internal error occured', errors: error})
    })

}

