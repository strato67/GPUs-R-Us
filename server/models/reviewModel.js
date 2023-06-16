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


module.exports = mongoose.model("Review", reviewSchema);
