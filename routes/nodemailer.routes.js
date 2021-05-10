const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
//const MailModel = require("../models/mail.model");
require("dotenv").config();

const NODEMAILER_USER = process.env.NODEMAILER_USER;
const NODEMAILER_PASS = process.env.NODEMAILER_PASS;
const NODEMAILER_CC = process.env.NODEMAILER_CC;
const NODEMAILER_USER_DIFF_FORMAT = process.env.NODEMAILER_USER_DIFF_FORMAT;

let transporter = nodemailer.createTransport({
  service: "outlook",
  secureConnection: false,
  auth: {
    user: NODEMAILER_USER,
    pass: NODEMAILER_PASS,
  },
  port: 465,
});

router.post("/send-email", (req, res, next) => {
  let newClient = req.body;
  let subject = "UniShop, Miha Flajs s.p.";
  let secondMail = NODEMAILER_CC;

  transporter
    .sendMail({
      from: `"Lovro Dev" ${NODEMAILER_USER_DIFF_FORMAT}`,
      to: newClient.email,
      subject: subject,
      name: newClient.name,
      total: newClient.total,
      cc: secondMail,
      cart: newClient.cart,
      payment: newClient.payment,
      html: `<h1 style="color:blue;">Thank you ${
        newClient.name
      } for ordering!</h1>
      <p>You have ordered following items: </p>
      <ol>${newClient.cart.map((item) => {
        return (
          "<li>" +
          item.namee +
          ": " +
          item.nrOfItemss +
          " x " +
          item.pricee +
          " €  " +
          "</li>"
        );
      })}</ol>
      <p>Payment method: ${newClient.payment}</p>
      <h2>Your total was ${newClient.total} €</h2>
      <h3>Hope to see you soon, Yours Unishop</h3>`,
    })
    .then(() => console.log("SEND mail everything ok!"))
    .catch((error) => console.log(error));

/*   MailModel.create({
    email: newClient.email,
    subject: subject,
    name: newClient.name,
    total: newClient.total,
    cart: newClient.cart,
    payment: newClient.payment
  })
    .then((response) => {
      res.status(200).json(response);
      console.log("mailmodel created")
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
      console.log("mailmodel failedd")
    }); */
});

module.exports = router;
