const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
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

  Cart: {
    type: Array,
  },
  favorites: {
    type: Array,
  },
  userImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userAuth", authSchema);
