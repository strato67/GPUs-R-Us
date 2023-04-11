const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
      },
      email: {
        type: String,
        required: true,
        unique:true
      },
      password: {
        type: Number,
        required: true,
      },
      joined: {
        type: Date,
        default: Date.now
      },



});

module.exports = mongoose.model("User", userSchema)