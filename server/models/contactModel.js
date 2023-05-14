const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Contact", contactSchema);
