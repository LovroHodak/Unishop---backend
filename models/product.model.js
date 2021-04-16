const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  shortDesc: {
    type: String,
  },
  longDesc: {
    type: String,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  fotoImg: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
