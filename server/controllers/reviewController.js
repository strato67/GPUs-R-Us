const Review = require("../models/reviewModel");
const mongoose = require("mongoose");

const createReview = async (request, response) => {
  const { productID, name, postDate, rating, comment } = request.body;

  try {
    response.status(200).json({});
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

//move to models and convert to regular function
const createReviewPage = async (request, response) => {
  const { productID } = request.params;

  try {
    const reviewPage = Review.create({
      productID,
      reviews: [],
    });
    response.status(200).json(reviewPage);
  } catch (e) {
    response.status(400).json({ error: "Could not create review page." });
  }
};

module.exports = { createReview, createReviewPage };
