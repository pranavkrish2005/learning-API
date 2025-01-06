// Add "type": "module", under "main": "index.js", in package.json for import to work

import express from 'express';
import mongoose from 'mongoose';
import subscribersRouter from './routes/subscribers.js';
import dotenv from 'dotenv';
dotenv.config();


const app = express();
app.use(express.json());

app.use('/subscribers', subscribersRouter);

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', (error) => console.log('connected to database'))


app.listen(5555, () => console.log("app is listening"));