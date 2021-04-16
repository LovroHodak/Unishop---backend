const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  id: {
    type: Number,
  },
  categoryName: {
    type: String,
  },
  categoryDesc: {
    type: String,
  },
  categoryImg: {
    type: String,
  },
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;