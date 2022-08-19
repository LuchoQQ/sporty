const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    categoryId: {
      ref: "category",
      type: mongoose.Schema.Types.ObjectId
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      trim: true
    },
    stock: {
      type: Number,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema)