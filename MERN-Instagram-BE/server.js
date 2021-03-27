import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Pusher from 'pusher';

// App config
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json())
app.use(cors())

// DB config

// API routes
app.get('/', ( (req,res) => {
    res.status(200).send('Helloo')
}))

// Listeners
app.listen(PORT, () => {
    console.log(`Server is listening at PORT: ${PORT}`)
})