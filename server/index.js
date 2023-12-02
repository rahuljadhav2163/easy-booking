import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import healthApi from "./controllers/health.js";
import {postSignUpApi} from "./controllers/signUp.js";

const app = express();
app.use(express.json());

const MongoDBConn = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if(conn){
        console.log('server is running ')
    }
};
MongoDBConn();

app.get('/api/v1/healths',healthApi)

app.post('/api/v1/signups',postSignUpApi)



const PORT = process.env.PORT || 5000;

app.listen(PORT, (req,res)=>{
    console.log(`server is running on ${PORT}`)
})