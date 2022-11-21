import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import cors from 'cors'
const morgan = require('morgan')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')
global.rt = undefined;

import Tasks from './routes/Tasks.js'

require('dotenv').config();
//Require the passport auth configuration
require('./auth/passport')(passport)

const app = express();




app.use(bodyParser.urlencoded({limit:"10mb",extended: true}));
app.use(bodyParser.json({limit:"10mb"})); //converts POST data to JSON
app.use(cors());

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//Set Express Session Middleware
app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET || 'todoprojectmern',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_DB_URL
    })
}))

//Set Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//Routes
app.use('/', require('./routes/index'))
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
