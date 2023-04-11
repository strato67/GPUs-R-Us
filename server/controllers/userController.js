const User = require("../models/userModel");
const mongoose = require("mongoose");

const loginUser = async (request, response) => {
    response.json({message:'login user'});
};

const signUpUser = async (request, response) => {
    response.json({message:'signup user'});
};

const getUserInfo = async (request, response) => {
    response.json({message:'user info'});
};


module.exports = { loginUser, signUpUser, getUserInfo };
