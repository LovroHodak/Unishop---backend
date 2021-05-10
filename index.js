require("dotenv").config();
require("./config/db.config");

const express = require("express");
const app = express();

// origin: ["https://mihaunishop.herokuapp.com"],
// origin: ["http://localhost:3000"],
//ENABLE FRONT+BACK
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: ["https://mihaunishop.herokuapp.com"],
  })
);

//REQ.BODY + BODY.PARSER => to get serverside console.log!! ALWAYS
app.use(
  express.urlencoded({
    extended: true,
  })
);
//Use body parser. To be able parse post request information
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //crucial for post requests from client

// frontend - npm run build, here - create Public folder
var path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"), err => {
    if (err) res.status(500).send(err);
  });
});

//ROUTES
const categoryRoutes = require("./routes/category.routes");
app.use("/api", categoryRoutes);

const productRoutes = require("./routes/product.routes");
app.use("/api", productRoutes);

const orderRoutes = require("./routes/order.routes");
app.use("/api", orderRoutes);

const stripeRoutes = require("./routes/stripe.routes");
app.use("/api", stripeRoutes);

const nodemailerRoutes = require("./routes/nodemailer.routes");
app.use("/api", nodemailerRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}, dirname ${__dirname}`)
);
