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
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
