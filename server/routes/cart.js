const express = require("express");
const router = express.Router();
const {getCart, addToCart, updateCart, deleteFromCart, emptyCart} = require("../controllers/cartController");

router.get("/:id", getCart);

router.post("/:id", addToCart);

router.patch("/:id", updateCart);

router.delete("/:id/:item", deleteFromCart);

router.delete("/:id", emptyCart);

module.exports = router;
