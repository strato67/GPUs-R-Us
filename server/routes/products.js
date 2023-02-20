const express = require('express');
const router = express.Router();
const Product = require('../models/productModel');

router.get('/', (request,response)=>{
    response.json({message:'all products'});
});

router.get('/:id', (request,response)=>{
    response.json({message:'single product'});
});

router.post('/', async (request,response)=>{
    const {name,
        description,
        price,
        rating,
        images,
        reviews } = request.body;
    
        try{
            const product = await Product.create({name, description, price, rating, images, reviews});
            response.status(200).json(product)
        }catch(e){
            response.status(400).json({error:'Error'});
        }    
});


module.exports = router;