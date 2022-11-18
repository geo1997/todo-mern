import Task from '../models/Task.js';

export const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(err) {
        res.status(404).json({message : err.message});
    }
}


export const addTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);

    } catch (err) {
        res.status(409).json({message: err.message});
    }

}