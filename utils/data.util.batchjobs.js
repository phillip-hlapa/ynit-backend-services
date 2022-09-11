const RequestDataModel = require('../models/ynit-my-task-tracker-master-models/request.data.model')

module.exports.organizeRequestDataGraph = () => {
    let data;
    const interval = setInterval(function() {
        console.log('running batch job')
        RequestDataModel.find().then(requestData => {
            requestData.forEach(reqData => {
                    console.log(reqData)
            })
        }, error => {})
      }, 10000);

}