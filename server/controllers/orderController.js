const Order = require("../models/orderModel");

const createOrder = async (req, res) => {
  const { username } = req.body;
  try {
    const newOrder = await Order.createOrder(username);
    res.status(200).json(newOrder);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

module.exports = { createOrder };
