const express = require("express");
const router = express.Router();
const {
  createReview,
  getReviews,
  getSingleReview,
  updateReview,
} = require("../controllers/reviewController");

const requireAuth = require("../middleware/requireAuth");

router.get("/:id", getReviews);
router.get("/:id/:user", getSingleReview);
router.post("/", createReview).use(requireAuth);
router.patch("/:id", updateReview).use(requireAuth);

module.exports = router;
