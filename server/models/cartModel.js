const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  cart: [
    {
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
});

cartSchema.statics.createCart = async function (userID) {
  if (!userID) {
    throw Error("No user id supplied.");
  }
  if (!mongoose.Types.ObjectId.isValid(userID)) {
    throw Error("Invalid user id.");
  }

  try {
    const cart = this.create({
      userID,
      cart: [],
    });
    return cart;
  } catch (e) {
    throw Error("Error creating cart.");
  }
};

module.exports = mongoose.model("Cart", cartSchema);
