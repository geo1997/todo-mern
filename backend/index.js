import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import cors from 'cors'

import Tasks from './routes/Tasks.js'

require('dotenv').config();

const app = express();




app.use(bodyParser.urlencoded({limit:"10mb",extended: true}));
app.use(bodyParser.json({limit:"10mb"})); //converts POST data to JSON
app.use(cors());

app.use('/tasks', Tasks);


const port = process.env.PORT || 8000;


if(process.env.NODE_ENV){
    app.use(express.static('./frontend/build'))

    app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, './frontend/build/index.html'), function(err) {
            if (err) {
                res.status(500).send(err)
            }
        })
    })

}

//db
mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify: false
}).then(() => console.log("Database connected"));


app.listen(port, () =>{
    console.log(`Server running on ${port}`);
});
