const User = require("../models/userModel");
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

    const userToken = createToken(user._id);

    response.status(200).json({ username, userToken });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const getUserInfo = async (request, response) => {
  response.json({ message: "user info" });
};

module.exports = { loginUser, signUpUser, getUserInfo };
