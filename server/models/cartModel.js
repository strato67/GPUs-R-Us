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
  total: {
    type: Number,
    default: 0,
    required: true,
  },
});

cartSchema.statics.createCart = async function (username) {
  if (!username) {
    throw Error("No user id supplied.");
  }

  const user = await User.findOne({ username: username });

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

cartSchema.statics.getCartBasic = async function (username) {
  if (!username) {
    throw Error("No user id supplied.");
  }

  const cart = await this.findOne({ username: username });

  if (!cart) {
    throw Error("Could not find user cart");
  }

  return { length: cart.cart.length, total: cart.total };
};

cartSchema.statics.addToCart = async function (username, productID, price) {
  if (!username || !productID || !price) {
    throw Error("Missing parameters.");
  }

  const cart = await this.getCart(username);

  if (cart.cart.find((item) => item.product == productID)) {
    throw Error("Item already in cart, go to cart to update quantity.");
  }

  cart.cart.push({ product: productID, quantity: 1 });

  cart.total += Math.round(price * 1e2) / 1e2;

  return cart.save();
};

cartSchema.statics.updateCart = async function (
  username,
  productID,
  quantity,
  price
) {
  if (!username || !productID ) {
    throw Error("Missing parameters.");
  }

  if (!mongoose.Types.ObjectId.isValid(productID)) {
    throw Error("Invalid product id.");
  }

  const cart = await this.getCart(username);
  const item = cart.cart.find((item) => item.product == productID);

  if (quantity === 0) {
    return this.deleteFromCart(username, productID, price, item.quantity);
  }

  if (!item) {
    throw Error("Item not found in cart.");
  }

  if (quantity < item.quantity) {
    cart.total -= Math.round(price * quantity * 1e2) / 1e2;
  }

  if (quantity > item.quantity) {
    const temp = price * quantity;
    cart.total -= price * item.quantity;
    cart.total += Math.round(temp * 1e2) / 1e2;
  }

  item.quantity = quantity;

  return cart.save();
};

cartSchema.statics.deleteFromCart = async function (
  username,
  productID,
  price,
  quantity
) {
  if (!username || !productID || !price || !quantity) {
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

  cart.total -= Math.round(price * quantity * 1e2) / 1e2;

  return cart.save();
};

cartSchema.statics.emptyCart = async function (username) {
  if (!username) {
    throw Error("No user id supplied.");
  }

  const cart = await this.getCart(username);

  cart.cart = [];
  cart.total = 0;

  return cart.save();
};

module.exports = mongoose.model("Cart", cartSchema);
