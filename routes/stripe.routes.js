const express = require("express");
const router = express.Router();

const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")(
  "sk_test_51Hj18ZKqS56uvZe8jTz3PG5Vl9OOFfEQYkVf3CSPSk4T8qZ9n3gnTIeTTHzIdj8OI8gIMk9BChwG5Sd52WYJheFv004BW3G4OF"
);

router.use(express.static("."));
router.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  let itemSum = [];
  items.forEach((element) => {
    let oneItem = element.price * element.nrOfItems;
    itemSum.push(Number(oneItem));
    //newSum.reduce((a, b) => a + b, 0)
  });
  let sum = itemSum.reduce((a, b) => a + b, 0);

  console.log(sum)

  return sum * 100;
};

router.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  console.log('send by front-checkout', items)
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
