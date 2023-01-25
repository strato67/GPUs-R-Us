require('dotenv').config();

const express = require("express");
const app = express();

app.use((request, response, next)=>{
    console.log(request.path, request.method);
    next();
});

app.get('/', (request, response)=>{
    response.json({
        message:'Welcome to the app'
    })
});


app.listen(process.env.PORT, ()=>{
    console.log('Listening on port 5000');
});