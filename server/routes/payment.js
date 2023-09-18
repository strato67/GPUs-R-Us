const express = require("express");
const router = express.Router();
const {
  getPublishableKey,
  createPaymentIntent,
} = require("../controllers/paymentController");

const requireAuth = require("../middleware/requireAuth");

router.use(requireAuth);

router.get("/config", getPublishableKey);

router.post("/create-payment-intent", createPaymentIntent);

module.exports = router;
