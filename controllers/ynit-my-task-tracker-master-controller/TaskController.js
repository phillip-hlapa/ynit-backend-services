const { request } = require('express');
let TaskModel = require('../../models/ynit-my-task-tracker-master-models/taskModel')

module.exports.createTask = (req, res) => {
    console.log('creating task')

    let taskData = req.body;

    task = new TaskModel({
        taskName: taskData.taskName,
        taskDescription: taskData.taskDescription,
        taskProgress: taskData.taskProgress,
        taskStartDate: taskData.taskStartDate,
        taskEndDate: taskData.taskEndDate,
        taskBelongsTo: taskData.taskBelongsTo 
    })

    console.log(task)
    TaskModel.create(task).then(success => {
        console.log('task saved successfully')
       
        res.json(success)
    }, error => {
        console.log(error)
        res.json({errorMessage: error, message: 'could not save task'})
    })
}

module.exports.getAllUserTasks = (req, res) => {
    let userId = req.params.userId;
    console.log('------------>', req.params)
    console.log('------------>', userId)
    TaskModel.find({ taskBelongsTo: userId }).then(success => {
        console.log('all user tasks found')
        res.json(success)
    }, error => {
        res.json({ message: 'error retrieving user tasks', errorMessage: error })
    })

}