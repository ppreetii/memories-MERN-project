 import express from 'express';
 import bodyParser from 'body-parser';
 import cors from 'cors';
 import mongoose from 'mongoose';
 import postRoutes from './routes/posts.js';
 import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

 const app=express();
 dotenv.config();

 app.use(bodyParser.json({limit:"30mb", extended:true}));
 app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
 app.use(cors()); 
 app.use('/posts',postRoutes);
 app.use('/user',userRoutes);

 app.get('/',(req,res)=>{
     res.send('Welcome to Memories API');
 });

//https:www.mongodb.com/cloud/atlas
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port : ${PORT}`)))
.catch((error)=>console.log(error.message));
mongoose.set('useFindAndModify',false);
