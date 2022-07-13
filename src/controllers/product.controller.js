const Product = require('../models/product.model');

const getProducts = async (req, reply) => {
  const products = await Product.find();
  return products;
};

const getProduct = async (req, reply) => {
  const product = await Product.findById(req.params.id);
  return reply.code(200).send(product);
};

const addProduct = async (req, reply) => {
  const newProduct = new Product(req.body);

  console.log(newProduct);

  await newProduct.save();

  reply.code(201).send(newProduct);
};

const deleteProduct = async (req, reply) => {
  await Product.findByIdAndDelete();
  reply.code(204).send();
};

const updateProduct = async (req, reply) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      nem: true,
    });
    reply.code(200).send(product);
  } catch (err) {
    reply.code(500).send(err);
  }
};

module.exports = {
  getProducts,
  getProduct,
  addProduct,
  deleteProduct,
  updateProduct,
};
