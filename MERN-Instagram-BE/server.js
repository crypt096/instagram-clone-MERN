import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import dotenv from 'dotenv';

import dbModel from './dbModel.js';

// App config
const app = express();
const PORT = process.env.PORT || 8080;
dotenv.config();

// Middleware
app.use(express.json())
app.use(cors())

// DB config
const connection_url = process.env.MONGO_URL;
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
})

mongoose.connection.once('open', () => {
    console.log('MongoDB has been successfuly connected!')
})

// API routes
app.get('/', ( (req,res) => {
    res.status(200).send('Helloo')
}))

app.post('/upload',(req,res) => {
    const body = req.body;

    dbModel.create(body, (err, data) => {
        if(err) {
            res.status(500).send(err);
        }else{
            res.status(201).send(data);
        }
    })
})

app.get('/sync', (req,res) => {
    dbModel.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

// Listeners
app.listen(PORT, () => {
    console.log(`Server is listening at PORT: ${PORT}`)
})