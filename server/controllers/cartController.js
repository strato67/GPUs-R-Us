const Cart = require("../models/cartModel");

const getCart = async (req, res) => {
  const userID = req.params.id;

  try {
    const cart = await Cart.getCart(userID);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addToCart = async (req, res) => {};

const updateCart = async (req, res) => {};

const deleteFromCart = async (req, res) => {};

const emptyCart = async (req, res) => {};

module.exports = { getCart, addToCart, updateCart, deleteFromCart, emptyCart };
