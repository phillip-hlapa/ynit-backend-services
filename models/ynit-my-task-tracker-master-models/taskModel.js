const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var constants = require('../../utils/constants')

const  taskSchema = mongoose.Schema({
    taskName: { type: String, require: false, defaultValue: 'Unknown Task' },
    taskDescription: { type: String, require: false },
    taskProgress: { type: Number, default: 0},
    taskStartDate: { type: Date, default: Date.now },
    taskEndDate: { type: Date, default: Date.now },
    taskBelongsTo: { type:  Schema.Types.ObjectId, ref: 'User'},
    taskComments: [{ type:  Schema.Types.ObjectId, ref: 'Comment'}],
    dateCreated: { type: Date, default: Date.now },
    taskProgressStatus: { type: String, require: false }
})



module.exports = mongoose.model('Task', taskSchema);