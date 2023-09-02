const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

const getCart = async (req, res) => {
  const userID = req.params.id;

  try {
    const cart = await Cart.getCart(userID);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCartTotal = async (req, res) => {
  const userID = req.params.id;

  try {
    const cartInfo = await Cart.getCartBasic(userID);
    res.status(200).json(cartInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addToCart = async (req, res) => {
  const { productID } = req.body;
  const userID = req.params.id;
  const product = await Product.getProduct(productID);

  if (product.stock == 0) {
    res.status(400).json({
      error: `Sorry, product is out of stock.`,
    });
    return;
  }

  try {
    const cart = await Cart.addToCart(userID, productID, product.price);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  const userID = req.params.id;
  const cart = req.body;

  const errors = [];
  try {
    const promises = cart.map(async (product) => {
      const productID = product.product;
      const quantity = product.quantity;

      const productInfo = await Product.getProduct(productID);

      if (quantity > productInfo.maxOrder) {
        errors.push(
          `Cannot order more than ${productInfo.maxOrder} of ${productInfo.name}.`
        );

        return;
      }

      if (quantity > productInfo.stock) {
        errors.push(`Cannot order ${productInfo.name} as stock is limited.`);
        return;
      }
      return await Cart.updateCart(
        userID,
        productID,
        quantity,
        productInfo.price
      );
    });

    const result = await Promise.all(promises);

    if (errors.length) {
      res.status(400).json({ errors });
    } else {
      res.status(200).json(result[0]);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  const userID = req.params.id;
  const productID = req.params.item;
  const quantity = req.body.quantity;
  const product = await Product.getProduct(productID);
  try {
    const cart = await Cart.deleteFromCart(
      userID,
      productID,
      product.price,
      quantity
    );
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const emptyCart = async (req, res) => {
  const userID = req.params.id;

  try {
    const cart = await Cart.emptyCart(userID);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCart,
  getCartTotal,
  addToCart,
  updateCart,
  deleteFromCart,
  emptyCart,
};
