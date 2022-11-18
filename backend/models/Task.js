import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    taskName: String,
    taskDescription: String,
    attachment: String,
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('Task', taskSchema);

export default Task;