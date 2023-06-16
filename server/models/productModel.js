const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  specs: [
    {
      name: {
        type: String,
        required: true,
      },
      spec: { type: String, required: true },
    },
  ],
  tags: [String],
  images: [
    {
      id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

});

productSchema.statics.getProduct = async function (id) {
  if (!id) {
    throw Error("No product found.");
  }
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw Error("Invalid product id.");
  }

  const product = await this.findById(id);

  if (!product) {
    throw Error("No product found.");
  }

  return product;
};

module.exports = mongoose.model("Product", productSchema);
