const express = require('express');
const router = express.Router();
const {getProduct, getAllProducts, createProduct, deleteProduct, updateProduct} = require('../controllers/productController');


router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.post('/', createProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;