const mongoose = require("mongoose");
const Review = require("../models/reviewModel");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  maxOrder: {
    type: Number,
    required: true,
    min: 1,
  },
  specs: [
    {
      name: {
        type: String,
        required: true,
      },
      spec: { type: String, required: true },
    },
  ],
  tags: [String],
  images: [
    {
      id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
});

productSchema.statics.getProduct = async function (id) {
  if (!id) {
    throw Error("No product found.");
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw Error("Invalid product id.");
  }

  const product = await this.findById(id);

  if (!product) {
    throw Error("No product found.");
  }

  return product;
};

productSchema.statics.calculateRating = async function (id) {
  const product = await this.getProduct(id);
  const reviewPage = await Review.getReviews(id);

  if (!reviewPage) {
    throw Error("Review page not found.");
  }

  const ratingSum = reviewPage
    .map((review) => review.rating)
    .filter((n) => n !== 0);
  const rating = ratingSum.reduce((a, b) => a + b, 0) / ratingSum.length;

  product.rating = Math.ceil(rating);

  return await product.save();
};

module.exports = mongoose.model("Product", productSchema);
