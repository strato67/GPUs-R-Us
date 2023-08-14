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
    const cart = await Cart.addToCart(userID, productID, product.price);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateCart = async (req, res) => {
  const userID = req.params.id;
  const cart = req.body;
  try {
    //move the status code out of the loop
    cart.forEach(async (product) => {
      const productID = product.productID;
      const quantity = product.quantity;

      const productInfo = await Product.getProduct(productID);

      if (quantity > productInfo.maxOrder) {
        res.status(400).json({
          error: `Cannot order more than ${productInfo.maxOrder} of ${productInfo.name}.`,
        });
        return;
      }

      if (quantity > productInfo.stock) { 
        res.status(400).json({
          error: `Sorry, could not update cart.`,
        });
        return;
      }
      const cartPayload = await Cart.updateCart(
        userID,
        productID,
        quantity,
        productInfo.price
      );
      return cartPayload;
    });
    res.status(200).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFromCart = async (req, res) => {
  const userID = req.params.id;
  const productID = req.params.item;
  const product = await Product.getProduct(productID);
  try {
    const cart = await Cart.deleteFromCart(userID, productID, product.price);
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
