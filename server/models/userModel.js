const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  joined: {
    type: Date,
    default: Date.now,
  },
});

userSchema.statics.signup = async function (
  username,
  email,
  password,
  confirmPass
) {
  if (!username || !email || !password) {
    throw Error("All fields must be filled.");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid email.");
  }
  if (password !== confirmPass) {
    throw Error("Passwords don't match");
  }
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
    })
  ) {
    throw Error(
      "Your password is too weak. (Minimum length of 8 characters, must contain at least one number and uppercase letter)"
    );
  }

  const accountExists = await this.findOne({ username });
  const emailExists = await this.findOne({ email });

  if (accountExists) {
    throw Error("Username already exists");
  }
  if (emailExists) {
    throw Error("Email already registered with account");
  }

  const passwordSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, passwordSalt);

  const userInfo = await this.create({
    username,
    email,
    password: hashedPassword,
  });

  return userInfo;
};

userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All fields must be filled.");
  }

  const user = await this.findOne({ username });

  if (!user) {
    throw Error("No account found under that username.");
  }

  const matchPasswords = await bcrypt.compare(password, user.password);

  if (!matchPasswords) {
    throw Error("Password incorrect.");
  }

  return user;
};

userSchema.statics.getUser = async function (username) {
  if (!username) {
    throw Error("No user found.");
  }
  const user = await this.findOne({ username });

  if (!user) {
    throw Error("No user found.");
  }
  
  return {
    id: user._id,
    username: user.username,
    joined: user.joined,
    email: user.email,
  };
};

module.exports = mongoose.model("User", userSchema);
