const express = require('express');
const router = express.Router();
const {getProduct, getAllProducts, createProduct} = require('../controllers/productController');


router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.post('/', createProduct);


module.exports = router;