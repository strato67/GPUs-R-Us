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

  if (comment.length < 1) {
    throw Error("Review cannot be empty.");
  }

  const reviewPage = await this.findOne({ productID: productID });

  if (!reviewPage) {
    throw Error("Review page not found.");
  }
  const messageExists = reviewPage.reviews.find(
    (review) => review.name === name
  );
  if (messageExists) {
    throw Error("You have already reviewed this product.");
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

reviewSchema.statics.getReview = async function (productID, user) {
  if (!productID || !user) {
    throw Error("Missing fields");
  }
  if (!mongoose.Types.ObjectId.isValid(productID)) {
    throw Error("Invalid product id.");
  }

  const reviewPage = await this.findOne({ productID: productID });

  if (!reviewPage) {
    throw Error("Review page not found.");
  }

  const messageExists = reviewPage.reviews.find(
    (review) => review.name === user
  );
  if (!messageExists) {
    return null;
  }

  return messageExists;
};

reviewSchema.statics.updateReview = async function (
  productID,
  name,
  rating,
  comment
) {
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
  const messageExists = reviewPage.reviews.find(
    (review) => review.name === name
  );
  if (!messageExists) {
    throw Error("Product has not been reviewed by this user.");
  }

  messageExists.rating = rating;
  messageExists.comment = comment;

  return await reviewPage.save();
};

module.exports = mongoose.model("Review", reviewSchema);
