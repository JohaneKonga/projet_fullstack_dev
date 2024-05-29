require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const connectDatabase = require("./config/db");
const corsOptions = require("./config/cors_options");
const mongoose = require("mongoose");
const connection = mongoose.connection;
const swaggerUI = require("swagger-ui-express");
const swaggerSpecs = require("./docs/swagger_specs");
const validJWT = require("./middlewares/valid_jwt.middleware");
const morgan = require("morgan");

// Enable CORS for all routes
app.use(cors());

app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

app.use(morgan("dev"));

//Swagger api docs
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpecs));


app.use("/auth", require("./routes/auth.route"));

app.use(validJWT);
app.use("/api/purchases", require("./routes/api/purchase.route"));
app.use("/api/offers", require("./routes/api/offer.route"));
app.use("/api/users", require("./routes/api/user.route"));

//NOT FOUND(404) MENTION IN ANOTHER ROUTE
app.all("*", (req, res) => {
  res.sendStatus(404);
});



connectDatabase();

connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
