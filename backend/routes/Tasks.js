import express from 'express';

import {getTasks , addTask , updateTask , findTaskById , deleteTask} from '../controllers/Tasks.js'

const router = express.Router();


router.post('/add', addTask);
router.get('/', getTasks);
router.patch('/update/:id', updateTask);
router.get('/task/:id', findTaskById);
router.delete('/delete/:id',deleteTask);



export default router;