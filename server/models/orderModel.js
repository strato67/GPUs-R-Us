const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Cart = require("./cartModel");

const orderSchema = new Schema({
  username: {
    type: String,
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
  total: {
    type: Number,
    default: 0,
    required: true,
  },
});

orderSchema.statics.createOrder = async function (username) {
    if (!username) {
      throw Error("No user id supplied.");
    }
  
    const user = await Cart.findOne({ username: username });
  
    if (!user) {
      throw Error("Invalid user id.");
    }
  
    try {
      const order = this.create({
        username: user.username,
        cart: user.cart,
        total: user.total
      });
      return order;
    } catch (e) {
      throw Error("Error creating order.");
    }
  };

module.exports = mongoose.model("Order", orderSchema);