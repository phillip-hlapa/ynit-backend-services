const bcrypt = require('bcrypt');
const UserModel = require('../../models/ynit-my-task-tracker-master-models/UserModel');
const ProfilePicModel = require('../../models/ynit-my-task-tracker-master-models/profilepicture');
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
                    passRecovery  = new PasswordRecoveryModel({
                        username: data.name,
                        userid: success._id,
                        value: data.password
                    }) 
                    PasswordRecoveryModel.create(passRecovery).then(success => {console.log('saved credentials')}).catch(error => {console.log(error)});
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

module.exports.getAllUsers = (req, res) => {
    console.log('get all users');
    UserModel.find().then(success => {
        res.json({success: 'login successfull', user: success})
    }, error => {
        console.log('some errors when checking if getAllUsers method')
        res.status(500).json({message: 'some internal error occured while trying to get users', errors: error})
    })

}

module.exports.deleteUser = (req, res) => {
    console.log('delete user method');
    let userId = req.params.userId
    UserModel.findByIdAndRemove(userId).then(deletedUser => {
        res.json({success: 'delete successfull', user: deletedUser})
    }, error => {
        console.log('some errors when checking if deleting User  with id ' + userId)
        res.status(500).json({message: 'some internal error occured while trying to delete User', errors: error})
    })

}


module.exports.saveProfilePic = (req, res) => {
    let userID = req.params.userId
    let pp = new ProfilePicModel({
        userId: req.body.userId,
        name: req.body.name,
        data: req.body.data
    })

    ProfilePicModel.findOneAndDelete({userId: req.body.userId}).then(success =>{
        ProfilePicModel.create(pp).then(success => {
            res.json({message: 'saved profile pic successfully'})
        }, error => {
            console.log(error)
        })
    }, error => {
        console.log(error)
    })


}

module.exports.updateUser = (req, res) => {
    console.log('updateUSer user method');
    let userId = req.params.userId
    // let data = req.body;
    UserModel.findByIdAndUpdate( userId, {$set:req.body},{new:true}).then(updatedUser => {
        res.json({success: 'update User successfull', user: updatedUser})
    }, error => {
        console.log('some errors when checking if updating User  with id ' + userId)
        res.status(500).json({message: 'some internal error occured while trying to update User', errors: error})
    })

}

module.exports.getUser = (req, res) => {
    console.log('getUser method');
    let userId = req.params.userId
    console.log(userId)
    UserModel.findById(userId).then(user => {
        console.log(user)
        res.json(user)
    }, error => {
        console.log('some errors getting User  with id ' + userId)
        res.status(500).json({message: 'some internal error occured while trying to get User', errors: error})
    })

}

module.exports.getUserProfilePic = (req, res) => {
    console.log('getUserProfilePic method');
    ProfilePicModel.findOne({userId: req.params.userId}).then(user => {
        res.json(user)
    }, error => {
        console.log('some errors getting User profile picture with id ' + userId)
        res.status(500).json({message: 'some errors getting User profile picture with id', errors: error})
    })
}
