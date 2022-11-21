import mongoose from "mongoose";
import Task from '../models/Task.js';

export const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }catch(err) {
        res.status(400).json({message : err.message});
    }
}


export const addTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);

    } catch (err) {
        res.status(400).json({message: err.message});
    }

}

export const updateTask = async (req, res, next) => {
    const {id :_id} = req.params;

    try {
        let task = await Task.findById(req.params).lean()

        if (!task){
            return res.render('error/404')
        }

       const updatedTask = await Task.findOneAndUpdate({_id: req.params.id}, req.body, {
                new: true,
                runValidators: true
            })

        await res.json(updatedTask);

    }catch (e) {
        console.error(e)
        return res.render('error/500')
    }

}

//Find a task based on the id
export const findTaskById = (req, res, next, id) => {
    Task.findById(id).exec((error,task) => {
        if (error || !task) {
            return res.status(400).json({
                error: 'Task not found'
            });
        }
        //If user is found, add the data to req.profile
        res.status(200).json(task)
    });
};

//@desc Delete tasks
//@route DELETE /tasks/:id
export const deleteTask = async (req, res) => {
    try {
        await Task.remove({id: req.params})
        await res.json({message :'Task Removed Successfully'});
    }catch (e) {
        console.error(e)
        return res.render('error/500')
    }

}
