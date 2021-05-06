const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

router.get("/orders", (req, res) => {
  Order.find()
    .then((order) => {
      res.status(200).json(order);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    });
});

router.post("/newOrder", (req, res) => {
  Order.create({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    total: req.body.total,
    payment: req.body.payment,
    cart: req.body.cart,
  })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

module.exports = router;
