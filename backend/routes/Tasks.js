import express from 'express';

import {getTasks , addTask} from '../controllers/Tasks.js'

const router = express.Router();


router.post('/', addTask);
router.get('/', getTasks);




export default router;