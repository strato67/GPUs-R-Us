const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

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
        type: String,
        required: true,
      },
      joined: {
        type: Date,
        default: Date.now
      },

});

userSchema.statics.signup = async function(username, email, password){

  const accountExists = await this.findOne({ username });
  const emailExists = await this.findOne({ email });

  if(accountExists){
    throw Error('Username already exists');
  }
  if(emailExists){
    throw Error('Email already registered with account');
  }

  const passwordSalt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password,passwordSalt);

  const userInfo = await this.create({username, email, password: hashedPassword})

  return userInfo;

}


module.exports = mongoose.model("User", userSchema)