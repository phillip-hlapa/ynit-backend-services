let express = require('express')
let route = express.Router()



route.get('/test', function(req, res) {
    res.json({message: 'test successful @ ' + Date})
})

module.exports = route;