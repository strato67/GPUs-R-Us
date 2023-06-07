const express = require("express");
const router = express.Router();
const {
  getProductInfo,
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

router.get("/", getAllProducts);

router.get("/:id", getProductInfo);

router.post("/", createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
