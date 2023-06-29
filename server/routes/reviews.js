const express = require("express");
const router = express.Router();
const {
  createReview,
  getReviews,
  updateReview,
} = require("../controllers/reviewController");

router.get("/:id", getReviews);
router.get("/:id/:user", getReviews);
router.post("/", createReview);
router.patch("/:id", updateReview);

module.exports = router;
