import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import {keys} from './config/keys.js';
import {bills} from './routes/api/bills.js';

const app = express();

// bodyparser middleware
app.use(bodyparser.json());

//Initialising mongoDB
const db = keys.mongoURI;

mongoose
    .connect(db)
    .then(() => {
        console.log("MongoDB connected")
        })
    .catch(err => console.log(err));

// Use routes
app.use('/api/bills', bills);

// Start localhost
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on ${port}`));