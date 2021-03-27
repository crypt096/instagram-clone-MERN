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

// Listeners