
const express=require("express");

const {PORT}=require('./config/serverConfig')

const app=express();

const setupServer=async ()=>{

    app.listen(PORT,()=>{
        console.log(`server is running at PORT ${PORT}`);
    })
}

setupServer();