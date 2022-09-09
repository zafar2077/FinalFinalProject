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

  Cart: [
    {
      id: {
        type: String,
      },
      name: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 0,
      },
    },
  ],
  favorites: [
    {
      favoritesId: {
        type: String,
      },
      favoritesName: {
        type: String,
      },
    },
  ],
  userImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("userAuth", authSchema);
