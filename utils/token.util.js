const constants = require('./constants');

module.exports.generate = () => {
    //method for generating a randon string of length APP_CONSTANTS.STRING_LENGTH
    var value = '';
    var i = 0;
    for (let index = 0; index < constants.OTP_LENGTH; index++) {
        i = Math.floor((Math.random() * (constants.STRING_LENGTH - 1))  + 1)
        value = value + constants.STRING.charAt(i);
    }
    return value;
},

module.exports.generateAuthToken = () => {
    //method for generating a randon string of length APP_CONSTANTS.STRING_LENGTH
    var value = '';
    var i = 0;
    for (let index = 0; index < constants.AUTH_TOKEN_LENGTH; index++) {
        i = Math.floor((Math.random() * (constants.STRING_LENGTH - 1))  + 1)
        value = value + constants.STRING.charAt(i);
    }
    return value + Date.now();
}