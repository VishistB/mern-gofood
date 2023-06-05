const express = require('express');
const app = express();
const mongoDB = require('./db');
app.use(express.json())
const cors=require('cors')
app.use(cors())


const port= 8000;

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/api',require("./Routes/CreateUser"))

app.listen(port, ()=>{
    console.log(`server started at ${port}`);
})