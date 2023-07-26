//const connectionDB= require('../connectDB');
const {Router}=require('express');
const { Client } = require('pg');



const getInformation=async(req,res)=>{

    const client= new Client({
        user:'postgres',
        host:'localhost',
        database:'CajaChicaDB',
        password:'admin123',
        port:'5432'
    });

    await client.connect();
    
    const {date}=req.body;
   
    const result=await client.query("Select * from \"ingresos\"  where \"Fecha\"="+"'"+date+"'");
    await client.end();
    res.json({incomes:result.rows});
    

}
const postInformation=async(req,res)=>{
    const client= new Client({
        user:'postgres',
        host:'localhost',
        database:'CajaChicaDB',
        password:'admin123',
        port:'5432'
    });

    await client.connect();
    const {information}=req.body;
   // const {concepto,nEquipo,tipoPago,saldo,ingreso,egreso,observacion,fechaActual}=information;
    
    /*const result=await client.query("Insert into \"ingresos\" (\"Fecha\",\"Concepto\",\"NEquipo\"," +
    "\"TipoPago\",\"Ingreso\",\"Egreso\",\"Saldo\",\"ObservactionIngreso\") values" +
    "(" + "'" + fechaActual + "'" + "," + concepto +
    "," + "'" + nEquipo + "'" + "," + "'" + tipoPago.ToUpper() + "'" + "," +
    ingreso + "," + egreso + "," +
     saldo + ","
    + "'" + observacion + "'" + ")");*/
    
    console.log(information);
}
module.exports=getInformation;