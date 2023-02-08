const express = require('express');
const router = express.Router();

router.get('/', (request,response)=>{
    response.json({message:'All orders'});
});

router.get('/:id', (request,response)=>{
    response.json({message:'single order'});
});

router.post('/:id', (request,response)=>{
    response.json({message:'add to order'});
});

router.delete('/:id', (request,response)=>{
    response.json({message:'delete from order'});
});

router.patch('/:id', (request,response)=>{
    response.json({message:'update order'});
});

module.exports = router;