const Product = require("../models/productModel");
const Review = require("../models/reviewModel");
const mongoose = require("mongoose");

const getProductInfo = async (request, response) => {
  const productID = request.params.id;

  try {
    const product = await Product.getProduct(productID);
    response.status(200).json({ product: product });
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

const getAllProducts = async (request, response) => {
  const products = await Product.find(
    {},
    "name description price rating tags images"
  );
  response.status(200).json(products);
};

const createProduct = async (request, response) => {
  const { name, description, price, rating, specs, tags, images } =
    request.body;

  try {
    const product = await Product.create({
      name,
      description,
      price,
      rating,
      specs,
      tags,
      images,
    });
    Review.createReviewPage(product._id);
    response.status(200).json(product);
  } catch (e) {
    response.status(400).json({ error: "Error" });
  }
};

const updateProduct = async (request, response) => {
  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.status(400).json({ error: "No products found" });
  }

  const product = await Product.findByIdAndUpdate(
    { _id: id },
    {
      ...request.body,
    }
  );

  if (!product) {
    return response.status(400).json({ error: "No products found" });
  }
  response.status(200).json(product);
};

const deleteProduct = async (request, response) => {
  const { id } = request.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.status(400).json({ error: "No products found" });
  }
  const product = await Product.findByIdAndDelete({ _id: id });

  if (!product) {
    return response.status(400).json({ error: "No products found" });
  }
  response.status(200).json(product);
};

module.exports = {
  getProductInfo,
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
