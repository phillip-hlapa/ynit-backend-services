module.exports.AUTH_DROPBOX = 'iwrNFlEOwrQAAAAAAAAAAdloDDnsEcVYIuBJvRP4Ee4a8C7GaVBQJH__lSNodcpx';

//LOGGING CONSTANTS
module.exports.SYSTEM = "JUS_POTATOES_SYSTEM"
module.exports.METHOD_EXECUTION = 'METHOD_EXECUTION';
module.exports.SUCCESSFUL = "SUCCESSFUL"
module.exports.UNSUCCESSFUL = "UNSUCCESSFUL"
module.exports.HIGH = "HIGH"
module.exports.MEDIUM = "MEDIUM"
module.exports.SERVERE = "SERVERE"
module.exports.METHOD = "METHOD"
module.exports.INFO = "INFO"
module.exports.OPERATION = "OPERATION"

module.exports.MONGO_DB_PASS = juspotatoesPassword
module.exports.MONGO_DB_USER = juspotatoes
module.exports.MONGO_DB_DATABASE_YNIT_TASK_TRACKER = YNIT_TASK_TRACKER_DB

module.exports.AUTH_TOKEN_LENGTH = 14;
module.exports.AUTH_TOKEN = "x-jus-potatoes-auth-token";
module.exports.TOKEN_EXPIRE_AT = 1800 * 2 * 24; //expire after 24 hours

//RANDOM GENERATION CONSTANTS 
module.exports.STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
module.exports.STRING_LENGTH = 36;
module.exports.OTP_LENGTH = 6;

//SCHEAMA CONSTANTS
//module.exports.OTP_EXPIRE_AT = 180; //seconds
module.exports.OTP_EXPIRE_AT = 1800; //DELETE OTP AFTER 30 MIN
//module.exports.LOG_EXPIRE_AT = 600;
module.exports.LOG_EXPIRE_AT = 691200; //DELETE LOGS EVERY 8TH DAY
module.exports.NOTIFICATION_EXPIRE_AT = 691200;
module.exports.USER_EXPIRE_AT = this.OTP_EXPIRE_AT + 2;
module.exports.DECLINDED_ORDER_EXPIRE_AT = 1800 * 2 * 48;

//EMAIL CREDENTIALS CONSTANTS
module.exports.EMAIL_USERNAME = 'juspotatoes@gmail.com';
module.exports.PASSWORD = 'Dopeboi43221**';
module.exports.EMAIL = 'EMAIL_SYSTEM';
module.exports.EXPIRE_AT_IN_MINUTES = this.OTP_EXPIRE_AT / 60;

//remote database connection
// module.exports.OMK_USERNAME = 'juspotatoes';
// module.exports.OMK_PASSWORD = 'juspotatoesPassword';
// module.exports.OMK_DATABASE = 'JUS_POTATOES_DB';
module.exports.OMK_USERNAME = process.env.MONGO_DB_USER;
module.exports.OMK_PASSWORD = process.env.MONGO_DB_PASS;
module.exports.OMK_DATABASE = process.env.MONGO_DB_DATABASE_YNIT_TASK_TRACKER;

//database constants MONGODB
//module.exports.DATABASE_URL = 'mongodb://localhost:27017/'+this.OMK_DATABASE;

//module.exports.DATABASE_URL = 'mongodb://mongodb-service:27017/'+this.OMK_DATABASE; //kubernetes
module.exports.DATABASE_URL = 'mongodb+srv://' + this.OMK_USERNAME + ':' + this.OMK_PASSWORD + '@cluster0.xbnnw.mongodb.net/' + this.OMK_DATABASE + '?retryWrites=true&w=majority'
module.exports.HIDE_DB_DETAILS = 'mongodb+srv://SECRETE_USERNAME'  + ':SECRETE_PASSWORD' +  '@cluster0.xbnnw.mongodb.net/SECRETE_SYSTEM_DB'  + '?retryWrites=true&w=majority';
module.exports.DATABASE_SUCCESS_CONNECTION = 'CONNECTED TO DATABASE ON ' + this.HIDE_DB_DETAILS;
module.exports.DATABASE_FAILURE_CONNECTION = 'FAILURE TO CONNECT TO DATABASE ON ' + this.HIDE_DB_DETAILS;
module.exports.MY_PERSONAL_EMAIL_ADDRESS = 'philliphlapa2015@gmail.com'
//encryption constant
module.exports.SALT_ROUNDS = 10;

module.exports.AUTO_SEND_LOGS = '0 0 * * 0' //send every 7th day
//module.exports.AUTO_SEND_LOGS = '*/3 * * * *' //send every 3 minutes - testing purposes

module.exports.PING_HEROKU = '*/3 * * * *'

module.exports.SHOP_OWNER = 'SHOP OWNER';
module.exports.SHOP_OWNER_ERROR = 'could not create shop for requested user, user needs to be added to our database first';

module.exports.DEFAULT_IMG_ID = '5fd90734888aba3abc05bfa5';
module.exports.COMING_SOON_IMAGE = "default-product-image.png";