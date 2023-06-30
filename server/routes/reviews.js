const express = require("express");
const router = express.Router();
const {
  createReview,
  getReviews,
  getSingleReview,
  updateReview,
} = require("../controllers/reviewController");

router.get("/:id", getReviews);
router.get("/:id/:user", getSingleReview);
router.post("/", createReview);
router.patch("/:id", updateReview);

module.exports = router;
