const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      postDate: {
        type: Date,
        required: true,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
});

reviewSchema.statics.createReviewPage = async function (productID) {
  if (!productID) {
    throw Error("No product id supplied.");
  }
  if (!mongoose.Types.ObjectId.isValid(productID)) {
    throw Error("Invalid product id.");
  }

  try {
    const reviewPage = this.create({
      productID,
      reviews: [],
    });
    return reviewPage;
  } catch (e) {
    throw Error("Error creating review page.");
  }
};

reviewSchema.statics.addReview = async function (
  productID,
  name,
  postDate,
  rating,
  comment
) {
  if ((!productID, !name, !postDate, !comment)) {
    throw Error("Missing fields.");
  }
  if (!mongoose.Types.ObjectId.isValid(productID)) {
    throw Error("Invalid product id.");
  }

  const reviewPage = await this.findOne({ productID: productID });

  if (!reviewPage) {
    throw Error("Review page not found.");
  }

  reviewPage.reviews.push({
    name,
    postDate,
    rating,
    comment,
  });

  return reviewPage.save();
};

reviewSchema.statics.getReviews = async function (productID) {
  if (!productID) {
    throw Error("No product id supplied.");
  }
  if (!mongoose.Types.ObjectId.isValid(productID)) {
    throw Error("Invalid product id.");
  }

  const reviewPage = await this.findOne({ productID: productID });

  if (!reviewPage) {
    throw Error("Review page not found.");
  }

  return reviewPage.reviews;
};

module.exports = mongoose.model("Review", reviewSchema);
