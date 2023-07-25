
//const Client= require ("pg");
const { Client } = require('pg')

const connectDB=async()=>{
    const conn="";
    const client= new Client({
        user:'postgres',
        host:'localhost',
        database:'CajaChicaDB',
        password:'admin123',
        port:'5432'
    });
   
    try{
         conn=await client.connect();
        console.log("CONNECTED");
    }catch(err){
        console.log("ERR: "+err.message);
        
    }finally{
        return client;
    }
  
}
//export default connectionDB
module.exports=connectDB;

