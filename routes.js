let MyTaskTrackerRouter = require(__dirname +'/routes/ynit-my-task-tracker-master-routes/routes');
let TestRouter = require(__dirname +'/routes/test/routes')


module.exports = [MyTaskTrackerRouter, TestRouter];
