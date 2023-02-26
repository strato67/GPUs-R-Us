const Product = require('../models/productModel');
const mongoose = require('mongoose');

const getProduct = async(request,response)=>{
    const { id } = request.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return response.status(400).json({error:'No products found'});
    }

    const product = await Product.findById(id);
    
    if(!product){
        return response.status(400).json({error:'No products found'});
    }
    return response.status(200).json(product);

}

const getAllProducts = async(request,response)=>{
    const products = await Product.find({});
    response.status(200).json(products);
}


const createProduct = async (request,response)=>{
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
}

module.exports = {getProduct, getAllProducts, createProduct};