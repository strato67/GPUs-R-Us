const express = require("express");
const app = express();
const index = require('./routes/index');
const products = require('./routes/products');
const order = require('./routes/order');

require('dotenv').config();

app.use((request, response, next)=>{
    console.log(request.path, request.method);
    next();
});

app.use('/', index);
app.use('/products',products);
app.use('/order',order);

app.listen(process.env.PORT, ()=>{
    console.log('Listening on port 5000');
});