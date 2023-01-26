const express = require('express');
const router = express.Router();


router.get('/', (request,response)=>{
    response.json({message:'all products'});
});

router.get('/:id', (request,response)=>{
    response.json({message:'single product'});
});

module.exports = router;