const authModel = require("../models/authModel");
const productModel = require("../models/productModel");

const signUp = async (req, res) => {
  const newUser = new authModel({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
    userImage: req.file.path,
  });

  if (!req.body.fullName) {
    res.status(402).json({ message: "Full Name is missing" });
    return;
  }

  if (!req.body.email) {
    res.status(402).json({ message: "Email is missing" });
    return;
  }

  if (!req.body.password) {
    res.status(402).json({ message: "Password is missing" });
    return;
  }

  try {
    const userCreated = await newUser.save();
  } catch (error) {
    res.status(401).json({ error });
    return;
  }

  res.status(201).json({ message: "signed up successfully" });
};

const signIn = async (req, res) => {
  const user = await authModel.findOne({
    email: req.body.email,
  });

  if (!user) {
    res.status(401).json({ message: "email not found" });
    return;
  } else if (user.password != req.body.password) {
    res.status(401).json({ message: "Incorrect password" });
    return;
  }

  res.status(201).json(user);
};

const addtoCart = async (req, res) => {
  if (!req.body.email) {
    res.status(402).json({ message: "Email is missing" });
    return;
  }

  if (!req.body.productName) {
    res.status(402).json({ message: "product name is missing" });
    return;
  }

  try {
    await authModel.updateOne(
      { email: req.body.email },
      { $push: { Cart: req.body.productName } }
    );
  } catch (error) {
    res.status(401).json({ message: "error! could not update cart" });
    return;
  }

  res.status(202).json({ message: "updated successfully" });
};

const removeFromCart = async (req, res) => {
  if (!req.body.email) {
    res.status(402).json({ message: "Email is missing" });
    return;
  }

  if (!req.body.productName) {
    res.status(402).json({ message: "product name is missing" });
    return;
  }

  try {
    await authModel.updateOne(
      { email: req.body.email },
      { $pull: { Cart: req.body.productName } }
    );
  } catch (error) {
    res.status(401).json({ message: "error! could not update cart" });
    return;
  }

  res.status(202).json({ message: "updated successfully" });
};

const addtoFavorites = async (req, res) => {
  if (!req.body.email) {
    res.status(402).json({ message: "Email is missing" });
    return;
  }

  if (!req.body.productName) {
    res.status(402).json({ message: "product name is missing" });
    return;
  }

  try {
    await authModel.updateOne(
      { email: req.body.email },
      { $push: { favorites: req.body.productName } }
    );
  } catch (error) {
    res.status(401).json({ message: "error! could not update favorites" });
    return;
  }

  res.status(202).json({ message: "updated successfully" });
};

const removeFromFavorites = async (req, res) => {
  if (!req.body.email) {
    res.status(402).json({ message: "Email is missing" });
    return;
  }

  if (!req.body.productName) {
    res.status(402).json({ message: "product name is missing" });
    return;
  }

  try {
    await authModel.updateOne(
      { email: req.body.email },
      { $pull: { favorites: req.body.productName } },
      { multi: false }
    );
  } catch (error) {
    res.status(401).json({ message: "error! could not update cart" });
    return;
  }

  res.status(202).json({ message: "updated successfully" });
};

module.exports = {
  signUp,
  signIn,
  removeFromCart,
  addtoCart,
  removeFromFavorites,
  addtoFavorites,
};
