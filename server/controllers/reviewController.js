const Review = require("../models/reviewModel");

const createReview = async (request, response) => {
  const { productID, name, postDate, rating, comment } = request.body;

  try {
    const reviewPage = await Review.addReview(
      productID,
      name,
      postDate,
      rating,
      comment
    );
    response.status(200).json(reviewPage);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const getReviews = async (request, response) => {
  const productID = request.params.id;

  try {
    const reviewPage = await Review.getReviews(productID);
    response.status(200).json(reviewPage);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = { createReview, getReviews };
