const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

router.get("/category", (req, res) => {
  Category.find()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Server Error"
      });
    });
});


module.exports = router;