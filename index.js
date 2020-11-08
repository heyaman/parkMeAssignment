const express = require('express');
let app=express();
let port=process.env.PORT || 3000;
const bodyParser=require('body-parser');
const parkIn=require('./routes/api/ParkIn');
const parkOut=require('./routes/api/ParkOut');





// middleware for bodyParser
app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());



app.get('/',(req,res)=>{//just for testing
    res.send("working fine for me");
});

app.use('/api/parkIn',parkIn);
app.listen(port,()=>{
    console.log("port is listing fine");
})