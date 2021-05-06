const express = require("express");
const router = express.Router();
require("dotenv").config();

const STRIPE_SECRET = process.env.STRIPE_SECRET;

const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")(STRIPE_SECRET);

router.use(express.static("."));
router.use(express.json());

const calculateOrderAmount = (items) => {
  let itemSum = [];
  items.forEach((element) => {
    let oneItem = element.price * element.nrOfItems;
    itemSum.push(Number(oneItem));
  });
  let sum = itemSum.reduce((a, b) => a + b, 0);

  // STRIPE OPERATES WITH CENTS
  return sum * 100;
};

router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
  });
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

module.exports = router;
