require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const connectDatabase = require("./config/db");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");
const connection = mongoose.connection;

// Enable CORS for all routes
app.use(cors(corsOptions));
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded data

const swaggerUI = require("swagger-ui-express");
const swaggerSpecs = require("./docs/swagger_specs");

//Swagger api docs
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));

app.get("/", (req, res) => {
  res.json({ message: "server is running..." });
});
app.use("/auth", require("./routes/auth.route"));
app.use("/api/purchases", require("./routes/api/purchase.route"));
app.use("/api/offers", require("./routes/api/offer.route"));


connectDatabase();

connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
