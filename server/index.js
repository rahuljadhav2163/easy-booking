import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const MongoDBConn = async ()=>{
    const conn = await mongoose.connect(process.env.MONGODB_URL)
    if(conn){
        console.log('server is running ')
    }
};
MongoDBConn();

app.get('/api/healths',(req,res)=>{
    res.json({
        success:true,
        message:'All Good😊'
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req,res)=>{
    console.log(`server is running on ${PORT}`)
})