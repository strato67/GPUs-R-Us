const User = require("../models/userModel");
const mongoose = require("mongoose");

const loginUser = async (request, response) => {
    response.json({message:'login user'});
};

const signUpUser = async (request, response) => {
    const {username, email, password} = request.body;

    try{
        const user = await User.signup(username, email, password);
        response.status(200).json({username, user})
    }catch(error){
        response.status(400).json({error: error.message});
    }

};

const getUserInfo = async (request, response) => {
    response.json({message:'user info'});
};


module.exports = { loginUser, signUpUser, getUserInfo };
