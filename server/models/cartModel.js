const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./userModel");

const cartSchema = new Schema({
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
});

cartSchema.statics.createCart = async function (username) {
  if (!username) {
    throw Error("No user id supplied.");
  }

  const user = await User.findOne({username: username});

  if (!user) {
    throw Error("Invalid user id.");
  }

  try {
    const cart = this.create({
      username,
      cart: [],
    });
    return cart;
  } catch (e) {
    throw Error("Error creating cart.");
  }
};

cartSchema.statics.getCart = async function (username) {
  if (!username) {
    throw Error("No user id supplied.");
  }

  const cart = await this.findOne({ username: username });

  if (!cart) {
    throw Error("Could not find user cart");
  }

  return cart;
};

cartSchema.statics.addToCart = async function (username, productID) {
  if (!username || !productID) {
    throw Error("Missing parameters.");
  }

  const cart = await this.getCart(username);
  
  if (cart.cart.find((item) => item.product == productID)) {
    throw Error("Item already in cart, go to cart to update quantity.");
  }

  cart.cart.push({ product: productID, quantity: 1 });

  return cart.save();
};

cartSchema.statics.updateCart = async function (username, productID, quantity) {

  if (!username || !productID || !quantity) {
    throw Error("Missing parameters.");
  }

  if (!mongoose.Types.ObjectId.isValid(productID)) {
    throw Error("Invalid product id.");
  }

  if (quantity == 0) {
    return this.deleteFromCart(username, productID);
  }

  const cart = await this.getCart(username);

  const item = cart.cart.find((item) => item.product == productID);

  if (!item) {
    throw Error("Item not found in cart.");
  }

  item.quantity = quantity;

  return cart.save();

};

cartSchema.statics.deleteFromCart = async function (username, productID) {
  if (!username || !productID) {
    throw Error("Missing parameters.");
  }

  const cart = await this.getCart(username);

  const item = cart.cart.indexOf(
    cart.cart.find((item) => item.product == productID)
  );

  if (item === -1) {
    throw Error("Item not found in cart.");
  }
  cart.cart.splice(item, 1);

  return cart.save();
};

cartSchema.statics.emptyCart = async function (username) {
  if (!username) {
    throw Error("No user id supplied.");
  }

  const cart = await this.getCart(username);

  cart.cart = [];

  return cart.save();
};

module.exports = mongoose.model("Cart", cartSchema);
