const express = require("express");
const router = express.Router();
const { createReview, getReviews } = require("../controllers/reviewController");

router.post("/", createReview);

router.get("/:id", getReviews);

router.patch("/:id", (req, res) => {});

module.exports = router;
