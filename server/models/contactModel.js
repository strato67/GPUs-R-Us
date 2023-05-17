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

contactSchema.statics.createMessage = async function (email, subject, message) {
  if (!email || !subject || !message) {
    throw Error("All fields must be filled.");
  }

  const messageExists = await this.findOne({ email, subject, message });

  if (messageExists) {
    throw Error("We received your message.");
  }

  const newMessage = await this.create({
    email,
    subject,
    message,
  });

  return newMessage;
};

module.exports = mongoose.model("Contact", contactSchema);
