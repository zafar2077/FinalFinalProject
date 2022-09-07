const productModel = require("../models/productModel");

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(202).json(products);
  } catch (error) {
    res.status(401).json({ message: "error" });
  }
};

const addProduct = async (req, res) => {
  const newProduct = new productModel({
    name: req.body.name,
    stock: req.body.stock,
    price: req.body.price,
    productImage: req.file.path,
  });

  if (!req.body.name) {
    res.status(402).json({ message: "Full Name is missing" });
    return;
  }

  if (!req.body.stock) {
    res.status(402).json({ message: "Stock is missing" });
    return;
  }

  if (!req.body.price) {
    res.status(402).json({ message: "Price is missing" });
    return;
  }

  if (!req.file.path) {
    res.status(402).json({ message: "Image is missing" });
    return;
  }

  try {
    const productCreated = await newProduct.save();
  } catch (error) {
    res.status(401).json({ error });
    return;
  }

  res.status(201).json({ message: "product added successfully" });
};

const deleteProduct = async (req, res) => {
  try {
    const response = await productModel.deleteOne({ name: req.body.name });
  } catch (error) {
    res.status(401).json({ message: "error" });
    return;
  }
  res.status(201).json({ message: "deleted successfully" });
};

const updateProduct = async (req, res) => {
  if (!req.body.name) {
    res.status(402).json({ message: "Full Name is missing" });
    return;
  }

  if (!req.body.stock) {
    res.status(402).json({ message: "Stock is missing" });
    return;
  }

  if (!req.body.price) {
    res.status(402).json({ message: "Price is missing" });
    return;
  }

  try {
    productModel.updateOne(
      { name: req.body.name },
      {
        $set: {
          name: req.body.name,
          stock: req.body.stock,
          price: req.body.price,
        },
      }
    );
  } catch (error) {
    res.status(401).json({ message: "error" });
    return;
  }
  res.status(201).json({ message: "Updated successfully" });
};

module.exports = { getAllProducts, addProduct, deleteProduct, updateProduct };
