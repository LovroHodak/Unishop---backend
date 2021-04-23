const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ImagesSchema = new Schema({
  id: Number,
  lnk: String,
  active: Boolean
})

const productSchema = Schema({
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
  sold: {
    type: Number
  },
  fotoImg: [ImagesSchema]
  
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
