const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("/products", (req, res) => {
  Product.find()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    });
});

router.patch("/products", (req, res, next) => {
  const { allProducts } = req.body;
  let myPromises = [];
  allProducts.forEach((elem) => {
    let singlePromise = Product.findOneAndUpdate(
      { name: elem.name },
      { stock: elem.stock, sold: elem.sold }
    );
    myPromises.push(singlePromise);
  });
  Promise.all(myPromises)
    .then(() => {
      return Product.find();
    })
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      //throw error message
      next(err);
    });
});

module.exports = router;
