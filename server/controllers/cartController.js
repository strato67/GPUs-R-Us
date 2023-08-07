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
    const cart = await Cart.addToCart(userID, productID);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  const userID = req.params.id;
  const { productID, quantity } = req.body;

  const product = await Product.getProduct(productID);

  if (quantity > product.maxOrder) {
    res.status(400).json({
      error: `Cannot order more than ${product.maxOrder} of this item.`,
    });
    return;
  }

  if (quantity > product.stock) {
    res.status(400).json({
      error: `Sorry, could not update cart.`,
    });
    return;
  }

  try {
    const cart = await Cart.updateCart(userID, productID, quantity);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  const userID = req.params.id;
  const productID = req.params.item;

  try {
    const cart = await Cart.deleteFromCart(userID, productID);
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

module.exports = { getCart, addToCart, updateCart, deleteFromCart, emptyCart };
