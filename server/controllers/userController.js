const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) =>
  jwt.sign({ _id }, process.env.ACCESSTOKEN, { expiresIn: "1d" });

const loginUser = async (request, response) => {
  const { username, password } = request.body;

  try {
    const user = await User.login(username, password);
    const userToken = createToken(user._id);

    response.status(200).json({ username, userToken });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const signUpUser = async (request, response) => {
  const { username, email, password, confirmPass } = request.body;

  try {
    const user = await User.signup(username, email, password, confirmPass);
    const cart = await Cart.createCart(user._id);
    const userToken = createToken(user._id);

    response.status(200).json({ username, userToken});
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const getUserInfo = async (request, response) => {
  const username = request.params.id;

  try {
    const user = await User.getUser(username);
    response.status(200).json({user: user});
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

module.exports = { loginUser, signUpUser, getUserInfo };
