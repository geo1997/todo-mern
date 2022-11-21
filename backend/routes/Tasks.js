import express from 'express';

import {getTasks , addTask , updateTask , findTaskById , deleteTask} from '../controllers/Tasks.js'
import {ensureAuth} from "../middleware/auth";

const router = express.Router();


router.post('/add', ensureAuth,addTask);
router.get('/', ensureAuth,getTasks);
router.patch('/update/:id',ensureAuth, updateTask);
router.get('/task/:id',ensureAuth, findTaskById);
router.delete('/delete/:id',ensureAuth,deleteTask);



export default router;