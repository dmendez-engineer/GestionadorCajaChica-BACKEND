const express=require('express');
const cors=require('cors');
//const connectionDB= require('./connectDB');


const app=express();
app.use(express.json());
const whiteList="http://localhost:4200";
app.use(cors({origin:whiteList}));


app.use(require('./routes/IncomeRoute'));


app.listen(4000,()=>{
    console.log("Server running");
});