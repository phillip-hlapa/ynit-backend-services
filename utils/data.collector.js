const RequestDataModel = require('../models/ynit-my-task-tracker-master-models/request.data.model')

module.exports.persistRequestData = (data) => {
    console.log('data registered', data.path)
    requestData = new RequestDataModel(data);
    RequestDataModel.create(requestData).then(saved => {}, error => {})
}