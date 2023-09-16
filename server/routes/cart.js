const express = require("express");
const router = express.Router();
const {
  getCart,
  getCartTotal,
  addToCart,
  updateCart,
  deleteFromCart,
  emptyCart,
} = require("../controllers/cartController");

const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/:id", getCart);
router.get("/:id/total", getCartTotal);
router.post("/:id", addToCart);
router.patch("/:id", updateCart);
router.delete("/:id/:item", deleteFromCart);
router.delete("/:id", emptyCart);

module.exports = router;
