const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CartSchema = new Schema({
  namee: String,
  pricee: Number,
  nrOfItemss: Number
})

const orderSchema = Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  total: {
    type: Number,
  },
  cart: [CartSchema]
  
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
