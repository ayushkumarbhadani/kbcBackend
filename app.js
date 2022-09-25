const express=require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB=require("./db/connect.js");


const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json(({
        "TEST":"Working"
    }));
});

const PORT= process.env.PORT || 8000;

const start=async()=>{
    connectDB(process.env.MONGO_URI).then(()=>{
        app.listen(PORT,()=>{
            console.log(`App is listning on port ${PORT}`);
        });
    }).catch((err)=>{
        console.log(err);
    });
}
start();
