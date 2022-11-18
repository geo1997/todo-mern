import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import cors from 'cors'

import Tasks from './routes/Tasks.js'



const app = express();




app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(bodyParser.json({limit:"30mb"})); //converts POST data to JSON
app.use(cors());

app.use('/tasks', Tasks);

const PORT = process.env.PORT || 8000;
const DB_URL = 'mongodb+srv://todomern:todomern123@todoprojectmern.pnc9oxj.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,})
    .then(() => {app.listen(PORT, () => console.log('Server listening on port: ' + PORT))})
    .catch((err) => {console.log(err.message)});
