import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import dotenv from 'dotenv';

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

// Listeners
app.listen(PORT, () => {
    console.log(`Server is listening at PORT: ${PORT}`)
})